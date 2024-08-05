'use client'

import { useSigningRequest } from '@/hooks/use-signing-request'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  genBitusdDepositSigningRequest,
  genUsdtDepositSigningRequest
} from '@/lib/eos'
import { useState, useMemo } from 'react'
import { EVMTokenContractData } from 'app-contracts'
import { parseUnits } from 'viem'
import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

export function DepositCard() {
  const { address } = useAccount()
  const { writeContract } = useWriteContract()
  const [amount, setAmount] = useState<number>(42)
  const { switchChain } = useSwitchChain()
  const [selectedChain, setSelectedChain] = useState<string>('Ethereum')
  const [selectedToken, setSelectedToken] = useState('USDT')
  const { requestSignature } = useSigningRequest()

  const availableChains = useMemo(() => {
    return appConfig.stables
      .filter(token => token.symbol === selectedToken)
      .map(token => token.chainName)
  }, [selectedToken])

  const deposit = async () => {
    if (!address) return toast.error('Make sure your wallet is connected.')
    if (!amount) return toast.error('Amount is undefined')
    const tokenData = appConfig.stables.find(
      token => token.symbol === selectedToken
    )
    if (!tokenData) return toast.error('Token data not found')
    if (tokenData.chainType === 'evm') {
      const evmToken = tokenData as EVMTokenContractData
      switchChain({ chainId: evmToken.chainId })
      writeContract({
        abi: evmToken.abi,
        address: evmToken.address,
        functionName: 'transfer',
        args: [
          '0x2C9DAAb3F463d6c6D248aCbeaAEe98687936374a', // dev only
          parseUnits(amount.toString(), evmToken.decimals)
        ],
        chainId: evmToken.chainId
      })
    } else {
      // handle eos token bitusd and usdt
      const esr =
        selectedToken === 'USDT'
          ? await genUsdtDepositSigningRequest(amount, address)
          : await genBitusdDepositSigningRequest(amount, address)
      requestSignature(esr)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Convert to USDCred</CardTitle>
        <CardDescription>
          Get USD Credits on Bitlauncer to participate in the auctions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-[30%] flex-col">
              <Input
                type="number"
                id="deposit"
                name="deposit"
                placeholder="0.00"
                value={amount}
                onChange={e => setAmount(parseInt(e.target.value))}
              />
            </div>

            <Select onValueChange={setSelectedToken} defaultValue={'USDT'}>
              <SelectTrigger id="token-select">
                <SelectValue placeholder={`USDT`} />
              </SelectTrigger>
              <SelectContent position="popper">
                {['USDT', 'USDC'].map(token => (
                  <SelectItem key={token} value={token}>
                    {token}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex min-w-[40%] flex-col">
              <Select onValueChange={setSelectedChain} value={selectedChain}>
                <SelectTrigger id="chain-select">
                  <SelectValue placeholder={selectedChain} />
                </SelectTrigger>
                <SelectContent position="popper">
                  {availableChains.map(chain => (
                    <SelectItem key={chain} value={chain}>
                      {chain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button
          className={cn(
            buttonVariants({
              variant: 'outline',
              radius: 'full'
            }),
            'h-auto w-full whitespace-normal border border-solid border-accent-secondary bg-background px-10 py-2'
          )}
          onClick={deposit}
        >
          Deposit
        </Button>
      </CardFooter>
    </Card>
  )
}
