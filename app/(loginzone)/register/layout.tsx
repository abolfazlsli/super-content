import type { Metadata } from "next";
import { webName } from "../../data/webname";

export const metadata: Metadata = {
  title: `ثبت‌نام | ${webName}`,
  robots: { index: false, follow: false },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
