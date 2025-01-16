import { getDictionary } from '@/dictionaries'
import { getProjectBySlug } from '@/lib/projects'
import type {
  ProjectPageProps,
  ProjectPagePropsWithChildren,
} from '@/types/routing.type'
import type { Metadata } from 'next'

export default function ProjectPagesLayout({
  children,
}: ProjectPagePropsWithChildren) {
  return children
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  const project = await getProjectBySlug(params.project, dict)

  return {
    title: project?.title,
    openGraph: {
      images: [project?.heroImage || ''],
    },
  }
}
