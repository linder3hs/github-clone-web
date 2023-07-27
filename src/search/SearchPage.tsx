import type { Repository, GitUser, ResponseData, Search } from "@/types/core";
import { Users, Repositories } from "./components";

interface Props {
  qtype: Search;
  data: ResponseData;
}

export default function SearchPage({ qtype, data }: Props) {
  const renderByType: { [key: string]: React.ReactNode } = {
    users: <Users users={data.items as GitUser[]} />,
    repositories: <Repositories repositories={data.items as Repository[]} />,
  };

  return (
    <>
      <h1>Busqueda {qtype}</h1>
      {renderByType[qtype]}
      <div></div>
    </>
  );
}
