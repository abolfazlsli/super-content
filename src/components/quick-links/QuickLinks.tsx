import Link from "next/link";

import { quickLinks } from "./quickLinks.data";

interface QuickLinksProps {
  compact?: boolean;
  variant?: "default" | "contents";
}

export default function QuickLinks({
  compact = false,
  variant = "default",
}: QuickLinksProps) {
  const contentsVariant = variant === "contents";

  return (
    <div
      dir="rtl"
      className={
        contentsVariant
          ? "w-full"
          : compact
            ? "w-full"
            : "mx-auto w-full max-w-[1440px] px-4 py-4 md:flex md:justify-center md:gap-7 md:overflow-x-auto md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
      }
    >
      <div
        className={
          contentsVariant
            ? "grid h-full w-full grid-cols-5 grid-rows-2 items-center gap-x-2 gap-y-3 sm:gap-x-3 sm:gap-y-3 lg:flex lg:h-full lg:w-full lg:items-center lg:justify-between lg:gap-0"
            : compact
              ? "flex h-10 w-full items-center gap-1"
              : "grid grid-cols-5 gap-3 sm:gap-4 md:flex md:shrink-0 md:gap-7"
        }
      >
        {quickLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={
                contentsVariant
                  ? "group flex min-w-0 select-none flex-col items-center justify-center gap-1 text-center lg:flex-1"
                  : compact
                    ? "group flex min-w-0 flex-1 flex-row items-center justify-center gap-1.5 text-center"
                    : "group flex w-full select-none flex-col items-center gap-2 text-center md:w-[72px] md:shrink-0"
              }
            >
              <span
                className={
                  contentsVariant
                    ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-(--primary) transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-(--primary-hover) sm:h-11 sm:w-11"
                    : compact
                      ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-(--primary) transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-(--primary-hover)"
                      : "flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-(--primary) transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-(--primary-hover) group-hover:!text-(--primary)"
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
                    ? "w-full truncate whitespace-nowrap text-[10px] font-semibold leading-4 text-neutral-700 transition-colors group-hover:text-(--primary) sm:text-[11px]"
                    : compact
                      ? "max-w-full truncate whitespace-nowrap text-[10px] font-semibold leading-4 text-neutral-700 transition-colors group-hover:text-(--primary)"
                      : "w-full whitespace-nowrap text-xs font-medium leading-5 text-neutral-700 transition-colors group-hover:text-(--primary)"
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
