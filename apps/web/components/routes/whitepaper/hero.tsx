import { CommunityCard } from '@/components/shared/community-card'
import React from 'react'

interface TextSegment {
  text: string
  isBold?: boolean
}

interface Paragraph {
  segments: TextSegment[]
}

interface HeroContentProps {
  paragraphs: Paragraph[]
}

export const HeroWhitepaper = ({ paragraphs }: HeroContentProps) => {
  return (
    <section className="narrow-container">
      <div className="grid items-center justify-between gap-8 px-0 pb-[80px] md:px-6 lg:grid-cols-2">
        <div className="space-y-4 space-x-2">
          <h2 className="sectionsHeading">Whitepaper</h2>
          {paragraphs.map((paragraph) => (
            <p className="paragraph">
              {paragraph.segments.map((segment, segmentIndex) => (
                <span key={segmentIndex} className={segment.isBold ? 'font-bold' : ''}>
                  {segment.text}
                </span>
              ))}
            </p>
          ))}
        </div>
        <div className="infopages-background infopages-background--whitepaper">
          <div className="absolute bottom-0 m-4">
            <CommunityCard />
          </div>
        </div>
      </div>
    </section>
  )
}
