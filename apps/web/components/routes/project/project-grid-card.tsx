import { Card, CardContent } from '@/components/ui/card'

export function ProjectGridCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="flex flex-col pt-5 border-card/30 bg-card/60 backdrop-blur-lg">
      <CardContent className="grid w-full m-0 gap-x-10 gap-y-2 md:grid-cols-2">
        {children}
      </CardContent>
    </Card>
  )
}
