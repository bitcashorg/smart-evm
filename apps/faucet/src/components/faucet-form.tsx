import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  type EVMTokenContractData,
  SepoliaUSDT,
  TestnetMBOTSPL,
  TestnetUSDCred,
  TestnetUSDT,
} from '@repo/auction'
import { useEffect, useState } from 'react'
import { parseUnits } from 'viem'
import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { AddTokenToWallet } from './add-token-to-metamask'
import { TokenSelect } from './token-select'

const tokens = [TestnetUSDCred, SepoliaUSDT, TestnetMBOTSPL, TestnetUSDT]

export function FaucetForm() {
  const account = useAccount()
  const [address, setAddress] = useState<string | undefined>(
    account?.address ? account.address : undefined,
  )
  const [quantity, setQuantity] = useState<string>('100')
  const { writeContract, isPending, isSuccess, data, ...other } = useWriteContract()
  const [token, setToken] = useState<EVMTokenContractData>(TestnetUSDCred)
  const { switchChain } = useSwitchChain()

  // Execute the contract write operation
  const callFaucet = async () => {
    const chainId = token.chainId
    switchChain({ chainId })

    console.log(
      'callFaucet',
      JSON.stringify({
        ...token,
        functionName: 'faucet',
        args: [address, parseUnits(quantity, token.decimals).toString()],
        chainId,
      }),
    )
    writeContract({
      ...token,
      functionName: 'faucet',
      args: [address, parseUnits(quantity, token.decimals)],
      chainId,
    })
  }
  console.log({ data, ...other })

  // update input when user changes address on wallet
  useEffect(() => {
    if (account.address !== address) setAddress(account.address)
  }, [account.address, setAddress])

  return (
    <div className="flex flex-col w-full max-w-[1.5*md] items-start gap-4">
      <div className="flex items-center w-full gap-4">
        <Label className="w-1/3 mr-2 text-right" htmlFor="quantity">
          Quantity
        </Label>
        <Input
          className="w-[225px]"
          id="quantity"
          max="1000"
          min="1"
          placeholder="Enter quantity"
          type="number"
          step="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <TokenSelect
          options={tokens}
          defaultValue={'0'}
          onValueChange={(i) => setToken(tokens[Number.parseInt(i)])}
        />
      </div>
      <div className="flex items-center w-full gap-4">
        <Label className="w-1/3 mr-2 text-right" htmlFor="address">
          Address
        </Label>
        <Input
          className="w-[500px]"
          id="address"
          placeholder="Enter address"
          type="text"
          value={address || ''}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="flex justify-center w-full gap-5 pt-2">
        <Button className="w-1/4" type="submit" disabled={isPending} onClick={callFaucet}>
          Submit
        </Button>
        <AddTokenToWallet {...token} />
      </div>

      <div className="flex justify-center w-full">
        <code>{JSON.stringify({ isPending, isSuccess, data })}</code>
      </div>
    </div>
  )
}
