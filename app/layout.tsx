import { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "갖추 GotChoo | 횡령 빠르게 잡다.",
  applicationName: "갖추",
  description: "갖추 랜딩페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-site-verification" content="Hy2YbodsIexpKZ98KK04IK_uRxJEnQfpK_n1tu_EQKI" />
      </head>

      <body className={`${notoSansKr.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
