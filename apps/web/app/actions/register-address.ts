'use server'

import { type ActionResult, failure, success } from '@/lib/actions'
import { createSupabaseServerClient } from '@/services/supabase'
import type { Tables } from '@repo/supabase'
import { createSafeActionClient } from 'next-safe-action'
import { isAddress } from 'viem'
import { z } from 'zod'

const registerAddressSchema = z.object({
  address: z.string().refine((value) => isAddress(value), {
    message: 'Invalid address format',
  }),
  project_id: z.number().int().positive('Project ID must be a positive integer'),
  account: z
    .string()
    .min(1, 'Account is required')
    .refine((account) => /^[a-z1-5.]{1,12}$/.test(account), {
      message: 'Invalid EOS account format',
    }),
  signed_message: z.string().min(1, 'Signature is required'),
})

export const registerAddress = createSafeActionClient()
  .schema(registerAddressSchema)
  .action(async (input): Promise<ActionResult<Tables<'whitelist'>>> => {
    const supabase = await createSupabaseServerClient()
    const { data, error } = await supabase
      .from('whitelist')
      .insert(input.parsedInput)
      .select('*')
      .single()

    if (error) return failure('DB_OP_FAILURE', error)

    return success(data)
  })
