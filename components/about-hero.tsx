"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutHero({ dict }: { dict: any }) {
  const { about } = dict

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-pale/20 to-coffee-cream/20 dark:from-green-dark/20 dark:to-coffee-dark/20 coffee-texture"></div>
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-bean-dark dark:text-bean-cream">
              {about.title}
            </h1>
            <p className="text-xl text-bean-brown dark:text-bean-light">{about.subtitle}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240625_154204-1Y4janR08nLpE1kZrftsGGeC84yHzd.jpg"
              alt="Cafe Kivu Congo team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
