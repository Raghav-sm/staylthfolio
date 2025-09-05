// components/projects-grid.tsx
'use client'
import { ProjectMetadata } from '@/lib/projects';
import ProjectCard from './project-card';

interface ProjectsGridProps {
  projects: ProjectMetadata[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2'>
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}