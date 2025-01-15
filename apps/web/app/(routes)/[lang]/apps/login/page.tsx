// app/(routes)/[lang]/apps/login/page.tsx
import { LoginForm } from '@/components/apps/auth/login-form'

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <LoginForm />
    </div>
  )
}