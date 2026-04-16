'use client'
import Link from 'next/link'
import React, { use } from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation responsive */}

      {/* Contenu principal responsive */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 cursor-pointer hover:text-red-600 transition duration-300"
              onClick={() => alert('Hello, to contact!')}
            >
              Page Contact
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter pour toute question ou demande
              d'information. Nous sommes là pour vous aider !
            </p>

            {/* Formulaire de contact responsive */}
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Informations de contact responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Téléphone
                </h3>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Adresse
                </h3>
                <p className="text-gray-600">123 Rue de la Tech, Paris</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
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
