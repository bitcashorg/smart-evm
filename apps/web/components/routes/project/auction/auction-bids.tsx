'use client'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { ProjectWithAuction } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { TestnetEasyAuction, TestnetUSDCred } from '@repo/auction'
import { toSmallestUnit } from '@repo/utils'
import { readContract, writeContract } from '@wagmi/core'
import { erc20Abi } from 'abitype/abis'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import type { Address } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'
import { wagmiConfig } from '../../../layout/providers'

const queueStartElement =
  '0x0000000000000000000000000000000000000000000000000000000000000001'

export function AuctionBids({ project }: AuctionBidsProps) {
  const { address } = useAccount()
  const { writeContract: placeBids, ...tanstack } = useWriteContract()
  const [bidInputs, setBidInputs] = useState(
    Array<BidInput>(5).fill({
      maxPrice: BigInt(0),
      bidAmount: BigInt(0),
      minBuyAmount: BigInt(0),
      errorMessage: '',
    }),
  )

  const handleSubmit = async () => {
    if (!address) return

    // return if there's any error
    const hasErrorMessage = bidInputs.some((item) => item.errorMessage !== '')
    if (hasErrorMessage) return

    // remove empty rows
    const bids = bidInputs.filter((v) => !(v.minBuyAmount <= 0 && v.bidAmount <= 0))

    const test = {
      minBuyAmounts: [bids[0]?.minBuyAmount],
      sellAmounts: [bids[0]?.bidAmount],
    }

    const { isBalanceSufficient, isAllowanceSufficient } = await checkBalanceAndAllowance(
      {
        account: address,
        spender: TestnetEasyAuction.address,
        amount: bids[0]?.bidAmount,
        tokenAddress: TestnetUSDCred.address,
      },
    )

    if (!isBalanceSufficient) return toast.error('Insuficient USDCred Balance')

    if (!isAllowanceSufficient) {
      await writeContract(wagmiConfig, {
        address: TestnetUSDCred.address,
        abi: erc20Abi,
        functionName: 'approve',
        args: [TestnetEasyAuction.address, bids[0]?.bidAmount],
      })
    }

    const order = {
      auctionId: project.auctionId, // uint256 auctionId,
      minBuyAmounts: test.minBuyAmounts, // uint96[] memory _minBuyAmounts 210,000000 MBOTSPL
      prevSellOrders: [], // bytes32[] memory _prevSellOrders,
      allowListCallData: '0x', // bytes calldata allowListCallData
      sellAmounts: test.sellAmounts, // uint96[] memory _sellAmounts bidding USDCred 200,000000 BidAmount
    }
    // console.log('place order', order)

    // TODO: we may need to wait a couple seconds after calling approve
    placeBids({
      ...TestnetEasyAuction, // Ensure this contains the correct ABI and contract address
      functionName: 'placeSellOrders',
      args: [
        order.auctionId,
        order.minBuyAmounts,
        order.sellAmounts,
        [queueStartElement],
        '0x',
      ],
    })
  }

  // validates and formats inputs
  const handleInputChange = (index: number, name: keyof BidInput, value: bigint) => {
    const newBidInputs = [...bidInputs]
    newBidInputs[index] = { ...newBidInputs[index], [name]: value }
    // calculate minBuyAmount and set error messages
    const { maxPrice, bidAmount: sellAmount } = newBidInputs[index]

    const errorMessage =
      maxPrice <= 0
        ? 'Max price cannot be zero'
        : sellAmount <= 0
          ? 'Sell amount cannot be zero'
          : ''

    const minBuyAmount = !errorMessage ? sellAmount / BigInt(maxPrice || 1) : BigInt(0)

    // TODO: check minBuyAmount is valid for project

    newBidInputs[index] = { ...newBidInputs[index], minBuyAmount, errorMessage }

    setBidInputs(newBidInputs)
  }

  // console.log('error', stringify(tanstack.error), 'data', tanstack.data)
  // console.log('bidInputs', JSON.stringify(bidInputs))

  // show error on modal
  useEffect(() => {
    const err = tanstack.error
    if (!err || !('shortMessage' in err)) return
    toast.error(err.shortMessage)
    tanstack.reset()
  }, [tanstack])

  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-muted font-semibold">Max Price</TableHead>
            <TableHead className="bg-muted font-semibold">Bid Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bidInputs.map((_, index) => (
            <TableRow key={index}>
              <TableCell
                className={cn({
                  'bg-accent/20': index % 2,
                })}
              >
                <CurrencyInput
                  placeholder="0.00"
                  name={`maxPrice${index}`}
                  handlechange={(val) => handleInputChange(index, 'maxPrice', val)}
                />
              </TableCell>
              <TableCell
                className={cn({
                  'bg-accent/20': index % 2,
                })}
              >
                <CurrencyInput
                  placeholder="0.00"
                  name={`bidAmount${index}`}
                  handlechange={(val) => handleInputChange(index, 'bidAmount', val)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-col justify-between gap-6 px-5 pb-5">
        <Button
          disabled={!address || bidInputs.some((item) => item.errorMessage !== '')}
          onClick={() => handleSubmit()}
          type="submit"
          variant="accent"
          size="lg"
        >
          Submit Bids
        </Button>

        <div className="flex flex-col gap-2">
          <p className="flex w-full justify-between">
            {textValues.currentBid.split(':').map((txt, index) =>
              !index ? (
                <b key={txt} className="block">
                  {txt}
                </b>
              ) : (
                txt
              ),
            )}
          </p>
          <p className="flex w-full justify-between">
            {textValues.currentCost.split(':').map((txt, index) =>
              !index ? (
                <b key={txt} className="block">
                  {txt}
                </b>
              ) : (
                txt
              ),
            )}
          </p>
          <p className="mt-2 text-right text-sm">{textValues.maxTokenLimit}</p>
        </div>
      </div>
    </div>
  )
}

function CurrencyInput({ handlechange, ...props }: CurrencyInputProps) {
  const [value, setValue] = useState<string>('')

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/,/g, '') // Remove commas for parsing
    if (!isNaN(Number(val))) {
      // This ensures the value is a number (including decimals)
      setValue(val) // Set the raw number value for controlled input
    }
    handlechange(toSmallestUnit(val, 6))
  }

  const handleBlur = () => {
    if (value) {
      const numberValue = Number.parseFloat(value)
      setValue(formatNumber(numberValue)) // Format with commas and two decimal places
    } else {
      setValue('0.00') // Default to .00 when empty
    }
  }

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-2 flex items-center">$</span>

      <input
        type="text" // Changed to text to handle manual formatting
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full bg-transparent pl-6 focus:outline-none"
        {...props}
      />
    </div>
  )
}

