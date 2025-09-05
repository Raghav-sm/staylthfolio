// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  VideoIcon,
  ArrowLeftIcon
} from '@radix-ui/react-icons'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map(project => ({
    slug: project.slug
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className='container mx-auto max-w-4xl px-6 py-12'>
      <Link
        href='/projects'
        className='text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors'
      >
        <ArrowLeftIcon className='h-4 w-4' />
        Back to Projects
      </Link>

      <div className='relative mb-8 h-64 w-full overflow-hidden rounded-2xl md:h-80'>
        <Image src={project.image} alt={project.title} fill className='object-cover' />
      </div>

      <header className='mb-8'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight md:text-4xl'>
          {project.title}
        </h1>

        <div className='flex flex-col gap-4 border-b pb-6 md:flex-row md:items-center md:justify-between'>
          <div className='text-muted-foreground flex items-center gap-4 text-sm'>
            <time dateTime={project.publishedAt}>{formatDate(project.publishedAt)}</time>
            {project.author && (
              <>
                <span>•</span>
                <span>By {project.author}</span>
              </>
            )}
          </div>

          <div className='flex items-center gap-3'>
            <a
              href={project.deployedLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors'
            >
              <ExternalLinkIcon className='h-4 w-4' />
              Live Demo
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='border-border bg-background hover:bg-accent inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors'
              >
                <GitHubLogoIcon className='h-4 w-4' />
                Code
              </a>
            )}
            {project.videoDemo && (
              <a
                href={project.videoDemo}
                target='_blank'
                rel='noopener noreferrer'
                className='border-border bg-background hover:bg-accent inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors'
              >
                <VideoIcon className='h-4 w-4' />
                Demo
              </a>
            )}
          </div>
        </div>
      </header>

      <div className='prose prose-neutral dark:prose-invert max-w-none'>
        <p className='lead'>{project.summary}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className='my-8'>
            <h2 className='mb-4 text-xl font-semibold'>Technologies Used</h2>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className='bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm font-medium'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Add your project content here */}
        <div className='my-8'>
          <p>Project details content would go here...</p>
        </div>
      </div>
    </article>
  )
}
