'use client'

import { Button } from '@/components/ui/button'
import { appConfig } from '@/lib/config'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ProjectPills({ project }: { project: Project }) {
  const pathname = usePathname()
  const links = [
    {
      label: 'Project Info',
      href: `/${project.slug}`,
    },
    {
      label: 'Token Presale',
      href: `/${project.slug}/presale`,
    },
    appConfig.features.auction
      ? {
          label: 'Token Sale',
          href: `/${project.slug}/auction`,
        }
      : null,
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <div className="z-10 flex gap-2 mb-4 sm:gap-1 md:gap-4">
      {links.map((l, index) => (
        <Link href={l.href} shallow key={`${l.label}-${index}`}>
          <Button
            variant={'outline'}
            className={cn(
              'hover:bg-white/50 text-xs md:text-lg',
              pathname.replace('/en', '') === l.href
                ? 'bg-white/50 text-black/90'
                : null,
            )}
          >
            {l.label}
          </Button>
        </Link>
      ))}
    </div>
  )
}
