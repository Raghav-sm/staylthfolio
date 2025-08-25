// components/IntroSection.jsx
import Image from 'next/image'
import { Highlighter } from '@/components/magicui/highlighter'

export default function IntroSection() {
  return (
    <section className='mx-auto flex max-w-4xl flex-col items-start justify-between px-6 py-12 md:flex-row'>
      <div className='flex-1'>
        <h1 className='mb-4 text-4xl leading-tight font-extrabold'>
          Hey,I&#39;m <span className='text-purple-500'>Raghav</span>.
          <span className='ml-2 text-sm font-light text-gray-500 dark:text-gray-400'>
            /rə.gəv/
          </span>
        </h1>

        <p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
          Welcome to my digital nook.I&#39;m an{' '}
          <span className='underline decoration-black underline-offset-4 dark:decoration-white'>
            aspiring software dev
          </span>{' '}
          who loves building fullstack web applications with modern technologies like{' '}
          <Highlighter action='highlight' color='#8B5CF6'>
            <b>Next.js</b>
          </Highlighter>
          ,{' '}
          <Highlighter action='highlight' color='#8B5CF6'>
            <b>React</b>
          </Highlighter>
          , and{' '}
          <Highlighter action='highlight' color='#8B5CF6'>
            <b>ExpressJS</b>
          </Highlighter>
          .
        </p>
      </div>

      <div className='mt-6 flex-shrink-0 md:mt-0 md:ml-8'>
        <div className='rounded-full border-2 border-black p-1 dark:border-white'>
          <Image
            src='/images/author/me.jpeg'
            alt="Raghav's profile"
            width={160}
            height={160}
            priority
            className='rounded-full object-cover shadow-md'
          />
        </div>
      </div>
    </section>
  )
}
