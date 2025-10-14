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
    <section id="contact" className="py-16 md:py-24 bg-coffee-cream/10 dark:bg-coffee-dark/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">{contact.title}</h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg max-w-2xl mx-auto">{contact.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-coffee-900 dark:text-coffee-50 font-medium">
                  {contact.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="border-coffee-300 focus:border-coffee-500 dark:border-coffee-700 dark:focus:border-coffee-500 bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-coffee-900 dark:text-coffee-50 font-medium">
                  {contact.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border-coffee-300 focus:border-coffee-500 dark:border-coffee-700 dark:focus:border-coffee-500 bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-50"
                />
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
                {contact.message}
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                className="border-coffee-300 focus:border-coffee-500 dark:border-coffee-700 dark:focus:border-coffee-500 bg-white dark:bg-coffee-800 text-coffee-900 dark:text-coffee-50"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-coffee-dark hover:bg-coffee-medium text-white dark:bg-coffee-medium dark:hover:bg-coffee-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : contact.submit}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
