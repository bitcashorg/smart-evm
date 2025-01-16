import { LazyImage } from '@/components/shared/lazy-image'
import { Tag } from '@/components/shared/tag'
import type { Lang } from '@/dictionaries/locales'
import { readingTime } from '@/lib/blog'
import { cn } from '@/lib/utils'
import type { BlogArticleRecord } from '@/services/datocms'
import { render as toPlainText } from 'datocms-structured-text-to-plain-text'
import { isHeading, isParagraph } from 'datocms-structured-text-utils'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'
import { Suspense } from 'react'
import {
  StructuredText,
  type StructuredTextGraphQlResponse,
  renderNodeRule,
} from 'react-datocms'
import Balancer from 'react-wrap-balancer'
import { ArticleCard } from '../../../shared/article-card'
import { ArticleIndex } from './article-index'
import { ShareArticle } from './share-article'

export function BlogPage({
  params,
  blogContent,
  relatedBlogs,
  shortlink,
}: BlogPageProps) {
  const category = params.category

  let block
  block = blogContent.contentBlock
    .map(({ mainContent }) => {
      return mainContent.value.document.children.filter(
        ({ type, level }) => (type === 'heading' && level === 2) || level === 3,
      )
    })
    .filter((block) => Boolean(block[0]))

  if (block[0].length > 1) {
    const updatedBlock = block[0].map((item) => [item])
    block = updatedBlock
  }
  // console.log(blogContent)
  const title =
    blogContent.title ||
    blogContent.slug
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase()) ||
    ''

  const headingTexts = block
    ?.filter((filt) => filt !== undefined)
    .map((item) => {
      const children = (
        item[0] as unknown as {
          type: string
          level: number
          children: { type: string; marks: string[]; value: string }[]
        }
      ).children

      const sentence = children.map((child) => child.value).join(' ')
      const headingItem = { value: sentence }
      return {
        level: item[0].level,
        text: headingItem.value,
        anchor: headingItem.value
          ?.trim()
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/-$/, ''),
      }
    })
  return (
    <section className="container mx-auto md:px-0 px-5">
      <article className="flex max-w-[900px] mx-auto flex-col items-start gap-2 md:px-5 lg:px-0 mt-5">
        <header className="order-3 md:order-1">
          <h1 className="flex justify-start mb-5 font-bold heading">
            <Balancer>{title}</Balancer>
            <br className="hidden md:inline" />
          </h1>
          <p className="mt-2 text-sub-1-md leading-tight text-neutral-400 md:mt-8">
            {blogContent.description}
          </p>
        </header>

        <div className="order-2 mt-2 flex flex-col gap-0 space-y-3 text-sm leading-[0.5] md:mt-5">
          <span className="font-bold font-futura-pt-heavy">
            {blogContent.authorName}
          </span>
          <span className="font-futura-pt-book">
            {new Date(blogContent._publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            })}{' '}
            ∙ {readingTime(blogContent)} min read
          </span>

          <div className="flex gap-2">
            {blogContent.topics?.map((topic, index) => (
              <Tag key={`${topic}-${index}`} title={topic} />
            ))}
          </div>
        </div>

        <div
          className="relative flex md:flex-row flex-col items-start justify-start gap-5 mt-5 order-4"
          id="scroller-wrapper"
        >
          <div
            className="flex flex-col w-full md:max-w-[calc(100%-250px)] md:order-1 order-2"
            id="extrat-blog-content"
          >
            {blogContent?.contentBlock?.map(
              ({ mainContent, topImages }, ind: number) => {
                // if (ind >= 2) return null

                mainContent.value.document.children =
                  mainContent.value.document.children.map((item) => {
                    if (item.type !== 'paragraph') return item

                    const sanitizedChildren = item.children?.map((child) => {
                      if (child.type !== 'span') return child
                      if (typeof child.value === 'string') return child

                      if (Array.isArray(child.value)) {
                        return {
                          ...child,
                          value: (child.value as string[]).join(' '),
                        }
                      }
                      return child
                    })
                    return { ...item, children: sanitizedChildren }
                  }) as any

                // console.log(`================ ${ind} =================`)
                // console.log(
                //   JSON.stringify(mainContent.value.document.children)
                // )
                return (
                  <div key={mainContent.value.document.level}>
                    {topImages.map(
                      (
                        image: { url: string | StaticImport; alt: string },
                        index,
                      ) => (
                        <div
                          className="relative order-1 my-10 mt-5 flex min-h-[600px] w-full justify-center overflow-hidden text-center align-middle md:order-3"
                          key={`content-${image}-${index}`}
                        >
                          {/* <Image
                            src={image.url}
                            alt={image?.alt || `blog-image-${index}`}
                            layout="fill"
                            objectFit="cover"
                            className="flex self-center m-auto"
                          /> */}
                          <LazyImage
                            src={image.url}
                            alt={image?.alt || `blog-image-${index}`}
                            fill
                            className="flex self-center object-cover m-auto"
                          />
                        </div>
                      ),
                    )}
                    <div>
                      {/* { mainContent.value.document.children.values} */}
                      <StructuredText
                        data={mainContent as StructuredTextGraphQlResponse}
                        customNodeRules={[
                          // Add HTML anchors to heading levels for in-page navigation
                          renderNodeRule(
                            isHeading,
                            ({ node, children, key }) => {
                              const HeadingTag = `h${node.level}` as any
                              const anchor = toPlainText(node)
                                ?.trim()
                                .toLowerCase()
                                .replace(/ /g, '-')
                                .replace(/[^\w-]+/g, '')
                                .replace(/-$/, '')
                              return (
                                // add types to ref and key props to satisfy React requirements
                                <HeadingTag
                                  className={cn(
                                    'my-5',
                                    node.level === 1 ? 'heading' : 'heading2',
                                  )}
                                  key={key}
                                  id={anchor}
                                >
                                  {children}
                                </HeadingTag>
                              )
                            },
                          ),
                          renderNodeRule(isParagraph, ({ children, key }) => {
                            return (
                              <p className="mb-10 paragraph" key={key}>
                                {children}
                              </p>
                            )
                          }),
                        ]}
                      />
                    </div>
                  </div>
                )
              },
            )}
          </div>

          <div className="sticky top-[120px] order-1 hidden w-full text-left md:order-2 md:mt-5 md:block md:w-space-250">
            <ArticleIndex articleHeaders={headingTexts} />

            <div className="mt-5 text-left">
              <span className="pl-5 text-black underline font-futura-pt-bold text-b-1-sbold-md dark:text-white">
                Share this article
              </span>
              <Suspense fallback={<div>Loading...</div>}>
                <ShareArticle url={shortlink} title={title} />
              </Suspense>
            </div>
          </div>
        </div>
      </article>

      {relatedBlogs.length > 0 && (
        <section className="mt-space-80 md:max-w-[74rem] w-full md:px-10 mx-auto">
          <div className="flex items-center justify-between text-xl mb-8">
            <span className="font-semibold">/Related stories</span>
            <Link href={'/blog'}>
              <span>See All Stories &gt;</span>
            </Link>
          </div>
          <ul className="sm:grid-cols-auto-dense flex w-full flex-col gap-20 py-5 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:flex-wrap md:gap-5 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
            {relatedBlogs?.slice(0, 5).map((post, index) => (
              <ArticleCard
                post={post}
                sectionSlug={category}
                key={post.id}
                lang={params.lang}
                meta={true}
                className={cn(
                  index === 3 ? 'md:hidden xl:block' : '',
                  index === 4 ? 'lg:hidden 2xl:block' : '',
                )}
              />
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}

export interface BlogPageProps {
  // i18n: CMSLayoutText
  params: {
    lang: Lang
    category: string
    slug: string
  }
  shortlink: string
  //  searchParams: {},
  blogContent: BlogArticleRecord
  relatedBlogs: BlogArticleRecord[]
}
