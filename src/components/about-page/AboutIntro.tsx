import { ArrowUpLeft, Sparkles } from "lucide-react";

import { aboutIntroCards, aboutIntroTags } from "./about.data";

export default function AboutIntro() {
  return (
    <section className="grid gap-4 lg:grid-cols-12 lg:items-stretch">
      <div className="relative overflow-hidden rounded-[clamp(1.75rem,3vw,2.5rem)] bg-slate-900 p-[clamp(1.5rem,3.5vw,3.25rem)] text-white shadow-cu lg:col-span-7">
        <div className="absolute -left-[15%] -top-[20%] aspect-square w-[54%] rounded-full bg-[#d0f0fe]/10 blur-3xl" />
        <div className="absolute -bottom-[22%] -right-[15%] aspect-square w-[48%] rounded-full bg-[#d1ecdd]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 flex min-h-[clamp(21rem,38vw,28rem)] flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-white/70 backdrop-blur-md">
              <Sparkles size={13} />
              نگاه ما به یادگیری
            </span>

            <h2 className="mt-6 max-w-[42rem] text-[clamp(2rem,4.2vw,3.5rem)] font-black leading-[1.3] tracking-[-0.045em]">
              یادگیری قرار نیست پیچیده باشد؛{" "}
              <span className="text-[#a9ddf4]">باید قابل ادامه باشد.</span>
            </h2>

            <p className="mt-5 max-w-[39rem] text-sm leading-8 text-white/65 sm:text-base sm:leading-9">
              ما محتوا، ابزار و تجربه یادگیری را کنار هم قرار می‌دهیم تا رسیدن
              از «نمی‌دانم» به «بلدم»، یک مسیر روشن و قابل ادامه داشته باشد.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {aboutIntroTags.map(([item, color]) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-bold text-white/75"
              >
                <span
                  className="ml-1.5 inline-block size-1.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
        {aboutIntroCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="group rounded-[clamp(1.6rem,2.5vw,2rem)] border border-slate-200/80 bg-white p-[clamp(1.25rem,2.5vw,2rem)] shadow-cu transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_1.25rem_2.75rem_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex size-12 items-center justify-center rounded-2xl ${card.iconClass} transition-transform duration-300 group-hover:scale-105`}
                  style={{ backgroundColor: card.background }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <ArrowUpLeft
                  size={18}
                  className="text-slate-300 transition-colors duration-300 group-hover:text-(--primary)"
                />
              </div>

              <h3 className="mt-7 text-lg font-black text-slate-900">
                {card.title}
              </h3>

              <p className="mt-2 text-xs leading-7 text-slate-500">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
