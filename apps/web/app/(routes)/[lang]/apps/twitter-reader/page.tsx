import { Metadata } from 'next'
import TwitterReader from '@/components/routes/apps/twitter-reader'
export const metadata: Metadata = {
  title: 'Bitlauncher Apps - Tweet Reader',
  description: 'Track your crypto portfolio and manage your assets effectively.',
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bitlauncher Apps</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Twitter Smartlists</h2>
        <p className="mb-4">Your Source for Quality Feeds in Ai & Crypto</p>
        <TwitterReader />
      </section>
    </div>
  )
}
