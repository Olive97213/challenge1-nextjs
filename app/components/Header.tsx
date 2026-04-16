'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdAccountCircle } from 'react-icons/md'

const navItems = [
  { href: '/about', label: 'À propos', color: 'bg-blue-500 hover:bg-blue-600' },
  {
    href: '/product',
    label: 'Produit',
    color: 'bg-green-500 hover:bg-green-600',
  },
  { href: '/contact', label: 'Contact', color: 'bg-red-500 hover:bg-red-600' },
]
const accountItem = [{ href: '/account' }]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // NAVBAR
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Challenge Module 1
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.color} text-white px-4 py-2 rounded-lg transition duration-300`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            {accountItem.map((item) => (
              <Link key={item.href} href={item.href}>
                <MdAccountCircle size={30} />
              </Link>
            ))}
          </div>

          {/* NAVBAR MOBILE */}

          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            <span className="sr-only">Toggle mobile menu</span>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.color} text-white block px-4 py-3 rounded-lg transition duration-300`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
