"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Play, Building2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AboutTeam({ dict }: { dict: any }) {
  const { about } = dict
  const [showFounderVideo, setShowFounderVideo] = useState(false)
  const [showOfficeGallery, setShowOfficeGallery] = useState(false)

  const team = [
    {
      name: about.team.member1.name,
      role: about.team.member1.role,
      bio: about.team.member1.bio,
      image: "/placeholder.svg?height=400&width=400&text=Founder",
      isFounder: true,
    },
    {
      name: about.team.member2.name,
      role: about.team.member2.role,
      bio: about.team.member2.bio,
      image: "/placeholder.svg?height=400&width=400&text=Team+Member+2",
      isFounder: false,
    },
    {
      name: about.team.member3.name,
      role: about.team.member3.role,
      bio: about.team.member3.bio,
      image: "/placeholder.svg?height=400&width=400&text=Team+Member+3",
      isFounder: false,
    },
    {
      name: about.team.member4.name,
      role: about.team.member4.role,
      bio: about.team.member4.bio,
      image: "/placeholder.svg?height=400&width=400&text=Team+Member+4",
      isFounder: false,
    },
  ]

  return (
    <section className="py-16 md:py-24 section-brown-light coffee-pattern relative overflow-hidden">
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
            {about.team.title}
          </h2>
          <p className="text-bean-brown dark:text-bean-light text-lg max-w-3xl mx-auto">{about.team.subtitle}</p>
        </motion.div>

        {/* Founder Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="glass-effect organic-shadow-lg rounded-xl overflow-hidden border border-accent-caramel/30 dark:border-accent-caramel/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video md:aspect-auto md:h-full min-h-[400px]">
                {!showFounderVideo ? (
                  <>
                    <Image src={team[0].image || "/placeholder.svg"} alt={team[0].name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                      <button
                        onClick={() => setShowFounderVideo(true)}
                        className="group relative"
                        aria-label="Watch founder's investment call video"
                      >
                        <div className="absolute inset-0 bg-accent-caramel rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform">
                          <Play className="h-12 w-12 text-white fill-white" />
                        </div>
                      </button>
                    </div>
                  </>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/FPkhuOEVES4?autoplay=1"
                    title="Investment Opportunity - Mr. Byamungu Munganga"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-medium to-coffee-medium text-white text-sm font-semibold rounded-full mb-4">
                  Founder & CEO
                </div>
                <h3 className="text-3xl font-bold text-bean-dark dark:text-bean-cream mb-2">{team[0].name}</h3>
                <p className="text-green-medium dark:text-green-light font-medium text-lg mb-4">{team[0].role}</p>
                <p className="text-bean-brown dark:text-bean-light mb-6">{team[0].bio}</p>
                {!showFounderVideo && (
                  <Button
                    onClick={() => setShowFounderVideo(true)}
                    className="bg-gradient-to-r from-green-medium to-coffee-medium hover:from-green-dark hover:to-coffee-dark text-white"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Investment Opportunity Video
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of Team */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.slice(1).map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect organic-shadow rounded-lg overflow-hidden border border-bean-light/30 dark:border-bean-dark/30"
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bean-dark dark:text-bean-cream">{member.name}</h3>
                <p className="text-green-medium dark:text-green-light font-medium mb-3">{member.role}</p>
                <p className="text-bean-brown dark:text-bean-light text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
