import { Card } from '@/components/ui/card'

export function EmptyScreen() {
  return (
    <Card variant="outline" className="sm:max-w-2xl sm:px-4 mx-auto">
      <p className="font-semibold text-xs text-center">
        Welcome to <span className="text-tertiary">Bitlauncher AI</span>{' '}
        Chatbot!
      </p>
    </Card>
  )
}
