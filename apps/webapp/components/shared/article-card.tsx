import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { BlogArticleRecord } from '@/services/datocms'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
// import { isMobile } from 'react-device-detect'
import { LangProp } from '@/types/routing.type'

export const ArticleCard = ({
  post,
  sectionSlug,
  lang,
  meta = false
}: ArticleCardProps) => {
  const title =
    post.title ||
    post.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  // console.log('post', post)
  return (
    <Card className="flex flex-col p-0 overflow-hidden list-none bg-transparent group border-muted md:max-h-space-465">
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
          </figure>
        </div>
        <CardContent className="flex-grow">
          <p className="pt-3 mb-0 overflow-hidden text-center text-white truncate_text truncate_text--3-lines text-sub-2-sm">
            {title}
          </p>
        </CardContent>
      </Link>
      {meta ? (
        <CardFooter className="flex flex-wrap items-center justify-between mt-auto text-left md:flex-nowrap">
          <div className="flex-shrink-0">
            <div className="mr-5 h-[45px] w-[45px] overflow-hidden rounded-full">
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
          <div className="flex flex-col flex-grow gap-y-2 md:gap-y-1">
            <span className="font-bold text-h-text-c text-h-text dark:text-white">
              {post.authorName}
            </span>
            <span className="text-sm dark:text-white">
              {new Date(post._publishedAt).toLocaleDateString(lang, {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
              })}{' '}
              ∙ {readingTime(post)} min read
            </span>
          </div>
        </CardFooter>
      ) : null}
    </Card>
  )
}

export interface ArticleCardProps extends LangProp {
  post: BlogArticleRecord
  sectionSlug: string
  meta: boolean
}
