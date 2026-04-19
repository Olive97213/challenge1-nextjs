import UserDashboard from '@/app/components/UserDashboard'
import { getUser } from '@/services/userService'

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const results = await getUser(id)
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000)
  // })
  return <UserDashboard results={results} />
}
