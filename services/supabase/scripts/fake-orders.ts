import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
import type { TablesInsert } from '../src/supa.types'

const supabase = createClient(
  'https://mitkjznioyrucenuzsdb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdGtqem5pb3lydWNlbnV6c2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzA3MzgsImV4cCI6MjAyODcwNjczOH0.uVdiJfaonQfWvL--71QFAdiXGMiN1SRYlYGLNiSuNC0',
)

const fakeOrders: TablesInsert<'orders'>[] = []

console.log('🧑🏻‍💻 Generating fake orders...')
for (let i = 0; i < 1000; i++) {
  fakeOrders.push({
    auction_id: 9,
    buy_amount: faker.number.int({ min: 1, max: 1000 }), //between 1 and 1000 units
    created_at: faker.date.past().toISOString(),
    price: faker.number.int({ min: 1, max: 1000 }), //between 1 and 10 in cents
    sell_amount: faker.number.int({ min: 1, max: 1000 }), //between 1 and 1000 units
    timestamp: faker.date.recent().toISOString(),
    transactionHash: faker.finance.ethereumAddress(),
    user_id: faker.number.int(),
  })
}

console.log('🧑🏻‍💻 Saving fake orders...')
try {
  const deleteRes = await supabase.from('orders').delete().neq('auction_id', 0) // This condition ensures all rows are deleted

  if (deleteRes.error) {
    console.error('🧑🏻‍💻 Error deleting existing orders!', deleteRes)
  } else {
    console.log('🧑🏻‍💻 Existing orders deleted!', deleteRes)
  }
  const res = await supabase.from('orders').insert(fakeOrders)

  if (res.error) {
    console.error('🧑🏻‍💻 Error saving fake orders!', res)
  } else {
    console.log('🧑🏻‍💻 Fake orders saved!', res)
  }
} catch (err) {
  console.error('🧑🏻‍💻 Error saving fake orders!', err)
}
