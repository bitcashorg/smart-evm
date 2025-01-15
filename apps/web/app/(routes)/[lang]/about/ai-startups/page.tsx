import { LandingPage, type LandingPageContent } from '@/components/_wip/landing-page'
import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import type { Metadata } from 'next'
import React from 'react'

export default async function AIStartupsPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="!py-10 px-7 md:px-3 md:py-24">
      <LandingPage content={content} />
    </div>
  )
}

const content: LandingPageContent = {
  title: 'Innovative Launchpad Features',
  header: 'Empowering AI Startups with Bitlauncher',
  description:
    'Bitlauncher offers a suite of advanced features designed to propel AI and web3 startups to success. Our platform integrates cutting-edge technology and services to provide comprehensive support and value creation for every project.',
  sections: [
    {
      subHeader: 'KYC Registration',
      text: 'Ensure secure and compliant business operations with our streamlined KYC registration process.',
    },
    {
      subHeader: 'Presale and Fair Auction Mechanisms',
      text: 'Access capital efficiently through our transparent presale and fair auction systems, designed to maximize funding opportunities and fairness.',
    },
    {
      subHeader: 'Web-based Secure Wallet',
      text: 'Manage your assets safely with our highly secure, web-based wallet, ensuring top-level security for all transactions.',
    },
    {
      subHeader: 'Integrated Exchange',
      text: 'Benefit from seamless token exchanges within our platform, enhancing liquidity and trading possibilities.',
    },
    {
      subHeader: 'Community Engagement Tools',
      text: 'Leverage our built-in tools to build and engage a dedicated community, vital for project growth and success.',
    },
    {
      subHeader: 'Real-time Analytics Dashboard',
      text: 'Monitor your startup’s performance and metrics in real-time with our comprehensive analytics dashboard, enabling informed decision-making and strategic planning.',
    },
  ],
}

export const metadata: Metadata = {
  title: 'AI Startups | Bitlauncher',
  description: 'Be part of the intelligent future and join the Ai/Web3 revolution now!',
}
