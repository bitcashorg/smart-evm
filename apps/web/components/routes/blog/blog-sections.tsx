import { cn } from '@/lib/utils'
import type { ArticlesSection } from '@/services/datocms'
import type { LangProp } from '@/types/routing.type'
import Link from 'next/link'
import { ArticleCard } from '../../shared/article-card'
import { LucideIcons } from './lucide-icons'

export function BlogSections({
  sections,
  lang,
  category,
  className,
}: BlogSectionsProps) {
  return (
    <div className={cn('flex w-full flex-col pt-10', className)}>
      {sections.map(
        (section) =>
          section?.articles?.length > 0 && (
            <section
              // this is hack be careful when passing className to this component
              className={cn(
                'w-full',
                section !== sections[sections.length - 1] && 'mb-10',
                className,
              )}
              key={section.name}
            >
              <div className="flex items-center justify-between text-xl mb-space-32">
                <span className="font-semibold sub-2-lg">
                  / {section.name.replace(/_/g, ' ')}
                </span>
                <Link
                  // TODO: fix add lang prefix on links there seems to a bug where it gets ovewritten
                  href={`/blog/${category || section.slug}${category ? `?topic=${section.name}` : ''}`}
                  className={cn(
                    'flex items-center align-middle text-black focus-within:!text-accent hover:!text-accent dark:text-white',
                  )}
                >
                  {section.name.replace(/_/g, ' ')}
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <ul className="sm:grid-cols-auto-dense flex w-full flex-col gap-20 py-5 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:flex-wrap md:gap-5 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
                {section?.articles
                  // ?.slice(0, 4)
                  ?.map((post, index) => (
                    <ArticleCard
                      post={post}
                      sectionSlug={category || section.slug}
                      key={`${post.id}-${index}`}
                      lang={lang}
                      meta={true}
                      className={cn(
                        index === 3 ? 'md:hidden xl:block' : '',
                        index === 4 ? 'lg:hidden 2xl:block' : '',
                      )}
                    />
                  ))}
              </ul>
            </section>
          ),
      )}
    </div>
  )
}
export interface BlogSectionsProps extends LangProp {
  children?: React.ReactNode
  sections: ArticlesSection[]
  category?: string
  className?: string
}
