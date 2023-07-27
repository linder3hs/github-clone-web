import type { Repository } from "@/types/core";

interface Props {
  repositories: Repository[];
}

export default function Repositories({ repositories }: Props) {
  return (
    <>
      {repositories.map((item: Repository) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </>
  );
}
