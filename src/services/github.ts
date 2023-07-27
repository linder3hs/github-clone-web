import { Search } from "@/types/core";
import axios from "axios";

const github = axios.create({
  baseURL: "https://api.github.com",
});

const readme = axios.create({
  baseURL: "https://raw.githubusercontent.com",
});

export const getUser = async (username: string) => {
  const { data } = await github.get(`/users/${username}`);
  return data;
};

export const getRepo = async (username: string, repo: string) => {
  const { data } = await github.get(`/repos/${username}/${repo}`);
  return data;
};

export const search = async (stype: Search, query: string) => {
  const { data } = await github.get(`/search/${stype}?q=${query}`);
  return data;
};

export const getReadme = async (
  username: string,
  repo: string,
  branch: string
) => {
  const { data } = await readme.get(`/${username}/${repo}/${branch}/README.md`);
  return data;
};
