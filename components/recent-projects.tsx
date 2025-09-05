// components/recent-projects.tsx
import Link from 'next/link'
import { getProjectsMetadata } from '@/lib/projects'
import { ExternalLinkIcon, GitHubLogoIcon, VideoIcon } from '@radix-ui/react-icons'
import { formatDate } from '@/lib/utils'

export default async function RecentProjects() {
  const projects = await getProjectsMetadata(3)
  return (
    <section className='mx-auto flex max-w-4xl flex-col items-start justify-between px-6  md:flex-row'>
      <div className='container max-w-4xl'>
        <h2 className='mb-8 text-3xl font-bold tracking-tight'>Recent Projects</h2>
        <ul className='flex flex-col gap-8'>
          {projects.map(project => (
            <li key={project.slug} className='group'>
              <div className='flex flex-col gap-4 rounded-lg p-4 transition-all hover:border hover:border-b-black sm:flex-row sm:items-center dark:hover:border-b-purple-300'>
                <div className='flex-1'>
                  <p className='text-lg font-semibold transition-colors'>
                    {project.title}
                  </p>
                  <p className='text-muted-foreground mt-1 line-clamp-2 text-sm font-light'>
                    {project.summary}
                  </p>

                  <div className='text-muted-foreground mt-2 flex items-center gap-2 text-xs'>
                    <span>{formatDate(project.publishedAt)}</span>
                    {project.author && (
                      <>
                        <span>•</span>
                        <span>By {project.author}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <a
                    href={project.deployedLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    <ExternalLinkIcon className='h-5 w-5' />
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      <GitHubLogoIcon className='h-5 w-5' />
                    </a>
                  )}
                  {project.videoDemo && (
                    <a
                      href={project.videoDemo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      <VideoIcon className='h-5 w-5' />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className='mt-8 text-center'>
          <Link
            href='/projects'
            className='text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 transition-colors'
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  )
}
