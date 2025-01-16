import { LearnSection } from '@/components/routes/home/section/learn-section'
import StepsSection from '@/components/routes/home/section/steps-section'
import { BgHeader } from '@/components/shared/bg-header'
import { PageContent } from '@/components/shared/content'
import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import type { Metadata } from 'next'

export default async function SecurityTips({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  const content = dict.security.content.slice(1)
  const heading = dict.security.content[0].text

  return (
    <>
      <section className="container max-w-[100vw] !overflow-hidden mx-auto md:px-4 md:py-[5rem]">
        <BgHeader
          heading={heading}
          subheading={'Be Part of the Intelligent Future'}
        />
        <div className="content-container z-30 bg-background !py-10 px-7 text-center md:px-3 md:py-24">
          <PageContent data={content} />
        </div>
      </section>
      <div className="narrow-container">
        <StepsSection lang={params.lang} dict={dict} />
        <LearnSection />
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Security Tips | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!',
}
