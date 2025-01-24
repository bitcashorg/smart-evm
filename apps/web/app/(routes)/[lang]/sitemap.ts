import { AVAILABLE_LANGS } from '@/lib/config'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        // ? e.g.: { 'en': 'https://example.com/en/...', 'es': 'https://example.com/es/...', ... }
        languages: Object.fromEntries(
          AVAILABLE_LANGS.map((lang) => [
            lang,
            `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}`,
          ]),
        ),
      },
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          AVAILABLE_LANGS.map((lang) => [
            lang,
            `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/blog`,
          ]),
        ),
      },
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}/whitepaper`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          AVAILABLE_LANGS.map((lang) => [
            lang,
            `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/whitepaper`,
          ]),
        ),
      },
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}/learn/security`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          AVAILABLE_LANGS.map((lang) => [
            lang,
            `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/learn/security`,
          ]),
        ),
      },
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}/about/about-bitlauncher`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
      alternates: {
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
