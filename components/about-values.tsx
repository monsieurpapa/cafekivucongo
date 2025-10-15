"use client"

import { motion } from "framer-motion"
import { Check, Shield, Users, Leaf, Scale, Award } from "lucide-react"

export default function AboutValues({ dict }: { dict: any }) {
  const { about } = dict

  const values = [
    {
      icon: <Quality />,
      title: about.values.quality.title,
      description: about.values.quality.description,
    },
    {
      icon: <Shield className="h-10 w-10 text-green-medium dark:text-green-light" />,
      title: about.values.integrity.title,
      description: about.values.integrity.description,
    },
    {
      icon: <Users className="h-10 w-10 text-green-medium dark:text-green-light" />,
      title: about.values.community.title,
      description: about.values.community.description,
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-medium dark:text-green-light" />,
      title: about.values.sustainability.title,
      description: about.values.sustainability.description,
    },
    {
      icon: <Scale className="h-10 w-10 text-green-medium dark:text-green-light" />,
      title: about.values.fairness.title,
      description: about.values.fairness.description,
    },
    {
      icon: <Award className="h-10 w-10 text-green-medium dark:text-green-light" />,
      title: about.values.excellence.title,
      description: about.values.excellence.description,
    },
  ]

  return (
    <section className="py-16 md:py-24 section-green-light coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bean-dark dark:text-bean-cream mb-4">
            {about.values.title}
          </h2>
          <p className="text-bean-brown dark:text-bean-light text-lg max-w-3xl mx-auto">{about.values.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect organic-shadow p-6 rounded-lg border border-bean-light/30 dark:border-bean-dark/30"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-bean-dark dark:text-bean-cream mb-2">{value.title}</h3>
              <p className="text-bean-brown dark:text-bean-light">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Quality() {
  return (
    <div className="relative">
      <div className="h-10 w-10 rounded-full bg-green-pale dark:bg-green-dark flex items-center justify-center">
        <Check className="h-6 w-6 text-green-dark dark:text-green-light" />
      </div>
      <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-green-light dark:bg-green-medium flex items-center justify-center">
        <Check className="h-3 w-3 text-white" />
      </div>
    </div>
  )
}
