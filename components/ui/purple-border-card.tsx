// components/ui/animated-border-card.tsx
'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedBorderCardProps {
  children: ReactNode
  className?: string
  href?: string
  as?: 'div' | 'a'
}

export default function AnimatedBorderCard({
  children,
  className,
  as: Component = 'div',
  ...props
}: AnimatedBorderCardProps) {
  return (
    <Component
      className={cn(
        'group relative overflow-hidden rounded-lg p-4 transition-all',
        'border border-gray-200 dark:border-gray-800',
        'before:absolute before:inset-0 before:rounded-lg before:p-[1px]',
        'before:bg-gradient-to-r before:from-purple-500 before:via-purple-600 before:to-purple-500',
        'before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100',
        'before:animate-[shimmer_2s_linear_infinite] before:bg-[length:200%_100%]',
        'after:absolute after:inset-[1px] after:rounded-[calc(0.5rem-1px)] after:bg-white dark:after:bg-gray-950',
        className
      )}
      {...props}
    >
      <div className='relative z-10'>{children}</div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </Component>
  )
}
