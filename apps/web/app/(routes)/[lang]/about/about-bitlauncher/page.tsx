import {
  type AboutBitlauncherPageContent,
  AboutBitlauncherPageLanding,
} from '@/components/routes/about/about-bitlauncher'
import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import type { Metadata } from 'next'

export default async function AboutBitlauncher({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="container max-w-[100vw] !overflow-hidden mx-auto md:px-4 md:py-[5rem]">
      <AboutBitlauncherPageLanding
        content={content}
        params={{
          lang: 'en',
        }}
      />
    </div>
  )
}

const content: AboutBitlauncherPageContent = {
  title: 'About',
  paragraph: (
    <>
      Bitlauncher is a <strong> pioneering launchpad </strong> dedicated to
      transforming the landscape of artificial intelligence (AI) and
      cryptocurrency. We are on a mission to empower the next wave of AI
      innovation by providing open-source AI projects with equitable fundraising
      opportunities and decentralized organization through the use of blockchain
      technology.
    </>
  ),
  paragraph2: (
    <>
      At Bitlauncher, we{' '}
      <strong>
        combine the transformative powers of AI and cryptocurrency
      </strong>{' '}
      to address the unique challenges faced by AI startups. By integrating
      tokenization and decentralized autonomous organizations (DAOs), we create
      a seamless synergy that enables these startups to overcome funding
      barriers, accelerate their growth, and harness global resources.
    </>
  ),
  paragraph3: (
    <>
      Our platform is built on a foundation of{' '}
      <strong>transparency, inclusivity, and community-driven progress.</strong>{' '}
      We foster a collaborative environment where developers, contributors, and
      AI enthusiasts can come together to share resources, exchange ideas, and
      shape the future of technology.
    </>
  ),
  image: {
    alt: 'about-bg',
    src: '/images/about-bg.svg',
    width: 610,
    height: 468,
  },
}

export const metadata: Metadata = {
  title: 'About Bitlauncher - AI & Cryptocurrency Launchpad',
  description:
    'Discover Bitlauncher, the pioneering launchpad dedicated to transforming AI and cryptocurrency. Join the AI/Web3 revolution today!',
}
