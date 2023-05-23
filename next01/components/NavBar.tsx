import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='flex justify-between'>
      <h4>My Navbar</h4>
      <ul className='flex gap-7'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/posts">Posts</Link></li>
      </ul>
    </nav>
  )
}