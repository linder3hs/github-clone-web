import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-gray-950 h-screen grid place-content-center">
      <SignUp />
    </div>
  );
}
