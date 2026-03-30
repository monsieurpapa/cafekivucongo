"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection({ lang, dict }: { lang: string; dict: any }) {
  const { hero } = dict
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // All the images from your coffee processing operation
  const carouselImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_drying1-c0LF0UEriHjTFXpbk8WgrpuNEdSaLU.jpeg",
      alt: "Cafe Kivu Congo coffee beans drying process with scenic mountain backdrop in Kivu region",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_factory-lsWXQO9v8K3rpVZu6o5bFFmfxOPbwM.jpeg",
      alt: "Cafe Kivu Congo modern coffee processing factory with ISO-certified infrastructure",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_cerise-QiVQrKLrP4nf4FalYaXltIIyJferWY.jpeg",
      alt: "Fresh red arabica coffee cherries from Democratic Republic of Congo farms",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_sorting-0uHfmMdKNRLSLbXgpgqBtQODxbjcgE.jpeg",
      alt: "Professional coffee bean sorting facility with quality control workers",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_export5-plzV7Tq7pLkdZ4ZpRxrCwsSyPOhaph.jpeg",
      alt: "Cafe Kivu Congo arabica coffee Grade 4 in branded export sacks ready for international shipping",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_farmers-Iui4XnoKNstBRWLtY1oJkEgK8Ie4xz.jpeg",
      alt: "Local farmers in Congo harvesting fresh coffee plants for Cafe Kivu Congo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_entrepot-QNE4TDrOQQx29fpmt95CSLaUUXmpuG.jpeg",
      alt: "Cafe Kivu Congo warehouse storage with stacked bags of processed premium arabica coffee",
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
      }, 4000) // Change image every 4 seconds

      return () => clearInterval(interval)
    }
  }, [carouselImages.length, isHovered])

  // Handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the navbar height
        behavior: "smooth",
      })

      // Update URL without page reload
      window.history.pushState({}, "", `/${lang}#${sectionId}`)
    }
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <section id="home" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0 section-green-light coffee-pattern natural-texture"></div>
      <div className="container relative z-10">
        <div className="flex flex-col gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 text-center max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-coffee-900 dark:text-coffee-50">
              {hero.title}
            </h1>
            <p className="text-xl text-coffee-700 dark:text-coffee-300">{hero.subtitle}</p>
            <div className="mt-4 flex justify-center">
              <Button
                asChild
                className="bg-coffee-700 hover:bg-coffee-600 text-white dark:bg-accent-caramel dark:hover:bg-accent-caramel/90 dark:text-coffee-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/${lang}#services`} onClick={(e) => scrollToSection(e, "services")}>
                  {hero.cta}
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] w-full max-w-2xl rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Images */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="relative w-full h-full"
              >
                <Image
                  src={carouselImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={carouselImages[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority={currentImageIndex === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>
            </AnimatePresence>

            {/* Live region announcement for carousel changes */}
            <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
              Showing image {currentImageIndex + 1} of {carouselImages.length}: {carouselImages[currentImageIndex].alt}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-black/30 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={`Previous image. Currently showing image ${currentImageIndex + 1} of ${carouselImages.length}`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-black/30 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={`Next image. Currently showing image ${currentImageIndex + 1} of ${carouselImages.length}`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2",
                    currentImageIndex === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/75",
                  )}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={currentImageIndex === index ? "true" : "false"}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {carouselImages.length}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
