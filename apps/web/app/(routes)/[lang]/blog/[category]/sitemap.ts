import { AVAILABLE_LANGS } from '@/lib/config'
import { getArticleSections } from '@/services/datocms'
import type { MetadataRoute } from 'next'
import type { CategoryPageProps } from './page'

export default async function sitemap(
  props: CategoryPageProps,
): Promise<MetadataRoute.Sitemap> {
  const {
    params: { lang },
  } = props
  let sections = []
  try {
    sections = await getArticleSections(lang)
  } catch (error) {
    return []
  }

  const categories = sections.map((section) => section.slug)
  return categories.map((category) => ({
    url: `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/blog/${category}`,
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
