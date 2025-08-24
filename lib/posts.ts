// lib/posts.ts
import { JSX } from 'react'
import WebsiteBuilder from '@/content/posts/WebsiteBuilder'

export type Post = {
  metadata: PostMetadata
  component: () => JSX.Element
}

export type PostMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

const posts: Post[] = [
  {
    metadata: {
      title: 'Introduction to Website Building',
      summary: 'Learn how to build modern websites with Next.js',
      image: 'https://images.pexels.com/photos/6407632/pexels-photo-6407632.jpeg',
      author: 'Raghav SM',
      publishedAt: '2024-05-13',
      slug: 'WebsiteBuilder'
    },
    component: WebsiteBuilder
  },
  {
    metadata: {
      title: 'The Future of Web Development',
      summary: 'Exploring the latest trends in web development',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      author: 'Raghav SM',
      publishedAt: '2024-06-15',
      slug: 'FutureWebDev'
    },
    component: WebsiteBuilder
  }
]

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return posts.find(post => post.metadata.slug === slug) || null
}

export async function getAllPosts(): Promise<Post[]> {
  return posts
}

export async function getPostsMetadata(limit?: number): Promise<PostMetadata[]> {
  const metadata = posts.map(post => post.metadata)

  metadata.sort((a, b) => {
    const dateA = new Date(a.publishedAt || '').getTime()
    const dateB = new Date(b.publishedAt || '').getTime()
    return dateB - dateA
  })

  if (limit) {
    return metadata.slice(0, limit)
  }

  return metadata
}