import { Header } from "@/components/Header";

export default function Games({ children }: { children: React.ReactNode }) {
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
