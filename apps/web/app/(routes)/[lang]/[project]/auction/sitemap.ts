import { getDictionary } from '@/dictionaries'
import { getProjects } from '@/lib/projects'
import type { ProjectPageProps } from '@/types/routing.type'
import type { MetadataRoute } from 'next'

export default async function sitemap({
  params,
}: ProjectPageProps): Promise<MetadataRoute.Sitemap> {
  const dict = await getDictionary(params.lang)
  const projects = await getProjects(dict)

  return projects.map((project) => ({
    url: `https://${process.env.VERCEL_URL}/${params.lang}/${project.slug}/auction`,
    lastModified: new Date(),
  }))
}
