'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import soundManager from '@/lib/soundManager'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    soundManager.playClick()
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return (
    <div className='relative'>
      <Button
        variant='outline'
        size='icon'
        onClick={toggleTheme}
        className='hover:border-border peer relative border border-transparent transition-all duration-200'
      >
        <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        <span className='sr-only'>Toggle theme</span>
      </Button>

      <div className='pointer-events-none absolute inset-0 -m-1 rounded-full border-2 border-transparent transition-all duration-200 peer-hover:border-black dark:peer-hover:border-white' />
    </div>
  )
}
