import prisma from "@lib/prisma";

export async function getUser() {
  const users = await prisma.Users.findMany({});
  return users;
}
