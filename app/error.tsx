// app/error.tsx
'use client'

import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Unhandled route error:', error)
  }, [error])

  return (
    <html>
      <body className="min-h-screen flex items-center justify-center">
        <div className="p-6 rounded-md bg-red-50 text-red-900">
          <h1 className="text-xl font-bold">Something went wrong</h1>
          <p className="mt-2">An unexpected error occurred.</p>
          <div className="mt-4">
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}