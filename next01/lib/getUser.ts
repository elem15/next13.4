export default async function getUser(id:string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if(!res.ok) return
  return res.json()
}