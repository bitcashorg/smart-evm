import { AVAILABLE_LANGS } from '@/lib/config'
import { getBlogCategoryLandingData } from '@/services/datocms'
import type { MetadataRoute } from 'next'
import type { ArticlePageProps } from './page'

export default async function sitemap(
  props: ArticlePageProps,
): Promise<MetadataRoute.Sitemap> {
  const {
    params: { lang, category },
  } = props
  const data = await getBlogCategoryLandingData(lang, category)
  if (!data) return []

  const { sections } = data
  if (!sections) return []

  const slugs = sections.map((section) => section.slug)

  return slugs.map((slug) => ({
    url: `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/blog/${category}/${slug}`,
    lastModified: new Date(),
    priority: 0.5,
    alternates: {
      // ? e.g.: { 'en': 'https://example.com/en/...', 'es': 'https://example.com/es/...', ... }
      languages: Object.fromEntries(
        AVAILABLE_LANGS.map((lang) => [
          lang,
          `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/blog/${category}/${slug}`,
        ]),
      ),
    },
  }))
}
