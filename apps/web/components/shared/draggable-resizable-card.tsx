'use client'

import type React from 'react'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import Draggable, { type DraggableEventHandler } from 'react-draggable'
import { ResizableBox, type ResizeCallbackData } from 'react-resizable'
import { useMeasure } from 'react-use'

export function DraggableResizableCard({
  children,
}: DraggableResizableCardProps) {
  const [dimensions, setDimensions] = useState({ width: 300, height: 200 })
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const nodeRef = useRef<HTMLDivElement>(null)
  const [containerRef, { width: containerWidth, height: containerHeight }] =
    useMeasure<HTMLDivElement>()

  const onResize = (
    _event: React.SyntheticEvent,
    { size }: ResizeCallbackData,
  ) => {
    setDimensions({ width: size.width, height: size.height })
  }

  const onDrag: DraggableEventHandler = (_e, data) => {
    setPosition({ x: data.x, y: data.y })
  }

  useEffect(() => {
    // Ensure the card is within bounds after container is measured
    if (containerWidth && containerHeight) {
      setPosition((prev) => ({
        x: Math.min(prev.x, containerWidth - dimensions.width),
        y: Math.min(prev.y, containerHeight - dimensions.height),
      }))
    }
  }, [containerWidth, containerHeight, dimensions])

  return (
    <div
      ref={containerRef}
      className="fixed inset-x-0 bottom-0 h-[85dvh] overflow-hidden w-[100dvw] bg-yellow-500"
    >
      <Draggable
        nodeRef={nodeRef}
        bounds="parent"
        position={position}
        onDrag={onDrag}
        handle=".drag-handle"
      >
        <div ref={nodeRef} className="absolute">
          <ResizableBox
            width={dimensions.width}
            height={dimensions.height}
            onResize={onResize}
            minConstraints={[200, 100]}
            maxConstraints={[
              Math.min(800, containerWidth ?? 0 - position.x),
              Math.min(600, containerHeight ?? 0 - position.y),
            ]}
            resizeHandles={['se']}
            handle={
              <div className="absolute top-0 left-0 w-4 h-4 cursor-se-resize bg-tertiary rounded-bl" />
            }
          >
            <div className="w-full h-full">{children}</div>
          </ResizableBox>
        </div>
      </Draggable>
    </div>
  )
}

interface DraggableResizableCardProps {
  children: ReactNode
}
