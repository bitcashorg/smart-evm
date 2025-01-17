'use client'

import { cn } from '@/lib/utils'
import { IconBitlauncherSmall } from '@repo/ui'
import type { StreamableValue } from 'ai/rsc'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { spinner } from '../crypto-ui/spinner'
import { useStreamableText } from '../hooks/use-streamable-text'
import { IconUser } from './chat-icons'
import { CodeBlock } from './codeblock'
import { MemoizedReactMarkdown } from './markdown'

// Different types of message bubbles.

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex items-start">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md  bg-primary shadow-sm">
        <IconUser />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
        {children}
      </div>
    </div>
  )
}

export function BotMessage({
  content,
  className,
}: {
  content: string | StreamableValue<string>
  className?: string
}) {
  const text = useStreamableText(content)

  return (
    <div
      className={cn('group relative flex items-start font-white', className)}
    >
      <div className="flex size-[36px] shrink-0 select-none items-center justify-center rounded-md text-primary-foreground -ml-1.5">
        <IconBitlauncherSmall />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
        <MemoizedReactMarkdown
          className="font-white prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 prose-p:text-xs prose-h1:text-xs prose-h2:text-xs prose-h3:text-xs prose-h4:text-xs prose-h5:text-xs prose-h6:text-xs prose-ul:text-xs prose-ol:text-xs prose-li:text-xs prose-blockquote:text-xs"
          remarkPlugins={[
            remarkGfm,
            [remarkMath, { singleDollarTextMath: false }],
          ]}
          rehypePlugins={[rehypeKatex]}
          components={{
            p({ children }) {
              return (
                <p className="mb-2 last:mb-0 mt-0 font-white">{children}</p>
              )
            },
            code({ node, className, children, ...props }) {
              if (Array.isArray(children) && children.length) {
                if (children[0] === '▍') {
                  return (
                    <span className="mt-1 animate-pulse cursor-default">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              return (
                <CodeBlock
                  key={Math.random()}
                  language={match?.[1] ?? ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            },
            ul({ children }) {
              return <ul className="p-0 font-white">{children}</ul>
            },
            li({ children }) {
              return <li className="p-0 font-white">{children}</li>
            },
          }}
        >
          {text}
        </MemoizedReactMarkdown>
      </div>
    </div>
  )
}

export function BotCard({
  children,
  showAvatar = true,
}: {
  children: React.ReactNode
  showAvatar?: boolean
}) {
  return (
    <div className="group relative flex items-start ">
      {showAvatar && (
        <div className="flex size-[36px] shrink-0 select-none items-center justify-center rounded-md text-primary-foreground -ml-1.5">
          <IconBitlauncherSmall />
        </div>
      )}
      <div className="ml-4 flex-1 pl-2">{children}</div>
    </div>
  )
}

export function SystemMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'mt-2 flex items-center justify-center gap-2 text-xs text-gray-500'
      }
    >
      <div className={'max-w-[600px] flex-initial p-2'}>{children}</div>
    </div>
  )
}

export function SpinnerMessage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="group relative flex items-start ">
      <div className="flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border text-primary-foreground shadow-sm">
        <IconBitlauncherSmall />
      </div>
      <div className="ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1">
        {spinner} {children}
      </div>
    </div>
  )
}
