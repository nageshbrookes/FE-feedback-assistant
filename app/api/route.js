import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  // const logincheck = await prisma.findMany();
  return NextResponse.json({ tst: "hi" });
}
