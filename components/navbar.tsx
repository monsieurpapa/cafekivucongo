"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Coffee, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import MobileNav from "@/components/mobile-nav"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar({ lang, dict }: { lang: string; dict: any }) {
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
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      window.history.pushState({}, "", `/${lang}#${sectionId}`)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "glass-effect organic-shadow border-bean-light/30 dark:border-bean-dark/30"
          : "bg-coffee-50/80 dark:bg-coffee-950/80 backdrop-blur-sm border-bean-light/20 dark:border-bean-dark/20",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-caramel focus-visible:ring-offset-2 rounded-md px-2 py-1 transition-colors hover:bg-coffee-100 dark:hover:bg-coffee-800"
            onClick={(e) => scrollToSection(e, "home")}
          >
            <Coffee className="h-7 w-7 text-coffee-700 dark:text-coffee-300" />
            <span className="hidden font-bold text-xl tracking-tight sm:inline-block text-coffee-900 dark:text-coffee-50">
              Cafe Kivu Congo
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <Link
            href={`/${lang}#home`}
            onClick={(e) => scrollToSection(e, "home")}
            className={cn(
              "text-base font-medium tracking-wide transition-colors hover:text-coffee-700 dark:hover:text-coffee-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-caramel focus-visible:ring-offset-2 rounded-md px-1 py-2 text-coffee-600 dark:text-coffee-400 whitespace-nowrap",
              mounted && activeSection === "home" && "text-coffee-900 dark:text-coffee-50 font-semibold",
            )}
            aria-current={mounted && activeSection === "home" ? "page" : undefined}
          >
            {navigation.home}
            {mounted && activeSection === "home" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-caramel rounded-full"></span>
            )}
          </Link>

          <Link
            href={`/${lang}/about`}
            className={cn(
              "text-base font-medium tracking-wide transition-colors hover:text-coffee-700 dark:hover:text-coffee-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-caramel focus-visible:ring-offset-2 rounded-md px-1 text-coffee-600 dark:text-coffee-400",
              pathname.includes(`/${lang}/about`) && "text-coffee-900 dark:text-coffee-50 font-semibold",
            )}
            aria-current={pathname.includes(`/${lang}/about`) ? "page" : undefined}
          >
            {navigation.about}
            {pathname.includes(`/${lang}/about`) && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-caramel rounded-full"></span>
            )}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "text-base font-medium tracking-wide transition-colors hover:text-coffee-700 dark:hover:text-coffee-300 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-caramel focus-visible:ring-offset-2 rounded-md px-1 text-coffee-600 dark:text-coffee-400",
                mounted &&
                  (activeSection === "services" || activeSection === "equipment" || activeSection === "specialties") &&
                  "text-coffee-900 dark:text-coffee-50 font-semibold",
              )}
            >
              {navigation.services} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-coffee-800 border-coffee-200 dark:border-coffee-700">
              <DropdownMenuItem asChild>
                <Link
                  href={`/${lang}#services`}
                  onClick={(e) => scrollToSection(e, "services")}
                  className={cn(
                    "w-full cursor-pointer text-coffee-700 dark:text-coffee-300",
                    mounted &&
                      activeSection === "services" &&
                      "text-coffee-900 dark:text-coffee-50 font-semibold bg-coffee-100 dark:bg-coffee-700",
                  )}
                  aria-current={mounted && activeSection === "services" ? "page" : undefined}
                >
                  {navigation.services}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/${lang}#equipment`}
                  onClick={(e) => scrollToSection(e, "equipment")}
                  className={cn(
                    "w-full cursor-pointer text-coffee-700 dark:text-coffee-300",
                    mounted &&
                      activeSection === "equipment" &&
                      "text-coffee-900 dark:text-coffee-50 font-semibold bg-coffee-100 dark:bg-coffee-700",
                  )}
                  aria-current={mounted && activeSection === "equipment" ? "page" : undefined}
                >
                  {navigation.equipment}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/${lang}#specialties`}
                  onClick={(e) => scrollToSection(e, "specialties")}
                  className={cn(
                    "w-full cursor-pointer text-coffee-700 dark:text-coffee-300",
                    mounted &&
                      activeSection === "specialties" &&
                      "text-coffee-900 dark:text-coffee-50 font-semibold bg-coffee-100 dark:bg-coffee-700",
                  )}
                  aria-current={mounted && activeSection === "specialties" ? "page" : undefined}
                >
                  {navigation.specialties}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={`/${lang}#process`}
            onClick={(e) => scrollToSection(e, "process")}
            className={cn(
              "text-base font-medium tracking-wide transition-colors hover:text-coffee-700 dark:hover:text-coffee-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-caramel focus-visible:ring-offset-2 rounded-md px-1 text-coffee-600 dark:text-coffee-400",
              mounted && activeSection === "process" && "text-coffee-900 dark:text-coffee-50 font-semibold",
            )}
            aria-current={mounted && activeSection === "process" ? "page" : undefined}
          >
            {navigation.process}
            {mounted && activeSection === "process" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-caramel rounded-full"></span>
            )}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "text-base font-medium tracking-wide transition-colors hover:text-coffee-700 dark:hover:text-coffee-300 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-caramel focus-visible:ring-offset-2 rounded-md px-1 text-coffee-600 dark:text-coffee-400",
                mounted &&
                  (activeSection === "partners" || activeSection === "testimonials") &&
                  "text-coffee-900 dark:text-coffee-50 font-semibold",
              )}
            >
              {navigation.partners} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-coffee-800 border-coffee-200 dark:border-coffee-700">
              <DropdownMenuItem asChild>
                <Link
                  href={`/${lang}#partners`}
                  onClick={(e) => scrollToSection(e, "partners")}
                  className={cn(
                    "w-full cursor-pointer text-coffee-700 dark:text-coffee-300",
                    mounted &&
                      activeSection === "partners" &&
                      "text-coffee-900 dark:text-coffee-50 font-semibold bg-coffee-100 dark:bg-coffee-700",
                  )}
                  aria-current={mounted && activeSection === "partners" ? "page" : undefined}
                >
                  {navigation.partners}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/${lang}#testimonials`}
                  onClick={(e) => scrollToSection(e, "testimonials")}
                  className={cn(
                    "w-full cursor-pointer text-coffee-700 dark:text-coffee-300",
                    mounted &&
                      activeSection === "testimonials" &&
                      "text-coffee-900 dark:text-coffee-50 font-semibold bg-coffee-100 dark:bg-coffee-700",
                  )}
                  aria-current={mounted && activeSection === "testimonials" ? "page" : undefined}
                >
                  {navigation.testimonials}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={`/${lang}#investment`}
            onClick={(e) => scrollToSection(e, "investment")}
            className={cn(
              "text-base font-medium tracking-wide transition-colors hover:text-coffee-700 dark:hover:text-coffee-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-caramel focus-visible:ring-offset-2 rounded-md px-1 text-coffee-600 dark:text-coffee-400",
              mounted && activeSection === "investment" && "text-coffee-900 dark:text-coffee-50 font-semibold",
            )}
            aria-current={mounted && activeSection === "investment" ? "page" : undefined}
          >
            Investment
            {mounted && activeSection === "investment" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-caramel rounded-full"></span>
            )}
          </Link>

          <Link
            href={`/${lang}#pricing`}
            onClick={(e) => scrollToSection(e, "pricing")}
            className={cn(
              "text-base font-medium tracking-wide transition-colors hover:text-coffee-700 dark:hover:text-coffee-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-caramel focus-visible:ring-offset-2 rounded-md px-1 text-coffee-600 dark:text-coffee-400",
              mounted && activeSection === "pricing" && "text-coffee-900 dark:text-coffee-50 font-semibold",
            )}
            aria-current={mounted && activeSection === "pricing" ? "page" : undefined}
          >
            {navigation.pricing}
            {mounted && activeSection === "pricing" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-caramel rounded-full"></span>
            )}
          </Link>

          <Link
            href={`/${lang}#contact`}
            onClick={(e) => scrollToSection(e, "contact")}
            className={cn(
              "text-base font-medium tracking-wide transition-colors hover:text-coffee-700 dark:hover:text-coffee-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-caramel focus-visible:ring-offset-2 rounded-md px-1 text-coffee-600 dark:text-coffee-400",
              mounted && activeSection === "contact" && "text-coffee-900 dark:text-coffee-50 font-semibold",
            )}
            aria-current={mounted && activeSection === "contact" ? "page" : undefined}
          >
            {navigation.contact}
            {mounted && activeSection === "contact" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-caramel rounded-full"></span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher lang={lang} />
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-coffee-700 hover:bg-coffee-600 text-white dark:bg-accent-caramel dark:hover:bg-accent-caramel/90 dark:text-coffee-900 text-base px-6 py-2 h-auto shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href={`/${lang}#contact`} onClick={(e) => scrollToSection(e, "contact")}>
                {dict.hero.cta}
              </Link>
            </Button>
          </div>
          <MobileNav lang={lang} dict={dict} />
        </div>
      </div>
    </motion.header>
  )
}
