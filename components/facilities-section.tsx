"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, Package, Truck, CheckCircle } from "lucide-react"

export default function FacilitiesSection({ dict }: { dict: any }) {
  const facilities = [
    {
      title: "Modern Processing Facility",
      description: "Our state-of-the-art deparchment factory features advanced equipment and quality control systems.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_factory-lsWXQO9v8K3rpVZu6o5bFFmfxOPbwM.jpeg",
      alt: "Cafe Kivu Congo professional coffee processing factory with modern infrastructure",
    },
    {
      title: "Professional Packaging",
      description: "Export-ready coffee packaged in branded jute bags with full traceability and quality certification.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_export4-noofUVVGciGeLi7aMIClNgyqpUvcgZ.jpeg",
      alt: "Cafe Kivu Congo arabica coffee Grade 4 in authentic jute sack with leopard logo",
    },
    {
      title: "Export Operations",
      description: "Container loading facilities for international shipping with proper documentation and quality assurance.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_export3-ae3Ho65nBT9ZWKnEgKPeIzfR030ExA.jpeg",
      alt: "Coffee bags stacked in shipping container for international export logistics",
    },
    {
      title: "Warehouse Storage",
      description: "Climate-controlled warehouse facility for safe storage and preservation of quality coffee inventory.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafekivucongo_entrepot-QNE4TDrOQQx29fpmt95CSLaUUXmpuG.jpeg",
      alt: "Cafe Kivu Congo warehouse with stacked bags of processed coffee ready for export",
    },
  ]

  const features = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Modern Infrastructure",
      description: "Purpose-built facility with climate control and proper ventilation",
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Professional Packaging",
      description: "Branded export-grade jute bags with full traceability",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Export Ready",
      description: "Container loading and international shipping logistics",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Systematic quality control at every processing stage",
    },
  ]

  return (
    <section id="facilities" className="py-16 md:py-24 section-brown-light coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">Our Facilities</h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg">
            Professional coffee deparchment factory equipped for international export
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 w-full max-w-5xl">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect organic-shadow rounded-lg overflow-hidden border border-bean-light/30 dark:border-bean-dark/30 hover:organic-shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{facility.title}</h3>
                  <p className="text-sm text-white/95">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect organic-shadow p-6 rounded-lg border border-bean-light/30 dark:border-bean-dark/30 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-coffee-medium text-white mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-coffee-900 dark:text-coffee-50 mb-2">{feature.title}</h4>
              <p className="text-coffee-700 dark:text-coffee-200 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Export Certification Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 glass-effect organic-shadow p-8 rounded-xl border border-accent-caramel/30 dark:border-accent-caramel/20 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-medium to-coffee-medium text-white mb-4">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-2">Export Certified</h3>
          <p className="text-coffee-700 dark:text-coffee-200 max-w-2xl mx-auto">
            Our facility meets international standards for coffee processing and export. All products are fully
            traceable with proper documentation and quality certifications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
