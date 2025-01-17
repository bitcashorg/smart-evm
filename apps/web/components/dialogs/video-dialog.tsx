'use client'

import { cn } from '@/lib/utils'
import type { LangProp } from '@/types/routing.type'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui'
import { useEffect } from 'react'

const BASE_YT_EMBED_URL = 'https://www.youtube.com/embed/'

export function VideoDialog({ video, trigger }: VideoDialogProps) {
  const videoSource = BASE_YT_EMBED_URL + video.snippet.resourceId.videoId
  const isPlaylist = videoSource.includes('videoseries')

  useEffect(() => {
    if (!isPlaylist) return

    const timeout = setTimeout(() => {
      const playlistArrow = document.querySelector('.playlist-pointer')

      if (!playlistArrow) return

      playlistArrow.classList.remove('playlist-pointer')

      clearTimeout(timeout)
    }, 30000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="sm:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>{video.snippet.title}</DialogTitle>
          <DialogDescription>{video.snippet.description}</DialogDescription>
        </DialogHeader>

        <div className="video-wrapper">
          <div className={cn({ 'playlist-pointer': isPlaylist })} />
          <iframe
            src={videoSource}
            rel="0"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export interface VideoDialogProps extends LangProp {
  video: CustomVideoType
  trigger: React.ReactNode
}

export interface CustomVideoType {
  snippet: {
    title: string
    description: string
    resourceId: {
      videoId: string
    }
  }
}
