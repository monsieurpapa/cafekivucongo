import { MetadataRoute } from 'next'

const supportedLanguages = ['en', 'fr']
const baseUrl = 'https://cafekivucongo.vercel.app'
const lastModified = new Date('2025-02-11')

// Define all routes with their SEO properties following Google best practices
interface RouteConfig {
  path: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
  label: string
}

const routes: RouteConfig[] = [
  // Main pages - highest priority
  {
    path: '',
    changeFrequency: 'weekly',
    priority: 1.0,
    label: 'Home',
  },
  // Service pages
  {
    path: '/about',
    changeFrequency: 'monthly',
    priority: 0.95,
    label: 'About Us',
  },
  // Accessibility page
  {
    path: '/accessibility',
    changeFrequency: 'yearly',
    priority: 0.6,
    label: 'Accessibility',
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add all language variants for each route
  for (const lang of supportedLanguages) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      })
    }
  }

  // Remove duplicates and optimize by sorting by priority for better crawl efficiency
  const uniqueEntries = Array.from(
    new Map(sitemapEntries.map(entry => [entry.url, entry])).values()
  )
  uniqueEntries.sort((a, b) => (b.priority || 0.5) - (a.priority || 0.5))

  return uniqueEntries
}
