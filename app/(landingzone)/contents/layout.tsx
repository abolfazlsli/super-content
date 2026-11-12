import type { Metadata } from "next";
import { webName } from "../../data/webname";

export const metadata: Metadata = {
  title: `محتوای آموزشی | ${webName}`,
  description: `جست‌وجو و مرور محتوای آموزشی در ${webName}.`,
};

export default function ContentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
