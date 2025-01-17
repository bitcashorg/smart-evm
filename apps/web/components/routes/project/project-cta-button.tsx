'use client'

import { useSession } from '@/hooks/use-session'
import type { Project } from '@/lib/projects'
import { useSupabaseClient } from '@/services/supabase'
import { Button } from '@repo/ui'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useAccount } from 'wagmi'
import { WhitelistAddressButton } from './whitelist-address-button'

export function ProjectCtaButton({
  isPresaleActive,
  isAuctionActive,
  project,
}: { isPresaleActive: boolean; isAuctionActive: boolean; project: Project }) {
  const supabase = useSupabaseClient()
  const { address } = useAccount()
  const { session } = useSession()

  const { data } = useQuery({
    queryKey: ['project-cta-whitelist', address, project.id],
    enabled: Boolean(address),
    queryFn: async () => {
      // this should never happen. see enabled: Boolean(session?.account && address)
      if (!address || !session?.account)
        throw new Error('No address or account')

      const { data, error } = await supabase
        .from('whitelist')
        .select()
        .eq('project_id', project.id)
        .eq('account', session.account)
        .single()

      if (error) throw error

      return data
    },
  })

  // if the current address is not in the whitelist, show the whitelist button
  return data?.address !== address ? (
    <WhitelistAddressButton projectId={project.id} />
  ) : isPresaleActive ? (
    <Link href={`/${project.slug}/presale`}>
      <Button variant="tertiary">Join Presale Now</Button>
    </Link>
  ) : isAuctionActive ? (
    <Link href={`/${project.slug}/auction`}>
      <Button variant="tertiary">Join Auction Now</Button>
    </Link>
  ) : (
    <WhitelistAddressButton projectId={project.id} />
  )
}
