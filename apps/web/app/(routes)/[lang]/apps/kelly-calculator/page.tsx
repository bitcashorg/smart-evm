import { Metadata } from 'next'
import KellyCriterionCalculator from '@/components/routes/apps/kelly-calculator'

export const metadata: Metadata = {
  title: 'Bitlauncher Apps - Kelly Criterion Calculator',
  description: 'Optimize your investment portfolio with our Kelly Criterion Calculator',
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bitlauncher Apps</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Kelly Criterion Calculator</h2>
        <p className="mb-4">Use this tool to optimize your investment portfolio and manage risk effectively.</p>
        <KellyCriterionCalculator />
      </section>
    </div>
  )
}