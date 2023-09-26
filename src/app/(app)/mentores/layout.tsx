import { Header } from "@/components/Header";

export default function MentorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header.Topbar />
      <Header.Root>
        <h2>Mentores</h2>
      </Header.Root>
      {children}
    </>
  );
}
