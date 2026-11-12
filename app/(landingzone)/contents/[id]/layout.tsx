import type { Metadata } from "next";
import { webName } from "../../../data/webname";

export const metadata: Metadata = {
  title: `جزئیات محتوا | ${webName}`,
  description: `جزئیات، مشخصات و فایل‌های محتوای آموزشی در ${webName}.`,
};

export default function ContentDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
