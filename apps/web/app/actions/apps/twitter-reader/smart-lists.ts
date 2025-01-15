// apps/webapp/actions/smart-lists.ts

import { SmartListService } from '@/services/apps/twitter-reader/smart-list.service'
import { createSupabaseServerClient } from '@/services/supabase/server'

const smartListService = new SmartListService()

export async function getSmartLists(categoryId: string) {
  try {
    const lists = await smartListService.getListsByCategory(categoryId)
    return { data: lists }
  } catch (error) {
    console.error('Error fetching smart lists:', error)
    return { error: 'Failed to fetch lists' }
  }
}

export async function toggleListFollow(listId: string) {
  try {
    const supabase = createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { data: existing } = await supabase
      .from('list_followers')
      .select()
      .eq('list_id', listId)
      .eq('user_id', user.id)
      .single()

    if (existing) {
      await smartListService.unfollowList(listId, user.id)
    } else {
      await smartListService.followList(listId, user.id)
    }

    return { success: true }
  } catch (error) {
    console.error('Error toggling list follow:', error)
    return { error: 'Failed to update list follow status' }
  }
}