import Link from 'next/link';

export default async function Posts({ promise }: { promise: Promise<Post[]> }) {
  const posts = await promise
  const content = posts.map(post => (
    <li key={post.id}>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))
  return <ul>{content}</ul>
}
