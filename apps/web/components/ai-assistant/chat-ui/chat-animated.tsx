'use client'

import { Card } from '@/components/ui/card'
import { nanoid } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useQueryStates } from 'nuqs'
import { Resizable } from 're-resizable'
import { useCallback, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { Chat } from '.'

export function ChatAnimated({ chatId }: { chatId: string }) {
  const [{ bot }, setQueryStates] = useQueryStates({
    chat: {
      defaultValue: chatId,
      parse: (value: string) => value,
    },
    bot: {
      parse: (value: string) => value as 'open' | null,
      defaultValue: null,
    },
  })
  const isBotOpen = bot === 'open'
  const [width, setWidth] = useState(500)

  const toggleBot = useCallback(() => {
    const newChatId = nanoid()
    setQueryStates({
      bot: isBotOpen ? null : 'open',
      chat: newChatId,
    })
  }, [isBotOpen, setQueryStates])

  return (
    <>
      <AnimatePresence>
        {isBotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 right-0 z-50 md:bottom-6 md:right-6"
          >
            {isMobile ? (
              <Card
                variant="padded"
                className="w-[100dvw] h-[100dvh] rounded-none"
              >
                <Chat id={chatId} />
              </Card>
            ) : (
              <Resizable
                size={{ width, height: 'auto' }}
                onResizeStop={(e, direction, ref, d) => {
                  setWidth(width + d.width)
                }}
                minWidth={400}
                maxWidth={800}
                enable={{ left: true, right: false, top: false, bottom: false }}
                handleStyles={{
                  left: {
                    width: '4px',
                    left: '1px',
                    cursor: 'ew-resize',
                  },
                }}
              >
                <Card variant="padded" className="w-full h-full min-h-[80dvh]">
                  <Chat id={chatId} />
                </Card>
              </Resizable>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {!isBotOpen && (
        <motion.button
          className="fixed bottom-4 right-4 p-3 bg-primary text-primary-foreground rounded-full shadow-lg z-50 md:bottom-6 md:right-6"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleBot}
        >
          <MessageCircle size={24} />
        </motion.button>
      )}
    </>
  )
}
