'use server'

import { handleAxiosError } from '@/lib/utils'
import { createSupabaseServerClient } from '@/services/supabase'
import { presaleInsertSchema } from '@repo/supabase'
import { fromEntries } from '@repo/utils'
import axios from 'axios'
import { cookies } from 'next/headers'
import { Resend } from 'resend'
import { z } from 'zod'

// get session object by id
export async function getSesssion(formData: FormData) {
  console.log('💥 actions: getSession')
  try {
    const { session_id } = fromEntries(formData)
    console.log(`😊 getting session object for ${session_id}`)
    const supabase = await createSupabaseServerClient()
    const { data, error } = await supabase
      .from('session')
      .select('*')
      .eq('id', String(session_id).trim())
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error) console.log('🤌🏻🤌🏻🤌🏻', error)
    if (!data) return null
    return data
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

async function validateRecaptcha(recaptchaToken: string): Promise<boolean> {
  const response = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    {},
    {
      params: {
        secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      },
    },
  )

  return response.data.success
}

export async function subscribeToNewsletter(
  data: FormData,
): Promise<ActionState> {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const NewsletterSchema = z.object({
    email: z.string().email(),
    recaptcha: z.string(),
  })

  // Convert FormData to a plain object to validate
  const formData = Object.fromEntries(data)
  console.log('✅ formData:', formData)
  try {
    // Validate the form data against the schema
    const validatedData = NewsletterSchema.parse(formData)

    // Validate recaptcha with Google's servers
    const isRecaptchaValid = await validateRecaptcha(validatedData.recaptcha)
    if (!isRecaptchaValid) throw new Error('Invalid recaptcha')

    const res = await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID || '',
      email: validatedData.email,
    })

    if (res.error) throw res.error

    console.log('✅  newsletter reg', validatedData.email)
    return { data: `${validatedData.email} successfully registered.` }
  } catch (error) {
    console.log('🚨 newsletter reg error', error)
    return { error: 'Unexpected error' }
  }
}

async function getCookieData() {
  const cookieData = cookies().getAll()
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData)
    }, 1000)
  )
}

// generate dub.co links
export async function generateShortLink(url: string, withCookies = true) {
  let cookieStorage: ReturnType<typeof cookies>;
  let getShareLinkCookies: { value: string } | undefined;
  
  try {
    if (withCookies) {
      cookieStorage = await getCookieData() as ReturnType<typeof cookies>;
      getShareLinkCookies = cookieStorage.get('bitlauncher-share-link')

      if (getShareLinkCookies?.value) {
        try {
          JSON.parse(getShareLinkCookies.value)
        } catch (e) {
          console.warn('Invalid cookie format:', e)
          getShareLinkCookies = undefined
        }
      }
    }

    const resolved: DubShareLinkResponse = !getShareLinkCookies || !withCookies
      ? await axios
          .post(
            `https://api.dub.co/links?workspaceId=${process.env.DUB_WORKSPACE_ID}`,
            {
              domain: 'bitcash.to',
              url,
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.DUB_API_KEY}`,
                'Content-Type': 'application/json',
              },
            },
          )
          .then((res) => res.data)
      : (JSON.parse(getShareLinkCookies.value) as DubShareLinkResponse)

    if (!resolved) throw new Error('Failed to generate short link')

    return {
      data: {
        key: resolved.key,
        shortLink: resolved.shortLink,
        qrCode: resolved.qrCode,
      },
      error: null,
    }
  } catch (error) {
    const errorData = handleAxiosError(error)
    console.log('Failed to generate short link: ==> ', errorData)
    return {
      data: null,
      error: errorData.data.error.message,
    }
  }
}

export interface DubShareLinkResponse {
  key: string
  shortLink: string
  qrCode: string
}

export type ActionState = {
  data?: string
  error?: string
}
