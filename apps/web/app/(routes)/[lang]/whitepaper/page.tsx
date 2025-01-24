import { WhitepaperPageLanding } from '@/components/routes/whitepaper'
import type { Metadata } from 'next'

export default async function WhitepaperPage() {
  return (
    <div className="!py-10 sm:px-6 md:px-3 md:py-24">
      <WhitepaperPageLanding />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Comprehensive Whitepaper',
  description: 'Explore the detailed whitepaper of Bitlauncher, covering all aspects of our innovative platform and technology.',
}
