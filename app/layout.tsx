import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cafekivucongo.com'),
  title: {
    default: 'Cafe Kivu Congo - Premium Coffee Transformation Services',
    template: '%s | Cafe Kivu Congo',
  },
  description: 'Professional coffee transformation services including sourcing, roasting, deparchment, and packaging for businesses in Congo and beyond. ISO certified facilities and ethical practices.',
  keywords: [
    'coffee transformation',
    'coffee roasting',
    'green coffee processing',
    'Congo coffee',
    'Goma coffee',
    'Lake Kivu coffee',
    'coffee export',
    'specialty coffee',
    'fair trade coffee',
    'sustainable coffee',
    'coffee deparchment',
    'coffee packaging',
  ],
  generator: 'Next.js',
  applicationName: 'Cafe Kivu Congo',
  authors: [{ name: 'Cafe Kivu Congo', url: 'https://cafekivucongo.com' }],
  creator: 'Cafe Kivu Congo',
  publisher: 'Cafe Kivu Congo',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    languages: {
      en: 'https://cafekivucongo.com/en',
      fr: 'https://cafekivucongo.com/fr',
      'x-default': 'https://cafekivucongo.com/en',
    },
    canonical: 'https://cafekivucongo.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    url: 'https://cafekivucongo.com',
    siteName: 'Cafe Kivu Congo',
    title: 'Cafe Kivu Congo - Premium Coffee Transformation Services',
    description: 'Professional coffee transformation services with ISO certified facilities',
    images: [
      {
        url: '/logo.png',
        width: 500,
        height: 500,
        alt: 'Cafe Kivu Congo Official Logo',
        type: 'image/png',
      },
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cafe Kivu Congo Coffee Transformation Facility',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CafeKivuCongo',
    creator: '@CafeKivuCongo',
    title: 'Cafe Kivu Congo',
    description: 'Professional coffee transformation services',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        url: '/logo.png',
        type: 'image/png',
        sizes: 'any',
      },
    ],
    apple: {
      url: '/logo.png',
      type: 'image/png',
      sizes: 'any',
    },
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Cafe Kivu Congo',
  },
  category: 'Business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
