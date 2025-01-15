import { AuctionBids } from '@/components/routes/project/auction/auction-bids'
import { AuctionDataCard } from '@/components/routes/project/auction/auction-data-card'
import { ProjectHeader } from '@/components/routes/project/project-header'
import { ProjectPresaleData } from '@/components/routes/project/project-presale-data'
import { Countdown } from '@/components/shared/countdown'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getDictionary } from '@/dictionaries'
import { locales } from '@/dictionaries/locales'
import { appConfig } from '@/lib/config'
import { type ProjectWithAuction, getProjectBySlug, getProjects } from '@/lib/projects'
import { createSupabaseServerClient } from '@/services/supabase'
import { getPresaleData } from '@/services/supabase/service'
import type { ProjectPageParams, ProjectPageProps } from '@/types/routing.type'
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

export default async function AuctionPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang)
  const p = await getProjectBySlug(params.project, dict)
  if (!p || (!p.auctionId && !p.registrationOpen)) redirect('/')
  if (!appConfig.features.auction) redirect('/')
  const project = p as ProjectWithAuction
  const supabase = await createSupabaseServerClient()
  const presale = await getPresaleData({ projectId: project.id, supabase })

  return (
    <div className="flex min-h-[calc(83vh-4rem)] flex-col">
      <ProjectHeader project={project}>
        <div className="container">
          <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-2">
            <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
              <Countdown targetDate={new Date()} heading="Auction Countdown" />
              <CardContent>
                <ProjectPresaleData presale={presale} numberOfContributors={0} />
              </CardContent>
            </Card>

            <Card className="border-card/30 bg-card/60 backdrop-blur-lg">
              <CardHeader>
                <CardTitle>Place Bids</CardTitle>
                <CardDescription>
                  Up to five 5 bids per project auction. You can update your order.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
                <AuctionBids project={project!} />
              </CardContent>
            </Card>
          </div>
          <AuctionDataCard />
        </div>
      </ProjectHeader>
    </div>
  )
}

export async function generateStaticParams(): Promise<ProjectPageParams[]> {
  const params: ProjectPageParams[] = (
    await Promise.all(
      locales.map(async (lang): Promise<ProjectPageParams[]> => {
        const dict = await getDictionary(lang)
        return getProjects(dict)
          .map((project) => (project.slug ? { lang, project: project.slug } : null))
          .filter((param): param is ProjectPageParams => param !== null)
      }),
    )
  ).flat()

  return params
}

// const DynamicAddressForm = dynamic(
//   () =>
//     import('@/components/routes/project/whitelist-address-form').then(
//       (mod) => mod.WhitelistAddressForm,
//     ),
//   {
//     ssr: false,
//     loading: () => <Button variant="accent">Register</Button>,
//   },
// )
