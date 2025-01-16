import { ProjectGridCard } from '@/components/routes/project/project-grid-card'
import type { Project, ProjectWithAuction } from '@/lib/projects'
import { Tables } from '@repo/supabase'
import { ProjectInfo } from './project-info'

export function ProjectDataCard({ project }: { project: Project & Tables<'presale'> }) {
  return (
    <ProjectGridCard>
      <ProjectInfo project={project as ProjectWithAuction} />
    </ProjectGridCard>
  )
}
