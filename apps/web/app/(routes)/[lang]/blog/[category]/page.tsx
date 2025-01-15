import { BlogSections } from '@/components/routes/blog/blog-sections'
import { BgHeader } from '@/components/shared/bg-header'
import { type Lang, locales } from '@/dictionaries/locales'
import { generateMetadataFromSEO } from '@/lib/seo'
import {
  getArticleSections,
  getBlogCategoryLandingData,
  getPageSeoText,
} from '@/services/datocms'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function Page(props: CategoryPageProps) {
  const {
    params: { lang, category },
  } = props

  const data = await getBlogCategoryLandingData(lang, category)
  if (!data) notFound()

  const { sections, pageSeo } = data
  if (!pageSeo) notFound()

  return (
    <section className="py-10">
      <BgHeader
        heading={pageSeo.title}
        subheading={pageSeo.description}
        className="!text-6xl [&_+_div]:md:!text-2xl [&_+_div]:md:!py-0"
        background="about"
      />
      <div className="narrow-container">
        <BlogSections sections={sections} lang={lang} category={category} />
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

export async function generateMetadata(props: any): Promise<Metadata> {
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
export type CategoryPageProps = { params: CategoryPageParams }
