import { Section } from '@/components/shared/section'
import { Card } from '@/components/ui/card'
import type { Lang } from '@/dictionaries/locales'
import type { Feature } from '@/types/home'
import * as Icons from 'lucide-react'

export function WhyChooseUs({ lang, dict }: WhyChooseUsProps) {
  const content = dict.whyChooseUs
  return (
    <Section heading={content.title} subheading={content.description}>
      <ul className="grid w-full grid-cols-1 gap-[27px] md:grid-cols-3 xl:grid-cols-5 p-0">
        {content.features.map((feature: Feature) => {
          const IconComponent = Icons[feature.icon] as React.ElementType
          return (
            <li className="list-none group p-0">
              <Card className="flex h-full flex-col items-center px-3 py-6 text-center border-card/30 bg-card backdrop-blur-lg">
                <IconComponent className="w-12 h-12 mb-5 text-gray-50" />
                <h3 className="mb-5 text-lg font-bold min-h-20">{feature.title}</h3>
                <p className="text-gray-500 parragraph dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export interface WhyChooseUsProps {
  dict: any
  lang: Lang
}
