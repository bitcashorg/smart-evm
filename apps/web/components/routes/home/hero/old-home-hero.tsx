import type { Project } from '@/lib/projects'

export function HomeHero({
  projects,
  dict,
}: {
  projects: Project[]
  dict: any
}) {
  return (
    <section className="align-center relative z-10 flex min-h-[80vh] flex-col justify-center pt-10">
      <h1 className="mx-auto mb-10 flex flex-col whitespace-pre-line text-center md:mb-24">
        <sub className="h-8 w-full text-xl font-semibold leading-none drop-shadow-md md:h-10 md:text-2xl">
          {dict.home.eyebrow}
        </sub>
        <span
          className="w-full text-5xl font-normal drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl"
          key="upcoming-auctions-title"
        >
          {dict.home.title.split('AI/WEB3')[0]}{' '}
          <span className="!text-[#E94FB8]">
            AI <span className="font-light !text-accent-500">/</span> WEB3
          </span>
          {'\n'}
          {dict.home.title.split('AI/WEB3')[1]}
        </span>
      </h1>
    </section>
  )
}
