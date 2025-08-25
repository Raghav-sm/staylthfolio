// components/posts-with-search.tsx
'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'

import Posts from '@/components/posts'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'
import { FiSearch } from 'react-icons/fi'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const filtered = posts.filter(
    post =>
      post.title?.toLowerCase().includes(query.toLowerCase()) ||
      post.summary?.toLowerCase().includes(query.toLowerCase()) ||
      post.author?.toLowerCase().includes(query.toLowerCase())
  )

  const isFiltered = query.length > 0
  function resetFilter() {
    setQuery('')
  }

  return (
    <div>
      <div className='mb-8 flex items-center gap-3'>
        <div className='relative w-full'>
          <FiSearch className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
          <Input
            type='text'
            placeholder='Search posts...'
            className='border-border focus-visible:ring-primary h-9 w-full rounded-md border pr-3 pl-9 shadow-sm focus-visible:ring-1'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        {isFiltered && (
          <Button size='sm' variant='outline' onClick={resetFilter} className='h-9 px-3'>
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>

      {filtered.length > 0 ? (
        <Posts posts={filtered} />
      ) : (
        <div className='py-12 text-center'>
          <p className='text-muted-foreground'>No posts found matching your search.</p>
        </div>
      )}
    </div>
  )
}
