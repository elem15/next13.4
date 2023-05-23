export default async function getUserPosts(userId:string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  if(!res.ok) throw new Error('failed data fetching')
  return res.json()
}