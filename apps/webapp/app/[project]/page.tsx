import { getProjectBySlug } from '@/lib/projects'
import { redirect } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ProjectHeader } from '@/components/routes/project/project-header'

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.project)
  if (!project) redirect('/')

  const projectContentObjectKeys = Object.keys(project.content)
  const projectContent = project.content

  return (
    <>
      <div className="flex min-h-[calc(83vh-4rem)] flex-col">
        <ProjectHeader project={project} />

        <div className="container py-24">
          {projectContentObjectKeys.map((key, index) => {
            const pcKey = key as keyof typeof projectContent

            return (
              <section
                key={key}
                className={cn(
                  'mx-auto flex w-full max-w-screen-xl flex-col gap-11 px-3 py-10 md:px-6 md:py-16 lg:px-11 lg:py-24',
                  index % 2 === 0 ? 'backdrop-xl rounded-3xl bg-primary/70' : ''
                )}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {projectContent[pcKey].title}
                </h2>
                <div className="flex w-full flex-col gap-6">
                  {(projectContent[pcKey].content as string[][]).map(
                    (content, index) => {
                      if (content.every((c, i) => c.includes(':'))) {
                        return (
                          <ul
                            key={`${index}__${(projectContent[pcKey].title as string).replace(/\s/g, '-')}`}
                            className="flex list-outside list-disc flex-col gap-2 px-6"
                          >
                            {content.map(item => (
                              <li key={`${item}__list-item`}>
                                {item.split(':').map((text, index) => (
                                  <span
                                    key={index}
                                    className={index === 0 ? 'font-bold' : ''}
                                  >
                                    {text}
                                    {index === 0 ? ': ' : ''}
                                  </span>
                                ))}
                              </li>
                            ))}
                          </ul>
                        )
                      }

                      return content.map((item, index) => (
                        <p
                          key={`${index}__${(projectContent[pcKey].title as string).replace(/\s/g, '-')}`}
                          className="md:text-xl lg:text-base xl:text-xl"
                        >
                          {item}
                        </p>
                      ))
                    }
                  )}
                </div>
              </section>
            )
          })}
        </div>

        <hr className="mx-auto mt-24 max-w-screen-xl border-gray-600/80" />
      </div>
    </>
  )
}

type ProjectPageProps = {
  params: { project: string }
}
