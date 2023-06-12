import { NextResponse } from 'next/server'

const DATE_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const id = searchParams.get('id')
  const address = `${DATE_SOURCE_URL}${id ? `?id=${id}` : ''}`
  const res = await fetch(address)
  const data: Todo | Todo[] = await res.json()
  return NextResponse.json(data)
}