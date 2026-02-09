import { MetadataRoute } from 'next'

const supportedLanguages = ['en', 'fr']
const baseUrl = 'https://cafekivucongo.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const lang of supportedLanguages) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    }
  }

  return sitemapEntries
}
