import type { Database, Enums, Tables, TablesInsert } from '@repo/supabase'
import { type SupabaseClient, createClient } from '@supabase/supabase-js'
import { uniqBy } from 'lodash'
import type { Address } from 'viem'
import { appConfig } from '../config'

// Initialize Supabase client
export const supabase = createClient<Database>(
  appConfig.supabase.url,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

export async function upsertPresaleDeposits({
  valueInTokenUnits,
  depositHash,
  issuanceHash,
}: {
  valueInTokenUnits: bigint
  depositHash: string
  issuanceHash: string
}) {
  const transaction = await supabase
    .from('transaction')
    .update({
      final: true,
    })
    .eq('hash', depositHash)
    .select()
    .single()

  if (transaction.error) {
    console.error('Error:', transaction.error)
    return false
  }

  console.log('Result:', transaction.data)

  const deposit = await supabase
    .from('presale_deposit')
    .update({
      issuance_hash: issuanceHash,
    })
    .eq('deposit_hash', depositHash)
    .select()
    .single()

  if (deposit.error) {
    console.error('Error updating presale deposit:', deposit.error)
    return false
  }
  console.log('Update deposit in supabase', deposit.data)

  const currentPresale = await supabase
    .from('presale')
    .select('total_raised')
    .eq('id', deposit.data.presale_id)
    .single()

  if (currentPresale.error) {
    console.error('Error fetching current total raised:', currentPresale.error)
    return false
  }
  const allAccounts = await supabase
    .from('presale_deposit')
    .select('account')
    .eq('presale_id', deposit.data.presale_id)

  if (allAccounts.error) {
    console.error('Error fetching counting accounts:')
    return false
  }

  const uniqueAccounts = uniqBy(allAccounts.data, 'account')

  console.log('Total unique presale_deposit accounts:', uniqueAccounts)

  const newTotalRaised =
    Number(currentPresale.data.total_raised) + Number(valueInTokenUnits)
  console.log(
    'Current Total Raised:',
    currentPresale.data.total_raised,
    'Value in Token Units:',
    valueInTokenUnits,
    'New Total Raised:',
    newTotalRaised,
  )

  const presale = await supabase
    .from('presale')
    .update({
      total_raised: newTotalRaised,
      contributors: uniqueAccounts.length,
    })
    .eq('id', deposit.data.presale_id)
    .select()

  if (presale.error) {
    console.error('Error updating presale total raised:', presale.error)
    return false
  }

  return true
}

export async function insertTransaction(transaction: TablesInsert<'transaction'>) {
  const result = await supabase.from('transaction').insert(transaction).select()
  if (!result) {
    console.error('Error inserting transaction:', transaction)
    return false
  }
  return true
}

export async function getPresaleByAddress(address: string) {
  const { data: presaleAddress, error: presaleAddressError } = await supabase
    .from('presale_address')
    .select('*')
    .ilike('deposit_address', address)

  if (!presaleAddress?.[0]?.presale_id) {
    console.error('Error fetching presale by address:', presaleAddressError)
    return null
  }

  console.log('GetPresaleByAddress', address)
  const { data, error } = await supabase
    .from('presale')
    .select('*, project(*)') // Fetch associated project through presale.project_id
    .eq('id', presaleAddress?.[0]?.presale_id) // Use optional chaining to avoid TypeError
    .single()

  if (error) {
    console.error('Error fetching presale by address:', error)
    return null
  }

  return data
}

export async function setPresaleDepositStatus({
  depositHash,
  state,
}: {
  depositHash: string
  state: Database['public']['Enums']['state']
}) {
  const { data, error } = await supabase
    .from('presale_deposit')
    .update({ state })
    .eq('deposit_hash', depositHash)
    .select()
    .single()

  if (error) {
    console.error('Error updating presale deposit status:', error)
    return null
  }

  return data
}

export async function getProcessedPresaleDeposits({
  address,
  projectId,
  supabase,
}: { address: Address; projectId: number; supabase: SupabaseClient }) {
  const { data, error } = await supabase
    .from('presale_deposit')
    .select('*')
    .eq('project_id', projectId)
    .eq('address', address)
    .eq('state', 'processed')

  if (error) {
    console.error('Error getting presale deposits data:', error)
    throw error
  }

  return data
}

export async function isDepositProcessing({
  depositHash,
}: {
  depositHash: string
}): Promise<boolean> {
  const { data, error } = await supabase
    .from('presale_deposit')
    .select('deposit_hash')
    .eq('deposit_hash', depositHash)
    .in('state', ['processing', 'processed'])

  if (error) {
    console.error('Error checking deposit processed status:', error)
    return false
  }

  return data?.length > 0
}

export async function getPresaleData({ projectId }: { projectId: number }) {
  const { data, error } = await supabase
    .from('presale')
    .select('*, presale_address(*)')
    .eq('project_id', projectId)
    .single()

  if (error) {
    console.error('Error fetching presale data:', error)
    throw error
  }

  return data as Tables<'presale'> & { presale_address: Tables<'presale_address'>[] }
}

export async function getWhitelistedAddress(account: string) {
  const { data, error } = await supabase
    .from('whitelist')
    .select('*')
    .eq('account', account)
    .eq('project_id', 1) // TODO: make this dynamic
    .single()

  if (error || !data.address) {
    console.error('Error fetching whitelisted address:', error)
    throw new Error('Error fetching whitelisted address')
  }

  return data.address as Address
}

export async function createDepositAsProcessing({
  deposit_hash,
  address,
  account,
  amount,
  presale_id,
  project_id,
}: TablesInsert<'presale_deposit'>): Promise<Tables<'presale_deposit'> | null> {
  const { data, error } = await supabase
    .from('presale_deposit')
    .insert({
      account,
      deposit_hash,
      address,
      amount,
      presale_id,
      project_id,
      state: 'processing',
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating deposit as processing:', error)
    throw error
  }

  return data
}
