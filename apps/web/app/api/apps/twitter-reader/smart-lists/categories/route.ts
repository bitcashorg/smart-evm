import { TwitterClient } from "@/services/apps/twitter-reader/client"
import { createSupabaseServerClient } from "@/services/supabase"
import { NextResponse } from "next/server"

// Export the GET handler using named export
export const GET = async () => {
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