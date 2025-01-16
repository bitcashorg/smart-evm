'use client'
import Link from 'next/link'
import * as React from 'react'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import type { LangProp } from '@/types/routing.type'
import { navStruct } from '../nav-struct'

export function Navigation({ lang }: LangProp) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navStruct.sections.map((section) => {
          if (!section.main) return null
          if (section.href || !section.items)
            return (
              <NavigationMenuItem>
                <Link href={`/${lang}${section.href}`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {section.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )

          return (
            <NavigationMenuItem key={section.label}>
              <NavigationMenuTrigger>{section.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={cn(
                    'grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]',
                  )}
                >
                  {section.items.map((item) => (
                    <ListItem
                      key={item.label}
                      href={`/${lang}${item.href}`}
                      title={item.label}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
