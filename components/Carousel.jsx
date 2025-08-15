"use client"
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

const Carousel = () => {
  const carouselRef = useRef(null)
  const images = [
    "/images/chick_with_a_blick.jpg",
    "/images/goofy_ahh_cat.jpg",
    "/images/nerd.jpg",
    "/images/rocks.jpg",
    ,
    "/images/weird_lady_in_a_car.jpg",
  ]

  const autoScrollInterval = 5000

  // Auto-scroll
  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    const scrollStep = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth
      if (container.scrollLeft >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" })
      }
    }

    const interval = setInterval(scrollStep, autoScrollInterval)
    return () => clearInterval(interval)
  }, [autoScrollInterval])

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar rounded-2xl"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full snap-center h-64 rounded-2xl"
          >
            <Image
              fill={true}
              sizes="(min-width: 640px) 400px, 100vw"
              src={src}
              alt={`Image ${index}`}
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-black p-2"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-black p-2"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default Carousel