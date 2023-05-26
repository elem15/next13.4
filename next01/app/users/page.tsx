import getAllUsers from '@/lib/getAllUsers';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Users"
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData
  if (!users) notFound()
  return (
    <section>
      <h1>Users</h1>
      <h4>
        <Link href="/">Back to home</Link>
      </h4>
      <br />
      <ul>
        {users.map(user => {
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