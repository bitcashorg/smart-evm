import { BlogSections } from '@/components/routes/blog/blog-sections'
import { BgHeader } from '@/components/shared/bg-header'
import { type Lang, locales } from '@/dictionaries/locales'
import { generateMetadataFromSEO } from '@/lib/seo'
import {
  type ArticlesSection,
  getArticleSections,
  getBlogCategoryLandingData,
  getPageSeoText,
} from '@/services/datocms'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function Page(props: CategoryPageProps) {
  const {
    params: { lang, category },
    searchParams: { topic },
  } = props

  const data = await getBlogCategoryLandingData(lang, category)
  if (!data) notFound()

  const { sections, pageSeo } = data
  if (!pageSeo) notFound()

  const blogSections = topic
    ? (sections as ArticlesSection[]).filter((section) =>
        section.articles.some((acticle) => acticle.topics.includes(topic)),
      )
    : (sections as ArticlesSection[])

  return (
    <section className="py-10">
      <BgHeader
        heading={pageSeo?.title || 'Blog Category Page'}
        subheading={pageSeo?.description || ''}
        className="!text-6xl [&_+_div]:md:!text-2xl [&_+_div]:md:!py-0"
        background="about"
      />
      <div className="narrow-container">
        <BlogSections sections={blogSections} lang={lang} category={category} />
      </div>
    </section>
  )
}

export async function generateStaticParams(): Promise<CategoryPageParams[]> {
  const params: CategoryPageParams[] = (
    await Promise.all(
      locales.map(async (lang): Promise<CategoryPageParams[]> => {
        const sections = await getArticleSections(lang)
        if (!sections) throw 'sections not found'
        const categories = sections.map((section) => section.slug)
        return categories.map((category) => ({ lang, category }))
      }),
    )
  ).flat()
  return params
}

export async function generateMetadata(
  props: CategoryPageProps,
): Promise<Metadata> {
  const {
    params: { lang, category },
  } = props

  const pageSeo = await getPageSeoText(category)

  const seoData = {
    title: pageSeo?.pageSeo?.title || '',
    description: pageSeo?.pageSeo?.description || '',
    ogType: 'website',
    ogImageUrl: pageSeo?.pageSeo?.image?.url || '',
    twitterCard: 'summary_large_image',
  }

  return generateMetadataFromSEO(seoData)
}

type CategoryPageParams = { lang: Lang; category: string }
export type CategoryPageProps = {
  params: CategoryPageParams
  searchParams: { topic?: string }
}
