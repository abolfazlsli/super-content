"use client";

import { usePathname } from "next/navigation";

import Footer from "./Footer";

export default function LandingFooter() {
  const pathname = usePathname();

  if (pathname === "/contents" || pathname.startsWith("/contents/")) {
    return null;
  }

  return <Footer />;
}
