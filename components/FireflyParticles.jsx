import { useCallback, useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFireflyPreset } from "@tsparticles/preset-firefly"
import { loadFull } from "tsparticles"

const FireflyParticles = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFireflyPreset(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log(container)
  }

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 80, // smaller distance for subtle effect
            duration: 0.2, // shorter duration for gentle push
            speed: 0.5,    // slow repulse speed
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1, // slower movement
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 500,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.3, max: 1 }, // smaller particles
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    )
  }
  return <></>
}

export default FireflyParticles