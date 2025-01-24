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
  title: 'Privacy Policy',
  description:
    'Read our Privacy Policy to understand how we protect and manage your data in our crypto launchpad application.',
}
