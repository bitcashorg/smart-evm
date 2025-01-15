'use server'

import { type ActionResult, failure, success } from '@/lib/actions'
import { createSupabaseServerClient } from '@/services/supabase'
import { createSafeActionClient } from 'next-safe-action'
import { z } from 'zod'

const schema = z.object({
  account: z
    .string()
    .min(1, 'Account is required')
    .refine((account) => /^[a-z1-5.]{1,12}$/.test(account), {
      message: 'Invalid EOS account format',
    }),
})

export const upsertAccount = createSafeActionClient()
  .schema(schema)
  .action(async (input): Promise<ActionResult<{ account: string }>> => {
    const { account } = input.parsedInput
    const supabase = await createSupabaseServerClient()

    const { data, error } = await supabase
      .from('account')
      .upsert({ account })
      .select('*')
      .single()

    if (error) return failure('DB_OP_FAILURE', error)

    return success(data)
  })
