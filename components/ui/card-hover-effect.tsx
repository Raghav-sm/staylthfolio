// components/ui/card-hover-effect.tsx
'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Highlighter } from '@/components/magicui/highlighter'

export const HoverEffect = ({
  items,
  className
}: {
  items: {
    title: string
    description: string
    slug: string
    deployedLink: string
  }[]
  className?: string
}) => {
  return (
    <div className={cn('grid grid-cols-1 gap-8 py-10 md:grid-cols-2', className)}>
      {items.map((item, idx) => (
        <Card key={item.slug} item={item} idx={idx} />
      ))}
    </div>
  )
}

const Card = ({ item, idx }: { item: any; idx: number }) => {
  return (
    <motion.div
      className='relative h-full w-full'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      whileHover={{
        x: [0, -2, 2, -2, 0],
        transition: { duration: 0.4 }
      }}
    >
      <div
        className={cn(
          'bg-background relative h-full w-full overflow-hidden rounded-lg border-2 p-8',
          'border-border transition-all duration-300',
          'dark:border-gray-700',
          'aspect-square'
        )}
      >
        <div className='flex h-full flex-col justify-between'>
          <div>
            <h3 className='text-foreground mb-4 text-2xl font-bold tracking-tight'>
              {item.title}
            </h3>

            <p className='text-muted-foreground text-lg'>{item.description}</p>
          </div>

          <div className='mt-8 flex items-center justify-between'>
            <Link
              href={`/projects/${item.slug}`}
              className='text-primary text-base font-medium hover:underline'
            >
              View details
            </Link>

            <a
              href={item.deployedLink}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors'
            >
              <span className='text-base'>Live Demo</span>
              <ExternalLinkIcon className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
