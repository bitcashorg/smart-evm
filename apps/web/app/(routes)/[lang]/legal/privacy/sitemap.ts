import { AVAILABLE_LANGS } from '@/config'
import type { CommonPageProps } from '@/types/routing.type'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}/legal/privacy`,
      lastModified: new Date(),
      priority: 0.7,
      alternates: {
        // ? e.g.: { 'en': 'https://example.com/en/...', 'es': 'https://example.com/es/...', ... }
        languages: Object.fromEntries(
          AVAILABLE_LANGS.map((lang) => [
            lang,
            `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/legal/privacy`,
          ]),
        ),
      },
    },
  ]
}
