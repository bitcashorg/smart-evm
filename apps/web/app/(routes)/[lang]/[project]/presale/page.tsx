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
  const project = (await getProjectBySlug(
    params.project,
    dict,
  )) as ProjectWithAuction

  if (!project) redirect('/')

  const supabase = await createSupabaseServerClient()
  // TODO: optimize this in a single query
  const presale = await getPresaleData({ projectId: project.id, supabase })
  const projectData = await getProjectData({ projectId: project.id, supabase })
  const presaleContributions = await getPresaleContributions({
    presaleId: presale.id,
    supabase,
  })

  const presaleStartDate = new Date(presale.start_timestamptz)
  const presaleEndDate = new Date(presale.end_timestamptz)
  const now = new Date()
  const isPresaleActive = now > presaleStartDate && now < presaleEndDate
  const isAuctionActive = false // TODO: implement auction logic

  if (!projectData.token_address) redirect('/')

  const tokenAddress = getAddress(projectData.token_address)

  return (
    <div className="flex min-h-[calc(83vh-4rem)] flex-col">
      <ProjectHeader project={project}>
        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
            <Countdown
              targetDate={new Date(presale.end_timestamptz)}
              heading="Presale Ends In (If Not Sold Out):"
            />
            <CardContent>
              <ProjectPresaleData
                presale={presale}
                numberOfContributors={presale.contributors}
              />
            </CardContent>
          </Card>

          <PresaleDepositCard
            project={{
              ...project,
              ...(presale || {}),
            }}
            presaleAddresses={presale.presale_address}
            tokenAddress={tokenAddress}
            isPresaleActive={isPresaleActive}
            isAuctionActive={isAuctionActive}
          />
        </div>

        <PresaleTransactionsCard
          contributions={presaleContributions.contributions}
          presaleId={presale.id}
        />
      </ProjectHeader>
    </div>
  )
}

export async function generateMetadata({ params }: ProjectPageProps) {
  return {
    title: `Presale - ${params.project}`,
    description: `Participate in the presale for ${params.project}. Contribute and be a part of the project before it launches.`,
  }
}
