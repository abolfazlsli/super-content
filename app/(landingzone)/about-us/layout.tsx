import type { Metadata } from "next";
import { webName } from "../../data/webname";

export const metadata: Metadata = {
  title: `درباره ما | ${webName}`,
  description: `با ${webName} و مسیر یادگیری آن آشنا شوید.`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
