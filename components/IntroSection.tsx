// components/IntroSection.jsx
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className='mx-auto flex max-w-4xl flex-col items-start justify-between px-6 py-12 md:flex-row'>
      <div className='flex-1'>
        <h1 className='mb-2 text-3xl font-bold'>
          Hey, I&#39;m <span className='text-purple-500'>Raghav</span>.
          <span className='text-xs font-light text-gray-400'>/rə.gəv/</span>
        </h1>

        <p className='text-base leading-relaxed text-gray-600'>
          Welcome to my digital nook. I&#39;m an aspiring software developer who loves
          building full-stack web applications with modern technologies like
          <b> Next.js</b>, <b>React</b>, and <b>ExpressJS</b>.
        </p>
      </div>

      <div className='mt-6 flex-shrink-0 md:mt-0 md:ml-8'>
        <Image
          src='/images/author/me.jpeg'
          alt="Raghav's profile"
          width={160}
          height={160}
          priority
          className='rounded-full object-cover shadow-md'
        />
      </div>
    </section>
  )
}
