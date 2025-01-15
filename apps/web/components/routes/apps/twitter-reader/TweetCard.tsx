// components/twitter-reader/TweetCard.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Bookmark, Share, ExternalLink, MoreVertical } from 'lucide-react'
import type { Tweet } from './types'

interface TweetCardProps {
  thread: Tweet
  isReadingMode: boolean
  styles: {
    background: string
    text: string
    secondary: string
  }
  lineSpacing: 'compact' | 'normal' | 'spacious'
}

const spacingClasses = {
  compact: 'leading-tight',
  normal: 'leading-normal',
  spacious: 'leading-loose'
}

export function TweetCard({ thread, isReadingMode, styles, lineSpacing }: TweetCardProps) {
  const [showReplies, setShowReplies] = useState(false)

  const handleBookmark = () => {
    console.log('Bookmarked tweet:', thread.id)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Tweet from ${thread.author}`,
          text: thread.tweets[0],
          url: `https://twitter.com/${thread.handle}/status/${thread.id}`,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    }
  }

  const handleViewOnTwitter = () => {
    window.open(`https://twitter.com/${thread.handle}/status/${thread.id}`, '_blank')
  }

  return (
    <article className={`mb-6 ${isReadingMode ? `${styles.background} ${styles.text}` : 'bg-white rounded-lg shadow-sm'
      }`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={thread.avatarUrl || "/api/placeholder/40/40"}
              className="rounded-full w-10 h-10"
              alt={`${thread.author}'s avatar`}
            />
            <div>
              <div className="font-medium">{thread.author}</div>
              <div className={`text-sm ${styles.secondary}`}>
                {thread.handle} · {thread.timestamp}
              </div>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
              >
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem onClick={handleBookmark} className="gap-2">
                <Bookmark className="h-4 w-4" />
                <span>Bookmark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleShare} className="gap-2">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleViewOnTwitter} className="gap-2">
                <ExternalLink className="h-4 w-4" />
                <span>View on Twitter</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className={`space-y-4 ${spacingClasses[lineSpacing]}`}>
          {thread.tweets?.map((tweet, index) => (
            <p key={index}>{tweet}</p>
          ))}
        </div>

        {thread.replies && thread.replies.length > 0 && (
          <div className="mt-4 border-t pt-4">
            <Button
              variant="ghost"
              onClick={() => setShowReplies(!showReplies)}
              className="text-blue-500 hover:text-blue-600"
            >
              {showReplies ? 'Hide' : 'Show'} replies ({thread.replies.length})
            </Button>

            {showReplies && (
              <div className="mt-4 space-y-4">
                {thread.replies.map((reply) => (
                  <div key={reply.id} className="pl-4 border-l-2 border-gray-200">
                    <div className="flex items-center gap-2">
                      <img
                        src={reply.avatarUrl}
                        className="w-8 h-8 rounded-full"
                        alt={`${reply.author}'s avatar`}
                      />
                      <div>
                        <span className="font-medium">{reply.author}</span>
                        <span className={`text-sm ${styles.secondary} ml-2`}>
                          {reply.timestamp}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2">{reply.content}</p>

                    {reply.replies && reply.replies.length > 0 && (
                      <div className="mt-3 pl-8 space-y-4">
                        {reply.replies.map((nestedReply) => (
                          <div key={nestedReply.id} className="border-l-2 border-gray-200 pl-4">
                            <div className="flex items-center gap-2">
                              <img
                                src={nestedReply.avatarUrl}
                                className="w-8 h-8 rounded-full"
                                alt={`${nestedReply.author}'s avatar`}
                              />
                              <div>
                                <span className="font-medium">{nestedReply.author}</span>
                                <span className={`text-sm ${styles.secondary} ml-2`}>
                                  {nestedReply.timestamp}
                                </span>
                              </div>
                            </div>
                            <p className="mt-2">{nestedReply.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  )
}