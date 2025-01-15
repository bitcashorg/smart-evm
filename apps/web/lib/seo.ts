import type { Metadata } from 'next'
import { headers } from 'next/headers'

type OgType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other'

type TwitterCard = 'summary' | 'summary_large_image' | 'player' | 'app'

interface PageSEO {
  title: string
  description: string
  ogType: string
  ogImageUrl?: string
  twitterCard: string
}

export const generateMetadataFromSEO = (pageSeo: PageSEO): Metadata => {
  const headersList = headers()
  const pathname = headersList.get('x-invoke-path') || ''
  const currentUrl = process.env.NEXT_PUBLIC_VERCEL_URL + pathname
  return {
    title: pageSeo.title || '',
    description: pageSeo.description || '',
    openGraph: {
      type: pageSeo.ogType as OgType,
      title: pageSeo.title,
      description: pageSeo.description,
      url: currentUrl,
      images: pageSeo.ogImageUrl ? [{ url: pageSeo.ogImageUrl }] : [],
    },
    twitter: {
      card: pageSeo.twitterCard as TwitterCard,
      site: currentUrl,
      title: pageSeo.title,
      description: pageSeo.description,
      images: pageSeo.ogImageUrl ? [pageSeo.ogImageUrl] : [],
    },
  }
}
