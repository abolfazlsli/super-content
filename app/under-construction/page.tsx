"use client";

import Link from "next/link";

import {
  ArrowLeft,
  Construction,
  Hammer,
  Sparkles,
  Wrench,
} from "lucide-react";

function Gear({
  size,
  teeth = 12,
  className = "",
  reverse = false,
  tone = "steel",
}: {
  size: number;
  teeth?: number;
  className?: string;
  reverse?: boolean;
  tone?: "steel" | "blue" | "gold";
}) {
  const outerRadius = 50;
  const rootRadius = 40;
  const points: string[] = [];

  for (let i = 0; i < teeth; i++) {
    const center = (i / teeth) * Math.PI * 2;
    const step = (Math.PI * 2) / teeth;

    const angles = [
      center - step * 0.48,
      center - step * 0.3,
      center - step * 0.16,
      center + step * 0.16,
      center + step * 0.3,
      center + step * 0.48,
    ];

    const radii = [
      rootRadius,
      rootRadius,
      outerRadius,
      outerRadius,
      rootRadius,
      rootRadius,
    ];

    angles.forEach((angle, index) => {
      const radius = radii[index];
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      points.push(`${x},${y}`);
    });
  }

  const gradientId = `gear-${tone}-${size}-${teeth}`;
  const highlightId = `${gradientId}-highlight`;
  const shadowId = `${gradientId}-shadow`;

  const colors = {
    steel: {
      start: "#f8fafc",
      mid: "#cbd5e1",
      end: "#64748b",
      edge: "#475569",
      accent: "#94a3b8",
    },
    blue: {
      start: "#effaff",
      mid: "#9edcf5",
      end: "#4a9ec4",
      edge: "#327ca2",
      accent: "#bdeafb",
    },
    gold: {
      start: "#fff9e8",
      mid: "#f2d58a",
      end: "#c38d27",
      edge: "#a36e14",
      accent: "#ffe8a8",
    },
  }[tone];

  return (
    <div
      className={`absolute ${className} ${
        reverse
          ? "animate-[spin_18s_linear_infinite_reverse]"
          : "animate-[spin_24s_linear_infinite]"
      }`}
      style={{
        width: size,
        height: size,
        filter:
          "drop-shadow(0 18px 18px rgba(51,65,85,.16)) drop-shadow(0 3px 3px rgba(51,65,85,.12))",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={gradientId} cx="32%" cy="25%" r="78%">
            <stop offset="0%" stopColor={colors.start} />
            <stop offset="42%" stopColor={colors.mid} />
            <stop offset="100%" stopColor={colors.end} />
          </radialGradient>

          <linearGradient id={highlightId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <linearGradient id={shadowId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.28" />
          </linearGradient>

          <filter
            id={`${gradientId}-soft`}
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>

        <polygon
          points={points.join(" ")}
          fill="#334155"
          opacity="0.22"
          transform="translate(0,2)"
          filter={`url(#${gradientId}-soft)`}
        />

        <polygon
          points={points.join(" ")}
          fill={`url(#${gradientId})`}
          stroke={colors.edge}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />

        <polygon
          points={points.join(" ")}
          fill={`url(#${highlightId})`}
          opacity="0.65"
        />

        <circle
          cx="50"
          cy="50"
          r={rootRadius - 4}
          fill="none"
          stroke={`url(#${shadowId})`}
          strokeWidth="2.2"
          opacity="0.75"
        />

        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke={colors.accent}
          strokeWidth="4"
          opacity="0.8"
        />

        <circle cx="50" cy="50" r="25" fill={colors.end} opacity="0.2" />

        <circle
          cx="50"
          cy="50"
          r="21"
          fill="#e2e8f0"
          stroke={colors.edge}
          strokeWidth="1.5"
        />

        <circle cx="50" cy="50" r="14" fill={colors.end} opacity="0.82" />

        <circle
          cx="50"
          cy="50"
          r="9"
          fill="#f8fafc"
          stroke={colors.edge}
          strokeWidth="1"
        />

        <circle cx="47" cy="47" r="3.5" fill="#ffffff" opacity="0.75" />

        {Array.from({ length: 6 }).map((_, index) => {
          const angle = (index / 6) * Math.PI * 2;
          const x = 50 + Math.cos(angle) * 18;
          const y = 50 + Math.sin(angle) * 18;

          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="2.2"
              fill="#475569"
              opacity="0.48"
            />
          );
        })}
      </svg>
    </div>
  );
}

function BlueprintGrid() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71,85,105,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71,85,105,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,.45) 1px, transparent 1px)",
          backgroundSize: "150px 150px",
        }}
      />
    </>
  );
}

