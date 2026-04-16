import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation responsive */}

      {/* Contenu principal responsive */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Challenge Module 1
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez notre plateforme responsive conçue avec Next.js et
            Tailwind CSS
          </p>

          {/* Cards responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                À propos
              </h3>
              <p className="text-gray-600">En savoir plus sur notre projet</p>
              <Link
                href="/about"
                className="text-blue-500 hover:text-blue-700 mt-3 inline-block"
              >
                En savoir plus →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Produit
              </h3>
              <p className="text-gray-600">Découvrez nos produits</p>
              <Link
                href="/product"
                className="text-green-500 hover:text-green-700 mt-3 inline-block"
              >
                En savoir plus →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Contact
              </h3>
              <p className="text-gray-600">Contactez-nous</p>
              <Link
                href="/contact"
                className="text-red-500 hover:text-red-700 mt-3 inline-block"
              >
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
