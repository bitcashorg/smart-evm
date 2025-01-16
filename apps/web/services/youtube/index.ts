'use server'
'use server-only'

import { youtube, type youtube_v3 } from '@googleapis/youtube'

function getYouTubeApiKey() {
  const apiKey = process.env.YOUTUBE_API_KEY || ''
  console.log('🍓 youtubeapiKey', apiKey)
  // if (!apiKey) throw new Error('YouTube API key not configured')
  return apiKey
}

const yt = youtube({
  version: 'v3',
  auth: getYouTubeApiKey(),
})

export async function fetchPublicYouTubePlaylist({
  playlistId,
  maxResults,
}: {
  playlistId: string
  maxResults?: number
}): Promise<YouTubePlaylistItem[]> {
  try {
    const response = await yt.playlistItems.list({
      part: ['snippet'],
      playlistId,
      maxResults: 1000, // to get latest videos
    })

    return (response.data.items || [])
      .sort((a, b) => {
        const dateA = new Date(a.snippet?.publishedAt || 0)
        const dateB = new Date(b.snippet?.publishedAt || 0)
        return dateB.getTime() - dateA.getTime()
      })
      .map(
        (item): YouTubePlaylistItem => ({
          kind: item.kind || '',
          etag: item.etag || '',
          id: item.id || '',
          snippet: {
            publishedAt: item.snippet?.publishedAt || '',
            channelId: item.snippet?.channelId || '',
            title: item.snippet?.title || '',
            description: item.snippet?.description || '',
            thumbnails: {
              default: mapThumbnail(item.snippet?.thumbnails?.default),
              medium: mapThumbnail(item.snippet?.thumbnails?.medium),
              high: mapThumbnail(item.snippet?.thumbnails?.high),
              standard: mapThumbnail(item.snippet?.thumbnails?.standard),
              maxres: mapThumbnail(item.snippet?.thumbnails?.maxres),
            },
            channelTitle: item.snippet?.channelTitle || '',
            playlistId: item.snippet?.playlistId || '',
            position: item.snippet?.position || 0,
            resourceId: {
              kind: item.snippet?.resourceId?.kind || '',
              videoId: item.snippet?.resourceId?.videoId || '',
            },
            videoOwnerChannelTitle: item.snippet?.videoOwnerChannelTitle || '',
            videoOwnerChannelId: item.snippet?.videoOwnerChannelId || '',
          },
        }),
      )
      .slice(0, maxResults)
  } catch (error) {
    console.error('Error fetching playlist:', error)
    return []
  }
}

export async function searchYouTubeChannel({
  channelId,
  query,
  maxResults = 10,
}: {
  channelId: string
  query: string
  maxResults?: number
}): Promise<YouTubeSearchResult[]> {
  try {
    const response = await yt.search.list({
      part: ['snippet'],
      channelId,
      q: query,
      maxResults,
      type: ['video'],
    })

    return (
      response.data.items?.map(
        (item): YouTubeSearchResult => ({
          title: item.snippet?.title || '',
          videoId: item.id?.videoId || '',
          description: item.snippet?.description || '',
          thumbnails: mapThumbnails(item.snippet?.thumbnails),
        }),
      ) || []
    )
  } catch (error) {
    console.error('Error searching channel:', error)
    return []
  }
}

function mapThumbnail(
  thumbnail: youtube_v3.Schema$Thumbnail | null | undefined,
): YouTubeThumbnail {
  return {
    url: thumbnail?.url || '',
    width: thumbnail?.width || 0,
    height: thumbnail?.height || 0,
  }
}

function mapThumbnails(
  thumbnails: youtube_v3.Schema$ThumbnailDetails | null | undefined,
): Record<string, YouTubeThumbnail> {
  const result: Record<string, YouTubeThumbnail> = {}
  if (!thumbnails) return result

  for (const [key, value] of Object.entries(thumbnails)) {
    if (value) result[key] = mapThumbnail(value)
  }
  return result
}

export interface YouTubeThumbnail {
  url: string
  width: number
  height: number
}

export interface YouTubePlaylistItem {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: YouTubeThumbnail
      medium: YouTubeThumbnail
      high: YouTubeThumbnail
      standard: YouTubeThumbnail
      maxres: YouTubeThumbnail
    }
    channelTitle: string
    playlistId: string
    position: number
    resourceId: {
      kind: string
      videoId: string
    }
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
  }
}

export interface YouTubeSearchResult {
  title: string
  videoId: string
  description: string
  thumbnails: Record<string, YouTubeThumbnail>
}