function FloatingTool({
  type,
  className,
}: {
  type: "hammer" | "wrench" | "construction";
  className: string;
}) {
  const icon =
    type === "hammer" ? (
      <Hammer size={21} strokeWidth={1.5} />
    ) : type === "wrench" ? (
      <Wrench size={22} strokeWidth={1.5} />
    ) : (
      <Construction size={21} strokeWidth={1.5} />
    );

  return (
    <div className={`absolute z-40 ${className}`}>
      <div className="flex size-11 items-center justify-center rounded-[15px] border border-white/90 bg-white/65 text-slate-500 shadow-[0_15px_35px_rgba(45,60,110,0.14)] backdrop-blur-xl sm:size-12">
        {icon}
      </div>
    </div>
  );
}

function MechanicalCore() {
  return (
    <div className="absolute left-1/2 top-1/2 z-30 aspect-square w-[min(68%,390px)] -translate-x-1/2 -translate-y-1/2">
      <div className="absolute inset-[-7%] rounded-full bg-white/35 blur-3xl" />

      <div className="absolute inset-0 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm" />

      <div className="absolute inset-[5%] rounded-full border border-dashed border-slate-400/20" />

      <div className="absolute inset-[12%] rounded-full border border-white/80" />

      <div className="absolute inset-[18%] rounded-full bg-white/30 shadow-[inset_0_0_50px_rgba(255,255,255,.7)] backdrop-blur-sm" />

      <div className="absolute left-[1%] top-[27%] size-[31%] lg:left-[2%] lg:top-[29%] lg:size-[34%]">
        <Gear size={130} teeth={14} tone="steel" className="left-0 top-0" />
      </div>

      <div className="absolute right-[-1%] top-[16%] size-[29%] lg:right-[0%] lg:top-[18%] lg:size-[31%]">
        <Gear
          size={118}
          teeth={13}
          reverse
          tone="blue"
          className="right-0 top-0"
        />
      </div>

      <div className="absolute bottom-[-1%] left-[22%] size-[28%] lg:bottom-[0%] lg:left-[24%] lg:size-[29%]">
        <Gear size={108} teeth={12} tone="gold" className="bottom-0 left-0" />
      </div>

      <div className="absolute bottom-[6%] right-[1%] size-[20%] lg:bottom-[8%] lg:right-[4%] lg:size-[21%]">
        <Gear
          size={82}
          teeth={11}
          reverse
          tone="steel"
          className="bottom-0 right-0"
        />
      </div>

      <div className="absolute left-1/2 top-1/2 flex size-[24%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-slate-200/55 shadow-[inset_0_3px_8px_rgba(255,255,255,.9),0_20px_45px_rgba(45,60,110,.14)] backdrop-blur-md lg:size-[27%]">
        <div className="flex size-[72%] items-center justify-center rounded-full border border-slate-300/50 bg-white/75 shadow-[inset_0_0_20px_rgba(148,163,184,.18)]">
          <div className="flex size-[58%] items-center justify-center rounded-full bg-(--primary) text-white shadow-[0_12px_30px_rgba(59,130,246,.3)]">
            <Construction size={30} strokeWidth={1.4} />
          </div>
        </div>
      </div>

      <div className="absolute left-[18%] top-[18%] size-2 rounded-full bg-(--primary)/70 shadow-[0_0_14px_rgba(59,130,246,.4)]" />

      <div className="absolute right-[15%] top-[41%] size-1.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,.45)]" />

      <div className="absolute bottom-[19%] left-[18%] size-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,.4)]" />
    </div>
  );
}

