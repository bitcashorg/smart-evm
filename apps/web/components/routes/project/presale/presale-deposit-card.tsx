'use client'

import { savePresaleDepositIntent } from '@/app/actions/save-deposit'
import { PresaleTokenBalance } from '@/components/routes/project/presale/presale-token-balance'
import { ProjectGridCard } from '@/components/routes/project/project-grid-card'
import { ProjectInfo } from '@/components/routes/project/project-info'
import { Button } from '@/components/ui/button'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSession } from '@/hooks/use-session'
import { useSigningRequest } from '@/hooks/use-signing-request'
import { genBitusdDepositSigningRequest, genUsdtDepositSigningRequest } from '@/lib/eos'
import type { ProjectWithAuction } from '@/lib/projects'
import { useSupabaseClient } from '@/services/supabase'
import type { Tables } from '@repo/supabase'
import { tokens } from '@repo/tokens'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import { type Address, erc20Abi, getAddress, isAddressEqual, parseUnits } from 'viem'
import { useAccount, useChainId, useSwitchChain, useWriteContract } from 'wagmi'
import { WhitelistAddressButton } from '../whitelist-address-button'

export function PresaleDepositCard({
  project,
  presaleAddresses,
  tokenAddress,
  isPresaleActive,
  isAuctionActive,
}: {
  project: ProjectWithAuction
  presaleAddresses: Tables<'presale_address'>[]
  tokenAddress: Address
  isPresaleActive: boolean
  isAuctionActive: boolean
}) {
  return (
    <ProjectGridCard>
      <div className="mb-5">
        <ProjectInfo project={project} presale={true} />
        <PresaleTokenBalance tokenAddress={tokenAddress} />
      </div>

      <PresaleDeposit
        project={project}
        presaleAddresses={presaleAddresses}
        isPresaleActive={isPresaleActive}
        isAuctionActive={isAuctionActive}
      />
    </ProjectGridCard>
  )
}

const stables = ['USDT', 'USDC', 'BITUSD']

