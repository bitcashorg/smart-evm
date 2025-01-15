export async function fetchPublicYouTubePlaylist(
  playlistId: string,
  maxResults = 50, // Maximum results per request allowed by YouTube API
): Promise<YouTubePlaylistItem[]> {
  const apiKey = process.env.YOUTUBE_API_KEY || 'AIzaSyD6lElC6MK6VJAoeQq2slM6Onj6BBCfZlM'

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=${maxResults}&order=date`
  // console.log('YOUTUBE_API_KEY', { apiKey, playlistId, maxResults })
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return data.items
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error)
    return []
  }
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
      default: { url: string; width: number; height: number }
      medium: { url: string; width: number; height: number }
      high: { url: string; width: number; height: number }
      standard: { url: string; width: number; height: number }
      maxres: { url: string; width: number; height: number }
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
