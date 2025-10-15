"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Globe, Award, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function InvestmentSection({ dict }: { dict: any }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const opportunities = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growing Market",
      description: "Congo's specialty coffee market is expanding with increasing global demand",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced Leadership",
      description: "Led by industry veteran Mr. Byamungu Munganga with deep market expertise",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Export Ready",
      description: "Established infrastructure for international coffee trade and logistics",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Certified",
      description: "Certified processing facility meeting international quality standards",
    },
  ]

  return (
    <section id="investment" className="py-16 md:py-24 section-neutral coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
            Investment Opportunity
          </h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg max-w-2xl mx-auto">
            Join us in transforming Congo's coffee industry and creating sustainable value
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass-effect organic-shadow-lg rounded-xl overflow-hidden border border-accent-caramel/30 dark:border-accent-caramel/20">
              <div className="relative aspect-video bg-coffee-900">
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-coffee-800 to-coffee-900">
                    <button
                      onClick={() => setIsVideoLoaded(true)}
                      className="group relative"
                      aria-label="Play investment opportunity video"
                    >
                      <div className="absolute inset-0 bg-accent-caramel rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform">
                        <Play className="h-12 w-12 text-white fill-white" />
                      </div>
                    </button>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium mb-1">Investment Call by Founder</p>
                      <p className="text-xs opacity-75">Mr. Byamungu Munganga</p>
                    </div>
                  </div>
                )}
                {isVideoLoaded && (
                  <iframe
                    src="https://www.youtube.com/embed/FPkhuOEVES4?autoplay=1"
                    title="Cafe Kivu Congo Investment Opportunity - Mr. Byamungu Munganga"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
              <div className="p-6 bg-gradient-to-br from-coffee-50 to-green-50 dark:from-coffee-900 dark:to-green-900">
                <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-50 mb-2">Message from Our Founder</h3>
                <p className="text-coffee-700 dark:text-coffee-200 text-sm mb-4">
                  Mr. Byamungu Munganga shares his vision for Cafe Kivu Congo and the investment opportunities in
                  transforming Congo's coffee sector.
                </p>
                {!isVideoLoaded && (
                  <Button
                    onClick={() => setIsVideoLoaded(true)}
                    className="w-full bg-coffee-700 hover:bg-coffee-600 text-white dark:bg-accent-caramel dark:hover:bg-accent-caramel/90 dark:text-coffee-900"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Investment Opportunity
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Investment Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-effect organic-shadow p-6 rounded-xl border border-bean-light/30 dark:border-bean-dark/30">
              <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Why Invest in Cafe Kivu?</h3>
              <div className="space-y-4">
                {opportunities.map((opportunity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-medium to-coffee-medium text-white flex items-center justify-center">
                      {opportunity.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-900 dark:text-coffee-50 mb-1">{opportunity.title}</h4>
                      <p className="text-coffee-700 dark:text-coffee-200 text-sm">{opportunity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect organic-shadow p-6 rounded-xl border border-accent-caramel/30 dark:border-accent-caramel/20 bg-gradient-to-br from-coffee-50/50 to-green-50/50 dark:from-coffee-900/50 dark:to-green-900/50">
              <h4 className="text-lg font-bold text-coffee-900 dark:text-coffee-50 mb-3">Ready to Partner?</h4>
              <p className="text-coffee-700 dark:text-coffee-200 text-sm mb-4">
                Contact us to discuss investment opportunities and partnership models that create value for all
                stakeholders.
              </p>
              <Button className="w-full bg-gradient-to-r from-green-medium to-coffee-medium hover:from-green-dark hover:to-coffee-dark text-white">
                Schedule Investment Discussion
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Investment Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { value: "2T+", label: "Processing Capacity/Hour" },
            { value: "Grade 4", label: "Arabica Quality" },
            { value: "Export Ready", label: "International Trade" },
            { value: "10+ Years", label: "Industry Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-effect organic-shadow p-6 rounded-lg border border-bean-light/30 dark:border-bean-dark/30 text-center"
            >
              <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-green-medium to-coffee-medium bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-coffee-700 dark:text-coffee-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
