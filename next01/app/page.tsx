import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World!</h1>
      <Link href='/about'>About page</Link>
      <Link href='/users'>Users page</Link>
    </main>
  )
}

export const revalidate = 60;
