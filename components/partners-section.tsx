"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function PartnersSection({ dict }: { dict: any }) {
  const { partners } = dict
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Partner data with logos
  const partnerItems = [
    {
      name: "Fairtrade International",
      logo: "/images/partners/fairtrade-logo.gif",
      description: partners.fairtrade.description,
    },
    {
      name: "FLOCERT",
      logo: "/images/partners/flocert-logo.png",
      description: partners.flocert.description,
    },
    {
      name: "Global Coffee Platform",
      logo: "/images/partners/gcp-logo.png",
      description: partners.gcp.description,
    },
    {
      name: "African Fine Coffees Association",
      logo: "/images/partners/afca-logo.gif",
      description: partners.afca.description,
    },
    {
      name: "Rainforest Alliance",
      logo: "/images/partners/rainforest-alliance-logo.png",
      description: partners.rainforest.description,
    },
    {
      name: "UTZ",
      logo: "/images/partners/utz-logo.png",
      description: partners.utz.description,
    },
  ]

  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let startTime: number | null = null
    const speed = 0.5 // pixels per millisecond

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      if (isPaused) {
        startTime = timestamp
        animationFrameId = requestAnimationFrame(scroll)
        return
      }

      const elapsed = timestamp - startTime
      const distance = elapsed * speed

      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        // Reset scroll position when reaching the end
        scrollContainer.scrollLeft = 0
        startTime = timestamp
      } else {
        scrollContainer.scrollLeft = distance
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused])

  return (
    <section id="partners" className="py-16 md:py-24 section-neutral coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">{partners.title}</h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg max-w-2xl mx-auto">{partners.subtitle}</p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-8 px-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Double the items for seamless looping */}
            {[...partnerItems, ...partnerItems].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] glass-effect organic-shadow p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:organic-shadow-lg border border-bean-light/30 dark:border-bean-dark/30"
              >
                <div className="flex justify-center mb-6 h-32 relative">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-coffee-900 dark:text-coffee-50 mb-3 text-center">
                  {partner.name}
                </h3>
                <p className="text-coffee-700 dark:text-coffee-200 text-center">{partner.description}</p>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-coffee-50 dark:from-coffee-900/50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-coffee-50 dark:from-coffee-900/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
