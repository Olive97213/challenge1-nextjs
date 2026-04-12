'use client'
import Link from 'next/link'
import React, { use } from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center text-4xl font-bold min-h-screen bg-gray-100">
      <h1 onClick={() => alert('Hello, to contact!')}>Page contact</h1>
      <Link href="/" className="text-red-500 hover:text-red-700 gap-3 mt-5">
        Back to Home
      </Link>
    </div>
  )
}

export default page
