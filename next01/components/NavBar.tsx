import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='flex justify-between'>
      <h1>My Navbar</h1>
      <ul className='flex gap-7'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/posts">Posts</Link></li>
      </ul>
    </nav>
  )
}