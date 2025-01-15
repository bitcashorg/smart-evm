import type { CommonPageProps } from '@/types/routing.type'
import type { MetadataRoute } from 'next'

export default async function sitemap({
  params,
}: CommonPageProps): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://${process.env.VERCEL_URL}/${params.lang}/in/early-access`,
      lastModified: new Date(),
    },
  ]
}
