import { Search } from "./components";
import Image from "next/image";
import { logo } from "@/assets";
import { currentUser } from "@clerk/nextjs";

interface Props {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: Props) {
  const user = await currentUser();

  return (
    <>
      <div className="p-5 flex gap-10 items-center">
        <div className="flex items-center gap-5">
          <Image src={logo} alt="" />
          <h4 className="font-semibold">Dashboard</h4>
        </div>
        <Search />
        <div>
          <Image
            src={user?.imageUrl as string}
            alt={user?.firstName as string}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
