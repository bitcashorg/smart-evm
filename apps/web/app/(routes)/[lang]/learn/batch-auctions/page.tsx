import { BgHeader } from '@/components/shared/bg-header'
import { PageContent } from '@/components/shared/content'
import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import type { Metadata } from 'next'

export default async function AboutPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  const content = dict.about.content.slice(2)
  const heading = dict.about.content[0].text
  const subheading = dict.about.content[1].text

  return (
    <>
      <BgHeader heading={heading} subheading={subheading} />

      <div className="content-container z-30 bg-background !py-10 px-7 md:px-3 md:py-24">
        <PageContent data={content} />
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: 'About | Bitlauncher',
  description: 'Be part of the intelligent future and join the Ai/Web3 revolution now!',
}
