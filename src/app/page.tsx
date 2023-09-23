import { getServerSession } from "next-auth";
import Login from "./login";
import { authOption } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOption);
  if (session) return redirect("/painel");

  return <Login />;
}
