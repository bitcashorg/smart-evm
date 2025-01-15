import { Metadata } from 'next'
import { CryptoPortfolioManager } from '@/components/routes/apps/portfolio-tracker'

export const metadata: Metadata = {
  title: 'Bitlauncher Tools - Portfolio Tracker',
  description: 'Track your crypto portfolio and manage your assets effectively',
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bitlauncher Tools</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Crypto Portfolio Tracker</h2>
        <p className="mb-4">Track your crypto portfolio and manage your assets effectively.</p>
        <CryptoPortfolioManager />
      </section>
    </div>
  )
}