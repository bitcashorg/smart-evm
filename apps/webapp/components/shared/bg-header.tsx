import { CommunityCard } from '@/components/shared/community-card'
import { cn } from '@/lib/utils'
import Balancer from 'react-wrap-balancer'

export function BgHeader({
  heading,
  subheading,
  imageSrc,
  className,
}: {
  heading: string
  imageSrc: string
  subheading?: string
  className?: string
}) {
  return (
      <section className="narrow-container">
          <div className="grid items-center justify-between gap-4 px-0 pb-[80px] md:px-4 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className={cn(
                'sectionsHeading',
                className,
              )}>
                <Balancer>{heading}</Balancer>
              </h2>
              <div className="sectionsSubheading">
                {subheading}
              </div>
            </div>
            <div className="infopages-background infopages-background--security">
              <div className="absolute bottom-0 m-4">
                <CommunityCard />
              </div>
            </div>
          </div>
      </section>
  )
}
