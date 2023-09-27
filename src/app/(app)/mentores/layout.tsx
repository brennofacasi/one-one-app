import { Header } from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentores",
};

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
