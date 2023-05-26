import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='flex justify-between bg-red-400 p-8'>
      <h4>My Navbar</h4>
      <ul className='flex gap-7'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/users">Users</Link></li>
      </ul>
    </nav>
  )
}