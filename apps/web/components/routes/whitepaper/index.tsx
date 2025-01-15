'use client'
import React, { useRef, useState } from 'react'
import { FAQ } from '../home/section/faq-section'
import { WhitepaperContent } from './content'
import { HeroWhitepaper } from './hero'
import { WhitepaperSidebar } from './sidebar'
import { WHITE_PAPER_HERO_CONTENT } from './static-content'

const useScrollToSection = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  const handleScrollToSection = () => {
    if (contentRef.current) {
      const offset = 64 // 64px offset
      const topPosition =
        contentRef.current.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: topPosition, behavior: 'smooth' })
    }
  }

  return { contentRef, handleScrollToSection }
}

export const WhitepaperPageLanding = () => {
  const [activeSection, setActiveSection] = useState<string>('Introduction')
  const { contentRef, handleScrollToSection } = useScrollToSection()

  const onSectionChange = (section: string) => {
    setActiveSection(section)
    handleScrollToSection()
  }

  return (
    <>
      <HeroWhitepaper paragraphs={WHITE_PAPER_HERO_CONTENT} />
      <div className="container px-0 md:px-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <WhitepaperSidebar
            activeSection={activeSection}
            onSectionChange={onSectionChange}
          />
        </div>
        <div className="lg:col-span-3">
          <WhitepaperContent
            activeSection={activeSection}
            onSectionChange={onSectionChange}
            contentRef={contentRef}
          />
        </div>
      </div>
    </>
  )
}
