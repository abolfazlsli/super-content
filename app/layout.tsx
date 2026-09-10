import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "محتوا پلاس",
  description: "مارکت محتوای آموزشی و دیجیتال",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}