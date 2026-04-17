export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>
          </div>
        </div>
        <p className="text-gray-700 font-medium">Chargement en cours...</p>
        <p className="text-gray-500 text-sm mt-2">Veuillez patienter</p>
      </div>
    </div>
  )
}
