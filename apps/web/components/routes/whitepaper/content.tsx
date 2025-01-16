import { WHITE_PAPER } from '@/dictionaries/en/whitepaper'
import type React from 'react'
import { useEffect, useRef } from 'react'
import Balancer from 'react-wrap-balancer'
import { NavigationContainer } from './navigator'

interface WhitepaperContentProps {
  activeSection: string
  onSectionChange: (section: string) => void
  contentRef: React.RefObject<HTMLDivElement> | null
}

interface Content {
  type: string
  text?: string | { text: string; bold?: boolean }[]
}

export const WhitepaperContent = ({
  activeSection,
  onSectionChange,
  contentRef,
}: WhitepaperContentProps) => {
  function renderContent(content: Content) {
    switch (content.type) {
      case 'p':
        return (
          <p className="paragraph mb-[27px]">
            {typeof content.text === 'string'
              ? content.text
              : content.text?.map((part, idx) => (
                  <span key={idx} className={part.bold ? 'font-bold' : ''}>
                    {part.text}
                  </span>
                ))}
          </p>
        )
      case 'h2':
        return (
          <div className="mx-auto text-center">
            <h2 className="heading2 mb-[37px]">
              {typeof content.text === 'string'
                ? content.text
                : content.text?.map((part) => part.text).join('')}
            </h2>
          </div>
        )
      case 'h3':
        return (
          <div className="mx-auto text-center">
            <h3 className="heading3 mb-[30px]">
              {typeof content.text === 'string'
                ? content.text
                : content.text?.map((part) => part.text).join('')}
            </h3>
          </div>
        )
      case 'list':
        return (
          <ul className="list-disc list-inside text-infoForeground paragraph mb-6">
            {typeof content.text === 'string'
              ? content.text.split('\n').map((item, idx) => {
                  const [title, content] = item.split(':')
                  return (
                    <li key={idx} className="mb-2">
                      {content && <span className="font-bold">{title}:</span>}{' '}
                      {content || title}
                    </li>
                  )
                })
              : null}
          </ul>
        )
      case 'sub-list':
        return (
          <ul className="list-disc list-inside text-infoForeground paragraph mb-4">
            {typeof content.text === 'string'
              ? content.text.split('\n').map((item, idx) => {
                  return (
                    <li key={idx} className="pl-4">
                      {item}
                    </li>
                  )
                })
              : null}
          </ul>
        )
      case 'contact':
        return (
          <div className="py-8">
            <div className="container mx-auto px-4">
              <ul className="list-disc list-inside text-infoForeground space-y-4">
                <li>
                  <strong>General Support and Inquiries:</strong> Email:{' '}
                  <a
                    href="mailto:support@bitcash.org"
                    className="text-blue-400"
                  >
                    support@bitcash.org
                  </a>
                </li>
                <li>
                  <strong>Media and Press:</strong> Email:{' '}
                  <a href="mailto:press@bitcash.org" className="text-blue-400">
                    press@bitcash.org
                  </a>
                </li>
                <li>
                  <strong>Developer Support:</strong> Email:{' '}
                  <a
                    href="mailto:developers@bitcash.org"
                    className="text-blue-400"
                  >
                    developers@bitcash.org
                  </a>
                </li>
                <li>
                  <strong>Social Media:</strong>
                  <ul className="list-disc space-y-2 mt-2 ml-8">
                    <li>
                      Twitter:{' '}
                      <a
                        href="https://twitter.com/bitcashorg"
                        className="text-blue-400"
                      >
                        @bitcashorg
                      </a>{' '}
                      /{' '}
                      <a
                        href="https://twitter.com/bitlauncherai"
                        className="text-blue-400"
                      >
                        @bitlauncherai
                      </a>
                    </li>
                    <li>
                      Blog:{' '}
                      <a
                        href="https://bitcash.org/blog"
                        className="text-blue-400"
                      >
                        https://bitcash.org/blog
                      </a>
                    </li>
                    <li>
                      Discord:{' '}
                      <a
                        href="https://discord.gg/KuR48XUxnG"
                        className="text-blue-400"
                      >
                        https://discord.gg/KuR48XUxnG
                      </a>
                    </li>
                    <li>
                      YouTube:{' '}
                      <a
                        href="https://youtube.com/@bitlauncher"
                        className="text-blue-400"
                      >
                        https://youtube.com/@bitlauncher
                      </a>
                    </li>
                    <li>
                      Telegram:{' '}
                      <a
                        href="https://t.me/bitcash_org"
                        className="text-blue-400"
                      >
                        https://t.me/bitcash_org
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const activeSectionContentIndex = WHITE_PAPER.sections.findIndex(
    (section) => section.title === activeSection,
  )
  const activeSectionContent = WHITE_PAPER.sections[activeSectionContentIndex]
  const prevTitle = WHITE_PAPER.sections[activeSectionContentIndex - 1]?.title
  const nextTitle = WHITE_PAPER.sections[activeSectionContentIndex + 1]?.title

  function handlePrevClick() {
    if (activeSectionContentIndex > 0) {
      onSectionChange(WHITE_PAPER.sections[activeSectionContentIndex - 1].title)
    }
  }

  function handleNextClick() {
    if (activeSectionContentIndex < WHITE_PAPER.sections.length - 1) {
      onSectionChange(WHITE_PAPER.sections[activeSectionContentIndex + 1].title)
    }
  }

  return (
    <div className="p-4 md:p-8" ref={contentRef}>
      {activeSectionContent && (
        <div>
          <h2 className="heading2 text-center">
            <Balancer>
              {activeSectionContent.title}
              <div className="w-auto h-[2.37px] bg-accent-400 my-4 mx-auto" />
            </Balancer>
          </h2>

          {activeSectionContent.content.map((content, idx) => (
            <div key={idx}>{renderContent(content)}</div>
          ))}

          <NavigationContainer
            prevTitle={prevTitle}
            nextTitle={nextTitle}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
          />
        </div>
      )}
    </div>
  )
}
