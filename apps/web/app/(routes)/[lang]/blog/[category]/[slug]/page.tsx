import { generateShortLink } from '@/app/actions/general'
import { BlogPage } from '@/components/routes/blog/article'
import { type Lang, locales } from '@/dictionaries/locales'
import { generateMetadataFromSEO } from '@/lib/seo'
import { getBlogArticleData } from '@/services/datocms'
import { getBlogCategory } from '@/services/datocms/datacms-blog-category.service'
import { getAllArticles } from '@/services/datocms/datocms-all-articles.service'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function ArticlePage(props: ArticlePageProps) {
  const {
    params: { lang, category, slug },
  } = props

  const data = await getBlogArticleData(lang, category, slug)
  if (!data) return notFound()

  const { blogContent, relatedBlogs } = data
  const canonicalUrl = `https://bitlauncher.ai/${lang}/${category}/${slug}`
  const dub = await generateShortLink(canonicalUrl)

  return (
    <BlogPage
      blogContent={blogContent}
      params={props.params}
      relatedBlogs={relatedBlogs}
      shortlink={dub.data?.shortLink || canonicalUrl}
    />
  )
}

export async function generateMetadata(props: ArticlePageProps): Promise<Metadata> {
  const {
    params: { lang, category, slug },
  } = props

  const data = await getBlogArticleData(lang, category, slug)

  const seoData = {
    title: data?.blogContent.seo?.title || '',
    description: data?.blogContent.seo?.description || '',
    ogType: 'website',
    ogImageUrl: data?.blogContent.seo?.image?.url || '',
    twitterCard: 'summary_large_image',
  }

  return generateMetadataFromSEO(seoData)
}

export async function generateStaticParams(): Promise<ArticlePageParams[]> {
  const params: ArticlePageParams[] = (
    await Promise.all(
      locales.map(async (lang): Promise<ArticlePageParams[]> => {
        const allArticles = await getAllArticles()
        if (!allArticles) throw new Error('sections not found')

        const staticParams: ArticlePageParams[] = allArticles.flatMap(
          ({ articles, category }) => {
            return articles.map((article) => ({
              slug: article.slug,
              lang,
              category,
            }))
          },
        )

        return staticParams
      }),
    )
  ).flat() // Flatten the array of arrays into a single array

  return params
}

type ArticlePageParams = { lang: Lang; category: string; slug: string }
export type ArticlePageProps = { params: ArticlePageParams }
