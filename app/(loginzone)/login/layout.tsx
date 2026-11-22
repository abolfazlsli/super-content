import type { Metadata } from "next";
import { webName } from "../../data/webname";

export const metadata: Metadata = {
  title: `ورود | ${webName}`,
  robots: { index: false, follow: false },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
