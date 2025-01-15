# @repo/chains

## Purpose

This repository abstracts Chain configurations for various blockchain networks.

## Usage

Importing all chains and checking the type of each chain.

```ts
import { allChains, AntelopeChain, EVMChain, CosmosChain } from '@repo/chains'

for (const chain of allChains) {
  switch (chain.chainType) {
    case 'antelope':
      console.log(`Antelope Chain: ${chain.chainName} with ID: ${chain.chainId}`)
      break
    case 'evm':
      console.log(`EVM Chain: ${chain.name} with ID: ${chain.id}`)
      break
    case 'cosmos':
      console.log(`Cosmos Chain: ${chain.name} with ID: ${chain.chainId}`)
      break
    default:
      console.log(`Unknown Chain Type: ${chain.chainType}`)
  }
}

```

Importing only the EVM chains.

```ts
import { evmChains } from '@repo/chains'

for (const chain of evmChains) {
  console.log(`EVM Chain: ${chain.name} with ID: ${chain.id}`)
}