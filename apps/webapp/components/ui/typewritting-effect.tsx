'use client'

import { cn } from '@/lib/utils'
import {
  AnimationPlaybackControls,
  motion,
  stagger,
  useAnimate,
  useInView,
  usePresence
} from 'framer-motion'
import { useEffect } from 'react'

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  onAnimationEnd
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
  onAnimationEnd?: () => void
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map(word => {
    return {
      ...word,
      text: word.text.split('')
    }
  })

  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    let animationController: AnimationPlaybackControls | undefined

    if (isInView) {
      try {
        animationController = animate(
          'span',
          {
            display: 'inline-block',
            opacity: 1
          },
          {
            duration: 0.14,
            delay: stagger(0.1),
            ease: 'easeInOut'
          }
        )

        animationController.then(() => {
          console.log('Animation ended.')
          if (onAnimationEnd) {
            console.log('Calling onAnimationEnd.')
            onAnimationEnd()
          }
        })
      } catch (error) {
        console.error('TypewriterEffect animation error:', error)
      }
    }

    return () => {
      if (animationController) {
        // console.log('TypewriterEffect unmounted.');
        // (animationController as AnimationPlaybackControls).stop()
        !isPresent && safeToRemove()
      }
    }
  }, [isInView, isPresent])

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.length > 0 &&
          wordsArray.map((word, idx) => {
            return (
              <div key={`word-${idx}`} className="inline-block">
                {(word.text || ['']).map((char, index) => (
                  <motion.span
                    initial={{}}
                    key={`char-${index}`}
                    className={cn(
                      `hidden text-black opacity-0 dark:text-white`,
                      word.className
                    )}
                  >
                    {char}
                  </motion.span>
                ))}
                &nbsp;
              </div>
            )
          })}
      </motion.div>
    )
  }
  return (
    <div
      className={cn(
        'text-center text-base font-bold sm:text-xl md:text-3xl lg:text-5xl',
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className={cn(
          'inline-block h-4 w-[4px] rounded-sm bg-blue-500 md:h-6 lg:h-10',
          cursorClassName
        )}
      ></motion.span>
    </div>
  )
}
