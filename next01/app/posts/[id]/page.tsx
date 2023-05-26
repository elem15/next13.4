import getPost from '@/lib/getPost';
import getUser from '@/lib/getUser';
import { Metadata } from 'next'
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post: Post = await getPost(id);
  if (!post || !post.id) {
    return {
      title: 'Post not found',

    }
  }
  return { title: post.title };
}

// export async function generateStaticParams({
//   params
// }: Props) {
//   console.log(params)
//   const post: Post = await getPost(params.id)
//   const postsData: Promise<Post[]> = getUserPosts(post.userId + '')
//   const posts = await postsData;
//   return posts.map(post => ({ id: post.id + '' }))
// }

export default async function User({ params }: Props) {
  const post: Post = await getPost(params.id)
  if (!post || !post.id) notFound()
  const user: User = await getUser(post.userId + '')
  return (
    <div>
      <h1>Posts from {user.name} </h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
