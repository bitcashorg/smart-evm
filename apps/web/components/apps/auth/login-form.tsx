// components/apps/auth/login-form.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Twitter } from 'lucide-react'
import { toast } from 'sonner'

export function LoginForm() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleTwitterLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'twitter',
        options: {
          redirectTo: `${window.location.origin}/en/apps/auth/callback`,
          queryParams: {
            access_type: 'offline',
            force_verify: 'true'
          }
        }
      })

      if (error) {
        console.error('Auth error:', error)
        toast.error('Authentication failed. Please try again.')
        throw error
      }
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Failed to connect to Twitter. Please try again.')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign in to Bitlauncher Apps</CardTitle>
        <CardDescription>
          Access your Bitlauncher applications and settings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Button
            onClick={handleTwitterLogin}
            className="w-full"
            variant="outline"
          >
            <Twitter className="mr-2 h-4 w-4" />
            Continue with Twitter
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}