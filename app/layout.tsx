import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { cookies } from "next/headers";

import { Toaster } from "sonner";

import { CeoFriend, CeoPage } from "./_pages";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "갖추 GotChoo | 횡령 탐지 솔루션",
  applicationName: "갖추",
  description: "갖추 랜딩페이지",
};

export default async function RootLayout() {
  const variant = (await cookies()).get("target-variant")?.value;

  const layout = (() => {
    switch (variant) {
      case "ceo":
        return <CeoPage />;
      case "ceo-friend":
        return <CeoFriend />;
      default:
        return <CeoPage />;
    }
  })();

  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} antialiased`}>
        {layout}
        <Toaster />
      </body>
    </html>
  );
}
