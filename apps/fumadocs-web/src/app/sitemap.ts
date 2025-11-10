import { components } from '@/lib/source'
import type { MetadataRoute } from 'next'


const domain = process.env.HOST_DOMAIN || 'https://appykit-ui.com'

console.log(components.getPages().map(page => page.url))
const componentsPages: MetadataRoute.Sitemap = components.getPages().map(page => ({
  url: `${domain}/reactnative${page.url}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.6,
}))

const otherRoutes = [
  'reactnative/blocks', 'reactnative/components', 'reactnative/resources',
  'flutter/resources', 'flutter/blocks'
].map((route) => ({
  url: `${domain}/${route}`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: 0.9999,
}))

console.log(componentsPages)
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    ...otherRoutes,
    ...componentsPages,
    // docs
    {
      url: `${domain}/reactnative/blocks`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]
}