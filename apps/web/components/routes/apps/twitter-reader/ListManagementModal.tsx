// components/twitter-reader/ListManagementModal.tsx

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Check, Filter } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dispatch, SetStateAction } from 'react'
import type { TopicCategory } from './types'
import { topicCategories } from './TopicCategories'

interface ListManagementModalProps {
  category: keyof typeof topicCategories
  isOpen: boolean
  onClose: () => void
  followedLists: string[]
  selectedLists: string[]
  showAllLists: boolean
  onListSelect: (listId: string) => void
  onAllListsSelect: () => void
  onFollowList: Dispatch<SetStateAction<string[]>>
}

export function ListManagementModal({
  category,
  isOpen,
  onClose,
  followedLists,
  selectedLists,
  showAllLists,
  onListSelect,
  onAllListsSelect,
  onFollowList
}: ListManagementModalProps) {
  const categoryData = topicCategories[category]
  if (!categoryData) return null

  // Filter lists to show only from current category
  const categoryFollowedLists = followedLists.filter(listId =>
    categoryData.lists.find(l => l.id === listId)
  )

  const areAllTopicsSelected = categoryFollowedLists.every(listId =>
    selectedLists.includes(listId)
  )

  const handleAllListsClick = () => {
    if (areAllTopicsSelected) {
      selectedLists.forEach(listId => onListSelect(listId))
    } else {
      categoryFollowedLists.forEach(listId => {
        if (!selectedLists.includes(listId)) {
          onListSelect(listId)
        }
      })
    }
  }

  const handleListToggle = (listId: string) => {
    onFollowList(prev => {
      if (prev.includes(listId)) {
        return prev.filter(id => id !== listId)
      }
      return [...prev, listId]
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{categoryData.name} Lists</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="view">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="view">View Lists</TabsTrigger>
            <TabsTrigger value="discover">Discover Lists</TabsTrigger>
          </TabsList>

          <TabsContent value="view" className="mt-4">
            <Button
              variant="ghost"
              className="w-full flex items-center justify-between px-4 py-3 mb-2 hover:bg-gray-100 rounded-lg"
              onClick={handleAllListsClick}
            >
              <span className="font-medium">All Lists</span>
              {areAllTopicsSelected && (
                <Check className="h-5 w-5 text-green-500" />
              )}
            </Button>

            <ScrollArea className="h-[400px]">
              <div className="space-y-1">
                {categoryFollowedLists.map(listId => {
                  const list = categoryData.lists.find(l => l.id === listId)
                  if (!list) return null

                  return (
                    <Button
                      key={list.id}
                      variant="ghost"
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded-lg"
                      onClick={() => onListSelect(list.id)}
                    >
                      <span>{list.name}</span>
                      {(showAllLists || selectedLists.includes(list.id)) && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                    </Button>
                  )
                })}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="discover" className="mt-4">
            <ScrollArea className="h-[400px]">
              <div className="space-y-3">
                {categoryData.lists.map(list => (
                  <Card key={list.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-medium">{list.name}</h3>
                        <p className="text-sm text-gray-600">{list.description}</p>
                        <div className="flex gap-2 flex-wrap">
                          {list.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleListToggle(list.id)}
                      >
                        {followedLists.includes(list.id) ? 'Following' : 'Follow'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}