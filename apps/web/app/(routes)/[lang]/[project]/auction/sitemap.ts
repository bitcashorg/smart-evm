import { getDictionary } from '@/dictionaries'
import { AVAILABLE_LANGS } from '@/lib/config'
import { getProjects } from '@/lib/projects'
import type { ProjectPageProps } from '@/types/routing.type'
import type { MetadataRoute } from 'next'

export default async function sitemap({
  params,
}: ProjectPageProps): Promise<MetadataRoute.Sitemap> {
  const dict = await getDictionary(params.lang)
  const projects = await getProjects(dict)

  return projects.map((project) => ({
    url: `https://${process.env.NEXT_PUBLIC_APP_URL}/${project.slug}/auction`,
    lastModified: new Date(),
    priority: 0.9,
    alternates: {
      // ? e.g.: { 'en': 'https://example.com/en/...', 'es': 'https://example.com/es/...', ... }
      languages: Object.fromEntries(
        AVAILABLE_LANGS.map((lang) => [
          lang,
          `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/${project.slug}/presale`,
        ]),
      ),
    },
  }))
}
