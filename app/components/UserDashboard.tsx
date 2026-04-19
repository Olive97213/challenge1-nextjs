import Image from 'next/image'

export default function UserDashboard({ results }: { results: any }) {
  const post = results[0]
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Mon Profil</h1>
        <p className="text-gray-600">
          Gestion de vos informations personnelles
        </p>
      </div>

      {/* Profile Info Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Informations personnelles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul>
              <li>
                {post.name.title} {post.name.first} {post.name.last}
                <Image
                  className="overflow-hidden rounded-full"
                  src={post.picture.medium}
                  alt="Avatar"
                  width={100}
                  height={100}
                ></Image>
              </li>
            </ul>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <p className="text-gray-800 font-medium">{post.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Téléphone
            </label>
            <p className="text-gray-800 font-medium">{post.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Date d'inscription
            </label>
            <p className="text-gray-800 font-medium">{post.registered.date}</p>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Modifier le profil
        </button>
      </div>

      {/* Orders Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <p className="text-gray-600 text-sm font-medium">Commandes totales</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <p className="text-gray-600 text-sm font-medium">En cours</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm font-medium">Dépenses totales</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">1.250€</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Commandes récentes
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
              <p className="text-gray-800 font-medium">Commande #1024</p>
              <p className="text-gray-500 text-sm">15 avril 2026</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Livrée
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
              <p className="text-gray-800 font-medium">Commande #1023</p>
              <p className="text-gray-500 text-sm">10 avril 2026</p>
            </div>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
              En cours
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
              <p className="text-gray-800 font-medium">Commande #1022</p>
              <p className="text-gray-500 text-sm">5 avril 2026</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Livrée
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
