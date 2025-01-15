'use client'

import { motion } from 'framer-motion'

export function Transition({ children, duration = 1 }: TransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration }}
    >
      {children}
    </motion.div>
  )
}

export interface TransitionProps {
  children: React.ReactNode
  duration?: number
}
