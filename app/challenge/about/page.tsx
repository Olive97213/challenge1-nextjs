'use client'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 cursor-pointer hover:text-blue-600 transition duration-300"
            onClick={() => alert('Hello, to about!')}
          >
            Page À propos
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bienvenue sur la page À propos de notre application Next.js.
            Cette page est entièrement responsive et s'adapte à tous les appareils.
          </p>

          {/* Informations responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Notre Mission</h3>
              <p className="text-gray-600">
                Créer des expériences web modernes et accessibles pour tous les utilisateurs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies</h3>
              <p className="text-gray-600">
                Next.js, React, TypeScript et Tailwind CSS pour un développement efficace.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
              <Link
                href="/"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Retour à l'accueil
              </Link>
            </div>
    </div>
  )
}

export default page
