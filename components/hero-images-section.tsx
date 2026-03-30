'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroImagesSection({ dict }: { dict: any }) {
  const { heroImages } = dict

  const images = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_usine_1%20%282%29-wGu6xgi2aUXn6hb0abmEoCeIBEENQc.jpeg',
      alt: 'Cafe Kivu Congo team in administrative office reviewing documents and coffee operations',
      title: heroImages.office.title,
      description: heroImages.office.description,
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_event-WWcRdZwHe0PEayGC6SgkjJ6VZIVKGX.jpeg',
      alt: 'International coffee tasting event with professionals evaluating coffee quality and samples',
      title: heroImages.tasting.title,
      description: heroImages.tasting.description,
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4716.jpg-gKyf9k2QPiSWk6KkwWYTOIzKbe0ecW.jpeg',
      alt: 'Modern industrial coffee warehouse and processing facility with professional team',
      title: heroImages.facility.title,
      description: heroImages.facility.description,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden" id="hero-images">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {heroImages.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {heroImages.subtitle}
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden bg-muted">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>

              {/* Overlay Content */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-sm text-gray-100 line-clamp-2">{image.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Accent */}
        <div className="mt-12 md:mt-16 flex justify-center items-center gap-2 text-muted-foreground">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <span className="text-sm font-medium">{heroImages.cta}</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
    </section>
  )
}
