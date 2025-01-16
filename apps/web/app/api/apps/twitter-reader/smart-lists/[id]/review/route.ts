// app/api/apps/twitter-reader/smart-lists/[id]/review/route.ts

import { TwitterClient } from "@/services/apps/twitter-reader/client"
import { createSupabaseServerClient } from "@/services/supabase"
import { NextResponse } from "next/server"
import { z } from "zod"

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
      const supabase = await createSupabaseServerClient()
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