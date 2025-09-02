"use client"
import NavBar from "@/components/Navbar"
import ContactCard from "@/components/ContactCard"
import Carousel from "@/components/Carousel"
import FireflyParticles from "@/components/FireflyParticles"

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <FireflyParticles />
      </div>
      <div
        className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16"
        style={{ position: "relative", zIndex: 1 }}
      >
        <main className="flex flex-col gap-[32px] items-center sm:items-start">
          <NavBar />
          <section id="about">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
              James Padovano
            </h1>
          </section>
          <section id="projects" className="flex justify-center w-full">
            <Carousel />
          </section>
          <section id="contact" className="flex justify-center w-full">
            <ContactCard />
          </section>
        </main>
      </div>
    </div>
  )
}
