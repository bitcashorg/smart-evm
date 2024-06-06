import React from 'react'
import { Metadata } from 'next'
import { PageContent } from '@/components/shared/content'
import { getDictionary } from '@/app/dictionaries'
import { CommonPageProps } from '@/app/types/routing.type'

export default async function PrivacyPolicy({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="content-container !py-10 px-7 md:px-3 md:py-24">
      <PageContent data={dict.terms.content} />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Privacy Policy | Bitlauncher',
  description:
    'Read our Privacy Policy to understand how we protect and manage your data in our crypto launchpad application.'
}
