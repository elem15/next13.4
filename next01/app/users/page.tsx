import getAllUsers from '@/lib/getAllUsers';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Users"
}

export default async function Users() {
  const users: Promise<User[]> = getAllUsers()
  return (
    <section>
      <h1 className='text-2xl font-bold'>Users</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br />
      <ul>
        {(await users).map(user => {
          return (
            <li key={user.id} className='h-10'>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}