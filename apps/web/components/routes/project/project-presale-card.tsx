import type { Project, ProjectWithAuction } from '@/lib/projects'
import { ProjectInfo } from './project-info'

export function ProjectPresaleCard({ project }: { project: Project }) {
  return (
    <div className="flex size-full max-w-screen-md flex-col justify-between border border-card/30 bg-card/60 px-3 py-10 backdrop-blur-lg md:rounded-xl md:p-10">
      <ProjectInfo project={project as ProjectWithAuction} />
    </div>
  )
}
