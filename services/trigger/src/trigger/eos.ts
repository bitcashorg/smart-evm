import { task } from '@trigger.dev/sdk/v3'
import type { Address } from 'viem'
import { parseUnits } from 'viem'
import { issuePresaleTokens } from '../lib/presale-issuer'
import {
  getPresaleByAddress,
  getWhitelistedAddress,
  isDepositProcessing,
  setPresaleDepositStatus,
  upsertPresaleDeposits,
} from '../lib/supabase'

export const addressActivityTask = task({
  id: 'eos-presale-deposit',
  run: async (payload: EOSDeposit) => {
    console.log('🚀 ~ EOSDeposit', payload)
    console.log(
      `Processing transaction ${payload.trxId} in contract: ${payload.from}, quantity: ${payload.quantity}`,
    )

    try {
      const whitelistedAddress = await getWhitelistedAddress(payload.from)
      const presale = await getPresaleByAddress(payload.to)

      if (!presale || !presale.project || !presale.project.token_address) {
        throw new Error('Invalid presale or project data')
      }

      const valueInTokenUnits = parseUnits(payload.quantity.split('.')[0], 6)

      if (await isDepositProcessing({ depositHash: payload.trxId })) {
        throw new Error(`Deposit already processed: ${payload.trxId}`)
      }

      if (
        !(await setPresaleDepositStatus({
          depositHash: payload.trxId,
          state: 'processing',
        }))
      ) {
        throw new Error(`Error processing deposit: ${payload.trxId}`)
      }

      const issuanceHash = await issuePresaleTokens(
        whitelistedAddress,
        valueInTokenUnits,
        presale.project.token_address as Address,
      )
      if (!issuanceHash) throw new Error('Failed to issue presale tokens')

      const updatedPresale = await upsertPresaleDeposits({
        valueInTokenUnits,
        depositHash: payload.trxId,
        issuanceHash,
      })

      await setPresaleDepositStatus({
        depositHash: payload.trxId,
        state: 'processed',
      })
      console.log('Updated presale', updatedPresale)
    } catch (error) {
      console.error('Error processing transaction', error)
      await setPresaleDepositStatus({
        depositHash: payload.trxId,
        state: 'error',
      })
      throw error
    }
  },
})

interface EOSDeposit {
  trxId: string
  from: string
  quantity: string
  to: string
}
