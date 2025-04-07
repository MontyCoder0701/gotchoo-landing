import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookie = (await cookies()).get("target-variant")?.value;
  if (cookie === "ceo-friend") {
    redirect("/ceo-friend");
  }
  redirect("/ceo");
}