import Link from 'next/link';
import { notFound } from 'next/navigation';
type Props = { promise: Promise<Post[]> }
export default async function Posts({ promise }: Props) {
  const posts = await promise;
  if (!posts) notFound()
  const content = posts.map(post => (
    <li key={post.id}>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))
  return <ul>{content}</ul>
}
