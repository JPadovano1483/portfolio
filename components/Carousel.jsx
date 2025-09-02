"use client"
import { useState, useEffect } from "react"
import { useSprings, animated } from "@react-spring/web"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

const images = [
  "/images/chick_with_a_blick.jpg",
  "/images/goofy_ahh_cat.jpg",
  // "/images/nerd.jpg",
  "/images/rocks.jpg",
  "/images/weird_lady_in_a_car.jpg",
]

const IMAGE_WIDTH = 320
const IMAGE_HEIGHT = 240

function getCarouselSprings(current, length) {
  // Returns transform/opacity for each image
  return Array.from({ length }, (_, i) => {
    const pos = (i - current + length) % length
    if (pos === 0) {
      // Center
      return {
        transform: `translateX(0px) scale(1)`,
        opacity: 1,
        zIndex: 2,
      }
    } else if (pos === 1) {
      // Right
      return {
        transform: `translateX(180px) scale(0.7)`,
        opacity: 0.6,
        zIndex: 1,
      }
    } else if (pos === length - 1) {
      // Left
      return {
        transform: `translateX(-180px) scale(0.7)`,
        opacity: 0.6,
        zIndex: 1,
      }
    } else {
      // Hidden
      return {
        transform: `translateX(0px) scale(0.5)`,
        opacity: 0,
        zIndex: 0,
      }
    }
  })
}

const Carousel = () => {
  const [current, setCurrent] = useState(0)
  const springs = useSprings(
    images.length,
    getCarouselSprings(current, images.length)
  )

  const scrollLeft = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const scrollRight = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(scrollRight, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center w-full h-[260px]">
      {/* <button
        onClick={scrollLeft}
        className="absolute left-4 z-10 top-1/2 -translate-y-1/2 text-black p-2"
      >
        <ChevronLeft className="w-6 h-6" />
      </button> */}
      <div className="relative w-full h-[220px] flex items-center justify-center overflow-visible">
        {springs.map((style, i) => (
          <animated.div
            key={i}
            style={{
              position: "absolute",
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              ...style,
            }}
          >
            <Image
              src={images[i]}
              alt={`Image ${i}`}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              className="object-cover rounded-2xl border border-gray-200 shadow-lg"
            />
          </animated.div>
        ))}
      </div>
      {/* <button
        onClick={scrollRight}
        className="absolute right-4 z-10 top-1/2 -translate-y-1/2 text-black p-2"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}
    </div>
  )
}

export default Carousel
