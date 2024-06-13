import React from 'react'
import { Metadata } from 'next'
import { CommonPageProps } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'

export default async function DevelopersPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="content-container !py-10 px-7 md:px-3 md:py-24">
      <h1 className="heading">Developers Page</h1>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Developers | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}
