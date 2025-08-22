export default function NotFound() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-gray-900'>
      <h1 className='text-6xl font-extrabold text-purple-500'>404</h1>
      <h2 className='mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200'>
        Oops! Page not found
      </h2>
      <p className='mt-2 max-w-md text-gray-600 dark:text-gray-400'>
        The page you’re looking for doesn’t exist or has been moved. Let’s get you back on
        track.
      </p>

      <a
        href='/'
        className='mt-6 rounded-lg bg-purple-500 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-purple-600'
      >
        Back to Home
      </a>
    </section>
  )
}
