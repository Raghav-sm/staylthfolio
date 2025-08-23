'use client'

import Link from 'next/link'
import { ModeToggle } from '@/components/theme-toggle'
import { useState, useEffect } from 'react'

export default function Header() {
  const [nameIndex, setNameIndex] = useState(0)
  const names = ['Raghav', 'राघव', 'ರಾಘವ್']

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex(prev => (prev + 1) % names.length)
    }, 1000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <header className='bg-background/70 sticky top-0 z-50 backdrop-blur-md'>
      <div className='mx-auto flex max-w-4xl items-center justify-between px-6 py-4'>
        <h1 className='flex items-center text-3xl font-bold tracking-tight'>
          <div className='relative mx-2 h-9 w-32 overflow-hidden'>
            <div
              className='flex flex-col transition-transform duration-1000 ease-in-out'
              style={{
                transform: `translateY(-${nameIndex * 36}px)`
              }}
            >
              {names.map((name, index) => (
                <span
                  key={index}
                  className='flex h-9 items-center justify-center px-1 whitespace-nowrap'
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
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
            className='hover:text-primary group relative text-sm font-medium transition-colors'
          >
            Posts
            <span className='absolute bottom-[-4px] left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 ease-out group-hover:w-full'></span>
          </Link>

          <Link
            href='/projects'
            className='hover:text-primary group relative text-sm font-medium transition-colors'
          >
            Projects
            <span className='absolute bottom-[-4px] left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 ease-out group-hover:w-full'></span>
          </Link>

          <Link
            href='/contact'
            className='hover:text-primary group relative text-sm font-medium transition-colors'
          >
            Contact
            <span className='absolute bottom-[-4px] left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 ease-out group-hover:w-full'></span>
          </Link>
        </nav>

        <ModeToggle />
      </div>
    </header>
  )
}
