'use client'

import { cn } from '@/lib/utils'
import { motion, MotionProps, useScroll } from 'motion/react'
import React from 'react'

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll()

    return (
      <div className='fixed top-0 z-50 flex w-full justify-center'>
        <motion.div
          ref={ref}
          className={cn(
            'h-1 w-full  origin-left rounded-full bg-purple-500',
            className
          )}
          style={{
            scaleX: scrollYProgress
          }}
          {...props}
        />
      </div>
    )
  }
)

ScrollProgress.displayName = 'ScrollProgress'
