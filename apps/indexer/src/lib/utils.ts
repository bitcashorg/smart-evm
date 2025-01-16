import fs from 'node:fs/promises'
import { eosEvmTestnet } from '@repo/chains'
import { erc20Abi } from 'abitype/abis'
import {
  http,
  type Abi,
  type Address,
  createPublicClient,
  parseUnits,
} from 'viem'

export async function writeToFile(data: string, filePath: string) {
  try {
    // Write the data to the specified file
    // If the file does not exist, it will be created.
    await fs.writeFile(filePath, data, 'utf8')

    console.log('Logs have been written to the file successfully.')
  } catch (error) {
    console.error('Error writing logs to file:', error)
  }
}

export function runPromisesInSeries<T>(
  promiseFns: (() => Promise<T>)[],
  delay?: number,
): Promise<T | void> {
  // Start with a Promise<void> to ensure compatibility with the accumulator's type
  return promiseFns.reduce<Promise<T | void>>(
    (prevPromise, currentPromiseFn) => {
      // Chain the current promise to the accumulator after the previous one completes
      // Here, we ignore the result of the previous promise, as we're focusing on chaining
      return prevPromise.then(() => {
        if (delay) {
          // Introduce a delay before executing the current promise
          return new Promise<void>((resolve) => {
            setTimeout(() => resolve(), delay)
          }).then(() => currentPromiseFn())
        } else {
          // If no delay is provided, execute the current promise immediately
          return currentPromiseFn()
        }
      })
    },
    Promise.resolve(),
  )
}

export async function getTokenDetails({ address }: { address: Address }) {
  const client = createPublicClient({
    chain: eosEvmTestnet,
    transport: http(),
  })
  const results = await client.multicall({
    contracts: [
      {
        address,
        abi: erc20Abi,
        functionName: 'decimals',
        args: [],
      },
      {
        address,
        abi: erc20Abi,
        functionName: 'symbol',
        args: [],
      },
    ],
    multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  })

  return {
    address,
    decimals: Number(results[0].result),
    symbol: String(results[1].result),
  }
}

export function bigintToPostgresTimestamp(timestamp: bigint): string {
  const date = new Date(Number(timestamp) * 1000) // Convert seconds to milliseconds
  return date.toISOString()
}

export const getEvents = (abi: Abi) =>
  abi.filter((item) => item.type === 'event')

export function convertToBigIntWithDecimals(quantity: string): bigint {
  // Extract the numeric value as a string
  const [numericValue] = quantity.split(' ')
  // Always use 6 decimals in parseUnits
  return parseUnits(numericValue, 6)
}
