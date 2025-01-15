import { Tag } from '@/components/shared/tag'
import { readingTime } from '@/lib/blog'
import type { BlogArticleRecord } from '@/services/datocms'
import type { LangProp } from '@/types/routing.type'
import Image from 'next/image'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'

export const HeroArticleCard = ({ post, sectionSlug, lang }: HeroArticleCardProps) => {
  return (
    <div className="w-full list-none lg:w-1/2">
      <Link
        href={`/blog/${sectionSlug}/${post?.slug}`}
        className="h-full bg-red-500 rounded-md w-ful"
      >
        <figure className="relative w-full overflow-hidden rounded-md h-space-400">
          <Image
            src={post?.thumbnail?.url}
            alt={post.title}
            {...(isMobile
              ? post.id !== 1
                ? { loading: 'lazy' }
                : { priority: true }
              : { priority: true })}
            className="object-cover transition-all ease-in rounded-md bg-zoom"
            fill
          />
        </figure>

        <div className="flex flex-col flex-1 w-full mt-space-20 md:flex-row">
          {/* <p className="text-xl">
            <span className="font-semibold sub-2-lg">/Recents:</span>
          </p> */}
          {/* Meta */}
          <div className="text-sm min-w-40 sm:pr-5">
            <div className="flex flex-col w-auto mt-space-10">
              <span className="font-futura-pt-heavy font-bolt">{post?.authorName}</span>
              <span className="font-futura-pt-book">
                {new Date(post?._publishedAt).toLocaleDateString(lang, {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })}{' '}
                ∙ {readingTime(post)} min read
              </span>
            </div>
            <Link href={`/blog/${sectionSlug}`}>
              <Tag className="mt-space-6" title={sectionSlug} />
            </Link>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 w-full mt-space-10 space-y-space-10">
            <h1
              title={post?.title}
              className="truncate_text truncate_text--5-lines font-bolt heading2"
            >
              {post?.title}
            </h1>
            <p className="flex-grow w-full truncate_text md:truncate_text--4-lines truncate_text--5-lines text-sub-2-lt">
              {post?.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export interface HeroArticleCardProps extends LangProp {
  post: BlogArticleRecord
  sectionSlug: string
}
