// app/api/apps/twitter-reader/smart-lists/[id]/members/route.ts

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