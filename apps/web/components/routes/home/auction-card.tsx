import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { isMobile } from 'react-device-detect'
import Balancer from 'react-wrap-balancer'
import { AuctionCardButtons } from './auction-card-buttons'
import { MotionFigcaption } from './motion-figcaption'

export function AuctionCard({
  project,
  dict,
}: {
  project: Project
  dict: any
}) {
  const {
    id,
    title,
    pitch,
    fundraiseGoal,
    maxAllocation,
    thumbnailImage,
    badgeText,
    linkPath,
  } = project

  const isFutureOrComingAuction = badgeText.match(/(FUTURE|COMING SOON)/)

  return (
    <div className="box-border border rounded-xl border-card/30 bg-card backdrop-blur-lg">
      <Link
        id={`hot-auction-${title.toLowerCase().replace(/\s/g, '-')}`}
        href={isFutureOrComingAuction ? `#` : linkPath}
        className={cn('mx-auto flex size-full flex-col', {
          'cursor-not-allowed': isFutureOrComingAuction,
        })}
      >
        <figure className="relative h-[216px] w-full">
          <Image
            src={thumbnailImage}
            height={216}
            width={216}
            placeholder="blur"
            className="h-[216px] w-full rounded-t-xl object-cover group-hover:shadow-xl"
            alt={title}
            sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
            {...(id !== 1 && isMobile && { loading: 'lazy' })}
            {...((id === 1 || !isMobile) && { priority: true })}
          />
          <Suspense fallback={<figcaption>{badgeText}</figcaption>}>
            <MotionFigcaption
              label={badgeText}
              color={badgeText === 'LIVE' ? 'open' : 'default'}
            />
          </Suspense>
        </figure>
        <div className="px-4 py-6 text-start lg:px-9 lg:py-8">
          <h3 className="text-xl font-bold">
            <Balancer>{title}</Balancer>
          </h3>
          <p className="max-w-sm mt-2 text-sm text-infoForeground">{pitch}</p>
        </div>
        <div className="flex flex-col items-center justify-between w-full px-4 pb-6 md:mt-auto lg:pb-8 xl:px-6">
          <ul className="flex flex-col w-full gap-2 mb-6 lg:mb-8">
            <li className="flex justify-between w-full px-4 py-2 rounded-full bg-muted">
              <span className="text-xs opacity-70 md:text-sm lg:text-base">
                {dict.auction.fundraisingGoal}
              </span>
              <b className="text-xs md:text-sm lg:text-base">{fundraiseGoal}</b>
            </li>
            <li className="flex justify-between w-full px-4 py-2 rounded-full bg-muted">
              <span className="text-xs opacity-70 md:text-sm lg:text-base">
                {dict.auction.maxAllocation}
              </span>
              <b className="text-xs md:text-sm lg:text-base">{maxAllocation}</b>
            </li>
          </ul>
          <AuctionCardButtons project={project} />
        </div>
      </Link>
    </div>
  )
}
