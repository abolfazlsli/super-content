import { ArrowLeft, ChevronLeft, Sparkles } from "lucide-react";
import Link from "next/link";

import { aboutCtaColors, aboutCtaItems } from "./about.data";

export default function AboutCtaSection() {
  return (
    <section className="pb-[clamp(1rem,2vw,2rem)]">
      <div className="relative overflow-hidden rounded-[clamp(1.9rem,3vw,2.75rem)] bg-(--primary) px-[clamp(1.5rem,4vw,3.75rem)] py-[clamp(2rem,4vw,3.5rem)] text-white shadow-[0_1.75rem_4rem_rgba(37,99,235,0.18)]">
        <div className="pointer-events-none absolute -left-[7%] -top-[28%] aspect-square w-[34%] rounded-full bg-[#d0f0fe]/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-[32%] -right-[10%] aspect-square w-[40%] rounded-full bg-[#f8eac9]/20 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[46rem]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-[11px] font-bold text-white/85 backdrop-blur-md">
              <Sparkles size={13} />
              ادامه مسیر از همین‌جا
            </span>

            <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.35] tracking-[-0.04em]">
              آماده‌ای یادگیری را{" "}
              <span className="text-[#d6f1ff]">جدی‌تر ادامه بدهی؟</span>
            </h2>

            <p className="mt-4 max-w-[40rem] text-sm leading-8 text-white/75 sm:text-base">
              پایه و موضوعت را انتخاب کن و از اولین ایستگاه مسیر یادگیری شروع
              کن.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {aboutCtaItems.map((item, index) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white/75"
                >
                  <span
                    className="size-1.5 rounded-full"
                    style={{
                      backgroundColor: aboutCtaColors[index],
                    }}
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/contents"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-(--primary) shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              مشاهده محتواها
              <ArrowLeft size={17} />
            </Link>

            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/15"
            >
              بازگشت به خانه
              <ChevronLeft size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
