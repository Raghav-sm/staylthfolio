// lib/projects.ts
export type ProjectMetadata = {
  title: string
  summary: string
  image: string
  author?: string
  publishedAt: string
  slug: string
  deployedLink: string
  githubLink?: string
  videoDemo?: string
  technologies?: string[]
}

const projects: ProjectMetadata[] = [
  {
    title: 'E-Commerce Platform',
    summary: 'A modern e-commerce platform built with Next.js and Stripe',
    image: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg',
    author: 'Raghav SM',
    publishedAt: '2024-07-20',
    slug: 'ecommerce-platform',
    deployedLink: 'https://your-ecommerce-app.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    videoDemo: 'https://youtube.com/your-demo-video',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'MongoDB']
  },
  {
    title: 'Task Management App',
    summary: 'A collaborative task management application',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg',
    author: 'Raghav SM',
    publishedAt: '2024-06-10',
    slug: 'task-management-app',
    deployedLink: 'https://your-task-app.com',
    githubLink: 'https://github.com/yourusername/task-app',
    videoDemo: 'https://youtube.com/your-task-demo',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL']
  },
  {
    title: 'Evalv AI',
    summary: 'A one-stop AI-powered interview taking platform',
    image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg',
    author: 'Raghav SM',
    publishedAt: '2025-02-01',
    slug: 'evalv-ai',
    deployedLink: 'https://your-evalv-ai.com',
    githubLink: 'https://github.com/yourusername/evalv-ai',
    videoDemo: 'https://youtube.com/your-evalv-ai-demo',
    technologies: ['React.js', 'Typscript', 'Gemini LLM', 'Flask']
  },
  {
    title: 'CamRIDEge',
    summary: 'A modern ride-sharing platform for seamless travel',
    image: 'https://images.pexels.com/photos/6180641/pexels-photo-6180641.jpeg',
    author: 'Raghav SM',
    publishedAt: '2025-03-10',
    slug: 'camridege',
    deployedLink: 'https://your-camridege-app.com',
    githubLink: 'https://github.com/yourusername/camridege',
    videoDemo: 'https://youtube.com/your-camridege-demo',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB']
  }
]


export async function getProjectBySlug(slug: string): Promise<ProjectMetadata | null> {
  return projects.find(project => project.slug === slug) || null
}

export async function getAllProjects(): Promise<ProjectMetadata[]> {
  return projects
}

export async function getProjectsMetadata(limit?: number): Promise<ProjectMetadata[]> {
  const metadata = [...projects] 

  metadata.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime()
    const dateB = new Date(b.publishedAt).getTime()
    return dateB - dateA
  })

  if (limit) {
    return metadata.slice(0, limit)
  }

  return metadata
}
