// components/project-card.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLinkIcon, GitHubLogoIcon, VideoIcon } from '@radix-ui/react-icons'
import { ProjectMetadata } from '@/lib/projects'

interface ProjectCardProps {
  project: ProjectMetadata
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='group relative flex h-full flex-col overflow-hidden rounded-xl border-2 border-gray-300/50 bg-white shadow-lg transition-all duration-300 hover:border-black/30 dark:border-gray-600/50 dark:bg-black dark:hover:border-white/30'>
      <div className='absolute inset-1 overflow-hidden rounded-xl border border-gray-200/40 shadow-inner dark:border-gray-700/40'></div>

      <div className='relative m-3 h-48 overflow-hidden rounded-t-xl shadow-md'>
        <Image src={project.image} alt={project.title} fill className='object-cover' />
        <div className='absolute inset-0 overflow-hidden rounded-xl border border-white/20 dark:border-black/20'></div>
      </div>
      <div className='flex flex-1 flex-col p-6'>
        <div className='mb-4 flex items-center justify-between'>
          <h3 className='text-xl font-bold text-black dark:text-white'>
            {project.title}
          </h3>
          <div className='flex items-center gap-2'>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-md p-2 text-gray-500 transition-colors hover:text-black dark:hover:text-white'
                aria-label='GitHub repository'
              >
                <GitHubLogoIcon className='h-5 w-5' />
              </a>
            )}
            {project.videoDemo && (
              <a
                href={project.videoDemo}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-md p-2 text-gray-500 transition-colors hover:text-black dark:hover:text-white'
                aria-label='Video demo'
              >
                <VideoIcon className='h-5 w-5' />
              </a>
            )}
          </div>
        </div>
        <p className='mb-6 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400'>
          {project.summary}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className='mb-6 flex flex-wrap gap-2'>
            {project.technologies.slice(0, 3).map(tech => (
              <span
                key={tech}
                className='rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-black dark:border-gray-600 dark:text-gray-300'
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className='rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-black dark:border-gray-600 dark:text-gray-300'>
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}
        <div className='mt-auto flex flex-wrap justify-between gap-3'>
          <Link
            href={`/projects/${project.slug}`}
            className='inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-gray-200'
          >
            View Details
          </Link>
          <Link
            href={project.deployedLink}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:-translate-y-1 hover:border-gray-500 hover:bg-gray-100 hover:shadow-md dark:border-gray-700 dark:text-white dark:hover:border-gray-500 dark:hover:bg-gray-700'
          >
            <ExternalLinkIcon className='h-4 w-4' />
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  )
}
