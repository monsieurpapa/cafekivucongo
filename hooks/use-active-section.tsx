"use client"

import { useState, useEffect } from "react"

export function useActiveSection(sections: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Find all section elements
      const sectionElements = sections
        .map((section) => document.getElementById(section))
        .filter(Boolean) as HTMLElement[]

      // Get current scroll position
      const scrollPosition = window.scrollY + offset

      // Find the current section
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          return
        }
      }

      // If we're at the top of the page, set the first section as active
      if (scrollPosition < (sectionElements[0]?.offsetTop || 0) + offset) {
        setActiveSection(sectionElements[0]?.id || null)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Call once on mount to set initial active section
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sections, offset])

  return activeSection
}
