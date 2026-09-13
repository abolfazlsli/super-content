import Link from "next/link";

import { quickLinks } from "./quickLinks.data";

export default function QuickLinks() {
  return (
    <div
      className="mx-auto my-[2.5vh] flex w-full max-w-[1440px] justify-center gap-5 overflow-x-auto px-4 py-4 [scrollbar-width:none] md:gap-7 md:px-6 [&::-webkit-scrollbar]:hidden"
      dir="rtl"
    >
      {quickLinks.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.href}
            className="group flex w-[72px] shrink-0 select-none flex-col items-center gap-2 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-(--primary) transition-all duration-200 group-hover:text-white! group-hover:-translate-y-0.5 group-hover:bg-(--primary-hover)">
              <Icon size={28} strokeWidth={1.8} />
            </span>

            <span className="line-clamp-2 w-full text-xs font-medium leading-5 text-neutral-700 transition-colors group-hover:text-(--primary-hover)">
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
}