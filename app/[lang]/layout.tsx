import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { supportedLanguages, defaultLanguage } from "@/middleware"
import { Toaster } from "@/components/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import SkipNav from "@/components/skip-nav"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === 'en'

  return {
    metadataBase: new URL("https://cafekivucongo.vercel.app"),
    title: isEnglish 
      ? "Cafe Kivu Congo - Coffee Transformation Services"
      : "Cafe Kivu Congo - Services de Transformation du Café",
    description: isEnglish
      ? "Professional coffee transformation services including bean sourcing, roasting, packaging, and consulting for businesses across the Democratic Republic of Congo and beyond."
      : "Services professionnels de transformation du café incluant l'approvisionnement en grains, la torréfaction, l'emballage et le conseil pour les entreprises.",
    keywords: isEnglish 
      ? ["coffee transformation", "green coffee", "coffee roasting", "coffee packaging", "Congo", "Goma", "export"]
      : ["transformation du café", "café vert", "torréfaction", "emballage", "Congo", "Goma", "export"],
    authors: [{ name: "Cafe Kivu Congo", url: "https://cafekivucongo.vercel.app" }],
    creator: "Cafe Kivu Congo",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
    openGraph: {
      title: isEnglish 
        ? "Cafe Kivu Congo - Coffee Transformation Services"
        : "Cafe Kivu Congo - Services de Transformation du Café",
      description: isEnglish
        ? "Professional coffee transformation services for businesses"
        : "Services professionnels de transformation du café pour les entreprises",
      url: "https://cafekivucongo.vercel.app",
      siteName: "Cafe Kivu Congo",
      locale: lang === 'en' ? 'en_US' : 'fr_FR',
      type: "website",
      images: [{
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cafe Kivu Congo"
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: isEnglish 
        ? "Cafe Kivu Congo - Coffee Transformation Services"
        : "Cafe Kivu Congo - Services de Transformation du Café",
      description: isEnglish
        ? "Professional coffee transformation services"
        : "Services professionnels de transformation du café",
      creator: "@CafeKivuCongo",
      images: ["/og-image.jpg"],
    },
    alternates: {
      languages: {
        'en': '/en',
        'fr': '/fr',
      },
    },
  }
}

export async function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  // Await params as required in Next.js 15
  const { lang } = await params

  // JSON-LD structured data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://cafekivucongo.vercel.app',
    'name': 'Cafe Kivu Congo',
    'description': 'Professional coffee transformation services',
    'url': 'https://cafekivucongo.vercel.app',
    'logo': 'https://cafekivucongo.vercel.app/placeholder-logo.png',
    'sameAs': [
      'https://www.facebook.com/cafekivucongo',
      'https://twitter.com/CafeKivuCongo',
      'https://www.instagram.com/cafekivucongo',
    ],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Avenue Nyakagozi, Q. Bujovu',
      'addressLocality': 'Goma',
      'addressRegion': 'Nord-Kivu',
      'postalCode': 'DR Congo',
      'addressCountry': 'CD',
    },
    'contact': {
      '@type': 'ContactPoint',
      'telephone': '+243997675176',
      'contactType': 'Customer Service',
      'email': 'cafekivucongo8@gmail.com',
    },
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} coffee-texture`}>
        <SkipNav />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="cafe-kivu-theme"
        >
          {children}
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
