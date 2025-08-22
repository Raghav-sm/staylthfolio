import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getPostBySlug } from '@/lib/posts'
import notFound from '@/app/not-found'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pt-32 pb-24'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-8 h-96 w-full overflow-hidden rounded-lg'>
            <Image src={image} alt={title || ''} className='object-cover' fill priority />
          </div>
        )}

        <header className='mb-12'>
          <h1 className='text-4xl font-bold tracking-tight'>{title}</h1>
          <p className='text-muted-foreground mt-3 text-sm'>
            {author} / {publishedAt ? formatDate(publishedAt) : 'No date'}
          </p>
        </header>

        <main className='prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl prose-blockquote:border-primary/30 mt-16 max-w-none'>
          <MDXRemote source={content} />
        </main>

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
