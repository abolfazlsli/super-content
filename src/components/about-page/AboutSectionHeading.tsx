import type { ReactNode } from "react";

import { Sparkles } from "lucide-react";

export default function AboutSectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-2 text-xs font-bold text-(--primary)">
        <span className="inline-flex items-center gap-2 rounded-full border border-(--primary)/10 bg-(--primary-light) px-3.5 py-2">
          <Sparkles size={14} />
          {eyebrow}
        </span>

        <span className="hidden h-px flex-1 bg-gradient-to-l from-(--primary)/15 to-transparent sm:block" />
      </div>

      <h2 className="mt-5 w-full text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.28] tracking-[-0.045em] text-slate-900">
        {title}
      </h2>

      <p className="mt-4 w-full max-w-none text-sm leading-8 text-slate-500 sm:text-base sm:leading-9">
        {description}
      </p>
    </div>
  );
}
