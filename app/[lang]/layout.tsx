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

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params?.lang || defaultLanguage

  return {
    title: "Cafe Kivu Congo - Coffee Transformation Services",
    description: "Professional coffee transformation services for businesses of all sizes",
    keywords: ["coffee", "transformation", "roasting", "packaging", "consulting", "Congo", "Kivu"],
    authors: [{ name: "Cafe Kivu Congo" }],
    openGraph: {
      title: "Cafe Kivu Congo - Coffee Transformation Services",
      description: "Professional coffee transformation services for businesses of all sizes",
      url: "https://cafekivucongo.vercel.app",
      siteName: "Cafe Kivu Congo",
      locale: lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Cafe Kivu Congo - Coffee Transformation Services",
      description: "Professional coffee transformation services for businesses of all sizes",
    },
  }
}

export async function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Use a default language if params.lang is undefined
  const lang = params?.lang || defaultLanguage

  return (
    <html lang={lang} suppressHydrationWarning>
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
