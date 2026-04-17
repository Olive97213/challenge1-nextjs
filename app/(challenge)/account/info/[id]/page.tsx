// export default async function Page({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) {
//   const { id } = await params
//   let data = await fetch(`https://randomuser.me/api/?seed=${id}`)
//   let posts = await data.json()

//   return (
//     <ul>
//       {posts.results.map((post: any) => (
//         <li key={post.login.uuid}>
//           {post.name.title}
//           {post.name.first}
//         </li>
//       ))}
//     </ul>
//   )
// }
export default async function Page() {
  return null
}
