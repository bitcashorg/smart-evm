'use client'
import { subscribeToNewsletter } from '@/app/actions/general'
import { cn, motionProps } from '@/lib/utils'
import type { LangProp } from '@/types/routing.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, buttonVariants, IconDiscord, IconDownRightArrow } from '@repo/ui'
import { motion } from 'framer-motion'
import { LucideCheck, LucideLoader2 } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
// @ts-ignore
import { useFormStatus } from 'react-dom'
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { useSetState } from 'react-use'
import { z } from 'zod'
import { FooterLinks } from './footer-links'

// Schema for form validation with Zod
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  recaptcha: z.string().optional(),
})
const formOptions = { resolver: zodResolver(formSchema) }
type SubcriptionFormData = z.infer<typeof formSchema>

export default function Newsletter({ lang }: LangProp) {
  const [state, setState] = useSetState({
    loading: false,
    data: '',
    error: '',
  })
  const { register, setValue, watch, formState } =
    useForm<SubcriptionFormData>(formOptions)

  const onSubmit = async (formData: FormData) => {
    setState({ loading: true })
    const result = await subscribeToNewsletter(formData)
    setState({
      loading: false,
      data: result?.data ?? '',
      error: result?.error ?? '',
    })
  }

  const { pending } = useFormStatus()

  const recaptchaToken = watch('recaptcha')
  const email = watch('email')
  const isEmailValid =
    !formState.errors.email && email && email.match(/.+@.+\..+/)
  const isReadyToSubmit =
    (recaptchaToken && !formState.errors.email && isEmailValid) || pending

  const newsletterIconResponse = () => {
    if (pending || state.loading)
      return (
        <motion.span key="loading-icon" {...motionProps.iconMotionProps}>
          <LucideLoader2 size={26} className="animate-spin stroke-white" />
        </motion.span>
      )
    if (state.data)
      return (
        <motion.span key="success-icon" {...motionProps.iconMotionProps}>
          <LucideCheck size={26} className="stroke-white" />
        </motion.span>
      )

    return (
      <motion.span key="default-icon" {...motionProps.iconMotionProps}>
        <IconDownRightArrow
          className={cn(
            'size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white',
            { '-rotate-[45deg]': isReadyToSubmit },
          )}
        />
      </motion.span>
    )
  }

  useEffect(() => {
    if (!state.data && !state.error) return
    setState({ data: '', error: '' })
  }, [email])

  return (
    <div
      className="container relative px-0 mt-40 mb-10 sm:px-4"
      id="newsletter"
    >
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        // language="[optional_language]"
        container={{
          element: '#newsletter',
          parameters: {
            badge: 'bottomright', //'[inline|bottomright|bottomleft]', // optional, default undefined
            theme: 'dark', // optional, default undefined
          },
        }}
      >
        <section className="relative z-10 newsletter-wrapper">
          <div className="flex min-h-[460px] w-full max-w-[600px] flex-col items-center justify-center gap-8 px-3 text-center md:gap-11 md:px-0">
            <div className="flex flex-col w-full gap-7">
              <h2 className="newsletterHeading">Sign up for our newsletter</h2>
              <p className="mx-auto sm:text-xl">
                To stay up to date with our progress, announcements and
                exclusive discounts, sign up with your email below:
              </p>
            </div>
            <div className="flex flex-col items-center w-full">
              <form
                // @ts-ignore
                action={onSubmit}
                className="flex h-[62px] w-full max-w-[342px] items-center justify-center gap-2 self-center rounded-full bg-secondary p-1 text-black/90"
              >
                <input
                  {...register('email', { required: 'Email is required' })}
                  placeholder="Your email"
                  type="email"
                  className="block size-full max-w-[calc(100%-58px)] rounded-full bg-transparent px-6 font-semibold placeholder:font-semibold focus-within:outline focus-within:outline-ring"
                  required
                />

                <input
                  type="hidden"
                  {...register('recaptcha', { required: true })}
                />
                <GoogleReCaptcha
                  onVerify={(v) => {
                    const timeout = setTimeout(() => {
                      if (v.toString() && recaptchaToken !== v.toString()) {
                        setValue('recaptcha', v.toString())
                      }

                      clearTimeout(timeout)
                    }, 90000)

                    if (!recaptchaToken) {
                      setValue('recaptcha', v.toString())
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="tertiary"
                  size="icon"
                  radius="full"
                  className="relative m-0 mr-[2px] min-w-[48px] min-h-[48px] rounded-full"
                  disabled={!isReadyToSubmit}
                >
                  {newsletterIconResponse()}
                </Button>
              </form>
              {formState.errors.email || state.error ? (
                <p
                  role="alert"
                  className="mt-2 rounded-full bg-destructive px-4 py-0.5 text-destructive-foreground"
                >
                  {'✖ '}
                  {formState.errors.email?.message}
                  {state.error}
                </p>
              ) : null}
              {state.data ? (
                <p
                  role="alert"
                  className="mt-2 rounded-full bg-success px-4 py-0.5 text-success-foreground"
                >
                  {'✔ '}
                  {state.data}
                </p>
              ) : null}
            </div>
          </div>

          <FooterLinks />
        </section>
      </GoogleReCaptchaProvider>
    </div>
  )
}

function DiscordButton() {
  return (
    <Link
      href="https://discord.gg/KuR48XUxnG"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({
          variant: 'outline',
          radius: 'full',
        }),
        'size-14 border-transparent p-3.5 md:border-accent-500 lg:size-14',
      )}
    >
      <IconDiscord className={'block size-full fill-accent-500'} />
      <span className="sr-only">Discord</span>
    </Link>
  )
}
