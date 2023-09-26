import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOption);
  if (!session) return redirect("/");

  return (
    <main id='wrapper'>
      <Sidebar />
      <div>{children}</div>
    </main>
  );
}
