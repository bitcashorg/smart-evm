import { appConfig } from '@/lib/config'
import type { Project } from '@/lib/projects'
import Image from 'next/image'
import type { ReactNode } from 'react'
import Balancer from 'react-wrap-balancer'
import { ProjectPills } from './project-pills'

export function ProjectHeader({
  project,
  children,
}: {
  project: Project
  children: ReactNode
}) {
  return (
    <header className="flex size-full justify-center md:mb-0 md:mx-h-[95vh]">
      <div className="h-fit !py-0 md:static md:h-auto md:!pt-[6rem] h-[95vh] overflow-hidden">
        <Image
          alt={project.title}
          className="pointer-events-none absolute inset-0 size-[95vh] object-cover opacity-50 h-[95vh] overflow-hidden max-h-[95vh] max-w-[100vw]"
          src={project.heroImage}
          fill
          priority
        />
      </div>
      {/* <ProjectDataCard project={project} /> */}
      <section className="container z-10 flex flex-col items-center pt-10 align-center">
        ''
        <h1 className="flex flex-col p-10 mx-auto text-center whitespace-pre-line align-center md:mb-10">
          <sub className="w-full h-8 mb-16 text-xl font-semibold drop-shadow-md md:mb-0 md:h-10 md:text-2xl">
            {project.pitch}
          </sub>
          <span
            className="w-full text-4xl md:text-7xl"
            key="upcoming-auctions-title"
          >
            <Balancer>{project.title.toUpperCase()}</Balancer>
          </span>
        </h1>
        {appConfig.features.presale ? <ProjectPills project={project} /> : null}
        <div className="container">{children}</div>
      </section>
    </header>
  )
}
