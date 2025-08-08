import { components } from '@/lib/source'
import type { MetadataRoute } from 'next'


const domain = process.env.HOST_DOMAIN || 'https://appykit-ui.vercel.app'

console.log(components.getPages().map(page => page.url))
const componentsPages: MetadataRoute.Sitemap = components.getPages().map(page => ({
  url: `${domain}${page.url}`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.9,
}))


console.log(componentsPages)
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },

    ...componentsPages,
    // docs
    {
      url: `${domain}/blocks`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}