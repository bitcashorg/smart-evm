'use client'

import { BotCard } from '@/components/ai-assistant/crypto-ui'
import { useState } from 'react'

interface Video {
  thumbnailUrl: string
  videoUrl: string
  title: string
}

export function AIMedia({
  title,
  description,
  videos,
}: {
  title: string
  description?: string
  videos: Video[]
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const handleVideoChange = (index: number) => {
    setCurrentVideoIndex(index)
  }

  const remainingVideos = videos.filter(
    (_, index) => index !== currentVideoIndex,
  )

  return (
    <BotCard>
      <div className="aspect-video w-full mb-4">
        <iframe
          src={videos[currentVideoIndex].videoUrl}
          title={videos[currentVideoIndex].title}
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {remainingVideos.map((video, index) => (
          <div
            key={video.thumbnailUrl}
            className="relative group cursor-pointer"
            onClick={() => handleVideoChange(videos.indexOf(video))}
          >
            <img
              src={video.thumbnailUrl}
              // alt={video.title}
              className="w-full h-full rounded-lg hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
      </div>
    </BotCard>
  )
}
