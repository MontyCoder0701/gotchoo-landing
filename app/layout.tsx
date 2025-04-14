import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
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
  description: "대표님을 위한 횡령 탐지 솔루션",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="ogrzZgO6Ip522Xa-uIVK08Ej5KtSLsieAlXy3HYAvtQ"
        />
        <meta
          name="naver-site-verification"
          content="f0c78ddfab3fb83178657cdbcf9b241a18ff4f5c"
        />
      </head>

      <body className={`${notoSansKr.variable} antialiased`}>
        {children}
        <GoogleTagManager gtmId="GTM-PK458S8F" />
        <GoogleAnalytics gaId="G-2F3E5YW4FL" />
        <Toaster />
      </body>
    </html>
  );
}
