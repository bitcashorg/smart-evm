// app/api/apps/twitter-reader/smart-lists/[id]/stats/route.ts

import { TwitterClient } from "@/services/apps/twitter-reader/client"
import { createSupabaseServerClient } from "@/services/supabase"
import { NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      const supabase = await createSupabaseServerClient()
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