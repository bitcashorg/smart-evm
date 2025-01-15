// components/ui/auth/social-auth.tsx
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@/components/ui/button'
import { Github, Twitter } from 'lucide-react'

export function SocialAuth() {
  const supabase = createClientComponentClient()

  const handleSocialLogin = async (provider: 'twitter' | 'google' | 'github') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })
      if (error) throw error
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="grid gap-4">
      <Button
        variant="outline"
        onClick={() => handleSocialLogin('twitter')}
      >
        <Twitter className="mr-2 h-4 w-4" />
        Continue with Twitter
      </Button>

      <Button
        variant="outline"
        onClick={() => handleSocialLogin('github')}
      >
        <Github className="mr-2 h-4 w-4" />
        Continue with GitHub
      </Button>

      <Button
        variant="outline"
        onClick={() => handleSocialLogin('google')}
      >
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
          {/* Google icon SVG */}
        </svg>
        Continue with Google
      </Button>
    </div>
  )
}