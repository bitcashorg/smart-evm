import {
  SolutionLandingPage,
  type SolutionLandingPageContent,
} from '@/components/_wip/solution-landing-page'
import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import { CurrencyIcon, MapIcon, PhoneIcon, QrCodeIcon, ShieldIcon } from 'lucide-react'
import type { Metadata } from 'next'
import React from 'react'

export default async function BitcashAppPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="!py-10 px-7 md:px-3 md:py-24">
      <SolutionLandingPage content={content} />
    </div>
  )
}

const content: SolutionLandingPageContent = {
  mainHeading: 'Bitcash: Buy Crypto, Pay Crypto.',
  subHeading: 'The Future of Payments is Here',
  description:
    'Seamlessly buy and pay with cryptocurrencies using our secure and user-friendly platform.',
  features: [
    {
      title: 'Buy Crypto on the go',
      description:
        'Our mobile app allows you to buy and sell cryptocurrencies anytime, anywhere.',
      icon: PhoneIcon,
    },
    {
      title: 'Pay with Crypto',
      description:
        'Use our QR code payment system to pay for goods and services with your cryptocurrencies.',
      icon: QrCodeIcon,
    },
  ],
  business: {
    heading: 'Trusted by businesses worldwide',
    description:
      'Join the growing number of businesses that accept and use cryptocurrencies for payments.',
  },
  advantages: [
    {
      title: 'Global Reach',
      description:
        'Our platform is available in over 180 countries, allowing you to transact globally.',
      icon: MapIcon,
    },
    {
      title: 'Secure Transactions',
      description:
        'We use the latest security protocols to ensure your transactions are safe and secure.',
      icon: ShieldIcon,
    },
    {
      title: 'Multiple Cryptocurrencies',
      description:
        'Our platform supports a wide range of cryptocurrencies, including Bitcoin, Ethereum, and more.',
      icon: CurrencyIcon,
    },
  ],
  callToAction: {
    heading: 'Get started today',
    description:
      'Join the future of payments and start accepting cryptocurrencies for your business.',
    buttonLabel: 'Get Started',
    buttonHref: '#',
  },
}

export const metadata: Metadata = {
  title: 'Bitcash App | Bitlauncher',
  description: 'Be part of the intelligent future and join the Ai/Web3 revolution now!',
}
