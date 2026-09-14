import Link from "next/link";

import { quickLinks } from "./quickLinks.data";

export default function QuickLinks() {
  return (
    <div
      dir="rtl"
      className="mx-auto w-full max-w-[1440px] px-4 py-4 md:flex md:justify-center md:gap-7 md:overflow-x-auto md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
    >
      <div className="grid grid-cols-5 gap-3 sm:gap-4 md:flex md:shrink-0 md:gap-7">
        {quickLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="group flex w-full select-none flex-col items-center gap-2 text-center md:w-[72px] md:shrink-0"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-(--primary) transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-(--primary-hover) group-hover:!text-(--primary)">
                <Icon size={28} strokeWidth={1.8} />
              </span>

              <span className="w-full whitespace-nowrap text-xs font-medium leading-5 text-neutral-700 transition-colors group-hover:text-(--primary)">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
