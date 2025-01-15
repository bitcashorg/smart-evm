import { getDictionary } from '@/dictionaries'
import type { Lang } from '@/dictionaries/locales'
import dynamic from 'next/dynamic'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false,
})

export default async function Footer({ params }: { params: { lang: Lang } }) {
  const dict = await getDictionary(params.lang)
  return (
    <footer className="flex flex-col w-full">
      <DynamicNewsletter />
    </footer>
  )
}
