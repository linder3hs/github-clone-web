"use client";
import { KeyboardEvent } from "react";
import Image from "next/image";
import { logo } from "@/assets";
import { search } from "@/services/github";

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
        <input
          type="text"
          placeholder="Type to search"
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              search("users", e.currentTarget.value);
            }
          }}
          className="border bg-transparent border-gray-700 rounded-md w-full p-2 outline-none"
        />
      </div>
      <div>{children}</div>
    </>
  );
}
