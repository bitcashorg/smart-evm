import type { Database, TablesInsert } from '@repo/supabase'
import { createClient } from '@supabase/supabase-js'
import type { Address } from 'viem'
import { appConfig } from '~/config'

// Initialize Supabase client
const supabase = createClient<Database>(
  appConfig.supabase.url,
  appConfig.supabase.anonKey,
)

export async function upsertAuctionDetail(data: TablesInsert<'auction'>) {
  const { data: result, error } = await supabase.from('auction').upsert(
    [
      {
        ...data,
      },
    ],
    {
      onConflict: 'exact_order_id, chain_id',
    },
  )

  if (error) console.error('Error:', error)

  console.log('Result:', result)

  return data
}

export async function upsertOrder(data: TablesInsert<'auction_order'>) {
  const { data: result, error } = await supabase.from('auction_order').upsert(
    [
      {
        ...data,
      },
    ],
    {
      onConflict: 'transactionHash',
    },
  )

  if (error) console.error('Error:', error)

  console.log('Result:', result)

  return data
}

// export async function upsertTransfers(data: TablesInsert<'transfer'>) {
//   console.log('upsert transfers', data)
//   const { data: result, error } = await supabase
//     .from('transfer')
//     .upsert(data, { onConflict: 'trx_hash' })
//     .select()

//   if (error) console.error('Error:', error)

//   console.log('Result:', result)

//   return data
// }

export async function isAddressRegisteredForPresale(
  address: string,
  projectId: number,
): Promise<boolean> {
  console.log('address', address)
  const { data, error } = await supabase
    .from('whitelist')
    .select('*')
    .eq('address', address)
    .eq('project_id', projectId)
    .single()

  console.log('data', data)

  if (error) {
    if (error.code === 'PGRST116') {
      // No matching row found, address is not registered
      return false
    }
    console.error('Error checking presale registration:', error)
    throw error
  }

  return Boolean(data && !error)
}

export async function getPresaleData(projectId: number) {
  const { data, error } = await supabase
    .from('presale')
    .select('*')
    .eq('id', projectId)
    .single()

  if (error) {
    console.error('Error getting presale data:', error)
    throw error
  }

  return data
}

export async function getPresaleDeposits({
  address,
  projectId,
}: { address: Address; projectId: number }) {
  const { data, error } = await supabase
    .from('presale_deposit')
    .select('*')
    .eq('project_id', projectId)
    .eq('address', address)

  if (error) {
    console.error('Error getting presale deposits data:', error)
    throw error
  }

  return data
}
