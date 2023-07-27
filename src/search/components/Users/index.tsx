import type { GitUser } from "@/types/core";

interface Props {
  users: GitUser[];
}

export default function Users({ users }: Props) {
  return (
    <>
      {users.map((item: GitUser) => (
        <div key={item.id}>
          <h2>{item.login}</h2>
        </div>
      ))}
    </>
  );
}
