import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://zjunaidz.me'
  const lastModified = new Date()

  const languages = {
    'en-US': `${base}/`,
    ja: `${base}/ja`,
  }

  return [
    {
      url: base,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${base}/ja`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages },
    },
  ]
}
