import { TokenizationLanding } from '@/components/_wip/tokenization-landing'
import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import type { Metadata } from 'next'
import React from 'react'

export default async function TokenizationPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="!py-10 px-7 md:px-3 md:py-24">
      <TokenizationLanding />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Tokenization | Bitlauncher',
  description: 'Be part of the intelligent future and join the Ai/Web3 revolution now!',
}
