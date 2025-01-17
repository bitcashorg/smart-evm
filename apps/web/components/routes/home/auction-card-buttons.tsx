import type { Project } from '@/lib/projects'

import { ExternalLinkButton } from '@/components/nextjs/button-link'
import { NestedLinkButton } from '@/components/nextjs/nested-link'
import { cn } from '@/lib/utils'
import {
  Button, buttonVariants, IconDiscord,
  IconDownRightArrow,
  IconTelegram,
  IconTwitterX
} from '@repo/ui'
import { Suspense } from 'react'

export function AuctionCardButtons({ project }: { project: Project }) {
  const {
    twitterUsername,
    discordServer,
    telegramGroup,
    title,
    linkPath,
    badgeText,
  } = project
  const isAuctionRestricted = badgeText.match(
    /(AUCTION CLOSED|FUTURE|COMING SOON)/,
  )
  const buttonLinkClassName = 'relative px-0 py-0 size-[58px] rounded-full'
  return (
    <div
      className="flex items-center justify-between w-full "
      suppressHydrationWarning={true}
    >
      <div className="relative z-10 flex items-center justify-center gap-3 align-center md:gap-4 xl:gap-3.5">
        {[
          {
            icon: IconTwitterX,
            link: `https://twitter.com/${twitterUsername}`,
            title: 'Twitter X Profile',
          },
          {
            icon: IconDiscord,
            link: `https://discord.gg/${discordServer}`,
            title: 'Discord Server',
          },
          {
            icon: IconTelegram,
            link: `https://t.me/${telegramGroup}`,
            title: 'Telegram Group',
          },
        ].map(({ icon: Icon, link, title: socialTitle }, index) => (
          <Suspense
            key={`susp-${index}`}
            fallback={
              <Button
                variant="outline"
                size="icon"
                className={buttonLinkClassName}
                data-title={`${title}´s ${socialTitle}`}
              >
                <Icon className="size-7 fill-accent-500" />
              </Button>
            }
          >
            <ExternalLinkButton
              key={`card-button-${index}`}
              variant="outline"
              // ? Currently, Bitlauncher Community does not have a Telegram group (got blocked). Only Bitcash but the legacy channel.
              disabled={project.id === 1 && socialTitle === 'Telegram Group'}
              size="icon"
              link={link}
              className={buttonLinkClassName}
              data-title={`${title}´s ${socialTitle}`}
            >
              <Icon className="size-7 fill-accent-500" />
            </ExternalLinkButton>
          </Suspense>
        ))}
      </div>
      <Suspense
        fallback={
          <Button>
            <IconDownRightArrow />
          </Button>
        }
      >
        {!isAuctionRestricted && (
          <NestedLinkButton
            link={linkPath}
            className={cn(
              buttonVariants({
                variant: 'secondary',
                size: 'lg',
              }),
              'text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card',
            )}
            aria-label={`View ${title}´s auction`}
          >
            <IconDownRightArrow className="transition-all size-4 group-focus-within:-rotate-45 group-hover:-rotate-45" />
          </NestedLinkButton>
        )}
      </Suspense>
    </div>
  )
}
