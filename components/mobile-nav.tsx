"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Coffee, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MobileNav({ lang, dict }: { lang: string; dict: any }) {
  const [open, setOpen] = useState(false)
  const { navigation } = dict
  const sections = [
    "home",
    "services",
    "equipment",
    "process",
    "specialties",
    "partners",
    "investment",
    "testimonials",
    "pricing",
    "contact",
  ]
  const activeSection = useActiveSection(sections)
  const pathname = usePathname()

  // Handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setOpen(false) // Close the mobile menu

    // Use setTimeout to ensure the menu is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset for the navbar height
          behavior: "smooth",
        })

        // Update URL without page reload
        window.history.pushState({}, "", `/${lang}#${sectionId}`)
      }
    }, 300)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={dict.accessibility.menuToggle}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900 p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href={`/${lang}`} className="flex items-center gap-2" onClick={(e) => scrollToSection(e, "home")}>
              <Coffee className="h-6 w-6 text-green-dark dark:text-green-light" />
              <span className="font-bold text-xl">Cafe Kivu Congo</span>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-auto py-6 px-4">
            <nav className="flex flex-col gap-1">
              <Link
                href={`/${lang}#home`}
                className={cn(
                  "text-lg font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  activeSection === "home" &&
                    "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                )}
                onClick={(e) => scrollToSection(e, "home")}
              >
                {navigation.home}
              </Link>

              <Link
                href={`/${lang}/about`}
                className={cn(
                  "text-lg font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  pathname.includes(`/${lang}/about`) &&
                    "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                )}
                onClick={() => setOpen(false)}
              >
                {navigation.about}
              </Link>

              <Accordion type="single" collapsible className="w-full border-none">
                <AccordionItem value="services" className="border-none">
                  <AccordionTrigger
                    className={cn(
                      "text-lg font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 no-underline",
                      (activeSection === "services" ||
                        activeSection === "equipment" ||
                        activeSection === "specialties") &&
                        "text-green-dark dark:text-green-light font-semibold",
                    )}
                  >
                    {navigation.services}
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 pr-2 pb-0 pt-1">
                    <div className="flex flex-col gap-1">
                      <Link
                        href={`/${lang}#services`}
                        className={cn(
                          "text-base font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center",
                          activeSection === "services" &&
                            "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                        )}
                        onClick={(e) => scrollToSection(e, "services")}
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        {navigation.services}
                      </Link>
                      <Link
                        href={`/${lang}#equipment`}
                        className={cn(
                          "text-base font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center",
                          activeSection === "equipment" &&
                            "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                        )}
                        onClick={(e) => scrollToSection(e, "equipment")}
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        {navigation.equipment}
                      </Link>
                      <Link
                        href={`/${lang}#specialties`}
                        className={cn(
                          "text-base font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center",
                          activeSection === "specialties" &&
                            "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                        )}
                        onClick={(e) => scrollToSection(e, "specialties")}
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        {navigation.specialties}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                href={`/${lang}#process`}
                className={cn(
                  "text-lg font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  activeSection === "process" &&
                    "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                )}
                onClick={(e) => scrollToSection(e, "process")}
              >
                {navigation.process}
              </Link>

              <Accordion type="single" collapsible className="w-full border-none">
                <AccordionItem value="partners" className="border-none">
                  <AccordionTrigger
                    className={cn(
                      "text-lg font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 no-underline",
                      (activeSection === "partners" || activeSection === "testimonials") &&
                        "text-green-dark dark:text-green-light font-semibold",
                    )}
                  >
                    {navigation.partners}
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 pr-2 pb-0 pt-1">
                    <div className="flex flex-col gap-1">
                      <Link
                        href={`/${lang}#partners`}
                        className={cn(
                          "text-base font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center",
                          activeSection === "partners" &&
                            "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                        )}
                        onClick={(e) => scrollToSection(e, "partners")}
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        {navigation.partners}
                      </Link>
                      <Link
                        href={`/${lang}#testimonials`}
                        className={cn(
                          "text-base font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center",
                          activeSection === "testimonials" &&
                            "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                        )}
                        onClick={(e) => scrollToSection(e, "testimonials")}
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        {navigation.testimonials}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                href={`/${lang}#investment`}
                className={cn(
                  "text-lg font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  activeSection === "investment" &&
                    "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                )}
                onClick={(e) => scrollToSection(e, "investment")}
              >
                Investment
              </Link>

              <Link
                href={`/${lang}#pricing`}
                className={cn(
                  "text-lg font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  activeSection === "pricing" &&
                    "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                )}
                onClick={(e) => scrollToSection(e, "pricing")}
              >
                {navigation.pricing}
              </Link>

              <Link
                href={`/${lang}#contact`}
                className={cn(
                  "text-lg font-medium py-2 px-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  activeSection === "contact" &&
                    "text-green-dark dark:text-green-light font-semibold bg-gray-100 dark:bg-gray-800",
                )}
                onClick={(e) => scrollToSection(e, "contact")}
              >
                {navigation.contact}
              </Link>
            </nav>
          </div>

          <div className="p-4 border-t">
            <Button
              asChild
              className="w-full bg-green-dark hover:bg-green-medium text-white dark:bg-green-medium dark:hover:bg-green-dark text-base py-6"
            >
              <Link href={`/${lang}#contact`} onClick={(e) => scrollToSection(e, "contact")}>
                {dict.hero.cta}
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
