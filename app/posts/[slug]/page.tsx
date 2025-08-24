// app/posts/[slug]/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getPostBySlug } from '@/lib/posts'
import notFound from '@/app/not-found'
import { formatDate, isValidUrl } from '@/lib/utils'

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const { metadata, component: PostComponent } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='mx-auto flex max-w-4xl flex-col items-start justify-between px-6 py-12 md:flex-row'>
      <div className='container max-w-4xl'>
        <Link
          href='/posts'
          className='text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && isValidUrl(image) && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        )}

        <header className='mb-12'>
          <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
          <p className='text-muted-foreground mt-3 text-sm'>
            {author} / {publishedAt ? formatDate(publishedAt) : 'No date'}
          </p>
        </header>

        <div className='mt-16 max-w-none'>
          <PostComponent />
        </div>

        <footer className='mt-16 border-t pt-8'>
          <Link
            href='/posts'
            className='text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-light transition-colors'
          >
            <ArrowLeftIcon className='h-5 w-5' />
            <span>Back to all posts</span>
          </Link>
        </footer>
      </div>
    </section>
  )
}
