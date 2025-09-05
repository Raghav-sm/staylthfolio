// app/projects/page.tsx
import { getProjectsMetadata } from '@/lib/projects'
import ProjectsGrid from '@/components/projects-grid'

export default async function ProjectsPage() {
  const projects = await getProjectsMetadata()

  return (
    <section className='container mx-auto max-w-4xl px-6 py-12'>
      <div className='mb-12 text-center'>
        <h1 className='mb-4 text-4xl font-bold tracking-tight'>All Projects</h1>
        <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
          Explore all my projects, including web applications, designs, and more.
        </p>
      </div>

      <ProjectsGrid projects={projects} />
    </section>
  )
}
