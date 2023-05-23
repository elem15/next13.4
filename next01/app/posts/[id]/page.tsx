import getPost from '@/lib/getPost';
import getUser from '@/lib/getUser';
import { Metadata } from 'next'

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post: Post = await getPost(id);
  return { title: post.title };
}
export default async function User({ params }: Props) {
  const post: Post = await getPost(params.id)
  const user: User = await getUser(post.userId + '')
  return (
    <div>
      <h1>Posts from {user.name} </h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}