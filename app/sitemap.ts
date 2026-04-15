import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { cases } from '@/lib/cases-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const caseUrls = cases.map((c) => ({
    url: `${SITE_URL}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...caseUrls,
  ]
}
