import { Transition } from '@/components/shared/transition'
import { WHITE_PAPER } from '@/dictionaries/en/whitepaper'
import { AnimatePresence } from 'framer-motion'
import React, { useState, type SVGProps, useEffect } from 'react'

export function WhitepaperSidebar({
  activeSection,
  onSectionChange,
}: WhitepaperSidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  function handleSectionClick(sectionTitle: string) {
    onSectionChange(sectionTitle)
    setIsModalOpen(false)
    setIsMobileNavOpen(false)
  }

  function toggleMobileNav() {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  useEffect(() => {
    if (isModalOpen || isMobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isModalOpen, isMobileNavOpen])

  return (
    <div className="p-4 md:w-64 md:p-4 md:h-screen h-0">
      <h2 className="text-xl font-bold mb-4 hidden md:block">Bitlauncher Whitepaper</h2>
      <div className="md:hidden">
        <NavigationBtn onClick={toggleMobileNav} className="mb-2" />
      </div>
      <AnimatePresence>
        {isMobileNavOpen && (
          <Transition duration={0.3}>
            <div className="mobile-nav bg-gray-800 p-4 relative left-0 w-full">
              <div className="mb-4 self-start">
                <button className="text-accent-400" onClick={toggleMobileNav}>
                  ✕
                </button>
                <h2 className="text-xl font-bold text-white">Bitlauncher Whitepaper</h2>
              </div>
              {WHITE_PAPER.sections.map((section: Section) => (
                <div
                  key={section.title}
                  className={`self-start inline-flex flex-col items-start justify-start relative flex-[0_0_auto] ${activeSection === section.title ? 'text-white' : 'text-[#9395af]'}`}
                  onClick={() => handleSectionClick(section.title)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && handleSectionClick(section.title)
                  }
                  tabIndex={0}
                >
                  <div className="relative w-fit paragraph whitespace-nowrap text-left">
                    {section.title}
                  </div>
                  {activeSection === section.title && (
                    <div className="absolute w-full h-0.5 top-6 left-0 bg-accent-400" />
                  )}
                </div>
              ))}
            </div>
          </Transition>
        )}
      </AnimatePresence>
      <nav className="hidden md:block">
        {WHITE_PAPER.sections.map((section: Section) => (
          <div
            key={section.title}
            className={`block py-2 cursor-pointer ${activeSection === section.title ? 'border-b-2 border-accent-400 inline-block text-white' : 'paragraph'}`}
            onClick={() => onSectionChange(section.title)}
            onKeyDown={(e) => e.key === 'Enter' && onSectionChange(section.title)}
            tabIndex={0}
          >
            {section.title}
          </div>
        ))}
      </nav>
    </div>
  )
}

const NavigationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    viewBox="0 0 32 33"
    {...props}
  >
    <title>Navigation Icon</title>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.333 16.921h21.334M5.333 8.921h21.334M5.333 24.921h21.334"
    />
  </svg>
)

const NavigationBtn = ({
  className,
  onClick,
}: { className: string; onClick: () => void }) => {
  return (
    <div
      className={`flex items-center justify-center w-13 rounded-full bg-accent-400 ${className} w-[52px] h-[52px]`}
      onClick={onClick}
    >
      <NavigationIcon className="w-8 h-8" />
    </div>
  )
}

interface Section {
  type: string
  title: string
  content: Array<{
    type: string
    text?: string | Array<{ text: string; bold?: boolean }>
  }>
}

interface WhitepaperSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}
