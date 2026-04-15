'use client'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
    {/* Contenu principal responsive */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 cursor-pointer hover:text-green-600 transition duration-300"
              onClick={() => alert('Hello, to service!')}
            >
              Page produits
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez tous nos services conçus pour répondre à vos besoins.
              Notre approche est centrée sur la qualité et l'innovation.
            </p>

            {/* Services responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Développement Web</h3>
                <p className="text-gray-600">
                  Création d'applications web modernes et performantes.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Design UI/UX</h3>
                <p className="text-gray-600">
                  Interfaces utilisateur intuitives et attrayantes.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Consulting</h3>
                <p className="text-gray-600">
                  Accompagnement technique et stratégique.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
