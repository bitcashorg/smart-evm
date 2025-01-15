// components/twitter-reader/ReadingModeSettings.tsx
'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Moon, Sun } from 'lucide-react'
import type { ReadingModeContextType } from './types'

interface ReadingModeSettingsProps {
  settings: Pick<ReadingModeContextType, 'fontSize' | 'theme' | 'lineSpacing'>
  setters: {
    setFontSize: ReadingModeContextType['setFontSize']
    setTheme: ReadingModeContextType['setTheme']
    setLineSpacing: ReadingModeContextType['setLineSpacing']
  }
  onClose: () => void
}

export function ReadingModeSettings({
  settings,
  setters,
  onClose
}: ReadingModeSettingsProps) {
  const textSizes = [
    { value: 'sm', label: 'Small' },
    { value: 'base', label: 'Medium' },
    { value: 'lg', label: 'Large' }
  ] as const

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reading Mode Settings</DialogTitle>
        </DialogHeader>

        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Theme</h3>
            <div className="flex gap-4">
              <button
                onClick={() => setters.setTheme('light')}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${settings.theme === 'light' ? 'border-blue-500' : 'border-transparent'
                  }`}
              >
                <Sun className={`h-6 w-6 ${settings.theme === 'light' ? 'text-blue-500' : 'text-gray-500'}`} />
              </button>
              <button
                onClick={() => setters.setTheme('dark')}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${settings.theme === 'dark' ? 'border-blue-500' : 'border-transparent'
                  } bg-gray-900`}
              >
                <Moon className={`h-6 w-6 ${settings.theme === 'dark' ? 'text-blue-500' : 'text-gray-500'}`} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Text Size</h3>
            <div className="flex gap-2">
              {textSizes.map(({ value, label }) => (
                <Button
                  key={value}
                  variant={settings.fontSize === value ? 'default' : 'secondary'}
                  className="flex-1"
                  onClick={() => setters.setFontSize(value)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Line Spacing</h3>
            <div className="flex gap-2">
              {['compact', 'normal', 'spacious'].map((spacing) => (
                <Button
                  key={spacing}
                  variant={settings.lineSpacing === spacing ? 'default' : 'secondary'}
                  className="flex-1 capitalize"
                  onClick={() => setters.setLineSpacing(spacing as 'compact' | 'normal' | 'spacious')}
                >
                  {spacing}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  )
}