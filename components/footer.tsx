"use client"

import type React from "react"

import Link from "next/link"
import { Coffee, Facebook, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer({ lang, dict }: { lang: string; dict: any }) {
  const { footer } = dict

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

  return (
    <footer className="bg-coffee-900 text-coffee-50 py-12 border-t border-coffee-800">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/${lang}#home`}
              className="flex items-center gap-2 mb-4"
              onClick={(e) => scrollToSection(e, "home")}
            >
              <Coffee className="h-6 w-6 text-accent-caramel" />
              <span className="font-bold text-coffee-50">Cafe Kivu Congo</span>
            </Link>
            <p className="text-coffee-300 text-sm mb-4">
              Professional coffee transformation services for businesses of all sizes.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/1EcZk2kj21/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coffee-800 hover:bg-accent-caramel hover:text-coffee-900 transition-all duration-300 p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/cafe-kivu-congo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coffee-800 hover:bg-accent-caramel hover:text-coffee-900 transition-all duration-300 p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-coffee-50 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="text-coffee-300 hover:text-accent-caramel transition-colors text-sm"
                >
                  {footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}#services`}
                  className="text-coffee-300 hover:text-accent-caramel transition-colors text-sm"
                  onClick={(e) => scrollToSection(e, "services")}
                >
                  {footer.services}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-coffee-300 hover:text-accent-caramel transition-colors text-sm">
                  {footer.blog}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-coffee-300 hover:text-accent-caramel transition-colors text-sm">
                  {footer.careers}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-coffee-50 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-coffee-300 hover:text-accent-caramel transition-colors text-sm">
                  {footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-coffee-300 hover:text-accent-caramel transition-colors text-sm">
                  {footer.terms}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-coffee-50 mb-4">Contact</h3>
            <address className="not-italic text-coffee-300 text-sm space-y-2">
              <p>Goma, Q. Bujovu, AvenueaNyakagozi</p>
              <p>Goma, Nork-Kivu, Republic Democratique du Congo</p>
              <p>cafekivucongo8@gmail.com</p>
              <p>Tel: +243 997675176</p>
            </address>
          </motion.div>
        </div>

        <div className="border-t border-coffee-800 mt-8 pt-8 text-center text-coffee-400 text-sm">
          {footer.copyright}
        </div>
      </div>
    </footer>
  )
}
