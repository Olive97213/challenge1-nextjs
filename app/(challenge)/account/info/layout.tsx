export default function Layout({
  children,
  admin,
  user,
}: {
  children: React.ReactNode
  admin: React.ReactNode
  user: React.ReactNode
}) {
  const role = Math.random() > 0.5 ? 'admin' : 'user'
  return (
    <>
      <div>
        {children} {role === 'admin' ? admin : user}
        {/* {children} {admin} {user} */}
      </div>
    </>
  )
}
