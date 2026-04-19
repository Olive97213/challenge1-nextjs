import { getAdmin } from '@/services/userService'
import AdminDashboard from '@/app/components/AdminDashboard'

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const results = await getAdmin(id)
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000)
  // })
  return <AdminDashboard results={results} />
}
