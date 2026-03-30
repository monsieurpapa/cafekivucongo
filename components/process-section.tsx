"use client"

import type React from "react"

import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Leaf,
  Sun,
  Filter,
  SlidersHorizontal,
  Award,
  Package,
  Ship,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProcessStep = {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  color: string
}

export default function ProcessSection({ dict }: { dict: any }) {
  const { process } = dict
  const [activeStep, setActiveStep] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [announceMessage, setAnnounceMessage] = useState("")
  const touchStartX = useRef(0)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [autoPlay, setAutoPlay] = useState(true)

  const processSteps: ProcessStep[] = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: process.harvesting.title,
      description: process.harvesting.description,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_cerise-QiVQrKLrP4nf4FalYaXltIIyJferWY.jpeg",
      color: "bg-green-medium text-white",
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: process.drying.title,
      description: process.drying.description,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_drying1-c0LF0UEriHjTFXpbk8WgrpuNEdSaLU.jpeg",
      color: "bg-green-light text-coffee-dark",
    },
    {
      icon: <Filter className="h-8 w-8" />,
      title: process.hulling.title,
      description: process.hulling.description,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_sorting-0uHfmMdKNRLSLbXgpgqBtQODxbjcgE.jpeg",
      color: "bg-bean-light text-coffee-dark",
    },
    {
      icon: <SlidersHorizontal className="h-8 w-8" />,
      title: process.sorting.title,
      description: process.sorting.description,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_sorting-0uHfmMdKNRLSLbXgpgqBtQODxbjcgE.jpeg",
      color: "bg-bean-green text-white",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: process.grading.title,
      description: process.grading.description,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_export5-plzV7Tq7pLkdZ4ZpRxrCwsSyPOhaph.jpeg",
      color: "bg-coffee-light text-white",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: process.packaging.title,
      description: process.packaging.description,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_export-z0PgImZ4lApA91wF62cBaZQxfnfnk7.jpeg",
      color: "bg-coffee-medium text-white",
    },
    {
      icon: <Ship className="h-8 w-8" />,
      title: process.export.title,
      description: process.export.description,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_export3-ae3Ho65nBT9ZWKnEgKPeIzfR030ExA.jpeg",
      color: "bg-coffee-dark text-white",
    },
  ]

  const handleStepChange = useCallback(
    (newStep: number) => {
      if (isTransitioning) return

      setIsTransitioning(true)
      setActiveStep(newStep)
      setAnnounceMessage(`Now viewing step ${newStep + 1}: ${processSteps[newStep].title}`)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 400)
    },
    [isTransitioning],
  )

  const nextStep = useCallback(() => {
    const newStep = (activeStep + 1) % processSteps.length
    handleStepChange(newStep)
  }, [activeStep, handleStepChange])

  const prevStep = useCallback(() => {
    const newStep = (activeStep - 1 + processSteps.length) % processSteps.length
    handleStepChange(newStep)
  }, [activeStep, handleStepChange])

  const goToStep = useCallback(
    (index: number) => {
      if (index === activeStep) return
      handleStepChange(index)
    },
    [activeStep, handleStepChange],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault()
        nextStep()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevStep()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [nextStep, prevStep])

  useEffect(() => {
    if (autoPlay) {
      autoPlayIntervalRef.current = setInterval(() => {
        nextStep()
      }, 8000)
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
      }
    }
  }, [autoPlay, nextStep])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setAutoPlay(false)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextStep()
      } else {
        prevStep()
      }
    }
  }

  return (
    <section
      id="process"
      className="py-16 md:py-24 overflow-hidden section-green-light coffee-pattern relative"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      aria-label="Coffee transformation process"
    >
      <div className="natural-texture absolute inset-0"></div>

      {/* Screen reader announcements */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {announceMessage}
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bean-dark dark:text-bean-cream mb-4">{process.title}</h2>
          <p className="text-bean-brown dark:text-bean-light text-lg">{process.subtitle}</p>
        </motion.div>

        {/* Desktop Process Timeline */}
        <div className="hidden md:block mb-16 w-full max-w-7xl" role="tablist" aria-label="Process steps">
          <div className="relative">
            <div
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-medium via-bean-light to-coffee-dark -translate-y-1/2 rounded-full"
              aria-hidden="true"
            ></div>
            <div className="flex justify-between relative w-full">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center relative z-10"
                >
                  <button
                    onClick={() => goToStep(index)}
                    role="tab"
                    aria-selected={activeStep === index}
                    aria-controls={`process-panel-${index}`}
                    id={`process-tab-${index}`}
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
                      activeStep === index
                        ? step.color + " scale-110 focus:ring-green-medium dark:focus:ring-green-light"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500",
                    )}
                    aria-label={`${step.title}. Step ${index + 1} of ${processSteps.length}`}
                  >
                    {step.icon}
                  </button>
                  <div
                    className={cn(
                      "absolute top-16 w-40 text-center transition-all duration-300",
                      activeStep === index ? "opacity-100" : "opacity-50",
                    )}
                  >
                    <h4
                      className={cn(
                        "font-semibold text-bean-dark dark:text-bean-cream",
                        activeStep === index ? "text-base" : "text-sm",
                      )}
                    >
                      {step.title}
                    </h4>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div
                      className="absolute top-1/2 left-[calc(100%+0.5rem)] -translate-y-1/2 text-bean-brown dark:text-bean-light"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Steps */}
        <div className="md:hidden mb-8">
          <div className="flex justify-between items-center mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevStep}
              className="border-green-light dark:border-green-dark bg-transparent"
              aria-label={`${process.previous}. Go to step ${activeStep === 0 ? processSteps.length : activeStep}`}
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-5 w-5 text-bean-dark dark:text-bean-cream" />
            </Button>

            <div className="text-center" aria-live="polite" aria-atomic="true">
              <span className="text-sm text-bean-brown dark:text-bean-light">
                Step {activeStep + 1} of {processSteps.length}
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextStep}
              className="border-green-light dark:border-green-dark bg-transparent"
              aria-label={`${process.next}. Go to step ${activeStep === processSteps.length - 1 ? 1 : activeStep + 2}`}
              disabled={isTransitioning}
            >
              <ChevronRight className="h-5 w-5 text-bean-dark dark:text-bean-cream" />
            </Button>
          </div>

          <div
            className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="tablist"
            aria-label="Process steps"
          >
            {processSteps.map((step, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={activeStep === index}
                aria-controls={`process-panel-${index}`}
                id={`process-tab-mobile-${index}`}
                className={cn(
                  "flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 px-2 focus:outline-none focus:ring-2 focus:ring-green-medium dark:focus:ring-green-light focus:ring-offset-2 rounded-md",
                  activeStep === index ? "opacity-100" : "opacity-50",
                )}
                onClick={() => goToStep(index)}
                aria-label={`${step.title}. Step ${index + 1} of ${processSteps.length}`}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    activeStep === index ? step.color : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300",
                  )}
                >
                  {step.icon}
                </div>
                <span className="text-xs font-medium text-bean-dark dark:text-bean-cream whitespace-nowrap">
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Process Content */}
        <div className="flex flex-col gap-8 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${activeStep}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative h-[300px] md:h-[400px] w-full max-w-2xl rounded-lg overflow-hidden shadow-md"
              role="tabpanel"
              id={`process-panel-${activeStep}`}
              aria-labelledby={`process-tab-${activeStep}`}
            >
              <Image
                src={processSteps[activeStep].image || "/placeholder.svg"}
                alt={`${processSteps[activeStep].title}: ${processSteps[activeStep].description.substring(0, 100)}...`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={activeStep === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-lg font-semibold">{processSteps[activeStep].title}</h4>
                <p className="text-sm opacity-90">
                  Step {activeStep + 1} of {processSteps.length}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl text-center"
            >
              <div className="flex flex-col items-center gap-4 mb-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    processSteps[activeStep].color,
                  )}
                  aria-hidden="true"
                >
                  {processSteps[activeStep].icon}
                </div>
                <h3 className="text-2xl font-bold text-bean-dark dark:text-bean-cream">
                  {processSteps[activeStep].title}
                </h3>
              </div>
              <p className="text-bean-brown dark:text-bean-light text-lg mb-6">
                {processSteps[activeStep].description}
              </p>

              <nav className="flex justify-center gap-4 mt-8" aria-label="Process navigation">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="border-green-light dark:border-green-dark hover:bg-green-pale/20 dark:hover:bg-green-dark/20 bg-transparent"
                  disabled={isTransitioning}
                  aria-label={`${process.previous}. Go to ${processSteps[activeStep === 0 ? processSteps.length - 1 : activeStep - 1].title}`}
                >
                  <ChevronLeft className="h-5 w-5 mr-2" />
                  {process.previous}
                </Button>
                <Button
                  variant="outline"
                  onClick={nextStep}
                  className="border-green-light dark:border-green-dark hover:bg-green-pale/20 dark:hover:bg-green-dark/20 bg-transparent"
                  disabled={isTransitioning}
                  aria-label={`${process.next}. Go to ${processSteps[activeStep === processSteps.length - 1 ? 0 : activeStep + 1].title}`}
                >
                  {process.next}
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </nav>

              <div className="flex justify-center gap-1 mt-6" role="tablist" aria-label="Step indicators">
                {processSteps.map((step, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-green-medium dark:focus:ring-green-light focus:ring-offset-2",
                      activeStep === index ? "bg-green-dark dark:bg-green-medium w-4" : "bg-gray-300 dark:bg-gray-600",
                    )}
                    onClick={() => goToStep(index)}
                    role="tab"
                    aria-selected={activeStep === index}
                    aria-label={`Go to ${step.title}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
