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
  }
]

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return posts.find(post => post.metadata.slug === slug) || null
}

export async function getAllPosts(): Promise<Post[]> {
  return posts
}