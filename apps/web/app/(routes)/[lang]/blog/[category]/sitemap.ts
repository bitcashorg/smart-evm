import { AVAILABLE_LANGS } from '@/lib/config'
import { getAllArticles } from '@/services/datocms/datocms-all-articles.service'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles()
  if (!articles) return []

  const categoryUrls = [...new Set(articles.map((article) => article.category))]
  return categoryUrls.map((category) => ({
    url: `https://${process.env.NEXT_PUBLIC_APP_URL}/blog/${category}`,
    lastModified: new Date(),
    priority: 0.7,
    alternates: {
      // ? e.g.: { 'en': 'https://example.com/en/...', 'es': 'https://example.com/es/...', ... }
      languages: Object.fromEntries(
        AVAILABLE_LANGS.map((lang) => [
          lang,
          `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/blog/${category}`,
        ]),
      ),
    },
  }))
}
