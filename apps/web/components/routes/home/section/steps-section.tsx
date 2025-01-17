'use client'

import { Section } from '@/components/shared/section'
import type { Lang } from '@/dictionaries/locales'
import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'
import { Button, buttonVariants, IconDownRightArrow } from '@repo/ui'
import Link from 'next/link'

export default function StepsSection({ lang, dict, id }: StepsSectionProps) {
  const { createAccount } = useSession()

  return (
    <Section id={id} heading={dict.footer.stepsInfo}>
      <div className="flex flex-col items-center gap-[52px] lg:flex-row lg:justify-between">
        {dict.footer.step.map(
          (
            step: { title: string; description: string; href: string },
            index: number,
          ) => (
            <div
              key={`${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }__step-content`}
              className="h-[274px] px-4 py-[1.484rem] bg-white/90 rounded-[27px] shadow backdrop-blur-xl flex-col justify-between items-start inline-flex lg:w-[284px] lg:h-[294px] xl:w-[500px]"
            >
              <div className="self-stretch h-[2.859rem] justify-start items-start text-start inline-flex mb-6">
                <h3 className="grow shrink basis-0 text-black/90 text-3xl font-bold leading-10 whitespace-pre-line">
                  {step.title}
                </h3>
              </div>
              <div className="inline-flex items-start self-stretch justify-between py-6 whitespace-pre-line">
                <p className="text-start w-[226.91px] leading-snug pr-[9.86px] py-[0.844rem] flex-col justify-start items-start inline-flex text-black/90">
                  {step.description}
                </p>
                <div className="flex mt-auto py-[0.844rem]">
                  {index > 0 ? (
                    <Link
                      href={`/${lang}/${step.href}`}
                      className={cn(
                        buttonVariants({
                          variant: 'tertiary',
                          size: 'icon',
                        }),
                        'text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card',
                      )}
                    >
                      <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
                    </Link>
                  ) : (
                    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                    <Button
                      variant="tertiary"
                      size="icon"
                      onClick={createAccount}
                      className="text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card"
                    >
                      <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </Section>
  )
}

export interface StepsSectionProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  dict: any
  lang: Lang
  id?: string
}
