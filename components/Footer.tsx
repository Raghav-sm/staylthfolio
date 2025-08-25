import { Github, Linkedin, Code } from 'lucide-react'
import { ElementType } from 'react'

type NavItem = {
  name: string
  href: string
  Icon: ElementType
}

const navigation: NavItem[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Raghav-sm',
    Icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raghavendra-s-mashyal-b2ab28267',
    Icon: Linkedin
  },
  {
    name: 'Leetcode',
    href: 'https://twitter.com/your-username',
    Icon: Code
  }
]

export default function Footer() {
  return (
    <footer className='border-t py-8'>
      <div className='mx-auto flex max-w-6xl flex-col items-center space-y-4 px-6'>
        <div className='flex space-x-6'>
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <span className='sr-only'>{item.name}</span>
              <item.Icon aria-hidden='true' className='h-5 w-5' />
            </a>
          ))}
        </div>

        <p className='text-muted-foreground text-xs'>
          © {new Date().getFullYear()} Raghav. All rights reserved.
        </p>

        <p className='text-muted-foreground text-sm'>
          Buy me a{' '}
          <a
            href='https://www.zomato.com/bangalore/ctr-shri-sagar-since-1920-malleshwaram-bangalore'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary font-semibold transition-colors'
          >
            Benne Masala Dosay
          </a>
        </p>
      </div>
    </footer>
  )
}
