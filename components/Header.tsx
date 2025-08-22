'use client'

import Link from 'next/link'
import { ModeToggle } from '@/components/theme-toggle'
export default function Header() {
  return (
    <header className='bg-background/70 sticky top-0 z-50 backdrop-blur-md'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <h1 className='flex items-center text-3xl font-bold tracking-tight'>
          Raghav
          <a
            href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-1 text-purple-600 hover:animate-pulse'
          >
            .
          </a>
        </h1>

        <nav className='flex flex-1 items-center justify-center space-x-6'>
          <Link
            href='/posts'
            className='hover:text-primary text-sm font-medium transition-colors'
          >
            Posts
          </Link>
          <Link
            href='/projects'
            className='hover:text-primary text-sm font-medium transition-colors'
          >
            Projects
          </Link>
          <Link
            href='/contact'
            className='hover:text-primary text-sm font-medium transition-colors'
          >
            Contact
          </Link>
        </nav>

        <ModeToggle />
      </div>
    </header>
  )
}
