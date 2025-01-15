import { LucideIcons } from '@/components/routes/blog/lucide-icons'
import { cn } from '@/lib/utils'
import type { YouTubePlaylistItem } from '@/services/youtube/index'
import type { LangProp } from '@/types/routing.type'
import Link from 'next/link'
import { MediaCard } from './media-card'

export function MediaSections({ sections, lang }: MediaSectionsProps) {
  return (
    <div className="flex flex-col w-full">
      {sections.map(
        (section) =>
          section?.videos?.length > 0 && (
            <section className="w-full mt-10" key={section.title}>
              <div className="flex items-center justify-between text-xl mb-space-32">
                <span className="font-bold text-black sub-2-lg dark:text-white">
                  / {section.title}
                </span>
                <Link
                  href={section.link.href}
                  className={cn(
                    'flex items-center align-middle text-black focus-within:!text-accent hover:!text-accent dark:text-white',
                  )}
                >
                  {section.link.label}
                  <LucideIcons.chevronRight className="h-4 w-7" />
                </Link>
              </div>

              <ul className="sm:grid-cols-auto-dense flex w-full flex-col gap-20 py-5 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:flex-wrap md:gap-5 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
                {section?.videos?.map((video, index) => (
                  <MediaCard
                    video={video}
                    key={video.id}
                    lang={lang}
                    className={cn(
                      index >= 2 && 'hidden sm:block',
                      index === 3 ? 'md:hidden xl:block' : '',
                      index >= 4 && 'md:block lg:hidden 2xl:block',
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

export interface MediaSectionsProps extends LangProp {
  children?: React.ReactNode
  sections: MediaSection[]
}

export type MediaSection = {
  title: string
  videos: YouTubePlaylistItem[]
  link: {
    href: string
    label: string
  }
}
