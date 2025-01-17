import { readingTime } from '@/lib/blog'
import { Card, CardContent, CardFooter } from '@repo/ui'
// import { isMobile } from 'react-device-detect'
import { cn } from '@/lib/utils'
import type { BlogArticleRecord } from '@/services/datocms'
import type { LangProp } from '@/types/routing.type'
import Image from 'next/image'
import Link from 'next/link'

export const ArticleCard = ({
  post,
  sectionSlug,
  lang,
  className,
  meta = false,
}: ArticleCardProps) => {
  const title =
    post.title ||
    post.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())

  // console.log('post', post)
  return (
    <li className={cn('list-none group p-0', className)}>
      <Card className="flex flex-col p-0 overflow-hidden list-none bg-transparent group border-muted h-full md:max-h-[465px]">
        <Link
          href={`/blog/${sectionSlug}/${post.slug}`}
          className="flex flex-col flex-grow transition-all"
        >
          <div className="m-3">
            <figure className="relative h-[216px] w-full overflow-hidden rounded-md">
              <Image
                src={post?.thumbnail?.url}
                alt={title}
                sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
                loading="lazy"
                className="object-cover transition-all ease-in-out bg-zoom"
                fill
              />
              {/* <LazyImage
                src={post?.thumbnail?.url}
                alt={title}
                className="object-cover transition-all ease-in-out bg-zoom"
                fill
              /> */}
            </figure>
          </div>
          <CardContent className="flex-grow px-3">
            <p className="pt-3 font-semibold leading-tight text-left mb-overflow-hidden truncate_text truncate_text--3-lines text-md">
              {title}
            </p>
          </CardContent>
        </Link>
        {meta ? (
          <CardFooter className="flex flex-wrap items-center justify-between px-2 mt-auto text-sm text-left md:flex-nowrap">
            <div className="flex-shrink-0">
              <div className="mr-2 h-[45px] w-[45px] overflow-hidden rounded-full">
                <Image
                  src={post.authorPicture.url}
                  width={45}
                  height={45}
                  alt={post.authorName}
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-grow flex-col gap-y-2 !text-sm leading-tight md:gap-y-1">
              <span className="font-semibold">{post.authorName}</span>
              <span className="text-sm leading-tight">
                {new Date(post._publishedAt).toLocaleDateString(lang, {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })}{' '}
                ∙ {readingTime(post)} min read
              </span>
            </div>
          </CardFooter>
        ) : null}
      </Card>
    </li>
  )
}

export interface ArticleCardProps extends LangProp {
  post: BlogArticleRecord
  sectionSlug: string
  meta: boolean
  className?: string
}
