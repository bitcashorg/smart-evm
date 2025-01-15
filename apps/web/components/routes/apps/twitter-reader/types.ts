// types/twitter-reader.types.ts

export interface TopicCategory {
  name: string
  description: string
  lists: readonly List[]
}

export interface List {
  id: string
  name: string
  description: string
  memberCount: number
  followerCount: number
  tags: readonly string[]
}

export interface Tweet {
  id: number
  listId: string
  author: string
  handle: string
  timestamp: string
  avatarUrl?: string
  tweets: string[]
  replies?: Reply[]
}

export interface Reply {
  id: number
  author: string
  handle: string
  timestamp: string
  content: string
  likes: number
  avatarUrl: string
  replies?: Reply[]
}

export interface ReadingModeContextType {
  isReadingMode: boolean
  setReadingMode: (value: boolean) => void
  theme: 'light' | 'dark' | 'sepia'
  setTheme: (theme: 'light' | 'dark' | 'sepia') => void
  fontSize: 'sm' | 'base' | 'lg'
  setFontSize: (size: 'sm' | 'base' | 'lg') => void
  lineSpacing: 'compact' | 'normal' | 'spacious'
  setLineSpacing: (spacing: 'compact' | 'normal' | 'spacious') => void
  styles: {
    background: string
    text: string
    secondary: string
  }
}