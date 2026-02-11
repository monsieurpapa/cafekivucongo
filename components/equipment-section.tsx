"use client"

import Image from "next/image"
import { Flame, Scissors, Box, Flag as Flask, Filter, SlidersHorizontal } from "lucide-react"
import { motion } from "framer-motion"

export default function EquipmentSection({ dict }: { dict: any }) {
  const { equipment } = dict

  const equipmentItems = [
    {
      icon: <Flame className="h-8 w-8 text-coffee-dark dark:text-coffee-cream" />,
      title: equipment.roasters.title,
      description: equipment.roasters.description,
    },
    {
      icon: <Scissors className="h-8 w-8 text-coffee-dark dark:text-coffee-cream" />,
      title: equipment.grinders.title,
      description: equipment.grinders.description,
    },
    {
      icon: <Filter className="h-8 w-8 text-coffee-dark dark:text-coffee-cream" />,
      title: equipment.hullers.title,
      description: equipment.hullers.description,
    },
    {
      icon: <SlidersHorizontal className="h-8 w-8 text-coffee-dark dark:text-coffee-cream" />,
      title: equipment.sorters.title,
      description: equipment.sorters.description,
    },
    {
      icon: <Box className="h-8 w-8 text-coffee-dark dark:text-coffee-cream" />,
      title: equipment.packaging.title,
      description: equipment.packaging.description,
    },
    {
      icon: <Flask className="h-8 w-8 text-coffee-dark dark:text-coffee-cream" />,
      title: equipment.testing.title,
      description: equipment.testing.description,
    },
  ]

  return (
    <section id="equipment" className="py-16 md:py-24 section-brown-light coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">{equipment.title}</h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg">{equipment.subtitle}</p>
        </motion.div>

        <div className="flex flex-col gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] w-full max-w-4xl rounded-lg overflow-hidden organic-shadow"
          >
            <Image
              src="/images/photo-2025-08-19-21-45-40.jpg"
              alt="Cafe Kivu Congo coffee deparchment factory facility exterior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold mb-1">Modern Processing Facility</h3>
              <p className="text-sm opacity-90">Professional deparchment and quality control equipment</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 }}
            className="space-y-8 w-full max-w-2xl"
          >
            {equipmentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 p-2 bg-coffee-cream/30 dark:bg-coffee-dark/30 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-coffee-900 dark:text-coffee-50 mb-2">{item.title}</h3>
                  <p className="text-coffee-700 dark:text-coffee-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
