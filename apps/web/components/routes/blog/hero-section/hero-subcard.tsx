'use client'
import { Tag } from '@/components/shared/tag'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import type { BlogArticleRecord } from '~/services/datocms'

export interface Subcardprops {
  post: BlogArticleRecord
  sectionSlug: string
}
export const HeroSubCard = ({ post, sectionSlug }: Subcardprops) => {
  const router = useRouter()
  const { locale } = useParams()

  return (
    <Card
      className="md:min-h-space-200 group cursor-pointer list-none overflow-hidden border-muted bg-transparent p-0"
      id={post.slug}
    >
      <Link
        href={`/blog/${sectionSlug}/${post.slug}`}
        className="flex flex-row justify-between space-y-3 px-space-15 py-space-20 transition-all md:space-y-0"
        onClick={(event) =>
          (event.target as HTMLElement).tagName === 'BUTTON' && event.preventDefault()
        }
      >
        <div className="flex min-w-40 flex-col items-start justify-start pr-5 text-sm">
          <span className="">{post.authorName}</span>
          <span className="font-futura-pt-book dark:text-white">
            {new Date(post?._publishedAt).toLocaleDateString(locale, {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            })}{' '}
            ∙ {readingTime(post)} min read{' '}
          </span>
          <Tag
            className="mt-space-6"
            title={sectionSlug}
            onClick={() => router.push(`/blog/${sectionSlug}`)}
          />
        </div>
        <div className="flex flex-col items-start justify-start space-y-space-10 md:max-w-[366px]">
          <h1
            title={post?.title}
            className="font-futura-pt-bold truncate_text truncate_text--3-lines text-sub-2-lg font-bold text-black dark:text-white"
          >
            {post?.title}
          </h1>
          <p className="font-futura-pt-book text-h-text-c truncate_text md:truncate_text--4-lines truncate_text--5-lines text-h-text dark:text-white">
            {post?.description}
          </p>
        </div>
      </Link>
    </Card>
  )
}
