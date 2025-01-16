import { AVAILABLE_LANGS } from '@/lib/config'
import type { CommonPageProps } from '@/types/routing.type'
import type { MetadataRoute } from 'next'

export default async function sitemap({
  params,
}: CommonPageProps): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}/wallet`,
      lastModified: new Date(),
      priority: 0.3,
      alternates: {
        // ? e.g.: { 'en': 'https://example.com/en/...', 'es': 'https://example.com/es/...', ... }
        languages: Object.fromEntries(
          AVAILABLE_LANGS.map((lang) => [
            lang,
            `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/wallet`,
          ]),
        ),
      },
    },
  ]
}