function PresaleDeposit({
  project,
  presaleAddresses,
  isPresaleActive,
  isAuctionActive,
}: {
  project: ProjectWithAuction
  presaleAddresses: Tables<'presale_address'>[]
  isPresaleActive: boolean
  isAuctionActive: boolean
}) {
  const supabase = useSupabaseClient()
  const { address } = useAccount()
  const { status, writeContract } = useWriteContract()
  const [amount, setAmount] = useState<string>('42')
  const { switchChain } = useSwitchChain()
  const [selectedToken, setSelectedToken] = useState('USDC')
  const [selectedChain, setSelectedChain] = useState<string>('Ethereum')
  const { requestSignature } = useSigningRequest()
  const { loginOrConnect, session } = useSession()
  const chainId = useChainId()

  const whitelist = useQuery({
    queryKey: ['presale-cat whitelist', address, project.id],
    enabled: Boolean(session?.account),
    queryFn: async () => {
      // this should never happen. see enabled: Boolean(session?.account && address)
      if (!address || !session?.account) throw new Error('No address or account')

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

  const availableChains = useMemo(() => {
    return tokens
      .filter((token) => token.symbol === selectedToken)
      .map((token) => token.chainName)
  }, [selectedToken])

  const deposit = async () => {
    if (!session?.account || !address) return loginOrConnect()
    if (!amount) return toast.error('Please enter a deposit amount')
    if (!selectedChain) return toast.error('Please select a blockchain network')
    // Find the token data for the selected token and chain
    const token = tokens.find(
      (token) => token.symbol === selectedToken && token.chainName === selectedChain,
    )
    // Show an error if the token data is not found
    if (!token) return toast.error('Token data not found')

    if (token.chainType === 'evm') {
      const depositAddress = presaleAddresses.find(
        (presaleAddress) => presaleAddress.chain_id === token.chainId.toString(),
      )?.deposit_address as Address
      if (!depositAddress) return toast.error('Deposit address not found')
      const evmToken = token
      if (chainId.toString() !== evmToken.chainId.toString()) {
        await switchChain({ chainId: evmToken.chainId })
      } else {
        const isEthUsdt = token.chainId === 1 && token.symbol === 'USDT'
        const ethUsdtTransferAbi = [
          {
            constant: false,
            inputs: [
              { name: '_to', type: 'address' },
              { name: '_value', type: 'uint256' },
            ],
            name: 'transfer',
            outputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ]
        console.log('🥵 isEthUsdt', {
          isEthUsdt,
          amount,
          parseUnits: parseUnits(amount, evmToken.decimals),
          evmToken,
        })
        const abi = isEthUsdt ? ethUsdtTransferAbi : erc20Abi

        writeContract(
          {
            abi,
            address: getAddress(evmToken.address),
            functionName: 'transfer',
            args: [depositAddress, parseUnits(amount, evmToken.decimals)],
            chainId: evmToken.chainId,
          },
          {
            onError: (error) => {
              console.error('Deposit error:', error.message)
              toast.error(
                'Unable to complete deposit. Please try again, contact support if the problem persist.',
              )
            },
            onSuccess: async (trxHash) => {
              console.log('Transaction hash:', trxHash)
              toast.success('Deposit successful')
              const deposit = await savePresaleDepositIntent({
                amount: Number(parseUnits(amount, 6)),
                created_at: new Date().toISOString(),
                deposit_hash: trxHash,
                issuance_hash: null,
                presale_id: project.presaleId as number,
                address,
                project_id: project.id,
                account: session?.account,
                chain_type: evmToken.chainType,
                chainId: evmToken.chainId.toString(),
              })
              console.log('deposit', deposit)
            },
          },
        )
      }
    } else {
      // handle eos token bitusd and usdt
      const info = { presale: true }
      const esr =
        selectedToken === 'USDT'
          ? await genUsdtDepositSigningRequest(Number(amount), 'bldeposit.bk', info)
          : await genBitusdDepositSigningRequest(Number(amount), 'bldeposit.bk', info)

      requestSignature({
        esr,
        callback: async (esr) => {
          console.log('deposit success', esr)
          // NOTE: we dont save the deposit intent here
          // because its handled by trigger job
        },
      })
    }
  }

  const whitelistedAddress = whitelist.data?.address
  const isEOS = selectedChain === 'EOS'
  const requireWhitelist = isEOS
    ? false
    : !whitelistedAddress || whitelistedAddress !== address

  return (
    <div>
      <CardHeader className="p-0 pb-5 overflow-hidden">
        <CardTitle>Deposit USD</CardTitle>
        <CardDescription>Deposit USD tokens to participate.</CardDescription>
      </CardHeader>
      <div className="flex flex-col mb-5">
        <label htmlFor="deposit" className="text-sm font-bold" />
        <div className="flex items-center justify-between gap-2 mb-5">
          <Input
            type="number"
            id="deposit"
            name="deposit"
            placeholder="type amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === '.' || e.key === ',') {
                e.preventDefault()
              }
            }}
          />

          <Select onValueChange={setSelectedToken} defaultValue={'USDC'}>
            <SelectTrigger id="token-select">
              <SelectValue placeholder={'USDT'} />
            </SelectTrigger>
            <SelectContent position="popper">
              {stables.map((token) => (
                <SelectItem key={token} value={token}>
                  {token}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Select onValueChange={setSelectedChain} value={selectedChain}>
          <SelectTrigger id="chain-select">
            <SelectValue placeholder="Select Chain" />
          </SelectTrigger>
          <SelectContent position="popper">
            {availableChains.map((chain) => (
              <SelectItem key={chain} value={chain}>
                {chain}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col space-y-2">
        {
          // if the current address is not in the whitelist, show the whitelist button
          requireWhitelist ? (
            <WhitelistAddressButton projectId={project.id} />
          ) : isPresaleActive ? (
            <Button variant="tertiary" onClick={deposit} disabled={status === 'pending'}>
              {status === 'pending' ? 'Pending Signature' : 'Contribute Now'}
            </Button>
          ) : isAuctionActive ? (
            <Link href={`/${project.slug}/auction`}>
              <Button variant="tertiary">Join Auction Now</Button>
            </Link>
          ) : (
            <div>
              wat
              <WhitelistAddressButton projectId={project.id} />
            </div>
          )
        }
      </div>
    </div>
  )
}