type BidInput = {
  maxPrice: bigint
  bidAmount: bigint
  minBuyAmount: bigint
  errorMessage: string
}

interface AuctionBidsProps {
  project: ProjectWithAuction
}

interface CurrencyInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  handlechange: (val: bigint) => void
}

const textValues = {
  countdownTitle: 'COUNTDOWN',
  days: '12',
  hours: '08',
  minutes: '37',
  seconds: '24',
  ticker: 'Ticker: BANK',
  currentAuctionPrice: 'Current Auction Price: $ --',
  currentBid: 'Current Bid: -- @ $ --',
  currentCost: 'Current Cost: $ --',
  maxTokenLimit: '*Max Token Limit: -- ($ --)',
}

// Function to check balance and allowance
export async function checkBalanceAndAllowance({
  account,
  spender,
  amount,
  tokenAddress,
}: {
  account: Address
  spender: Address
  amount: bigint
  tokenAddress: Address
}) {
  // Check the token balance
  const balance = await readContract(wagmiConfig, {
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [account],
  })
  // console.log('USDCred balance', balance, amount, balance && balance >= amount)

  // Check the allowance
  const allowance = await readContract(wagmiConfig, {
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [account, spender],
  })

  const isBalanceSufficient = balance && balance >= amount
  const isAllowanceSufficient = allowance && allowance >= amount

  return { isBalanceSufficient, isAllowanceSufficient }
}
