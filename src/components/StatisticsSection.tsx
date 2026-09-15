"use client";

import { useEffect, useRef, useState } from "react";

import {
  ArrowUpLeft,
  BookOpen,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  const start = () => setStarted(true);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [duration, started, target]);

  return { value, start };
}

function MetricNumber({
  value,
  suffix,
  large = false,
}: {
  value: number;
  suffix: string;
  large?: boolean;
}) {
  const metric = useCountUp(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          metric.start();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [metric]);

  return (
    <div ref={ref} className="flex items-end gap-1" dir="rtl">
      <span
        className={
          large
            ? "text-5xl font-black tracking-[-0.04em] text-slate-800 sm:text-6xl md:text-7xl"
            : "text-3xl font-black tracking-[-0.04em] text-(--text) md:text-4xl"
        }
      >
        {new Intl.NumberFormat("fa-IR").format(metric.value)}
      </span>

      <span
        className={
          large
            ? "mb-2 text-xl font-black text-slate-500 md:text-2xl"
            : "mb-1 text-base font-black text-(--primary)"
        }
      >
        {suffix}
      </span>
    </div>
  );
}

function CommunityGraphic() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-slate-800/5" />
      <div className="absolute -left-8 top-8 h-52 w-52 rounded-full border border-slate-800/5" />
      <div className="absolute left-16 top-24 h-32 w-32 rounded-full border border-slate-800/5" />

      <div className="absolute left-[18%] top-[24%] h-2.5 w-2.5 rounded-full bg-slate-700/30" />
      <div className="absolute left-[32%] top-[48%] h-2 w-2 rounded-full bg-cyan-600/40" />
      <div className="absolute left-[48%] top-[30%] h-2.5 w-2.5 rounded-full bg-slate-700/25" />
      <div className="absolute left-[63%] top-[58%] h-2 w-2 rounded-full bg-emerald-600/40" />
      <div className="absolute left-[76%] top-[36%] h-2.5 w-2.5 rounded-full bg-slate-700/25" />
      <div className="absolute left-[82%] top-[72%] h-2 w-2 rounded-full bg-cyan-600/35" />

      <div className="absolute left-[20%] top-[25%] h-px w-[31%] origin-left rotate-[17deg] bg-gradient-to-r from-slate-700/15 to-transparent" />
      <div className="absolute left-[33%] top-[48%] h-px w-[35%] origin-left rotate-[-21deg] bg-gradient-to-r from-cyan-600/20 to-transparent" />
      <div className="absolute left-[48%] top-[31%] h-px w-[30%] origin-left rotate-[26deg] bg-gradient-to-r from-slate-700/15 to-transparent" />
      <div className="absolute left-[64%] top-[58%] h-px w-[20%] origin-left rotate-[-28deg] bg-gradient-to-r from-emerald-600/20 to-transparent" />

      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
    </div>
  );
}

const featureItems = [
  {
    icon: BookOpen,
    title: "محتوای متنوع و کاربردی",
    description: "منابعی برای هر مرحله از یادگیری",
    iconClass: "bg-[#d4f1fe] text-slate-700",
    hoverClass: "group-hover:bg-[#d4f1fe] group-hover:text-slate-800",
  },
  {
    icon: GraduationCap,
    title: "همراهی مدرس‌های متخصص",
    description: "دانش از تجربه متخصصان",
    iconClass: "bg-[#d1ebde] text-slate-700",
    hoverClass: "group-hover:bg-[#d1ebde] group-hover:text-slate-800",
  },
  {
    icon: Users,
    title: "جامعه‌ای همیشه در حال رشد",
    description: "یادگیری در کنار هزاران نفر",
    iconClass: "bg-[#f8ebc7] text-slate-700",
    hoverClass: "group-hover:bg-[#f8ebc7] group-hover:text-slate-800",
  },
];

