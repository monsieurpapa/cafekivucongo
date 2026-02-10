"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function PricingSection({ dict }: { dict: any }) {
  const { pricing } = dict

  const plans = [
    {
      title: pricing.starter.title,
      price: pricing.starter.price,
      period: pricing.starter.period,
      description: pricing.starter.description,
      features: pricing.starter.features,
      cta: pricing.starter.cta,
      highlighted: false,
    },
    {
      title: pricing.professional.title,
      price: pricing.professional.price,
      period: pricing.professional.period,
      description: pricing.professional.description,
      features: pricing.professional.features,
      cta: pricing.professional.cta,
      highlighted: true,
    },
    {
      title: pricing.enterprise.title,
      price: pricing.enterprise.price,
      period: pricing.enterprise.period,
      description: pricing.enterprise.description,
      features: pricing.enterprise.features,
      cta: pricing.enterprise.cta,
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 section-brown-light coffee-pattern relative overflow-hidden">
      <div className="natural-texture absolute inset-0"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">{pricing.title}</h2>
          <p className="text-coffee-700 dark:text-coffee-200 text-lg max-w-2xl mx-auto">{pricing.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className={`border-bean-light/30 dark:border-bean-dark/30 ${
                  plan.highlighted
                    ? "border-accent-caramel/60 dark:border-accent-caramel/50 organic-shadow-lg shadow-xl relative overflow-hidden"
                    : "hover:border-accent-caramel/50 dark:hover:border-accent-caramel/40 organic-shadow"
                } transition-all duration-300 h-full glass-effect`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-coffee-700 dark:bg-coffee-600 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-coffee-900 dark:text-coffee-50 text-2xl">{plan.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-coffee-900 dark:text-coffee-50">{plan.price}</span>
                    <span className="text-coffee-700 dark:text-coffee-200 ml-1">{plan.period}</span>
                  </div>
                  <CardDescription className="text-coffee-700 dark:text-coffee-200 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-coffee-700 dark:text-coffee-300 flex-shrink-0 mt-0.5" />
                        <span className="text-coffee-700 dark:text-coffee-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-coffee-700 hover:bg-coffee-600 dark:bg-coffee-600 dark:hover:bg-coffee-500"
                        : "bg-coffee-700 hover:bg-coffee-600 dark:bg-coffee-700 dark:hover:bg-coffee-600"
                    } text-white`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
