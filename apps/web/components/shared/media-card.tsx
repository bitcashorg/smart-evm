import { VideoDialog } from '@/components/dialogs/video-dialog';
import { cn } from '@/lib/utils'; // Import the utility function
import type { YouTubePlaylistItem } from '@/services/youtube/index';
import type { LangProp } from '@/types/routing.type';
import { Card, CardContent } from '@repo/ui';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export function MediaCard({ video, lang, className }: MediaCardProps) {
  return (
    <VideoDialog
      lang={lang}
      video={video}
      trigger={
        <li className={cn('list-none group p-0', className)}>
          <Card className="p-0 overflow-hidden list-none bg-transparent cursor-pointer border-muted group h-full md:max-h-[465px]">
            <div className="m-3">
              <figure className="relative h-[215px] w-full overflow-hidden rounded-md">
                <Image
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  sizes="(max-width: 768px) 350px, (max-width: 1200px) 800px, 600px"
                  loading="lazy"
                  className="object-cover transition-all ease-in-out rounded-md bg-zoom"
                  fill
                />
              </figure>
            </div>
            <CardContent className="px-3 mt-2">
              <p className="pt-3 font-semibold leading-tight text-center mb-overflow-hidden truncate_text truncate_text--3-lines text-md">
                <Balancer>{video.snippet.title}</Balancer>
              </p>
            </CardContent>
          </Card>
        </li>
      }
    />
  )
}

export interface MediaCardProps extends LangProp {
  video: YouTubePlaylistItem
  className?: string // Add className prop to the interface
}
