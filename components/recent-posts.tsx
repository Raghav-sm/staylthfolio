// components/recent-posts.tsx
//mx-auto flex max-w-4xl flex-col items-start justify-between px-6 py-12 md:flex-row
import Link from 'next/link'
import { getPostsMetadata } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPostsMetadata(3) 

  return (
    <>
      <div className='mx-auto my-8 w-full max-w-4xl border-t border-black px-6 dark:border-white'></div>
      <section className='mx-auto flex max-w-4xl flex-col items-start justify-between px-6 py-12 md:flex-row'>
      <div className='container max-w-4xl '>
        <h2 className='mb-8 text-3xl font-bold tracking-tight'>Recent Posts</h2>
        <Posts posts={posts} />

        <div className='mt-8 text-center'>
          <Link
            href='/posts'
            className='text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 transition-colors'
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
