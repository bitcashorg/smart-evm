import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import type { Database } from '../src/supa.types'

// Load environment variables from .env file
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
  console.error('Missing environment variables.')
  process.exit(1)
}

const supabase = createClient<Database>(supabaseUrl, supabaseServiceRoleKey)

async function callEdgeFunction() {
  try {
    const { data, error } = await supabase.functions.invoke('embed', {
      body: JSON.stringify({ message: 'Hello from the client!' }),
    })

    if (error) throw error

    console.log('Edge function response:', data)
    return data
  } catch (error) {
    console.error('Error calling edge function:', error)
    throw error
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function callEdgeFunctionMultipleTimes(times: number, delayMs: number) {
  for (let i = 0; i < times; i++) {
    console.log(`Call ${i + 1}:`)
    try {
      await callEdgeFunction()
    } catch (error) {
      console.error(`Error in call ${i + 1}:`, error)
    }
    if (i < times - 1) await delay(delayMs)
  }
}

// Usage
callEdgeFunctionMultipleTimes(100, 500)
  .then(() => {
    console.log('All calls completed')
  })
  .catch((error) => {
    console.error('Error in batch execution:', error)
  })
