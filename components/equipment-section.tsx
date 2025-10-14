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
    <section id="equipment" className="py-16 md:py-24 dark:bg-coffee-dark/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">{equipment.title}</h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg max-w-2xl mx-auto">{equipment.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240625_154204-1Y4janR08nLpE1kZrftsGGeC84yHzd.jpg"
              alt="Coffee processing facility and team"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 }}
            className="space-y-8 order-1 md:order-2"
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
