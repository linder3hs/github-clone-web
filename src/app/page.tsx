import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <h1>clone</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
