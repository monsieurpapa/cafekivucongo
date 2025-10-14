"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export default function TestimonialsSection({ dict }: { dict: any }) {
  const { testimonials } = dict

  const testimonialItems = [
    {
      quote: testimonials.testimonial1.quote,
      author: testimonials.testimonial1.author,
      company: testimonials.testimonial1.company,
      image: `/placeholder.svg?height=100&width=100&text=Person1`,
    },
    {
      quote: testimonials.testimonial2.quote,
      author: testimonials.testimonial2.author,
      company: testimonials.testimonial2.company,
      image: `/placeholder.svg?height=100&width=100&text=Person2`,
    },
    {
      quote: testimonials.testimonial3.quote,
      author: testimonials.testimonial3.author,
      company: testimonials.testimonial3.company,
      image: `/placeholder.svg?height=100&width=100&text=Person3`,
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-coffee-100 dark:bg-coffee-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
            {testimonials.title}
          </h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg max-w-2xl mx-auto">{testimonials.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonialItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="border-coffee-200 hover:border-coffee-400 transition-all duration-300 dark:border-coffee-700 dark:hover:border-coffee-500 h-full bg-white dark:bg-coffee-800 hover:shadow-lg">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-coffee-700 dark:text-coffee-300 mb-4" />
                  <p className="text-coffee-700 dark:text-coffee-200 italic">{item.quote}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="flex items-center gap-3 mt-4">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.author} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-coffee-900 dark:text-coffee-50">{item.author}</p>
                      <p className="text-sm text-coffee-700 dark:text-coffee-200">{item.company}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
