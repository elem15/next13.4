import { NextResponse } from "next/server";

const DATE_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const address = `${DATE_SOURCE_URL}${id ? `?id=${id}` : ""}`;
  const res = await fetch(address);
  const data: Todo | Todo[] = await res.json();
  return NextResponse.json(data);
}
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // work only in prevues  version 13.2 Next
  // const {id}: Partial<Todo> = await request.json()
  // const data = await request.text()
  // const {id} =  JSON.parse(data)

  if (!id) return NextResponse.json({ message: "Id is required" });
  const address = `${DATE_SOURCE_URL}/${id}}`;
  await fetch(address, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY as string,
    },
  });
  return NextResponse.json({ message: `Todo № ${id} was deleted` });
}
export async function POST(request: Request) {
  const body = await request.text();
  // const { searchParams } = new URL(`http://api?${body}`)
  // const { userId, title } = Object.fromEntries(searchParams.entries())
  const { userId, title } = JSON.parse(body);

  if (!userId || !title)
    return NextResponse.json({ message: "UserId and Title are required" });
  const address = `${DATE_SOURCE_URL}`;
  const res = await fetch(address, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY as string,
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });
  const newTodo = await res.json();
  return NextResponse.json(newTodo);
}
export async function PUT(request: Request) {
  const body = await request.text();
  let { userId, title, id, completed } = JSON.parse(body);
  if (!userId || !title || !id || typeof completed !== "boolean")
    return NextResponse.json({ message: "UserId and Title are required" });
  const address = `${DATE_SOURCE_URL}/${id}`;
  const res = await fetch(address, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY as string,
    },
    body: JSON.stringify({ userId, title, completed }),
  });
  const newTodo = await res.json();
  return NextResponse.json(newTodo);
}
