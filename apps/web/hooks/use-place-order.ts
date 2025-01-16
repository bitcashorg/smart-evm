import { TestnetEasyAuction } from '@repo/auction'
import { Address } from 'viem'
import { useWriteContract } from 'wagmi'

export function useDepositAndPlaceOrder() {
  const { writeContract, ...tanstack } = useWriteContract()
  console.log('tanstack', tanstack)

  const placeOrder = async ({
    auctionId, // uint256 auctionId,
    minBuyAmounts, // uint96[] memory _minBuyAmounts,
    sellAmounts, // uint96[] memory _sellAmounts,
    prevSellOrders, // bytes32[] memory _prevSellOrders,
    allowListCallData, // bytes calldata allowListCallData
  }: DepositAndPlaceOrderParams) => {
    // console.log(
    //   'placing order....',
    //   JSON.stringify([
    //     auctionId,
    //     minBuyAmounts,
    //     sellAmounts,
    //     prevSellOrders,
    //     allowListCallData
    //   ])
    // )

    writeContract({
      ...TestnetEasyAuction, // Ensure this contains the correct ABI and contract address
      functionName: 'placeSellOrders',
      args: [
        auctionId,
        minBuyAmounts,
        sellAmounts,
        prevSellOrders,
        allowListCallData,
      ],
    })
  }

  return { ...tanstack, placeOrder }
}

interface DepositAndPlaceOrderParams {
  auctionId: number
  minBuyAmounts: number[]
  sellAmounts: number[]
  prevSellOrders: string[]
  allowListCallData: string
}
