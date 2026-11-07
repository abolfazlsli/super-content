"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import {
  BookOpen,
  ClipboardList,
  FileQuestion,
  LayoutGrid,
  Library,
  LibraryBig,
  MessageCircleQuestion,
  NotebookPen,
  NotebookTabs,
  Video,
  type LucideIcon,
} from "lucide-react";

import { useTaxonomy } from "../../services/taxonomy";

/* آیکن هر نوع محتوا بر اساس اسمش ؛ نوع جدید آیکن پیش‌فرض می‌گیره */
const typeIcons: { match: string; icon: LucideIcon }[] = [
  { match: "گنجینه", icon: LibraryBig },
  { match: "سوال", icon: FileQuestion },
  { match: "سؤال", icon: FileQuestion },
  { match: "درسنامه", icon: BookOpen },
  { match: "جزوه", icon: NotebookPen },
  { match: "آزمون", icon: NotebookTabs },
  { match: "تمرین", icon: ClipboardList },
  { match: "ویدئو", icon: Video },
  { match: "ویدیو", icon: Video },
  { match: "پرسش", icon: MessageCircleQuestion },
];

const iconOf = (name: string) =>
  typeIcons.find((item) => name.includes(item.match))?.icon ?? Library;

interface QuickLinksProps {
  compact?: boolean;
  variant?: "default" | "contents";
}

export default function QuickLinks({
  compact = false,
  variant = "default",
}: QuickLinksProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const contentsVariant = variant === "contents";

  const selectedContentType =
    pathname === "/contents" ? searchParams.get("type") ?? "" : "";

  const { types } = useTaxonomy();

  // در صفحه محتواها بقیه فیلترها حفظ میشن
  const buildContentsHref = (value: string) => {
    const params = new URLSearchParams(
      pathname === "/contents" ? searchParams.toString() : "",
    );

    if (value) params.set("type", value);
    else params.delete("type");

    const query = params.toString();

    return query ? `/contents?${query}` : "/contents";
  };

  const quickLinks = [
    ...types.slice(0, 9).map((type) => ({
      id: type.id,
      title: type.name,
      icon: iconOf(type.name),
    })),
    { id: "", title: "همه محتواها", icon: LayoutGrid },
  ];

  const containerClassName = contentsVariant
    ? "w-full"
    : compact
      ? "w-full"
      : "mx-auto w-full max-w-[1440px] px-4 py-4 md:flex md:justify-center md:gap-7 md:overflow-x-auto md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden";

  const listClassName = contentsVariant
    ? "grid h-full w-full grid-cols-5 grid-rows-2 items-center gap-x-2 gap-y-3 sm:gap-x-3 sm:gap-y-3 lg:flex lg:h-full lg:w-full lg:items-center lg:justify-between lg:gap-0"
    : compact
      ? "flex h-10 w-full items-center gap-1"
      : "grid grid-cols-5 gap-3 sm:gap-4 md:flex md:shrink-0 md:gap-7 max-[1199px]:!grid max-[1199px]:!w-full max-[1199px]:!grid-cols-5 max-[1199px]:!grid-rows-2 max-[1199px]:!gap-x-4 max-[1199px]:!gap-y-3";

  return (
    <div dir="rtl" className={containerClassName}>
      <div className={listClassName}>
        {quickLinks.map((item) => {
          const Icon = item.icon;
          const isSelected =
            pathname === "/contents" && item.id === selectedContentType;
          const href = buildContentsHref(item.id);

          return (
            <Link
              key={item.id || "all"}
              href={href}
              className={
                contentsVariant
                  ? `group flex min-w-0 select-none flex-col items-center justify-center gap-1 text-center lg:flex-1 ${
                      isSelected ? "text-(--primary)" : ""
                    }`
                  : compact
                    ? `group flex min-w-0 flex-1 flex-row items-center justify-center gap-1.5 text-center ${
                        isSelected ? "text-(--primary)" : ""
                      }`
                    : `group flex w-full select-none flex-col items-center gap-2 text-center md:w-[72px] md:shrink-0 max-[1199px]:!w-full ${
                        isSelected ? "text-(--primary)" : ""
                      }`
              }
            >
              <span
                className={
                  contentsVariant
                    ? `flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 sm:h-11 sm:w-11 ${
                        isSelected
                          ? "bg-(--primary-light) text-(--primary)"
                          : "bg-neutral-100 text-(--primary) group-hover:-translate-y-0.5 group-hover:bg-(--primary-hover)"
                      }`
                    : compact
                      ? `flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                          isSelected
                            ? "bg-(--primary-light) text-(--primary)"
                            : "bg-neutral-100 text-(--primary) group-hover:-translate-y-0.5 group-hover:bg-(--primary-hover)"
                        }`
                      : `flex h-14 w-14 items-center justify-center rounded-full transition-all duration-200 ${
                          isSelected
                            ? "bg-(--primary-light) text-(--primary)"
                            : "bg-neutral-100 text-(--primary) group-hover:-translate-y-0.5 group-hover:bg-(--primary-hover) group-hover:!text-(--primary)"
                        }`
                }
              >
                <Icon
                  size={contentsVariant ? 24 : compact ? 21 : 28}
                  strokeWidth={1.8}
                />
              </span>

              <span
                className={
                  contentsVariant
                    ? `w-full truncate whitespace-nowrap text-[10px] font-semibold leading-4 transition-colors sm:text-[11px] ${
                        isSelected
                          ? "text-(--primary)"
                          : "text-neutral-700 group-hover:text-(--primary)"
                      }`
                    : compact
                      ? `max-w-full truncate whitespace-nowrap text-[10px] font-semibold leading-4 transition-colors ${
                          isSelected
                            ? "text-(--primary)"
                            : "text-neutral-700 group-hover:text-(--primary)"
                        }`
                      : `w-full whitespace-nowrap text-xs font-medium leading-5 transition-colors ${
                          isSelected
                            ? "text-(--primary)"
                            : "text-neutral-700 group-hover:text-(--primary)"
                        }`
                }
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
