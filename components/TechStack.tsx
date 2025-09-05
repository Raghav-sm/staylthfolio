// components/TechStack.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiAcademia,
  SiRadixui
} from 'react-icons/si'
import { FaGitAlt, FaJava } from 'react-icons/fa'
import { TbBrandRadixUi } from 'react-icons/tb'
import { useState, useRef, useEffect } from 'react'

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [firstRowIcons, setFirstRowIcons] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const allTechnologies = [
    { name: 'React', icon: <SiReact className='h-8 w-8 text-blue-500' /> },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className='h-8 w-8 text-black dark:text-white' />
    },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className='h-8 w-8 text-cyan-500' /> },
    { name: 'shadcn/ui', icon: <SiRadixui className='h-8 w-8 text-purple-500' /> },
    {
      name: 'Aceternity UI',
      icon: <TbBrandRadixUi className='h-8 w-8 text-yellow-500' />
    },
    { name: 'Radix UI', icon: <SiRadixui className='h-8 w-8 text-orange-500' /> },
    { name: 'Node.js', icon: <SiNodedotjs className='h-8 w-8 text-green-600' /> },
    {
      name: 'Express',
      icon: <SiExpress className='h-8 w-8 text-gray-800 dark:text-gray-200' />
    },
    { name: 'PostgreSQL', icon: <SiPostgresql className='h-8 w-8 text-blue-700' /> },
    { name: 'MySQL', icon: <SiMysql className='h-8 w-8 text-blue-600' /> },
    { name: 'MongoDB', icon: <SiMongodb className='h-8 w-8 text-green-500' /> },
    { name: 'JavaScript', icon: <SiJavascript className='h-8 w-8 text-yellow-400' /> },
    { name: 'TypeScript', icon: <SiTypescript className='h-8 w-8 text-blue-600' /> },
    { name: 'Python', icon: <SiPython className='h-8 w-8 text-blue-500' /> },
    { name: 'Java', icon: <FaJava className='h-8 w-8 text-red-500' /> },
    { name: 'C++', icon: <SiCplusplus className='h-8 w-8 text-blue-400' /> },
    { name: 'Pandas', icon: <SiPandas className='h-8 w-8 text-red-500' /> },
    { name: 'NumPy', icon: <SiNumpy className='h-8 w-8 text-blue-500' /> },
    { name: 'Matplotlib', icon: <SiAcademia className='h-8 w-8 text-blue-600' /> },
    { name: 'Seaborn', icon: <SiNumpy className='h-8 w-8 text-orange-500' /> },
    { name: 'Git', icon: <FaGitAlt className='h-8 w-8 text-orange-600' /> }
  ]

  useEffect(() => {
    const calculateFirstRow = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const icons = container.querySelectorAll('.tech-icon-container')
      const firstRow: string[] = []
      const containerTop = container.getBoundingClientRect().top
      let previousBottom: number | null = null

      icons.forEach(icon => {
        const rect = icon.getBoundingClientRect()

        if (previousBottom === null || Math.abs(rect.top - containerTop) < 10) {
          const techName = icon.getAttribute('data-tech')
          if (techName) firstRow.push(techName)
          previousBottom = rect.bottom
        }
      })

      setFirstRowIcons(firstRow)
    }

    calculateFirstRow()

    window.addEventListener('resize', calculateFirstRow)
    return () => window.removeEventListener('resize', calculateFirstRow)
  }, [])

  return (
    <section className='mx-auto max-w-4xl px-4 py-16'>
      <div className='mx-auto my-6 w-full max-w-4xl border-t border-black px-6 dark:border-white'></div>
      <h2 className='mb-6 text-left text-4xl font-bold'>Stack</h2>
      <div ref={containerRef} className='flex flex-wrap justify-start gap-6'>
        {allTechnologies.map((tech, index) => (
          <div
            key={tech.name}
            data-tech={tech.name}
            className='tech-icon-container relative flex flex-col items-center'
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.15 }}
              className='cursor-pointer'
            >
              {tech.icon}
            </motion.div>

            <AnimatePresence>
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: firstRowIcons.includes(tech.name) ? -10 : 10
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: firstRowIcons.includes(tech.name) ? -5 : 5 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-foreground text-background absolute rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap ${
                    firstRowIcons.includes(tech.name)
                      ? 'bottom-full mb-2'
                      : 'top-full mt-2'
                  }`}
                >
                  {tech.name}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 transform border-4 border-transparent ${
                      firstRowIcons.includes(tech.name)
                        ? 'border-t-foreground top-full'
                        : 'border-b-foreground bottom-full'
                    }`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className='mx-auto my-8 w-full max-w-4xl border-t border-black px-6 dark:border-white'></div>
    </section>
  )
}

export default TechStack
