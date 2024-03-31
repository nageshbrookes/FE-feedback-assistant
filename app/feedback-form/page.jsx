import prisma from "@lib/prisma";

async function getUser() {
  const users = await prisma.Users.findMany({});
  return users;
}
async function page() {
  const users = await getUser();
  console.log(users);
  return <div>feedback Form</div>;
}

export default page;
