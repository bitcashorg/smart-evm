// components/twitter-reader/TwitterReader.tsx
'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Filter, BookOpen } from 'lucide-react'
import { ReadingModeSettings } from './ReadingModeSettings'
import { TweetCard } from './TweetCard'
import { ListManagementModal } from './ListManagementModal'
import { ReadingModeProvider, useReadingMode } from './ReadingModeContext'
import { topicCategories } from './TopicCategories'
import type { Tweet } from './types'

// Example tweets data
const tweetsData: Tweet[] = [
  {
    id: 1,
    listId: 'ai-llm',
    author: 'AI Researcher',
    handle: '@ai_expert',
    timestamp: '2h ago',
    tweets: [
      '1/ Latest developments in AI show promising results...',
      '2/ Key breakthroughs in language understanding...',
      '3/ Implications for future applications...'
    ],
    replies: [
      {
        id: 1,
        author: 'Tech Enthusiast',
        handle: '@tech_lover',
        timestamp: '45m',
        content: 'This is fascinating! The implications are huge.',
        likes: 24,
        avatarUrl: '/api/placeholder/32/32'
      }
    ]
  },
  {
    id: 2,
    listId: 'crypto-defi',
    author: 'DeFi Developer',
    handle: '@defi_dev',
    timestamp: '3h ago',
    tweets: [
      '1/ Analyzing the latest DeFi protocols...',
      '2/ Key innovations in liquidity provision...',
      '3/ The future of decentralized finance...'
    ],
    replies: []
  }
]

interface TwitterReaderProps {
  // Add props if needed in the future
}

export function TwitterReader({ }: TwitterReaderProps) {
  const {
    isReadingMode,
    theme,
    setTheme,
    fontSize,
    setFontSize,
    lineSpacing,
    setLineSpacing,
    styles
  } = useReadingMode()

  // UI state
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof topicCategories>('AI')
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState<boolean>(false)
  const [isListSelectionOpen, setIsListSelectionOpen] = useState<boolean>(false)
  const [showReadingSettings, setShowReadingSettings] = useState<boolean>(false)
  const [followedLists, setFollowedLists] = useState<string[]>(['ai-llm'])
  const [selectedLists, setSelectedLists] = useState<string[]>([])
  const [showAllLists, setShowAllLists] = useState<boolean>(true)

  // Filter followed lists by selected category
  const categoryFollowedLists = followedLists.filter(listId => {
    const list = topicCategories[selectedCategory].lists.find(l => l.id === listId)
    return !!list
  })

  // Updated filter logic for tweets
  const filteredTweets = tweetsData.filter(tweet => {
    const list = topicCategories[selectedCategory].lists.find(l => l.id === tweet.listId)

    if (!list || !followedLists.includes(tweet.listId)) {
      return false
    }

    if (showAllLists) {
      return true
    }

    return selectedLists.includes(tweet.listId)
  })

  const handleCategorySelect = (category: keyof typeof topicCategories) => {
    setSelectedCategory(category)
    setSelectedLists([])
    setShowAllLists(true)
    setIsListSelectionOpen(true)
  }

  const handleListSelect = (listId: string) => {
    if (showAllLists) {
      setShowAllLists(false)
      setSelectedLists([listId])
    } else {
      setSelectedLists(prev => {
        if (prev.includes(listId)) {
          const newLists = prev.filter(id => id !== listId)
          if (newLists.length === 0) {
            setShowAllLists(true)
          }
          return newLists
        }
        return [...prev, listId]
      })
    }
  }

  const handleAllListsSelect = () => {
    setShowAllLists(true)
    setSelectedLists([])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center h-16 gap-4">
            {(Object.keys(topicCategories) as Array<keyof typeof topicCategories>).map(category => (
              <Button
                variant={selectedCategory === category ? 'default' : 'secondary'}
                className="rounded-full"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => setIsDiscoveryOpen(true)}
              className="ml-auto flex items-center gap-2 text-gray-800 hover:text-black" // Adjust colors for visibility
            >
              <Filter className="h-4 w-4 flex-shrink-0 text-gray-800 hover:text-black" /> {/* Icon color */}
              <span className="block text-gray-800 hover:text-black">Manage Lists</span> {/* Text color */}
            </Button>

            <Button
              variant="outline"
              onClick={() => setShowReadingSettings(true)}
              className="flex items-center gap-2 text-gray-800 hover:text-black" // Adjust colors for visibility
            >
              <BookOpen className="h-4 w-4 flex-shrink-0 text-gray-800 hover:text-black" /> {/* Icon color */}
              <span className="block text-gray-800 hover:text-black">Reading Mode</span> {/* Text color */}
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto p-4">
        {filteredTweets.map(tweet => (
          <TweetCard
            key={tweet.id}
            thread={tweet}
            isReadingMode={isReadingMode}
            styles={styles}
            lineSpacing={lineSpacing}
          />
        ))}
        {filteredTweets.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No tweets available for this selection
          </div>
        )}
      </main>

      {/* Modals */}
      {showReadingSettings && (
        <ReadingModeSettings
          settings={{ fontSize, theme, lineSpacing }}
          setters={{ setFontSize, setTheme, setLineSpacing }}
          onClose={() => setShowReadingSettings(false)}
        />
      )}

      <ListManagementModal
        category={selectedCategory}
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
        followedLists={followedLists}
        selectedLists={selectedLists}
        showAllLists={showAllLists}
        onListSelect={handleListSelect}
        onAllListsSelect={handleAllListsSelect}
        onFollowList={setFollowedLists}
      />
    </div>
  )
}

export default function MVPTwitterReader() {
  return (
    <ReadingModeProvider>
      <TwitterReader />
    </ReadingModeProvider>
  )
}