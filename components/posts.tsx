// components/posts.tsx
import Link from 'next/link'
import Image from 'next/image'

import { PostMetadata } from '@/lib/posts'
import { formatDate, isValidUrl } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => (
        <li key={post.slug} className='group'>
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col gap-4 rounded-lg p-4 transition-all hover:border hover:border-b-black sm:flex-row sm:items-center dark:hover:border-b-purple-300'
          >
            {post.image && isValidUrl(post.image) && (
              <div className='relative h-32 w-full overflow-hidden rounded-md sm:h-24 sm:w-40'>
                <Image
                  src={post.image}
                  alt={post.title || ''}
                  fill
                  className='rounded-xl object-cover'
                  sizes='(max-width: 640px) 100vw, 160px'
                />
              </div>
            )}

            <div className='flex-1'>
              <p className='text-lg font-semibold transition-colors'>
                {post.title}
              </p>
              <p className='text-muted-foreground mt-1 line-clamp-2 text-sm font-light'>
                {post.summary}
              </p>

              <div className='text-muted-foreground mt-2 flex items-center gap-2 text-xs'>
                {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
                {post.author && (
                  <>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </>
                )}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
