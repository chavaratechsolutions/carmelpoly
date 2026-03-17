import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="relative h-64">
          <Image 
            src="/notfound.svg" 
            alt="404 Not Found"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
        
        <p className="text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="pt-6">
          <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary transition-colors duration-200">
            Return Home
          </Link>
        </div>
        
        <p className="text-sm text-gray-500 mt-8">
          Error code: 404
        </p>
      </div>
    </div>
  )
}