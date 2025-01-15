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

  const slugs = sections.map((section: any) => section.slug)

  return slugs.map((slug: any) => ({
    url: `https://${process.env.VERCEL_URL}/${lang}/blog/${category}/${slug}`,
    lastModified: new Date(),
  }))
}
