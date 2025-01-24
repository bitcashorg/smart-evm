import { AVAILABLE_LANGS } from '@/lib/config'
import { getAllArticles } from '@/services/datocms/datocms-all-articles.service'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles()
  if (!articles) return []
 
  return articles.flatMap((item) =>
    item.articles.map((article) => ({
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}/blog/${item.category}/${article.slug}`,
      lastModified: article._publishedAt,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          AVAILABLE_LANGS.map((lang) => [
            lang,
            `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/blog/${item.category}/${article.slug}`,
          ]),
        ),
      },
    })),
  )
}
