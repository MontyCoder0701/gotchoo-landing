import { cookies } from "next/headers";
import { CeoFriend, CeoPage } from "./_pages";

export async function generateMetadata() {
  const variant = (await cookies()).get("target-variant")?.value;

  switch (variant) {
    case "ceo-friend":
      return {
        title: "갖추 | 횡령 빠르게 잡는 솔루션",
      };
    case "ceo":
      return {
        title: "갖추 | 횡령 잡는 솔루션",
      };
    default:
      return {
        title: "갖추 | 횡령 잡는 솔루션",
      };
  }
}

export default async function Page() {
  const variant = (await cookies()).get("target-variant")?.value;

  switch (variant) {
    case "ceo-friend":
      return <CeoFriend />;
    case "ceo":
    default:
      return <CeoPage />;
  }
}
