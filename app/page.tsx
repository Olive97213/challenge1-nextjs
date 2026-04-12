import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="flex items-center justify-center gap-4 mt-8">
        <Link
          href="challenge/about"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          About
        </Link>

        <Link
          href="challenge/service"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Service
        </Link>
        <Link
          href="challenge/contact"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
        >
          Contact
        </Link>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Challenge Module 1</h1>
      </div>
    </div>
  )
}
