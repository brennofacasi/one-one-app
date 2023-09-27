import { Header } from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentorias",
};

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header.Topbar />
      <Header.Root>
        <h2>Mentorias</h2>
      </Header.Root>
      {children}
    </>
  );
}
