import { LearnSection } from '@/components/routes/home/section/learn-section'
import StepsSection from '@/components/routes/home/section/steps-section'
import { Banner } from '@/components/shared/banner'
import { CommunityCard } from '@/components/shared/community-card'
import { getDictionary } from '@/dictionaries'
import type { Lang } from '@/dictionaries/locales'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

export async function AboutBitlauncherPageLanding({
  content,
  params,
}: AboutBitlauncherPageProps): Promise<JSX.Element> {
  const lang = params.lang
  const dict = await getDictionary(lang)
  return (
    <>
      <section className="narrow-container">
        <div className="grid items-center justify-between gap-4 px-0 pb-[80px] md:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="sectionsHeading">
              {' '}
              <Balancer>{content.title}</Balancer>
            </h2>
            <section className="text-base font-normal leading-normal text-infoForeground">
              {content.paragraph}
              <br />
              <br />
              {content.paragraph2}
              <br />
              <br />
              {content.paragraph3}
            </section>
          </div>
          <div className="infopages-background infopages-background--about">
            <div className="absolute bottom-0 m-4">
              <CommunityCard />
            </div>
          </div>
        </div>
        <Banner />
        <StepsSection lang={lang} dict={dict} />
        <LearnSection />
      </section>
    </>
  )
}

interface Image {
  alt: string
  src: string
  width: number
  height: number
}

export interface AboutBitlauncherPageContent {
  title: string
  paragraph: React.ReactNode
  paragraph2: React.ReactNode
  paragraph3: React.ReactNode
  image: Image
}

interface AboutBitlauncherPageProps {
  content: AboutBitlauncherPageContent
  params: { lang: Lang }
}
