"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Target, Handshake, Award } from "lucide-react"

export default function TeamsSection({ dict }: { dict: any }) {
  const { teams } = dict

  const teamGallery = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_partner1-MBxueSJ8zg6hEZCNtiz90JlwWBQaeC.jpeg",
      alt: "Cafe Kivu Congo team collaboration meeting with professionals reviewing documents",
      title: "Team Collaboration",
      description: "Professional teamwork driving quality coffee transformation"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4723.jpg-96eU2yC6L1J0a3v1vCtDPL4u1jV2Ng.jpeg",
      alt: "Cafe Kivu Congo team members holding quality certification award",
      title: "Quality Recognition",
      description: "Certified excellence in coffee processing standards"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_partner2-fNyxaWE5Fqv07ourq0fw7cJteOJmiq.jpeg",
      alt: "Cafe Kivu Congo cooperative team working together at office workspace",
      title: "Team Operations",
      description: "Dedicated professionals managing daily operations"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_partner-bwYN0sIN7JPWAUtQk0Sie0lBBY54H1.jpeg",
      alt: "Cafe Kivu Congo team members in branded uniforms at workspace",
      title: "Unified Team",
      description: "Committed professionals working toward shared goals"
    },
  ]

  const teamImages2 = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_team-cRJb5HxzU2vcv0au8Oaj1FtEUU18Fq.jpeg",
      alt: "Cafe Kivu Congo office headquarters team with company branding",
      title: "Company Leadership",
      description: "Executive team at headquarters office"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_partner3-HDEmfKxi5iMCMDRiT4dVssbOKqOftd.jpeg",
      alt: "International partners and team members dining together for business collaboration",
      title: "Global Partnerships",
      description: "Building relationships with international partners"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_event-0EnJhbbSHVNmmB0KDOjiDOEmOgqgyi.jpeg",
      alt: "Coffee tasting training event with team members in branded aprons",
      title: "Professional Training",
      description: "Continuous learning and expertise development"
    },
  ]

  const teamValues = [
    {
      icon: Users,
      title: teams.values.collaboration.title,
      description: teams.values.collaboration.description
    },
    {
      icon: Target,
      title: teams.values.excellence.title,
      description: teams.values.excellence.description
    },
    {
      icon: Handshake,
      title: teams.values.partnership.title,
      description: teams.values.partnership.description
    },
    {
      icon: Award,
      title: teams.values.integrity.title,
      description: teams.values.integrity.description
    },
  ]

  return (
    <section className="py-20 md:py-28 section-neutral coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bean-dark dark:text-bean-cream mb-4 text-balance">
            {teams.title}
          </h2>
          <p className="text-bean-brown dark:text-bean-light text-lg max-w-3xl mx-auto">
            {teams.subtitle}
          </p>
        </motion.div>

        {/* Team Values Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {teamValues.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background dark:bg-coffee-800 rounded-xl p-6 text-center organic-shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-bean-dark dark:text-bean-cream mb-2">
                  {value.title}
                </h3>
                <p className="text-bean-brown dark:text-bean-light text-sm">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Team Gallery 1 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-8 text-center">
            {teams.gallery1Title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamGallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg organic-shadow hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 md:h-72">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 className="text-white font-semibold text-lg mb-1">{image.title}</h4>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Gallery 2 */}
        <div>
          <h3 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-8 text-center">
            {teams.gallery2Title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamImages2.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-xl organic-shadow hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-white font-semibold text-xl mb-2">{image.title}</h4>
                    <p className="text-white/95 text-sm leading-relaxed">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8 bg-primary/10 dark:bg-coffee-800 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <p className="text-bean-brown dark:text-bean-light">{teams.stats.team}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
            <p className="text-bean-brown dark:text-bean-light">{teams.stats.experience}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <p className="text-bean-brown dark:text-bean-light">{teams.stats.commitment}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
