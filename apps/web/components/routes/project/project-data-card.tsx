import { ProjectGridCard } from '@/components/routes/project/project-grid-card'
import type { Project, ProjectWithAuction } from '@/lib/projects'
import { ProjectInfo } from './project-info'

export function ProjectDataCard({ project }: { project: Project }) {
  return (
    <ProjectGridCard>
      <ProjectInfo project={project as ProjectWithAuction} />
    </ProjectGridCard>
  )
}
