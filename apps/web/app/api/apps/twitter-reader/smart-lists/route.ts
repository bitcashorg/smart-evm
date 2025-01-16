// app/api/apps/twitter-reader/smart-lists/[id]/route.ts

import { NextResponse } from 'next/server'
import { TwitterClient } from '@/services/apps/twitter-reader/client'
import { createSupabaseServerClient } from '@/services/supabase/server'
import { z } from 'zod'

const querySchema = z.object({
  limit: z.string().optional(),
  timeframe: z.string().optional()
})

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Auth check
    const supabase = await createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Validate query params
    const { searchParams } = new URL(request.url)
    const result = querySchema.safeParse({
      limit: searchParams.get('limit'),
      timeframe: searchParams.get('timeframe')
    })

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid parameters' },
        { status: 400 }
      )
    }

    const client = new TwitterClient()

    // Check access
    const hasAccess = await client.checkListAccess(params.id, user.id)
    if (!hasAccess) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      )
    }

    // Get content
    const data = await client.getSmartListContent(
      params.id,
      user.id,
      {
        limit: result.data.limit ? parseInt(result.data.limit) : undefined
      }
    )

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error in smart list route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    )
  }
}