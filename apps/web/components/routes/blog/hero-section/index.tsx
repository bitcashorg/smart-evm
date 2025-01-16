import { HeroArticleCard } from '@/components/routes/blog/hero-section/hero-card'
import { HeroSubCard } from '@/components/routes/blog/hero-section/hero-subcard'
import type { ArticlesSection } from '@/services/datocms'
import type { LangProp } from '@/types/routing.type'

export function HeroSection({ recent, lang }: HeroSectionProps) {
  const main = recent[0]
  const secondary = recent.slice(1, recent.length)
  return (
    <section className="flex flex-col justify-between w-full gap-10 mb-10 lg:flex-row">
      <HeroArticleCard
        sectionSlug={main?.slug}
        post={main?.articles[0]}
        lang={lang}
      />
      <ul className="flex-col space-y-10 lg:w-1/2">
        {secondary?.map(
          (post, index) =>
            post.articles.length > 0 && (
              <HeroSubCard
                sectionSlug={post?.slug}
                post={post.articles[0]}
                key={`hero-section_sub-card-${index}`}
              />
            ),
        )}
      </ul>
    </section>
  )
}

interface HeroSectionProps extends LangProp {
  recent: ArticlesSection[]
}
