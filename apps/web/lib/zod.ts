import { isAddress } from 'viem'
import { z } from 'zod'

export const RegisterAddressSchema = z.object({
  project_id: z.number(),
  address: z.string().refine(isAddress, {
    message: 'Invalid address format',
  }),
  account: z.string(),
})
