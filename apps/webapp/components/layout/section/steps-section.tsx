'use client'

import { BitcashAccessButton } from '@/components/layout/header/bitcash-access'
import { Section } from '@/components/shared/section'
import { buttonVariants } from '@/components/ui/button'
import { IconDownRightArrow } from '@/components/ui/icons'
import type { Lang } from '@/dictionaries/locales'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function StepsSection({ lang, dict }: StepsSectionProps) {
  return (
    <Section heading={dict.footer.stepsInfo}>
      <div
        key="steps-info-title"
        className="flex flex-col items-center gap-[52px] lg:flex-row lg:justify-between"
      >
        {dict.footer.step.map(
          (
            step: { title: string; description: string; href: string },
            index: number,
          ) => (
            <div
              key={`${index}__step-content`}
              className="flex min-h-[260px] flex-col items-center justify-between rounded-3xl bg-white/90 px-9 py-6 text-black/90 shadow-md backdrop-blur-xl lg:w-1/3 lg:max-w-[450px] lg:items-start xl:py-9"
            >
              <h3 className="flex w-full h-10 text-3xl font-bold whitespace-pre-line md:text-1xl lg:justify-start lg:text-left lg:text-2xl">
                {step.title}
              </h3>
              <div className="flex max-w-full gap-4">
                <p className="w-[calc(100%-75px)] text-center leading-6 sm:max-w-[324px] md:text-[17px] lg:text-[14px]">
                  {step.description}
                </p>
                {index > 0 ? (
                  <Link
                    href={`/${lang}/${step.href}`}
                    className={cn(
                      buttonVariants({
                        variant: 'accent',
                        size: 'icon',
                      }),
                      'text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card',
                    )}
                  >
                    <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
                  </Link>
                ) : (
                  <BitcashAccessButton
                    buttonLabel="down-right-icon"
                    buttonStyle={{ size: 'icon', variant: 'accent' }}
                    defaultContent="register"
                  />
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </Section>
  )
}

export interface StepsSectionProps {
  dict: any
  lang: Lang
}
