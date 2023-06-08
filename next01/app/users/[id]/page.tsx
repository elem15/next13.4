import Preloader from '@/Preloader/page';
import Posts from '@/components/PostsTitle';
import getAllUsers from '@/lib/getAllUsers';
import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import { Metadata } from 'next'
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const user = await getUser(id);
  if (!user || !user.name) {
    return {
      title: 'User not found',

    }
  }
  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  };
}

export default async function User({ params }: Props) {
  const userData: Promise<User> = getUser(params.id)
  const postsData: Promise<Post[]> = getUserPosts(params.id)
  const [user] = await Promise.all([userData])
  if (!user || !user.name) notFound()
  return (
    <div>
      <h1>{user.name}</h1>
      <br />
      <p>{user.email}</p>
      <br />
      <h4 className='underline text-lg'>Posts</h4>
      <Suspense fallback={<Preloader />}>
        { /* @ts-expect-error Server Component */}
        <Posts promise={postsData} />
      </Suspense>
    </div>
  )
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData;
  return users.map(user => ({ id: user.id + '' }))
}