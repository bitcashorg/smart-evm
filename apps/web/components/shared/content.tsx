import { cn } from '@/lib/utils'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

// render standard content elements
export function PageContent({ data }: { data: PageContentData }) {
  return (
    <>
      {data.map((item, index) => {
        switch (item.type) {
          case 'h1':
          case 'h2':
            return (
              <item.type
                key={index}
                className={cn(item.type === 'h1' ? 'heading' : 'heading2', 'text-center')}
              >
                <Balancer>
                  {item.text}
                  <div className="w-1/4 h-[2.37px] bg-accent-400 my-4 m-auto" />
                </Balancer>
              </item.type>
            )
          case 'p':
            return (
              <p key={index} className={'paragraph'}>
                {item.text}
              </p>
            )
          case 'ul':
            return (
              <ul key={index} className={'mt-2 list-disc pl-6'}>
                {item.items.map((li, liIndex) => (
                  <li key={liIndex}>{li}</li>
                ))}
              </ul>
            )
          case 'Image':
            return (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                layout={item.layout}
                className={cn(item.className)}
                loading="lazy"
              />
            )
          default:
            return null
        }
      })}
    </>
  )
}

// Define a type for the 'type' property used in ContentItem
export type ContentType = 'h1' | 'h2' | 'p' | 'ul' | 'Image' | 'hr'
export type ContentTextType = 'h1' | 'h2' | 'p'
// Update the original ContentItem definition to use ContentType
export type ContentItem =
  | { type: ContentTextType; text: string }
  | { type: 'ul'; items: string[] }
  | {
      type: 'Image'
      src: string
      alt: string
      width: number
      height: number
      layout: 'responsive'
      className: string
    }

export type PageContentData = ContentItem[]
