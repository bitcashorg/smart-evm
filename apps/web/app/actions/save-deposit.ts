'use server'

import { type ActionResult, failure, success } from '@/lib/actions'
import { createSupabaseServerClient } from '@/services/supabase'
import { type Tables, presaleDepositInsertSchema } from '@repo/supabase'
import { chainTypeSchema } from '@repo/supabase'
import { createSafeActionClient } from 'next-safe-action'
import { z } from 'zod'

const extendedPresaleDepositInsertSchema = presaleDepositInsertSchema.extend({
  chain_type: chainTypeSchema,
  chainId: z.string(),
})

//Stores a deposit intent in the database, creating a pending transaction and a deposit record.
export const savePresaleDepositIntent = createSafeActionClient()
  .schema(extendedPresaleDepositInsertSchema)
  .action(
    async ({
      parsedInput: transfer,
    }): Promise<ActionResult<Tables<'presale_deposit'>>> => {
      try {
        console.log('savePresaleDepositIntent', transfer)
        const supabase = await createSupabaseServerClient()

        const transaction = await supabase
          .from('transaction')
          .insert({
            hash: transfer.deposit_hash,
            chain_type: transfer.chain_type,
            chain_id: transfer.chainId,
            trx_type: 'presale_deposit',
            final: false,
          })
          .select()

        if (transaction.error)
          return failure('DB_OP_FAILURE', transaction.error)

        const deposit = await supabase
          .from('presale_deposit')
          .insert({
            account: transfer.account,
            address: transfer.address,
            amount: transfer.amount,
            deposit_hash: transfer.deposit_hash,
            issuance_hash: transfer.issuance_hash,
            presale_id: transfer.presale_id,
            project_id: transfer.project_id,
            state: transfer.state,
            created_at: transfer.created_at,
          })
          .select()

        if (deposit.error) return failure('DB_OP_FAILURE', deposit.error)

        return success(deposit.data[0])
      } catch (error) {
        return failure('UNEXPECTED_ERROR', error)
      }
    },
  )
