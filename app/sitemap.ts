import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://zjunaidz.me'
  // Only include canonical paths in sitemap (no hash fragments)
  const paths = [''] as const
  const entries: MetadataRoute.Sitemap = paths.map((path) => ({
    url: path === '' ? base : `${base}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.6,
  }))

  return entries
}
