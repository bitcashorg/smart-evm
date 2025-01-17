import { AuctionCard } from '@/components/routes/home/auction-card'
import { Section } from '@/components/shared/section'
import type { Project } from '@/lib/projects'

export function Upcoming({ dict, projects }: UpcomingProps) {
  return (
    <Section heading={dict.home.upcomingHeading}>
      <div className="relative flex justify-center w-full text-center">
        <div className="absolute top-0 blur-effect-bg" />
      </div>
      <div className="narrow-container grid scroll-m-3 auto-rows-fr grid-cols-1 gap-[27px] self-center md:grid-cols-2 lg:grid-cols-2 lg:self-stretch xl:grid-cols-3">
        {projects.slice(0, 3).map((item) => (
          // @ts-ignore
          <AuctionCard
            key={`upcoming-auctions-item-${item.id}`}
            project={item}
            dict={dict}
          />
        ))}
      </div>
    </Section>
  )
}

interface UpcomingProps {
  dict: any
  projects: Project[]
}
