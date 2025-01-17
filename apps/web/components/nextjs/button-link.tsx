'use client'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@repo/ui'

interface ExternalLinkButtonProps extends ButtonProps {
  link: string
}

export function ExternalLinkButton({
  children,
  className,
  link,
  ...props
}: ExternalLinkButtonProps) {
  return (
    <Button
      {...props}
      className={cn(className)}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        window.open(link, '_blank', 'noopener,noreferrer')
      }}
    >
      {children}
    </Button>
  )
}
