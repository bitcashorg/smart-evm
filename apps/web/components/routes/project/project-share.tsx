import { buttonVariants } from '@/components/ui/button'
import { IconDiscord, IconTelegram, IconTwitterX } from '@/components/ui/icons'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import { Fragment } from 'react'
import { CopyShortlinkIcon } from './copy-shorlink'

export function ProjectShare({ project }: { project: Project }) {
  return (
    <div className="flex flex-col w-full gap-3 mt-5 mb-5">
      <div className="flex items-center justify-center gap-4 md:justify md:gap-1.5 lg:gap-2">
        <Link
          key={`share-twitter-${project.id}`}
          href={`https://twitter.com/${project.twitterUsername}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'relative size-[50px] rounded-full px-0 py-0',
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTwitterX className="size-6 fill-accent-500" />
        </Link>
        <Link
          key={`share-discord-${project.id}`}
          href={`https://discord.gg/${project.discordServer}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'relative size-[50px] rounded-full px-0 py-0',
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDiscord className="size-7 fill-accent-500" />
        </Link>
        <Link
          key={`share-telegram-${project.id}`}
          href={`https://t.me/${project.telegramGroup}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'relative size-[50px] rounded-full px-0 py-0 pr-1',
            // ? Currently, Bitlauncher Community does not have a Telegram group (got blocked). Only Bitcash but the legacy channel.
            { 'pointer-events-none cursor-not-allowed opacity-50': project.id === 1 },
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTelegram className="size-7 fill-accent-500" />
        </Link>

        <Fragment key={`share-shortlink-${project.id}`}>
          <CopyShortlinkIcon />
        </Fragment>
      </div>
    </div>
  )
}
