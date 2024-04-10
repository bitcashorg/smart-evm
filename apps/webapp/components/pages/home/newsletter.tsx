'use client'

import { subscribeToNewsletter } from '@/actions'
import { Button } from '@/components/ui/button'
import { IconBitlauncher, IconDownRightArrow } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useFormStatus } from 'react-dom'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { useAsyncFn } from 'react-use'
import { z } from 'zod'

// Schema for form validation with Zod
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  recaptcha: z.string().optional()
})
const formOptions = { resolver: zodResolver(formSchema) }
type SubcriptionFormData = z.infer<typeof formSchema>

export function Newsletter() {
  const { register, setValue, watch, formState } =
    useForm<SubcriptionFormData>(formOptions)
  const [state, onSubmit] = useAsyncFn(subscribeToNewsletter)
  const { pending } = useFormStatus()

  const recaptchaToken = watch('recaptcha')
  const email = watch('email')
  const isEmailValid =
    !formState.errors.email && email && email.match(/.+@.+\..+/)
  const isReadyToSubmit = (recaptchaToken && !Boolean(formState.errors.email) && isEmailValid) || pending

  return (
    <section className="newsletter-wrapper">
      <div className="flex h-[460px] w-full max-w-[600px] flex-col gap-8 md:gap-11 items-center justify-center text-center">
        <div className="flex flex-col gap-7 w-full">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto sm:text-xl">
            To stay up to date with our progress, announcements and exclusive discounts, sign up with your email below:
          </p>
        </div>

        <form
          action={onSubmit}
          className="relative flex items-center justify-center self-center w-full max-w-[342px] h-[62px] gap-2 bg-secondary rounded-full p-1 text-black/90"
        >
          <input
            {...register('email', { required: 'Email is required' })}
            placeholder="Your email"
            type="email"
            className="placeholder:font-semibold font-semibold block bg-transparent px-6 size-full max-w-[calc(100%-54px)] focus-within:outline focus-within:outline-ring rounded-full"
            required
          />
          {formState.errors.email && (
            <p role="alert" className="bg-destructive absolute -bottom-9 w-max text-destructive-foreground px-4 py-0.5 rounded-full">
              {formState.errors.email?.message}
            </p>
          )}
          {state.value && state.value?.data ? (
            <p role="alert" className="bg-success absolute -bottom-9 w-max text-success-foreground px-4 py-0.5 rounded-full">
              {'✔ '}{state.value.data}
            </p>
          ) : null}
          <input type="hidden" {...register('recaptcha', { required: true })} />
          <GoogleReCaptcha
            onVerify={v => {
              if (v.toString() && !recaptchaToken) {
                setValue('recaptcha', v.toString() || '')
              }
            }}
          />
          <Button
            type="submit"
            variant="accent"
            size="icon"
            radius="full"
            className="relative rounded-full p-4 m-0 size-auto"
            disabled={!isReadyToSubmit}
          >
            <IconDownRightArrow className={cn('transition-all [&_path]:stroke-white size-4 group-hover:-rotate-[45deg] group-focus-within:-rotate-[45deg]', { '-rotate-[45deg]': isReadyToSubmit })} />
          </Button>
        </form>
      </div>
      <div className="flex items-center justify-between w-full h-[230px] bg-primary rounded-b-3xl lg:px-24 md:px-10 px-4 flex-wrap">
        <Link href="/" prefetch>
          <IconBitlauncher className="w-40 h-8 md:w-56 md:h-11" />
        </Link>
        <p className="hidden md:block text-xs">
          © 2021 bitlauncher based in Silcon Valley
        </p>
        <Link href="/privacy-policy-tos" className="focus-within:underline hover:underline underline-offset-2">
          Privacy Policy & TOS
        </Link>
        <p className="block md:hidden w-full text-xs">
          © 2021 bitlauncher based in Silcon Valley
        </p>
      </div>
    </section>
    // </div>
  )
}
