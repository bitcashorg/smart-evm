'use client'

import { useVConsole } from './use-vconsole'

export function VConsole() {
  useVConsole()
  return (
    <style jsx global>{`
      #__vconsole .vc-switch {
        left: 0px !important;
        right: auto !important;
      }
    `}</style>
  )
}
