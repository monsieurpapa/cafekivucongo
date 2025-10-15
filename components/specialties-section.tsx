"use client"

import { Coffee, Settings, BarChart, Palette } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function SpecialtiesSection({ dict }: { dict: any }) {
  const { specialties } = dict

  const specialtyItems = [
    {
      icon: <Coffee className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: specialties.specialty1.title,
      description: specialties.specialty1.description,
    },
    {
      icon: <Settings className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: specialties.specialty2.title,
      description: specialties.specialty2.description,
    },
    {
      icon: <BarChart className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: specialties.specialty3.title,
      description: specialties.specialty3.description,
    },
    {
      icon: <Palette className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: specialties.specialty4.title,
      description: specialties.specialty4.description,
    },
  ]

  return (
    <section id="specialties" className="py-16 md:py-24 section-brown-light coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
            {specialties.title}
          </h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg max-w-2xl mx-auto">{specialties.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {specialtyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="border-bean-light/30 hover:border-accent-caramel/50 dark:border-bean-dark/30 dark:hover:border-accent-caramel/40 transition-all duration-300 h-full hover:shadow-lg glass-effect organic-shadow">
                <CardHeader className="pb-2">
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle className="text-coffee-900 dark:text-coffee-50">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-coffee-700 dark:text-coffee-200">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
