"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getUser, getRepo, getReadme } from "@/services/github";
import MDEditor from "@uiw/react-md-editor";
import { GitUser } from "@/types/core";
import * as ICONS from "@/assets";

interface Props {
  username: string;
}

export default function TemplateUser({ username }: Props) {
  const [user, setUser] = useState<GitUser | null>(null);

  const [readme, setReadme] = useState<string>("");

  const fetchUser = async () => {
    const user = await getUser(username);
    setUser(user);
  };

  const fetchRepo = async () => {
    const repo = await getRepo(username, username);
    const readme = await getReadme(username, username, repo.default_branch);
    setReadme(readme);
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchRepo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 p-4 md:p-12">
        {user && (
          <div className="md:w-[296px]">
            <div className="flex md:block gap-5 items-center">
              <Image
                src={user?.avatar_url}
                alt={user.login}
                className="rounded-full w-14 h-14 md:w-[296px] md:h-[296px]"
                width={100}
                height={100}
              />
              <div>
                <h1 className="text-2xl mt-3">{user.name}</h1>
                <p className="text-gray-400 mb-3">{user.login}</p>
              </div>
            </div>

            <button className="rounded-md w-full bg-gray-800 p-2 text-xs">
              Follow
            </button>
            <p className="text-gray-400 my-3">{user.bio}</p>
            <div className="flex">
              <p className="flex text-sm">
                <Image src={ICONS.group} alt="" />
                <span>&nbsp;{user.followers}&nbsp;</span>
                <span className="text-gray-400">followers ·</span>
                <span>&nbsp;{user.following}&nbsp;</span>
                <span className="text-gray-400">following</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex text-sm">
                <Image src={ICONS.build} alt="" />
                <span>&nbsp;{user.company}</span>
              </p>
              <p className="flex text-sm">
                <Image src={ICONS.market} alt="" />
                <span>&nbsp;{user.location}</span>
              </p>
              <p className="flex text-sm">
                <Image src={ICONS.link} alt="" />
                <span>&nbsp;{user.blog}</span>
              </p>
              <p className="flex text-sm">
                <Image src={ICONS.x} alt="" />
                <span>&nbsp;@{user.twitter_username}</span>
              </p>
            </div>
          </div>
        )}
        <div className="flex-1 mt-10 w-full">
          <MDEditor.Markdown
            className="p-3 border border-gray-50 rounded"
            source={readme}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
      </div>
    </>
  );
}
