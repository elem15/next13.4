import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import { Metadata } from 'next'
import Link from 'next/link';

type Props = {
  params: { id: string };
};
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const user = await getUser(id);
  return { title: user.name };
}
export default async function User({ params }: Props) {
  const data: Promise<User> = await getUser(params.id)
  const user = await data
  const posts: Post[] = await getUserPosts(params.id)
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}