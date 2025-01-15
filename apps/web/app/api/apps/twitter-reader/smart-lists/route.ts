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
    const supabase = createSupabaseServerClient()
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

// app/api/apps/twitter-reader/smart-lists/categories/route.ts

export async function GET() {
  try {
    const supabase = createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const client = new TwitterClient()
    const categories = await client.getCategories()

    return NextResponse.json({ data: categories })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
}

// app/api/apps/twitter-reader/smart-lists/[id]/review/route.ts

const reviewSchema = z.object({
  memberId: z.string().uuid(),
  status: z.enum(['approved', 'rejected']),
  notes: z.string().optional()
})

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Auth check
    const supabase = createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Validate request body
    const body = await request.json()
    const result = reviewSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    const client = new TwitterClient()
    await client.updateMemberStatus(
      result.data.memberId,
      result.data.status,
      user.id,
      result.data.notes
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating member status:', error)
    return NextResponse.json(
      { error: 'Failed to update status' },
      { status: 500 }
    )
  }
}

// app/api/apps/twitter-reader/smart-lists/[id]/queue/route.ts

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const client = new TwitterClient()
    const queue = await client.getTopicQueue(params.id)

    return NextResponse.json({ data: queue })
  } catch (error) {
    console.error('Error fetching review queue:', error)
    return NextResponse.json(
      { error: 'Failed to fetch queue' },
      { status: 500 }
    )
  }
}

// app/api/apps/twitter-reader/smart-lists/[id]/members/route.ts

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const client = new TwitterClient()
    const members = await client.getTopicMembers(params.id)

    return NextResponse.json({ data: members })
  } catch (error) {
    console.error('Error fetching members:', error)
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    )
  }
}

// app/api/apps/twitter-reader/smart-lists/[id]/stats/route.ts

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const client = new TwitterClient()
    const stats = await client.getTopicStats(params.id)

    return NextResponse.json({ data: stats })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}