import { TestnetUSDCred } from '@repo/auction'
import { formatUnits } from 'viem'
import { useAccount, useReadContract } from 'wagmi'

export function useUsdtBalance() {
  const { address } = useAccount()

  const { data } = useReadContract({
    ...TestnetUSDCred,
    functionName: 'balanceOf',
    args: [address],
    // watch: true
  })

  // Convert the balance from wei to ether (adjust decimal places if needed)
  const balance = formatUnits(toBigInt(data), 6)

  return balance
}

function toBigInt(value: unknown): bigint {
  return typeof value === 'bigint' ? value : BigInt(0)
}
