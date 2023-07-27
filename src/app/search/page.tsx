import { search } from "@/services/github";
import { SearchPage } from "@/search";
import { Search } from "@/types/core";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    [key: string]: string;
  };
}) {
  let qtype: Search = "repositories";
  let data = null;

  if (searchParams && Object.keys(searchParams).length > 0) {
    const { type, q } = searchParams;

    if (!type || !q) {
      return null;
    }

    qtype = type as Search;
    data = await search(type as Search, q);
  }

  return <SearchPage qtype={qtype} data={data} />;
}
