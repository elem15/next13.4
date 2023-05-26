'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter()
  const [counter, setCounter] = useState(5)
  useEffect(() => {
    let i = counter
    let interval = setInterval(() => {
      i--
      setCounter(i)
      if (i < 1) {
        clearInterval(interval)
        router.push('/')
      }
    }, 1000)
  }, [counter, router])
  return (
    <div className='not-found'>
      <h1>Oops... </h1>
      <h2>{error.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <p>Go to <Link href='/'>Main page</Link> after {counter} s.</p>
    </div>
  )
}