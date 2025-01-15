import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import type { Metadata } from 'next'
import React from 'react'

export default async function CommunitiesPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="content-container !py-10 px-7 md:px-3 md:py-24">
      <h1 className="heading">Communitie Page</h1>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Communities | Bitlauncher',
  description: 'Be part of the intelligent future and join the Ai/Web3 revolution now!',
}
