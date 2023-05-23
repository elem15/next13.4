import getAllUsers from '@/lib/getAllUsers';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Users"
}

export default async function UsersPage() {
  const users: Promise<User[]> = getAllUsers()
  return (
    <section>
      <h1>Users</h1>
      <h4>
        <Link href="/">Back to home</Link>
      </h4>
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