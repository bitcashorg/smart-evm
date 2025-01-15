'use client'

import { useErc20Balance } from '@/hooks/use-balance'
import { appConfig } from '@/lib/config'
import { eosEvmMainnet } from '@repo/chains'
import { type Address, erc20Abi } from 'viem'
import { useAccount } from 'wagmi'

// TODO: make this generic for any token on any chain
export function PresaleTokenBalance({ tokenAddress }: { tokenAddress: Address }) {
  const { address } = useAccount()
  const { formatted } = useErc20Balance({
    contract: tokenAddress,
    abi: erc20Abi,
    address: address as Address,
    chainId: appConfig.env === 'prod' ? eosEvmMainnet.id : eosEvmMainnet.id,
  })
  const withoutDecimals = formatted ? formatted.toString().split('.')[0] : 0

  return (
    <div className="text-5xl mt-5 font-bold text-center">
      <span className="text-green-500">{withoutDecimals}</span> <br />
      <span className="text-4xl ">BLPL</span>
      <p>Bitlauncher Presale Tokens</p>
    </div>
  )
}
