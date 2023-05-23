export default async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if(!res.ok) throw new Error('failed data fetching')
  return res.json()
}