function WorkshopScene() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden sm:h-[500px] md:h-[570px] lg:h-full lg:min-h-[680px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,.96),rgba(255,255,255,.62)_28%,rgba(212,241,254,.28)_62%,transparent_82%)]" />

      <BlueprintGrid />

      <div className="pointer-events-none absolute -right-[25%] -top-[25%] size-[70%] rounded-full bg-white/65 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-[25%] -left-[25%] size-[70%] rounded-full bg-[#d1ebde]/75 blur-3xl" />

      <div className="pointer-events-none absolute left-[25%] top-[10%] size-[45%] rounded-full bg-[#f8ebc7]/25 blur-3xl" />

      <div className="absolute left-[7%] top-[10%] size-20 rotate-12 rounded-[25px] border border-white/80 bg-white/15 backdrop-blur-sm sm:size-28" />

      <div className="absolute bottom-[9%] right-[6%] size-24 -rotate-12 rounded-[30px] border border-white/70 bg-white/10 backdrop-blur-sm sm:size-36" />

      <div className="absolute left-[10%] top-[23%] size-1.5 rounded-full bg-(--primary)/60" />

      <div className="absolute left-[17%] top-[37%] size-2 rounded-full bg-emerald-500/50" />

      <div className="absolute left-[11%] bottom-[22%] size-1.5 rounded-full bg-amber-400/70" />

      <div className="absolute right-[12%] top-[18%] size-2 rounded-full bg-slate-500/35" />

      <div className="absolute right-[20%] bottom-[29%] size-1.5 rounded-full bg-(--primary)/50" />

      <div className="absolute left-1/2 top-1/2 z-10 size-[min(72%,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />

      <div className="absolute left-1/2 top-1/2 z-10 size-[min(58%,410px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-400/15" />

      <div className="absolute left-1/2 top-1/2 z-10 size-[min(42%,300px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80" />

      <Gear
        size={210}
        teeth={16}
        className="right-[-5%] top-[2%] opacity-65 sm:right-[1%]"
      />

      <Gear
        size={135}
        teeth={13}
        reverse
        tone="blue"
        className="right-[15%] top-[13%] z-20 opacity-85"
      />

      <Gear
        size={170}
        teeth={15}
        tone="steel"
        className="left-[-6%] top-[13%] opacity-55 sm:left-[0%]"
      />

      <Gear
        size={94}
        teeth={12}
        reverse
        tone="gold"
        className="left-[17%] top-[40%] z-20 opacity-75"
      />

      <Gear
        size={68}
        teeth={11}
        tone="blue"
        className="right-[10%] bottom-[17%] z-20 opacity-65"
      />

      <Gear
        size={56}
        teeth={10}
        reverse
        className="left-[8%] bottom-[14%] z-20 opacity-55"
      />

      <MechanicalCore />

      <FloatingTool
        type="hammer"
        className="bottom-[8%] left-[8%] -rotate-12 sm:left-[10%]"
      />

      <FloatingTool
        type="wrench"
        className="bottom-[10%] right-[8%] rotate-6 sm:right-[10%]"
      />

      <FloatingTool
        type="construction"
        className="bottom-[25%] left-[16%] rotate-6 scale-90 sm:left-[19%]"
      />

      <div className="absolute right-[15%] top-[10%] z-40 flex size-9 -rotate-6 items-center justify-center rounded-xl border border-white/90 bg-white/70 text-(--primary) shadow-[0_15px_35px_rgba(45,60,110,.1)] backdrop-blur-md sm:size-10">
        <Sparkles size={17} />
      </div>

      <div className="absolute bottom-[34%] left-[28%] z-40 flex size-7 animate-bounce items-center justify-center rounded-xl bg-[#d1ebde] text-emerald-600 shadow-sm [animation-duration:2.8s] sm:bottom-[32%] sm:left-[29%] sm:size-8">
        <Sparkles size={13} />
      </div>

      <div className="absolute left-[25%] top-[18%] z-40 size-3 rounded-full border-2 border-white bg-(--primary)/70 shadow-sm" />

      <div className="absolute bottom-[19%] right-[29%] z-40 size-2.5 rounded-full border border-white bg-emerald-500/70 shadow-sm" />
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
            <div className="relative order-2 flex items-center justify-center px-6 py-14 sm:px-10 md:px-14 lg:order-1 lg:px-[clamp(3rem,6vw,7rem)]">
              {" "}
              <div className="pointer-events-none absolute -bottom-40 -right-40 size-[430px] rounded-full bg-[#d4f1fe]/45 blur-3xl" />
              <div className="pointer-events-none absolute -left-40 -top-40 size-[430px] rounded-full bg-[#f8ebc7]/25 blur-3xl" />
              <div className="relative z-10 w-full max-w-[610px]">
                <div className="relative">
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
              </div>
            </div>

            <div className="relative order-1 min-h-[430px] overflow-hidden bg-[#d4f1fe] sm:min-h-[520px] lg:order-2 lg:min-h-full">
              <WorkshopScene />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
