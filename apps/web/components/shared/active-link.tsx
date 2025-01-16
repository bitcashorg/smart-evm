'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import type { MouseEventHandler } from 'react'

interface ActiveLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  exact?: boolean
  shallow?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = 'text-accent-400',
  shallow,
  exact = false,
  onClick,
  ...props
}) => {
  const pathname = usePathname()
  const { lang } = useParams()
  const isActive = exact
    ? pathname === href
    : pathname.endsWith(href) || pathname.startsWith(href)

  return (
    <Link
      href={href}
      shallow={shallow}
      onClick={onClick}
      className={cn(
        className,
        'w-full cursor-pointer hover:text-accent-400 active:text-accent-400 transition-all',
        isActive && activeClassName,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
