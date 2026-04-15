import Link from 'next/link'
import React from 'react'

export default function accountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <header className="bg-white border-b border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-800">Mon compte</h1>
          </header>

          <div className="flex">
            <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6">
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                >
                  Accueil
                </Link>
                <Link
                  href="/challenge/account/info"
                  className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                >
                  Info
                </Link>
                <Link
                  href="/challenge/account/orders"
                  className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                >
                  Commandes
                </Link>
              </nav>
            </aside>

            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}



