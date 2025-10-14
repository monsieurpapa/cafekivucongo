"use client"

import { Coffee, Package, Truck, LineChart, Warehouse, Filter, SlidersHorizontal, Ship } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ServicesSection({ dict }: { dict: any }) {
  const { services } = dict

  const serviceItems = [
    {
      icon: <Truck className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: services.sourcing.title,
      description: services.sourcing.description,
    },
    {
      icon: <Coffee className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: services.roasting.title,
      description: services.roasting.description,
    },
    {
      icon: <Warehouse className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: services.storage.title,
      description: services.storage.description,
    },
    {
      icon: <Filter className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: services.hulling.title,
      description: services.hulling.description,
    },
    {
      icon: <SlidersHorizontal className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: services.sorting.title,
      description: services.sorting.description,
    },
    {
      icon: <Package className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: services.packaging.title,
      description: services.packaging.description,
    },
    {
      icon: <Ship className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: services.export.title,
      description: services.export.description,
    },
    {
      icon: <LineChart className="h-10 w-10 text-coffee-700 dark:text-coffee-300" />,
      title: services.consulting.title,
      description: services.consulting.description,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-coffee-50 dark:bg-coffee-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">{services.title}</h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg max-w-2xl mx-auto">{services.subtitle}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {serviceItems.map((item, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-coffee-200 hover:border-coffee-400 dark:border-coffee-700 dark:hover:border-coffee-500 transition-all duration-300 h-full hover:shadow-lg bg-white dark:bg-coffee-800">
                <CardHeader className="pb-2">
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle className="text-coffee-900 dark:text-coffee-50">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-coffee-700 dark:text-coffee-200 text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
