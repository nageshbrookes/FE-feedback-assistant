import { NextResponse } from "next/server";
import { getUser } from "@connection/connection";

export async function POST(request) {
  const res = await request.json();
  console.log({ res });
  const users = await getUser();
  return NextResponse.json({ data: users });
}
