import type { Metadata } from "next";
// import { Vazirmatn } from "next/font/google";

import Providers from "./providers";
import "./globals.css";
import { UserAuthProvider } from "../src/providers/userAuth";
import { webName } from "./data/webname";
import { LoadProvider } from "../src/providers/loaderProv";
import NextTopLoader from "nextjs-toploader";

const siteDescription = `${webName} بهترین منبع برای دروس`;

// const vazirmatn = Vazirmatn({
//   subsets: ["arabic"],
//   display: "swap",
//   variable: "--font-vazir",
//   weight: ["400", "500", "600", "700"],
// });

export const metadata: Metadata = {
  title: webName,
  description: siteDescription,
  applicationName: webName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: webName,
    title: webName,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: webName,
    description: siteDescription,
  },
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
    <html lang="fa" dir="rtl" >
      <body>
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
