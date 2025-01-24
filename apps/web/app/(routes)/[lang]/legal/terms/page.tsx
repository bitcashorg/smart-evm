import { PageContent } from '@/components/shared/content'
import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import type { Metadata } from 'next'
import React from 'react'

export default async function PrivacyPolicy({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="content-container !py-10 px-7 md:px-3 md:py-24">
      <PageContent data={dict.terms.content} />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Review our Terms of Service to understand the rules and regulations for using our crypto launchpad application.',
}