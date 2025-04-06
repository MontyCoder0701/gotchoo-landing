import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "갖추 GotChoo | 클릭 한 번으로 잡아내는 조직 내 횡령",
  applicationName: "갖추",
  description: "갖추 랜딩페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.variable} ${notoSansKr.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
