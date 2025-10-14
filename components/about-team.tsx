"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutTeam({ dict }: { dict: any }) {
  const { about } = dict

  const team = [
    {
      name: about.team.member1.name,
      role: about.team.member1.role,
      bio: about.team.member1.bio,
      image: "/placeholder.svg?height=400&width=400&text=Team+Member+1",
    },
    {
      name: about.team.member2.name,
      role: about.team.member2.role,
      bio: about.team.member2.bio,
      image: "/placeholder.svg?height=400&width=400&text=Team+Member+2",
    },
    {
      name: about.team.member3.name,
      role: about.team.member3.role,
      bio: about.team.member3.bio,
      image: "/placeholder.svg?height=400&width=400&text=Team+Member+3",
    },
    {
      name: about.team.member4.name,
      role: about.team.member4.role,
      bio: about.team.member4.bio,
      image: "/placeholder.svg?height=400&width=400&text=Team+Member+4",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
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
