import { NextResponse } from "next/server";

const DATE_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // const { id } = params;
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  if (!id) return NextResponse.json({ message: "Id is required" });
  const address = `${DATE_SOURCE_URL}${id ? `?id=${id}` : ""}`;
  const res = await fetch(address);
  const data: Todo = await res.json();
  return NextResponse.json(data);
}
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
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
