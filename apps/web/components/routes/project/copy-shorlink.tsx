'use client'
import { generateShortLink } from '@/app/actions/general'
import { useCopyShortLink } from '@/hooks/use-copy-shortlink'
import { useReferral } from '@/hooks/use-referral'
import { useSession } from '@/hooks/use-session'
import { useSupabaseClient } from '@/services/supabase/client'
import { AnimatePresence } from 'framer-motion'
import { LucideCheck, LucideLoader2, LucideShare, LucideX } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export function CopyShortlinkIcon() {
  const { copyToClipboard, status } = useCopyShortLink()
  return (
    <button
      type="button"
      key={'share-shortlink'}
      onClick={copyToClipboard}
      className="transition-all relative flex justify-center items-center size-[50px] hover:bg-white/10 rounded-full [&>svg]:size-[32px]"
    >
      <AnimatePresence>{iconsMap[status]}</AnimatePresence>
    </button>
  )
}

const iconsMap = {
  loading: <LucideLoader2 size={26} className="animate-spin stroke-accent-500" />,
  copied: <LucideCheck size={26} className="stroke-success" />,
  error: <LucideX size={26} className="stroke-destructive" />,
  default: <LucideShare size={26} className="stroke-accent-500" />,
}
