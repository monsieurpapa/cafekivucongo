"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function ContactSection({ dict }: { dict: any }) {
  const { contact } = dict
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: contact.success,
      duration: 5000,
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-16 md:py-24 section-neutral coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">{contact.title}</h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg">{contact.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 glass-effect p-8 rounded-xl organic-shadow"
            role="form"
            aria-label="Contact form"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-coffee-900 dark:text-coffee-50 font-medium">
                  {contact.name}{" "}
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  aria-describedby="name-description"
                  className="border-coffee-300 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 dark:border-coffee-600 dark:focus:border-accent-caramel dark:focus:ring-accent-caramel/30 bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-50 placeholder-coffee-400 dark:placeholder-coffee-500"
                  placeholder="Full name"
                />
                <span id="name-description" className="sr-only">
                  Enter your full name
                </span>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-coffee-900 dark:text-coffee-50 font-medium">
                  {contact.email}{" "}
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-describedby="email-description"
                  className="border-coffee-300 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 dark:border-coffee-600 dark:focus:border-accent-caramel dark:focus:ring-accent-caramel/30 bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-50 placeholder-coffee-400 dark:placeholder-coffee-500"
                  placeholder="Email address"
                />
                <span id="email-description" className="sr-only">
                  Enter your email address
                </span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-coffee-900 dark:text-coffee-50 font-medium">
                  {contact.phone}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  className="border-coffee-300 focus:border-coffee-500 dark:border-coffee-700 dark:focus:border-coffee-500 bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-coffee-900 dark:text-coffee-50 font-medium">
                  {contact.company}
                </label>
                <Input
                  id="company"
                  name="company"
                  className="border-coffee-300 focus:border-coffee-500 dark:border-coffee-700 dark:focus:border-coffee-500 bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-coffee-900 dark:text-coffee-50 font-medium">
                {contact.message}{" "}
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                aria-required="true"
                aria-describedby="message-description"
                className="border-coffee-300 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 dark:border-coffee-600 dark:focus:border-accent-caramel dark:focus:ring-accent-caramel/30 bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-50 placeholder-coffee-400 dark:placeholder-coffee-500 resize-none"
                placeholder="Your message"
              />
              <span id="message-description" className="sr-only">
                Enter your message
              </span>
            </div>

            <Button
              type="submit"
              className="w-full bg-coffee-700 hover:bg-coffee-600 text-white dark:bg-accent-caramel dark:hover:bg-accent-caramel/90 dark:text-coffee-900 transition-all duration-300 shadow-md hover:shadow-lg"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="sr-only">Sending your message...</span>
                  <span aria-hidden="true">Sending...</span>
                </>
              ) : (
                contact.submit
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
