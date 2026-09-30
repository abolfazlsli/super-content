import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import Providers from "./providers";
import "./globals.css";
import { UserAuthProvider } from "../src/providers/userAuth";
import { webName } from "./data/webname";
import { LoadProvider } from "../src/providers/loaderProv";
import NextTopLoader from "nextjs-toploader";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import BottomNav from "../src/components/layout/BottomNav";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazir",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: webName,
  description: `${webName} بهترین منبع برای دروس`,
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className}`}>
        <NextTopLoader />
        <LoadProvider>
          <UserAuthProvider>
            <Providers>{children}</Providers>
          </UserAuthProvider>
        </LoadProvider>
      </body>
    </html>
  );
}
