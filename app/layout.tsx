import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import Providers from "./providers";
import "./globals.css";
import { UserAuthProvider } from "../src/providers/userAuth";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazir",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ù…ØØªÙˆØ§ Ù¾Ù„Ø§Ø³",
  description: "Ù…Ø§Ø±Ú©Øª Ù…ØØªÙˆØ§ÛŒ Ø¢Ù…ÙˆØ²Ø´ÛŒ Ùˆ Ø¯ÛŒØ¬ÛŒØªØ§Ù„",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={vazirmatn.className}>
        <UserAuthProvider>
          <Providers>{children}</Providers>
        </UserAuthProvider>
      </body>
    </html>
  );
}