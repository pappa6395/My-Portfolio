'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <section className="bg-white dark:bg-blue-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">500</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-blue-900 md:text-4xl dark:text-white">Something went wrong!</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">We are already working to solve the problem. </p>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="inline-flex text-white bg-blue-600 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-lg text-sm px-5 py-2.5 text-center 
                    dark:focus:ring-blue-900 my-4"
                    >
                    Try again
                </button>
            </div>   
        </div>
    </section>
    
  )
}
