import React from 'react'
import Image from 'next/image'
import { Fragment } from 'react'

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  let data = await fetch(`https://randomuser.me/api/?seed=${id}`)
  let posts = await data.json()
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000)
  // })
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Tableau de bord Admin
        </h1>
        <p className="text-gray-600">
          Bienvenue sur votre espace d'administration
        </p>
        <ul>
          {posts.results.map((post: any) => (
            <li key={post.login.uuid}>
              {post.name.title}
              {post.name.first}
              <Image
                className="overflow-hidden rounded-full"
                src={post.picture.medium}
                alt="Avatar"
                width={100}
                height={100}
              ></Image>
            </li>
          ))}
        </ul>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm font-medium">Utilisateurs</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">1,234</p>
          <p className="text-green-600 text-xs mt-2">+12% ce mois</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <p className="text-gray-600 text-sm font-medium">Commandes</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">567</p>
          <p className="text-green-600 text-xs mt-2">+8% ce mois</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <p className="text-gray-600 text-sm font-medium">Revenus</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">45.2K€</p>
          <p className="text-green-600 text-xs mt-2">+15% ce mois</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Activité récente
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
              <p className="text-gray-800 font-medium">
                Nouvelle commande reçue
              </p>
              <p className="text-gray-500 text-sm">Il y a 2 heures</p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              Commande
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
              <p className="text-gray-800 font-medium">
                Nouvel utilisateur inscrit
              </p>
              <p className="text-gray-500 text-sm">Il y a 4 heures</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Utilisateur
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
              <p className="text-gray-800 font-medium">Paiement traité</p>
              <p className="text-gray-500 text-sm">Il y a 6 heures</p>
            </div>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
              Paiement
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
