"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BookOpen,
  Cog,
  Construction,
  Hammer,
  Layers3,
  Sparkles,
  Wrench,
} from "lucide-react";

function Gear({
  size,
  className = "",
  reverse = false,
}: {
  size: number;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`absolute ${className} ${
        reverse
          ? "animate-[spin_9s_linear_infinite_reverse]"
          : "animate-[spin_12s_linear_infinite]"
      }`}
      style={{ width: size, height: size }}
    >
      <Cog
        size={size}
        strokeWidth={1}
        className="h-full w-full text-slate-300"
      />
    </div>
  );
}

function BlueprintGrid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(71,85,105,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,.18) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}

function WorkshopScene() {
  return (
    <div className="relative h-[400px] w-full sm:h-[480px] lg:h-[570px]">
      <BlueprintGrid />

      <div className="pointer-events-none absolute -right-28 -top-28 size-[420px] rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-28 size-[430px] rounded-full bg-[#d1ebde]/70 blur-3xl" />

      <div className="absolute right-[9%] top-[11%] size-2 rounded-full bg-(--primary)/40" />
      <div className="absolute right-[28%] top-[19%] size-1.5 rounded-full bg-amber-400/70" />
      <div className="absolute left-[14%] top-[16%] size-2 rounded-full bg-emerald-400/50" />
      <div className="absolute left-[22%] top-[48%] size-1.5 rounded-full bg-slate-400/50" />
      <div className="absolute right-[13%] bottom-[19%] size-2 rounded-full bg-(--primary)/30" />

      <div className="absolute left-[8%] top-[8%] h-28 w-28 rotate-12 rounded-[30px] border border-white/70 bg-white/15 sm:h-36 sm:w-36" />
      <div className="absolute right-[4%] bottom-[10%] h-40 w-40 -rotate-12 rounded-[40px] border border-white/60 bg-white/10 sm:h-52 sm:w-52" />

      <Gear
        size={190}
        className="right-[0%] top-[7%] opacity-65 sm:right-[3%]"
      />

      <Gear
        size={125}
        reverse
        className="right-[24%] top-[24%] z-10 opacity-90"
      />

      <Gear
        size={155}
        className="left-[1%] top-[16%] opacity-55 sm:left-[6%]"
      />

      <Gear
        size={88}
        reverse
        className="left-[24%] top-[40%] z-10 opacity-80"
      />

      <Gear size={62} className="right-[17%] bottom-[18%] z-30 opacity-70" />

      <div className="absolute left-1/2 top-1/2 z-20 w-[min(72%,410px)] -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute -inset-8 rounded-[45px] bg-white/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[34px] border border-white/90 bg-white/90 p-5 shadow-[0_35px_90px_rgba(45,60,110,0.15)] backdrop-blur-xl sm:p-6">
            <div className="absolute -right-16 -top-16 size-40 rounded-full bg-[#d4f1fe]/70 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 size-40 rounded-full bg-[#f8ebc7]/60 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-(--primary-light) text-(--primary)">
                    <Layers3 size={17} strokeWidth={1.7} />{" "}
                  </div>

                  <div>
                    <p className="text-[8px] font-bold tracking-[0.2em] text-slate-400">
                      CONTENT PLUS
                    </p>
                    <p className="mt-0.5 text-xs font-black text-(--text)">
                      SOMETHING NEW
                    </p>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span className="size-1.5 rounded-full bg-amber-400" />
                  <span className="size-1.5 rounded-full bg-(--primary)" />
                </div>
              </div>

              <div className="relative mt-5 overflow-hidden rounded-[26px] bg-[#f7f8f8] p-5">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-[12%] top-[20%] h-px w-[76%] bg-slate-300" />
                  <div className="absolute left-[25%] top-[42%] h-px w-[50%] bg-slate-300" />
                  <div className="absolute left-[18%] top-[64%] h-px w-[64%] bg-slate-300" />
                  <div className="absolute left-[35%] top-[10%] h-[78%] w-px bg-slate-300" />
                  <div className="absolute left-[65%] top-[10%] h-[78%] w-px bg-slate-300" />
                </div>

                <div className="relative flex min-h-[155px] items-center justify-center">
                  <div className="absolute size-[145px] rounded-full border border-dashed border-slate-300/70" />
                  <div className="absolute size-[105px] rounded-full border border-slate-300/60" />

                  <div className="relative flex size-[72px] items-center justify-center rounded-[22px] bg-(--primary) text-white shadow-[0_15px_35px_rgba(59,130,246,0.22)]">
                    <Construction size={34} strokeWidth={1.5} />
                  </div>

                  <div className="absolute left-[14%] top-[25%] flex size-9 items-center justify-center rounded-xl bg-[#d1ebde] text-emerald-600 shadow-sm">
                    <Wrench size={17} />
                  </div>

                  <div className="absolute right-[14%] bottom-[20%] flex size-9 items-center justify-center rounded-xl bg-[#f8ebc7] text-amber-600 shadow-sm">
                    <Hammer size={17} />
                  </div>

                  <div className="absolute right-[22%] top-[17%] flex size-7 animate-pulse items-center justify-center rounded-lg bg-white text-(--primary) shadow-sm">
                    <Sparkles size={13} />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 cursor-default">
                  داریم روی این قسمت کار می‌کنیم
                </span>

                <span className="flex gap-1">
                  <i className="size-1.5 animate-pulse rounded-full bg-(--primary)" />
                  <i className="size-1.5 animate-pulse rounded-full bg-(--primary) [animation-delay:150ms]" />
                  <i className="size-1.5 animate-pulse rounded-full bg-(--primary) [animation-delay:300ms]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[8%] left-[8%] z-30 flex size-14 -rotate-12 items-center justify-center rounded-[20px] border border-white bg-white/90 text-slate-400 shadow-[0_15px_35px_rgba(45,60,110,0.1)]">
        <Hammer size={25} strokeWidth={1.6} />
      </div>

      <div className="absolute bottom-[12%] right-[8%] z-30 flex size-16 rotate-6 items-center justify-center rounded-[21px] bg-(--primary) text-white shadow-[0_18px_40px_rgba(59,130,246,0.22)]">
        <Wrench size={29} strokeWidth={1.6} />
      </div>

      <div className="absolute bottom-[24%] left-[16%] z-30 flex size-11 rotate-6 items-center justify-center rounded-2xl bg-[#f8ebc7] text-amber-600 shadow-lg">
        <Construction size={20} strokeWidth={1.7} />
      </div>

      <div className="absolute right-[16%] top-[11%] z-30 flex size-10 -rotate-6 items-center justify-center rounded-xl bg-white/90 text-(--primary) shadow-lg">
        <Sparkles size={18} />
      </div>

      <div className="absolute bottom-[31%] left-[37%] z-30 flex size-8 animate-bounce items-center justify-center rounded-xl bg-[#d1ebde] text-emerald-600 [animation-duration:2.8s]">
        <Sparkles size={14} />
      </div>
    </div>
  );
}

