// app/posts/page.tsx
import { getPostsMetadata } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
  const posts = await getPostsMetadata()

  return (
    <section className='mx-auto flex max-w-4xl flex-col items-start justify-between px-6 py-12 md:flex-row'>
      <div className='container max-w-4xl'>
        <div className='mb-12'>
          <h1 className='mb-4 text-3xl font-bold tracking-tight'>All Posts</h1>
          <p className='text-muted-foreground'>
            Explore all my thoughts, tutorials, and insights on web development.
          </p>
        </div>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
