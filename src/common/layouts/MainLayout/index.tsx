import { Search } from "./components";
import Image from "next/image";
import { logo } from "@/assets";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <div className="p-5 flex gap-10">
        <div className="flex items-center gap-5">
          <Image src={logo} alt="" />
          <h4 className="font-semibold">Dashboard</h4>
        </div>
        <Search />
      </div>
      <div>{children}</div>
    </>
  );
}
