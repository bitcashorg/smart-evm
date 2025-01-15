'use client'

import { LucideIcons } from '@/components/routes/blog/lucide-icons'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from 'next-share'

export function ShareArticle({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex justify-start pl-5 mt-2 space-x-3">
      <TelegramShareButton url={url} title={title}>
        <LucideIcons.sendIcon />
      </TelegramShareButton>

      <TwitterShareButton url={url} title={title}>
        <LucideIcons.twitter />
      </TwitterShareButton>

      <FacebookShareButton url={url} title={title}>
        <LucideIcons.facebook />
      </FacebookShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LucideIcons.linkedin />
      </LinkedinShareButton>
    </div>
  )
}
