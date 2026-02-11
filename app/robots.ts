import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rules for all bots
      {
        userAgent: '*',
        allow: [
          '/',
          '/en/',
          '/fr/',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
        ],
        crawlDelay: 0.5,
      },
      // Specific optimization for Googlebot
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
        ],
        crawlDelay: 0,
      },
      // Block bad bots
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'DotBot',
          'MJ12bot',
        ],
        disallow: '/',
      },
    ],
    sitemap: [
      'https://cafekivucongo.vercel.app/sitemap.xml',
    ],
  }
}
