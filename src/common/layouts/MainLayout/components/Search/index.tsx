"use client";

import { useState, KeyboardEvent, ChangeEvent } from "react";
import { search } from "@/services/github";

export default function Search() {
  const [text, setText] = useState<string>("");

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (e.key === "Enter" && value !== "") {
      search("users", value);
      setText("");
    }
  };

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setText(value);
  };

  return (
    <input
      type="text"
      placeholder="Type to search"
      value={text}
      onKeyDown={handleSearch}
      onChange={handleText}
      className="border bg-transparent border-gray-700 rounded-md w-full p-2 outline-none"
    />
  );
}
