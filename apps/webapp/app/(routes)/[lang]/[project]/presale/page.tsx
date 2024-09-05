import { PresaleDepositCard } from '@/components/routes/project/presale/presale-deposit-card'
import { PresaleTransactionsCard } from '@/components/routes/project/presale/presale-transactions-card'
import { ProjectHeader } from '@/components/routes/project/project-header'
import { ProjectPresaleData } from '@/components/routes/project/project-presale-data'
import { Countdown } from '@/components/shared/countdown'
import { Card, CardContent } from '@/components/ui/card'
import { getDictionary } from '@/dictionaries'
import { type ProjectWithAuction, getProjectBySlug } from '@/lib/projects'
import { createSupabaseServerClient } from '@/services/supabase/server'
import {
  getPresaleContributions,
  getPresaleData,
  getProjectData,
} from '@/services/supabase/service'
import type { ProjectPageProps } from '@/types/routing.type'
import { redirect } from 'next/navigation'
import { getAddress } from 'viem'

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang)
  const project = (await getProjectBySlug(params.project, dict)) as ProjectWithAuction

  if (!project) redirect('/')

  const supabase = await createSupabaseServerClient()
  // TODO: optimize this in a single query
  const presaleData = await getPresaleData({ projectId: project.id, supabase })
  // const projectData = await getProjectData({ projectId: project.id, supabase })
  const presaleContributions = await getPresaleContributions({
    presaleId: presaleData.id,
    supabase,
  })

  return (
    <div className="flex min-h-[calc(83vh-4rem)] flex-col">
      <ProjectHeader project={project}>
        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
            <Countdown
              targetDate={new Date(presaleData.end_timestamptz)}
              heading="Presale Ends In:"
            />
            <CardContent>
              <ProjectPresaleData
                presaleData={presaleData}
                numberOfContributors={presaleContributions.contributors}
              />
            </CardContent>
          </Card>

          <PresaleDepositCard
            project={project}
            presaleAddress={getAddress(presaleData.address)}
          />
        </div>

        <PresaleTransactionsCard contributions={presaleContributions.contributions} />
      </ProjectHeader>
    </div>
  )
}
