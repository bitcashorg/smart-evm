import { AVAILABLE_LANGS } from '@/lib/config'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}/about/about-bitlauncher`,
      lastModified: new Date(),
      priority: 0.6,
      alternates: {
        // ? e.g.: { 'en': 'https://example.com/en/...', 'es': 'https://example.com/es/...', ... }
        languages: Object.fromEntries(
          AVAILABLE_LANGS.map((lang) => [
            lang,
            `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/about/about-bitlauncher`,
          ]),
        ),
      },
    },
  ]
}
