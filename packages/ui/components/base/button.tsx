import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@repo/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 focus-within:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-within:bg-secondary/80',
        tertiary:
          'text-bold bg-tertiary text-accent-foreground focus-within:bg-tertiary/70 hover:bg-tertiary/70',
        accent:
          'text-bold bg-accent text-accent-foreground focus-within:bg-accent/80 hover:bg-accent/80',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive dark:text-destructive-foreground dark:hover:bg-destructive/90',
        outline:
          'border border-accent-500 bg-transparent hover:bg-accent-foreground focus-within:bg-accent-foreground hover:text-black/90 focus-within:text-black/90',
        ghost: 'bg-transparent',
        cta: 'text-white text-base font-semibold hover:text-[#e728a9] focus-within:text-[#ff00aa] transition-colors group inline-block pt-3',
        link: 'text-link underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'size-10',
      },
      fontSize: {
        default: 'text-md',
        sm: 'text-sm',
        lg: 'text-lg',
      },
      radius: {
        default: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
      fontSize: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