export default function UnderConstructionPage() {
  return (
    <main
      dir="rtl"
      className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden bg-[#f7f8f8] px-4 py-7 sm:px-6 md:py-9 lg:px-8"
    >
      <div className="pointer-events-none absolute -right-48 -top-56 size-[42rem] rounded-full bg-(--primary)/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-64 -left-48 size-[44rem] rounded-full bg-amber-300/6 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <section className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-[0_30px_100px_rgba(45,60,110,0.07)] md:rounded-[40px]">
          <div className="grid min-h-[680px] lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="relative order-2 flex items-center px-6 py-14 sm:px-10 md:px-14 lg:order-1 lg:px-[clamp(3rem,6vw,7rem)]">
              <div className="pointer-events-none absolute -bottom-40 -right-40 size-[430px] rounded-full bg-[#d4f1fe]/45 blur-3xl" />
              <div className="pointer-events-none absolute -left-40 -top-40 size-[430px] rounded-full bg-[#f8ebc7]/25 blur-3xl" />

              <div className="relative z-10 w-full max-w-[610px]">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-(--primary)/10 bg-(--primary-light) px-4 py-2.5 text-xs font-bold text-(--primary)">
                  <Construction size={14} strokeWidth={2} />
                  <span>یک پروژه جدید در راهه</span>
                  <Sparkles size={13} />
                </div>

                <div className="relative">
                  <span className="pointer-events-none absolute -right-3 -top-12 hidden select-none text-[120px] font-black leading-none text-slate-100 lg:block">
                    ?
                  </span>

                  <h1 className="relative text-[clamp(2.7rem,5vw,4.8rem)] font-black leading-[1.18] tracking-[-0.055em] text-(--text)">
                    کارگران
                    <br />
                    <span className="text-(--primary)">مشغول کارند!</span>
                  </h1>
                </div>

                <p className="mt-7 max-w-[560px] text-sm font-medium leading-8 text-(--muted) sm:text-base sm:leading-9">
                  این بخش هنوز آماده نشده...
                </p>

                <div className="mt-9">
                  <Link
                    href="/"
                    className="group inline-flex h-13 items-center gap-2.5 rounded-2xl bg-(--primary) px-6 text-sm font-bold text-white shadow-[0_14px_30px_rgba(59,130,246,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(59,130,246,0.24)]"
                  >
                    <span>برگشت به خانه</span>

                    <ArrowLeft
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </Link>
                </div>

                <div className="mt-10 flex items-center gap-3 text-[10px] font-bold text-slate-400">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-slate-50">
                    <BookOpen size={15} />
                  </div>

                  <span>نگران نباش، مسیرت اینجا متوقف نشده :)</span>
                </div>
              </div>
            </div>

            <div className="relative order-1 min-h-[430px] overflow-hidden bg-[#d4f1fe] sm:min-h-[520px] lg:order-2 lg:min-h-full">
              <WorkshopScene />

              <div className="absolute bottom-5 left-5 z-40 flex size-10 items-center justify-center rounded-xl bg-white/65 text-slate-500 shadow-sm backdrop-blur-md sm:bottom-7 sm:left-7">
                <ArrowUpLeft size={17} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
