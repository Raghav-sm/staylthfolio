// content/posts/WebsiteBuilder.tsx
'use client'

import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function WebsiteBuilder() {
  const codeExample = `export async function getSource() {
  const response = await fetch('https://api.github.com/repos/nodejs/node');
  const data = await response.json();
  return data;
}`

  return (
    <article className='prose prose-lg dark:prose-invert mx-auto'>
      <h1 className='mb-2 text-3xl font-bold'>
        The Browser Revolution: From Tabs to Full Development Environments
      </h1>
      <p className='mb-6 text-xs font-light text-gray-400'>
        Written by Raghav · Published on August 24, 2025
      </p>

      {/* Hero Section */}
      <div className='relative mb-6 h-[300px] w-full overflow-hidden rounded-xl shadow md:h-[400px]'>
        <Image
          src='https://refine.ams3.cdn.digitaloceanspaces.com/blog/2025-02-05-bolt-new/first.png'
          alt='Modern Web Development'
          fill
          className='bg-white object-cover p-6'
        />
      </div>

      <p className='mb-6 text-base leading-relaxed text-gray-600'>
        Some innovations arrive silently. Others make you re-think everything you thought
        you knew about tech. The first time I ran a **Node.js server inside my browser
        tab**, no installs, no setup — it felt like experiencing the future by accident.
      </p>

      <p className='mb-6 text-base leading-relaxed text-gray-600'>
        Traditionally, web development meant installations: Node, npm, VS Code, Git,
        endless dependencies. But now? With technologies built on{' '}
        <a href='https://webassembly.org/' className='text-blue-600 hover:underline'>
          WebAssembly
        </a>{' '}
        and modern browser APIs, the browser itself can act like your computer. A server,
        a file system, a runtime — all without leaving the tab.
      </p>

      {/* Section 1 */}
      <h2 className='mt-8 mb-4 text-xl font-bold'>
        Wait… Running a Dev Server in a Tab?
      </h2>
      <p className='mb-6 text-base leading-relaxed text-gray-600'>
        Sounds impossible, right? Here’s the trick. Modern browsers now support advanced
        APIs —
        <a
          href='https://developer.mozilla.org/docs/Web/API/File_System_API'
          className='text-blue-600 hover:underline'
        >
          File System Access API
        </a>
        ,
        <a
          href='https://developer.mozilla.org/docs/Web/API/Service_Worker_API'
          className='text-blue-600 hover:underline'
        >
          Service Workers
        </a>
        , and{' '}
        <a href='https://webassembly.org/' className='text-blue-600 hover:underline'>
          WebAssembly
        </a>
        . Together, they make it possible to emulate a mini-operating system directly
        inside the browser.
      </p>

      {/* Syntax Example */}
      <div className='mb-6 overflow-hidden rounded-lg'>
        <SyntaxHighlighter
          language='javascript'
          style={coldarkDark}
          customStyle={{
            background: 'var(--muted)',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            fontSize: '0.9rem',
            margin: 0,
            fontFamily: "'Fira Code', 'JetBrains Mono', monospace"
          }}
        >
          {codeExample}
        </SyntaxHighlighter>
      </div>

      <p className='mb-6 text-base leading-relaxed text-gray-600'>
        What does this mean for you as a developer? It means no "works on my machine"
        excuses, no 2GB installers, and no waiting for dependencies to build elsewhere.
        Type your code, see it run — instantly, locally, inside your tab.
      </p>

      {/* Section 2 */}
      <h2 className='mt-8 mb-4 text-xl font-bold'>Not Your Typical Website Builder</h2>
      <div className='relative mb-6 h-[250px] w-full overflow-hidden rounded-xl shadow md:h-[350px]'>
        <Image
          src='https://blog.logrocket.com/wp-content/uploads/2025/06/Highlight-Code.png'
          alt='Modern Deployment with Vercel'
          fill
          className='object-cover'
        />
      </div>
      <p className='mb-6 text-base leading-relaxed text-gray-600'>
        Unlike drag-and-drop tools, this approach isn’t about hiding the code. You get the
        real project: files, scripts, dependencies. Want to push it to{' '}
        <a href='https://github.com/' className='text-blue-600 hover:underline'>
          GitHub
        </a>
        ? Do it. Want to deploy on{' '}
        <a href='https://vercel.com/' className='text-blue-600 hover:underline'>
          Vercel
        </a>
        ? Seamless. You’re not trapped in a black box. You’re owning production-grade
        code.
      </p>

      {/* Section 3 */}
      <h2 className='mt-8 mb-4 text-xl font-bold'>Okay, But There Are Trade-offs</h2>
      <p className='mb-6 text-base leading-relaxed text-gray-600'>
        Right now, these in-browser dev environments work best on modern Chromium browsers
        (Google Chrome, Edge, Brave). Support on Safari and Firefox is improving, but not
        there fully yet. That’s the price of building on the bleeding edge. But if history
        tells us anything, browsers always catch up.
      </p>

      {/* Section 4 */}
      <h2 className='mt-8 mb-4 text-xl font-bold'>Why This Shift Actually Matters</h2>
      <ul className='mb-6 list-disc pl-6 text-base text-gray-600'>
        <li>Students can learn full-stack development instantly, no installs.</li>
        <li>Teams can collaborate in class, hackathons, or meetups with just a link.</li>
        <li>Prototypes can be built and demoed live, on any computer.</li>
        <li>No more “runs on my laptop but nowhere else.”</li>
      </ul>

      {/* Section 5 */}
      <h2 className='mt-8 mb-4 text-xl font-bold'>The Future of Coding Might Be This</h2>
      <div className='relative mb-6 h-[250px] w-full overflow-hidden rounded-xl shadow md:h-[350px]'>
        <Image
          src='https://nodejs.org/static/images/logo.svg'
          alt='Future of Node.js in Browser'
          fill
          className='bg-white object-contain p-10'
        />
      </div>
      <p className='mb-6 text-base leading-relaxed text-gray-600'>
        Imagine a world where coding doesn’t start with setting up your laptop, but with
        opening a new tab. Where teaching coding means sending a link instead of telling
        someone to install VS Code, Node, npm, Git… one after another. That’s the path
        this tech is creating.
      </p>

      {/* Outro */}
      <p className='mt-8 text-base text-gray-500 italic'>
        Want to see it for yourself? Open your browser, try tools like{' '}
        <a href='https://codesandbox.io/' className='text-blue-600 hover:underline'>
          CodeSandbox
        </a>{' '}
        or{' '}
        <a href='https://replit.com/' className='text-blue-600 hover:underline'>
          Replit
        </a>
        , and watch your tab transform from a viewer into a builder.
      </p>

      <p className='mt-6 text-sm text-gray-400'>
        <strong>Tags:</strong> #WebDevelopment #JavaScript #NodeJS #WebAssembly
        #FutureOfCoding #GitHub #Vercel
      </p>
    </article>
  )
}
