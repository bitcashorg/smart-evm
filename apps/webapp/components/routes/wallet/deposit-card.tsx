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
import { useState } from 'react'
import {
  EVMTokenContractData,
  TestnetUSDT,
  TokenContractData
} from 'smartsale-contracts'
import { parseUnits } from 'viem'
import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

const usdtMap = new Map<string, TokenContractData>()
appConfig.usdt.forEach(t => {
  const key = JSON.stringify(t)
  return usdtMap.set(key, t)
})

export function DepositCard() {
  const { address } = useAccount()
  const { writeContract, ...other } = useWriteContract()
  const [amount, setAmount] = useState<number>(42)
  const { switchChain } = useSwitchChain()
  const [token, setToken] = useState<TokenContractData>(TestnetUSDT)
  const { requestSignature } = useSigningRequest()

  const deposit = async () => {
    if (!address) return toast.error('Make sure your evm wallet is connected.')
    if (!amount) return toast.error('Amount is undefined')

    if (token.chainType === 'evm') {
      const evmToken = token as EVMTokenContractData
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
        token.symbol === 'USDT'
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
          Get USD Credits on Bitlauncer to participate on the auctions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <label htmlFor="deposit" className="text-sm font-bold"></label>
          <div className="flex items-center justify-between">
            <div className="flex min-w-[40%] flex-col">
              <span className="text-2xl font-semibold">
                <Input
                  type="number"
                  id="deposit"
                  name="deposit"
                  placeholder="0.00"
                  value={amount}
                  onChange={e => setAmount(parseInt(e.target.value))}
                />
              </span>
            </div>
            <Select onValueChange={chainId => setToken(usdtMap.get(chainId)!)}>
              {/* @ts-ignore */}
              <SelectTrigger id="currency-out">
                <SelectValue
                  placeholder={`${token.symbol} on ${token.chainName}`}
                />
              </SelectTrigger>
              {/* @ts-ignore */}
              <SelectContent position="popper">
                {Array.from(usdtMap.values()).map(t => {
                  const key = JSON.stringify(t)
                  const usdt = usdtMap.get(key)

                  return (
                    // @ts-ignore */
                    <SelectItem key={key} value={key}>
                      {usdt?.symbol} on {usdt?.chainName}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
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
          // disabled={!session?.account}
          onClick={deposit}
        >
          Deposit
        </Button>
      </CardFooter>
    </Card>
  )
}
