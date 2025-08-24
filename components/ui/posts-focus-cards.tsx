// components/posts-focus-cards.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PostMetadata } from '@/lib/posts'
import { formatDate, isValidUrl } from '@/lib/utils'
import { cn } from '@/lib/utils'

const PostCard = React.memo(
  ({
    post,
    index,
    hovered,
    setHovered
  }: {
    post: PostMetadata
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => {
    const imageUrl = post.image || '/default-post-image.jpg'

    return (
      <Link href={`/posts/${post.slug}`}>
        <div
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            'relative h-60 w-full cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out md:h-80 dark:bg-neutral-900',
            hovered !== null && hovered !== index && 'scale-[0.98] blur-sm'
          )}
        >
          {isValidUrl(imageUrl) && (
            <Image
              src={imageUrl}
              alt={post.title || ''}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          )}

          <div
            className={cn(
              'absolute inset-0 flex flex-col justify-end bg-black/60 p-4 transition-opacity duration-300',
              hovered === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <h3 className='mb-2 text-xl font-semibold text-white'>{post.title}</h3>
            <p className='line-clamp-2 text-sm text-gray-200'>{post.summary}</p>
            <div className='mt-3 flex items-center justify-between text-xs text-gray-300'>
              {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
              {post.author && <span>By {post.author}</span>}
            </div>
          </div>
        </div>
      </Link>
    )
  }
)

PostCard.displayName = 'PostCard'

export default function PostsFocusCards({ posts }: { posts: PostMetadata[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post, index) => (
        <PostCard
          key={post.slug}
          post={post}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}
