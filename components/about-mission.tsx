"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Coffee, Globe, Heart } from "lucide-react"

export default function AboutMission({ dict }: { dict: any }) {
  const { about } = dict

  return (
    <section className="py-16 md:py-24 section-neutral coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden organic-shadow"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4665.jpg-UPiqKNEfvHb3FPWO3xidMpZuOXrqze.jpeg"
              alt="Cafe Kivu Congo team meeting with cooperative partners discussing quality coffee production"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-bean-dark dark:text-bean-cream mb-4">
              {about.mission.title}
            </h2>
            <p className="text-bean-brown dark:text-bean-light text-lg">{about.mission.description}</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-effect organic-shadow p-8 rounded-lg border border-green-light/20 dark:border-green-dark/20"
          >
            <div className="bg-green-medium text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Coffee className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">{about.mission.heading1}</h3>
            <p className="text-bean-brown dark:text-bean-light">{about.mission.content1}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect organic-shadow p-8 rounded-lg border border-coffee-light/20 dark:border-coffee-dark/20"
          >
            <div className="bg-coffee-medium text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">{about.mission.heading2}</h3>
            <p className="text-bean-brown dark:text-bean-light">{about.mission.content2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-effect organic-shadow p-8 rounded-lg border border-green-light/10 border-r-coffee-light/10 dark:border-green-dark/10 dark:border-r-coffee-dark/10 md:col-span-2 lg:col-span-1"
          >
            <div className="bg-gradient-to-r from-green-medium to-coffee-medium text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">{about.mission.heading3}</h3>
            <p className="text-bean-brown dark:text-bean-light">{about.mission.content3}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
