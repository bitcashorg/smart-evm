// apps/webapp/services/smart-lists/index.ts

import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'
import type { 
  SmartList, 
  SmartListWithDetails,
  ListMember 
} from './types'

export class SmartListService {
  private supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  async getListsByCategory(categoryId: string): Promise<SmartList[]> {
    const { data, error } = await this.supabase
      .from('smart_lists')
      .select('*')
      .eq('category_id', categoryId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  async getListWithDetails(listId: string): Promise<SmartListWithDetails> {
    const { data, error } = await this.supabase
      .from('smart_lists')
      .select(`
        *,
        members:list_members(
          *,
          account:accounts(*)
        )
      `)
      .eq('id', listId)
      .single()

    if (error) throw error
    return data
  }

  async followList(listId: string, userId: string): Promise<void> {
    const { error } = await this.supabase
      .from('list_followers')
      .insert({ list_id: listId, user_id: userId })

    if (error) throw error
  }

  async unfollowList(listId: string, userId: string): Promise<void> {
    const { error } = await this.supabase
      .from('list_followers')
      .delete()
      .eq('list_id', listId)
      .eq('user_id', userId)

    if (error) throw error
  }
}