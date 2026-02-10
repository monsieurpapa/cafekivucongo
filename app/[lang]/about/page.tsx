import { getDictionary } from "@/lib/dictionary"
import { defaultLanguage } from "@/middleware"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutMission from "@/components/about-mission"
import AboutTeam from "@/components/about-team"
import AboutValues from "@/components/about-values"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as any)

  return {
    title: `${dict.about.title} | Cafe Kivu Congo`,
    description: dict.about.subtitle,
  }
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  // Await params as required in Next.js 15
  const { lang } = await params
  const dict = await getDictionary(lang as any)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1">
        <AboutHero dict={dict} />
        <AboutMission dict={dict} />
        <AboutValues dict={dict} />
        <AboutTeam dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  )
}