export default function StatisticsSection() {
  return (
    <section className="w-full px-4 py-14 md:px-6 md:py-24" dir="rtl">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-10 md:mb-12">
          <div className="max-w-[900px]">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--primary)/10 bg-(--primary-light) px-3.5 py-2 text-xs font-bold text-(--primary)">
              <Sparkles size={14} />
              محتوا پلاس در یک نگاه
            </span>

            <h2 className="whitespace-nowrap text-3xl font-black leading-[1.35] tracking-[-0.03em] text-(--text) md:text-4xl lg:text-[42px]">
              یادگیری وقتی ارزشمندتر می‌شود{" "}
              <span className="text-(--primary)">که با هم رشد کنیم</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[220px_220px]">
          <div
            className="group relative min-h-[440px] cursor-pointer overflow-hidden rounded-[32px] shadow-cu p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(45,60,110,0.1)] lg:col-span-7 lg:row-span-2 md:p-9"
            style={{ backgroundColor: "#d4f1fe" }}
          >
            <CommunityGraphic />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    جامعه یادگیری محتوا پلاس
                  </div>

                  <h3 className="max-w-[420px] text-xl font-black leading-8 text-slate-800 md:text-2xl">
                    هزاران نفر، یک مسیر مشترک برای یادگیری و رشد
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/60 text-slate-700 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                  <Users size={22} strokeWidth={1.8} />
                </div>
              </div>

              <div className="mt-12">
                <MetricNumber value={48000} suffix="+" large />

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/60 px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm backdrop-blur-md">
                    دانشجوی فعال
                  </span>

                  <span className="rounded-full bg-white/60 px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm backdrop-blur-md">
                    جامعه در حال رشد
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-800/10 pt-5">
                <span className="text-xs font-medium text-slate-500">
                  جامعه یادگیری
                </span>

                <div className="flex -space-x-2 space-x-reverse">
                  <span className="h-8 w-8 rounded-full border-2 border-[#d4f1fe] bg-white/80" />
                  <span className="h-8 w-8 rounded-full border-2 border-[#d4f1fe] bg-cyan-200" />
                  <span className="h-8 w-8 rounded-full border-2 border-[#d4f1fe] bg-purple-200" />
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#d4f1fe] bg-slate-700/10 text-[10px] font-black text-slate-600">
                    +K
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="group relative cursor-pointer overflow-hidden rounded-[32px] shadow-cu p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(45,60,110,0.09)] lg:col-span-5 md:p-7"
            style={{ backgroundColor: "#d1ebde" }}
          >
            <CommunityGraphic />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 text-emerald-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <GraduationCap size={23} strokeWidth={1.8} />
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/50 text-slate-500 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700">
                  <ArrowUpLeft size={17} />
                </span>
              </div>

              <div className="mt-7">
                <MetricNumber value={320} suffix="+" />

                <h3 className="mt-3 text-base font-black text-slate-800">
                  مدرس و تولیدکننده
                </h3>

                <p className="mt-1 max-w-[380px] text-xs leading-6 text-slate-600">
                  متخصصانی که دانش و تجربه خود را در اختیار جامعه یادگیری قرار
                  می‌دهند.
                </p>
              </div>
            </div>
          </div>

          <div
            className="group relative cursor-pointer overflow-hidden rounded-[32px] shadow-cu p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(45,60,110,0.09)] lg:col-span-5 md:p-7"
            style={{ backgroundColor: "#f8ebc7" }}
          >
            <CommunityGraphic />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 text-amber-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <BookOpen size={22} strokeWidth={1.8} />
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/50 text-slate-500 transition-all duration-300 group-hover:bg-white group-hover:text-amber-700">
                  <ArrowUpLeft size={17} />
                </span>
              </div>

              <div className="mt-7">
                <MetricNumber value={1250} suffix="+" />

                <h3 className="mt-3 text-base font-black text-slate-800">
                  محتوای آموزشی
                </h3>

                <p className="mt-1 max-w-[380px] text-xs leading-6 text-slate-600">
                  از درسنامه و جزوه تا نمونه‌سؤال و منابع کاربردی برای یادگیری.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {featureItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex cursor-pointer items-center gap-4 rounded-[22px] border border-(--border) bg-white px-4 py-3.5 shadow-[0_8px_25px_rgba(45,60,110,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_14px_35px_rgba(45,60,110,0.08)]"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${item.iconClass} ${item.hoverClass}`}
                >
                  <Icon size={19} strokeWidth={1.8} />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="text-sm font-black text-(--text)">
                    {item.title}
                  </div>

                  <div className="mt-1 text-[11px] font-medium text-(--muted)">
                    {item.description}
                  </div>
                </div>

                <ArrowUpLeft
                  size={16}
                  className="shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-(--primary)"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
