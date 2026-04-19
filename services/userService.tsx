export async function getUser(id: string) {
  const data = await fetch(`https://randomuser.me/api/?seed=${id}`)
  const posts = await data.json()
  return posts.results
}
export async function getAdmin(id: string) {
  const data = await fetch(`https://randomuser.me/api/?seed=${5}`)
  const posts = await data.json()
  return posts.results
}
export async function getUserLogin(id: string) {
  const data = await fetch(`https://randomuser.me/api/?seed=${1000}`)
  const posts = await data.json()
  return posts.results
}
