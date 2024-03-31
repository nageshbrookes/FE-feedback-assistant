import { getUser } from "@connection/connection";

async function page() {
  const users = await getUser();
  console.log(users);
  return <div>feedback Form</div>;
}

export default page;
