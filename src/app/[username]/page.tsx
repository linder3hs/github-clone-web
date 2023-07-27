import TemplateUser from "@/template-user";

export default function Page({ params }: { params: { username: string } }) {
  return <TemplateUser username={params.username} />;
}
