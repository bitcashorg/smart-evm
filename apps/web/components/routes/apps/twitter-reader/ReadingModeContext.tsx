// contexts/ReadingModeContext.tsx
'use client'

import React, { createContext, useState, useContext } from 'react'
import type { ReadingModeContextType } from './types'

const ReadingModeContext = createContext<ReadingModeContextType>({
  isReadingMode: false,
  setReadingMode: () => { },
  theme: 'light',
  setTheme: () => { },
  fontSize: 'base',
  setFontSize: () => { },
  lineSpacing: 'normal',
  setLineSpacing: () => { },
  styles: {
    background: 'bg-white',
    text: 'text-gray-800',
    secondary: 'text-gray-500'
  }
})

export function ReadingModeProvider({ children }: { children: React.ReactNode }) {
  const [isReadingMode, setReadingMode] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | 'sepia'>('light')
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base')
  const [lineSpacing, setLineSpacing] = useState<'compact' | 'normal' | 'spacious'>('normal')

  const readingModeStyles = {
    light: {
      background: 'bg-white',
      text: 'text-gray-800',
      secondary: 'text-gray-500'
    },
    dark: {
      background: 'bg-gray-900',
      text: 'text-gray-100',
      secondary: 'text-gray-400'
    },
    sepia: {
      background: 'bg-[#f4ecd8]',
      text: 'text-gray-900',
      secondary: 'text-gray-600'
    }
  }

  return (
    <ReadingModeContext.Provider
      value={{
        isReadingMode,
        setReadingMode,
        theme,
        setTheme,
        fontSize,
        setFontSize,
        lineSpacing,
        setLineSpacing,
        styles: readingModeStyles[theme]
      }}
    >
      {children}
    </ReadingModeContext.Provider>
  )
}

export const useReadingMode = () => useContext(ReadingModeContext)