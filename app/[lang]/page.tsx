import { getDictionary } from "@/lib/dictionary"
import { defaultLanguage } from "@/middleware"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import EquipmentSection from "@/components/equipment-section"
import ProcessSection from "@/components/process-section"
import SpecialtiesSection from "@/components/specialties-section"
import PartnersSection from "@/components/partners-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default async function Home({ params }: { params: { lang: string } }) {
  // Use default language if params.lang is undefined
  const lang = params?.lang || defaultLanguage
  const dict = await getDictionary(lang as any)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1">
        <HeroSection lang={lang} dict={dict} />
        <ServicesSection dict={dict} />
        <EquipmentSection dict={dict} />
        <ProcessSection dict={dict} />
        <SpecialtiesSection dict={dict} />
        <PartnersSection dict={dict} />
        <TestimonialsSection dict={dict} />
        <PricingSection dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  )
}
