"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ClipboardList,
  Compass,
  FileQuestion,
  Lightbulb,
  Map,
  MapPin,
  MessageCircle,
  PencilLine,
  PlayCircle,
  Route,
  Sparkles,
  Target,
  Trophy,
  Users,
  Video,
} from "lucide-react";

import StatisticsSection from "../../../src/components/home-page/StatisticsSection";

const ecosystemItems = [
  {
    icon: FileQuestion,
    title: "نمونه سؤال",
    description: "تمرین، مرور و آمادگی برای آزمون",
    background: "#d0f0fe",
    iconClass: "text-sky-700",
    tag: "کشف و تمرین",
  },
  {
    icon: BookOpen,
    title: "درسنامه و جزوه",
    description: "یادگیری عمیق و جمع‌بندی مطالب",
    background: "#d9d1fb",
    iconClass: "text-violet-700",
    tag: "فهمیدن",
  },
  {
    icon: Video,
    title: "ویدئوی آموزشی",
    description: "یادگیری تصویری و مرحله‌به‌مرحله",
    background: "#d1ecdd",
    iconClass: "text-emerald-700",
    tag: "یادگیری",
  },
  {
    icon: ClipboardList,
    title: "آزمون و تمرین",
    description: "سنجش آموخته‌ها و پیدا کردن نقاط ضعف",
    background: "#f8eac9",
    iconClass: "text-amber-700",
    tag: "سنجش",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "سادگی در یادگیری",
    description:
      "تجربه‌ای طراحی می‌کنیم که پیدا کردن محتوای مناسب، ساده و بدون سردرگمی باشد.",
    background: "#f8eac9",
    iconClass: "text-amber-700",
    size: "lg:col-span-5",
  },
  {
    icon: CheckCircle2,
    title: "محتوای کاربردی",
    description:
      "محتوا باید برای مطالعه، تمرین و آمادگی آزمون واقعاً قابل استفاده باشد.",
    background: "#d0f0fe",
    iconClass: "text-sky-700",
    size: "lg:col-span-3",
  },
  {
    icon: Users,
    title: "رشد در کنار هم",
    description:
      "یادگیری وقتی ارزش بیشتری پیدا می‌کند که دانش‌آموز، مدرس و محتوا در یک مسیر باشند.",
    background: "#d1ecdd",
    iconClass: "text-emerald-700",
    size: "lg:col-span-4",
  },
];

const mapStops = [
  {
    id: "۰۱",
    title: "شروع",
    kicker: "ایستگاه اول",
    description: "نیازت را مشخص کن و نقطه شروع مناسب را پیدا کن.",
    icon: Target,
    background: "#d0f0fe",
    iconClass: "text-sky-700",
    x: 1060,
    y: 105,
    mobilePosition: "right-[2%] top-[4%]",
  },
  {
    id: "۰۲",
    title: "یادگیری",
    kicker: "ایستگاه دوم",
    description: "محتوایی را انتخاب کن که به سطح و هدفت نزدیک‌تر است.",
    icon: BookOpen,
    background: "#d1ecdd",
    iconClass: "text-emerald-700",
    x: 760,
    y: 250,
    mobilePosition: "left-[2%] top-[28%]",
  },
  {
    id: "۰۳",
    title: "تمرین",
    kicker: "ایستگاه سوم",
    description: "با حل سؤال و تمرین، دانستن را به توانستن تبدیل کن.",
    icon: PencilLine,
    background: "#f8eac9",
    iconClass: "text-amber-700",
    x: 468,
    y: 320,
    mobilePosition: "right-[2%] top-[53%]",
  },
  {
    id: "۰۴",
    title: "رشد",
    kicker: "ایستگاه چهارم",
    description: "قدم بعدی را انتخاب کن و مسیر را ادامه بده.",
    icon: Trophy,
    background: "#dfe5fb",
    iconClass: "text-indigo-700",
    x: 92,
    y: 432,
    mobilePosition: "left-[2%] top-[77%]",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="max-w-[48rem]">
      <span className="inline-flex items-center gap-2 rounded-full border border-(--primary)/10 bg-(--primary-light) px-3.5 py-2 text-xs font-bold text-(--primary)">
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2 className="mt-4 text-[clamp(1.9rem,3.7vw,3.1rem)] font-black leading-[1.32] tracking-[-0.04em] text-slate-900">
        {title}
      </h2>

      <p className="mt-4 max-w-[44rem] text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}

function AboutIntro() {
  const cards = [
    {
      icon: MessageCircle,
      title: "از یک سؤال شروع می‌شود",
      description:
        "گاهی تنها چیزی که لازم داریم، یک توضیح درست، یک تمرین مناسب یا یک نمونه‌سؤال خوب است.",
      background: "#d0f0fe",
      iconClass: "text-sky-700",
    },
    {
      icon: PlayCircle,
      title: "هرکس مسیر خودش را دارد",
      description:
        "قرار نیست همه یک شکل یاد بگیرند؛ تجربه یادگیری باید با نیاز، پایه و هدف هر فرد هماهنگ شود.",
      background: "#d1ecdd",
      iconClass: "text-emerald-700",
    },
  ];

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
            {[
              ["یادگیری ساده", "#d0f0fe"],
              ["محتوای کاربردی", "#d1ecdd"],
              ["تجربه یکپارچه", "#f8eac9"],
            ].map(([item, color]) => (
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
        {cards.map((card) => {
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

function TerrainLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 580"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M-30 92C100 31 190 41 264 112C330 175 417 188 503 140C612 79 690 74 784 122C889 177 987 170 1080 116C1146 78 1199 80 1240 95"
        stroke="rgba(71,85,105,0.055)"
        strokeWidth="2"
        strokeDasharray="7 11"
      />
      <path
        d="M-30 130C98 76 182 88 250 149C321 212 414 229 510 183C613 133 698 127 782 170C894 226 983 218 1067 173C1140 134 1192 137 1240 155"
        stroke="rgba(71,85,105,0.05)"
        strokeWidth="2"
        strokeDasharray="7 11"
      />
      <path
        d="M-20 440C91 366 182 375 257 430C339 491 431 502 520 456C614 407 698 406 786 447C882 491 966 485 1060 430C1138 385 1190 384 1230 404"
        stroke="rgba(71,85,105,0.05)"
        strokeWidth="2"
        strokeDasharray="7 11"
      />
      <path
        d="M-30 477C83 411 180 416 251 468C333 528 429 538 524 496C622 454 700 451 788 488C891 533 981 524 1066 478C1140 439 1190 436 1240 455"
        stroke="rgba(71,85,105,0.045)"
        strokeWidth="2"
        strokeDasharray="7 11"
      />
    </svg>
  );
}

function DesktopJourneyMap() {
  const route =
    "M1060 105C1000 52 948 97 920 180C891 264 830 287 760 251C686 214 632 148 555 181C478 214 459 314 377 349C299 382 247 292 160 326C122 341 95 376 92 432";

  return (
    <div className="relative hidden overflow-hidden rounded-[clamp(1.75rem,3vw,2.75rem)] border border-slate-200/80 bg-[#edf5fb] shadow-[0_1.5rem_4rem_rgba(30,55,80,0.08)] md:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_17%_17%,rgba(208,240,254,0.95),transparent_25%),radial-gradient(circle_at_81%_29%,rgba(209,236,221,0.72),transparent_26%),radial-gradient(circle_at_62%_86%,rgba(248,234,201,0.8),transparent_24%)]" />

      <TerrainLines />

      <svg
        className="relative block aspect-[1.95] h-auto w-full"
        viewBox="0 0 1200 580"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="journey-grid"
            width="46"
            height="46"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M46 0H0V46"
              fill="none"
              stroke="rgba(71,85,105,0.055)"
              strokeWidth="1"
            />
          </pattern>

          <linearGradient
            id="route-gradient"
            x1="1060"
            y1="105"
            x2="92"
            y2="432"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#63add0" />
            <stop offset="0.34" stopColor="#6ea888" />
            <stop offset="0.68" stopColor="#d1ae58" />
            <stop offset="1" stopColor="#7588cf" />
          </linearGradient>

          <filter
            id="route-shadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="10"
              floodColor="#244b60"
              floodOpacity="0.12"
            />
          </filter>
        </defs>

        <rect width="1200" height="580" fill="url(#journey-grid)" />

        <path
          d="M0 170C90 108 169 106 250 158C325 207 405 232 493 203C586 172 671 116 768 163C857 207 924 237 1010 202C1100 166 1155 171 1200 196"
          fill="none"
          stroke="rgba(255,255,255,0.62)"
          strokeWidth="72"
          strokeLinecap="round"
        />

        <path
          d="M58 390C151 330 226 333 298 381C383 438 463 460 553 416C640 375 721 347 810 392C901 439 981 442 1063 399C1124 367 1171 370 1214 393"
          fill="none"
          stroke="rgba(255,255,255,0.46)"
          strokeWidth="78"
          strokeLinecap="round"
        />

        <ellipse
          cx="203"
          cy="112"
          rx="133"
          ry="70"
          stroke="rgba(99,102,241,0.1)"
          strokeWidth="2"
          strokeDasharray="8 12"
        />

        <ellipse
          cx="1000"
          cy="418"
          rx="146"
          ry="75"
          stroke="rgba(16,185,129,0.1)"
          strokeWidth="2"
          strokeDasharray="8 12"
        />

        <path
          d="M126 176C205 136 258 144 319 118"
          stroke="rgba(71,85,105,0.08)"
          strokeWidth="2"
          strokeDasharray="7 11"
        />

        <path
          d="M835 474C914 490 991 469 1065 427"
          stroke="rgba(71,85,105,0.08)"
          strokeWidth="2"
          strokeDasharray="7 11"
        />

        <path
          d={route}
          stroke="rgba(255,255,255,0.94)"
          strokeWidth="24"
          strokeLinecap="round"
          filter="url(#route-shadow)"
        />

        <path
          d={route}
          stroke="url(#route-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="2 14"
        />

        {mapStops.map((stop, index) => {
          const colors = ["#63add0", "#6ea888", "#d1ae58", "#7588cf"];

          return (
            <g key={stop.id}>
              <circle
                cx={stop.x}
                cy={stop.y}
                r="20"
                fill="white"
                opacity="0.96"
              />
              <circle cx={stop.x} cy={stop.y} r="10" fill={colors[index]} />
              <circle
                cx={stop.x}
                cy={stop.y}
                r="4"
                fill="white"
                opacity="0.95"
              />
            </g>
          );
        })}

        <g transform="translate(76 432)">
          <path
            d="M0 20C10 7 22 7 31 20C22 31 10 31 0 20Z"
            fill="white"
            stroke="rgba(71,85,105,0.18)"
          />
          <path
            d="M15 2V20"
            stroke="#6f84ce"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M15 2L29 7L15 11Z" fill="#6f84ce" />
        </g>

        <g transform="translate(1060 105)">
          <circle r="25" fill="white" opacity="0.9" />
          <path d="M0 -13L5 3L0 10L-5 3Z" fill="#63add0" />
          <path d="M0 13L-4 -1L0 -8L4 -1Z" fill="#d1ae58" />
        </g>
      </svg>

      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/85 bg-white/80 px-3.5 py-2 text-[10px] font-black text-slate-500 shadow-sm backdrop-blur-lg">
        <Compass size={14} />
        نقشه مسیر یادگیری
      </div>

      <div className="absolute left-5 top-5 hidden items-center gap-2 rounded-full border border-white/85 bg-white/80 px-3.5 py-2 text-[10px] font-bold text-slate-500 shadow-sm backdrop-blur-lg sm:flex">
        <Map size={13} />
        کشف ← یادگیری ← تمرین ← رشد
      </div>

      <div className="absolute bottom-5 right-5 hidden items-center gap-2 rounded-full border border-white/85 bg-white/80 px-3.5 py-2 text-[10px] font-bold text-slate-500 shadow-sm backdrop-blur-lg xl:flex">
        <Route size={13} />
        یک مسیر پیوسته، چند مرحله برای رشد
      </div>

      {mapStops.map((stop) => {
        const Icon = stop.icon;

        const positions: Record<string, string> = {
          "۰۱": "right-[4%] top-[7%]",
          "۰۲": "left-[25%] top-[40%]",
          "۰۳": "left-[34%] top-[7%]",
          "۰۴": "left-[3%] bottom-[7%]",
        };

        return (
          <div
            key={stop.id}
            className={`absolute z-20 w-[clamp(13rem,20vw,16rem)] ${positions[stop.id]}`}
          >
            <div className="rounded-[1.45rem] border border-white/90 bg-white/86 p-4 shadow-[0_1.25rem_3rem_rgba(31,52,74,0.1)] backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${stop.iconClass}`}
                  style={{ backgroundColor: stop.background }}
                >
                  <Icon size={19} strokeWidth={1.8} />
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400">
                    <span>{stop.kicker}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{stop.id}</span>
                  </div>

                  <h3 className="mt-1 text-sm font-black text-slate-800">
                    {stop.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    {stop.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MobileJourneyMap() {
  return (
    <div className="relative overflow-hidden rounded-[clamp(1.75rem,4vw,2.5rem)] border border-slate-200/80 bg-[#edf5fb] p-4 shadow-cu sm:p-5 md:hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(208,240,254,0.95),transparent_27%),radial-gradient(circle_at_85%_48%,rgba(209,236,221,0.72),transparent_27%),radial-gradient(circle_at_18%_90%,rgba(248,234,201,0.78),transparent_24%)]" />

      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-black text-slate-600">
          <Compass size={15} />
          نقشه مسیر یادگیری
        </div>

        <span className="rounded-full border border-white/90 bg-white/75 px-3 py-1.5 text-[10px] font-bold text-slate-500 shadow-sm">
          ۴ ایستگاه
        </span>
      </div>

      <div className="relative mx-auto mt-4 min-h-[clamp(35rem,150vw,47rem)] max-w-[26rem]">
        <svg
          className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-[76%] -translate-x-1/2"
          viewBox="0 0 280 820"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="route-gradient-mobile"
              x1="140"
              y1="34"
              x2="140"
              y2="780"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#63add0" />
              <stop offset="0.35" stopColor="#6ea888" />
              <stop offset="0.68" stopColor="#d1ae58" />
              <stop offset="1" stopColor="#7588cf" />
            </linearGradient>
          </defs>

          <path
            d="M140 38C39 99 240 155 139 247C42 336 238 390 140 480C51 564 226 634 138 785"
            stroke="rgba(255,255,255,0.94)"
            strokeWidth="22"
            strokeLinecap="round"
          />

          <path
            d="M140 38C39 99 240 155 139 247C42 336 238 390 140 480C51 564 226 634 138 785"
            stroke="url(#route-gradient-mobile)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="2 15"
          />

          <circle cx="140" cy="38" r="13" fill="white" />
          <circle cx="140" cy="38" r="7" fill="#63add0" />

          <circle cx="139" cy="247" r="13" fill="white" />
          <circle cx="139" cy="247" r="7" fill="#6ea888" />

          <circle cx="140" cy="480" r="13" fill="white" />
          <circle cx="140" cy="480" r="7" fill="#d1ae58" />

          <circle cx="138" cy="785" r="13" fill="white" />
          <circle cx="138" cy="785" r="7" fill="#7588cf" />
        </svg>

        {mapStops.map((stop) => {
          const Icon = stop.icon;

          return (
            <div
              key={stop.id}
              className={`absolute z-10 w-[84%] ${stop.mobilePosition}`}
            >
              <div className="rounded-[1.4rem] border border-white/90 bg-white/86 p-4 shadow-[0_1rem_2.3rem_rgba(31,52,74,0.09)] backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${stop.iconClass}`}
                    style={{ backgroundColor: stop.background }}
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400">
                      <span>{stop.kicker}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{stop.id}</span>
                    </div>

                    <h3 className="mt-1 text-sm font-black text-slate-800">
                      {stop.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                      {stop.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mt-2 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400">
        <MapPin size={13} />
        نقطه پایان، شروع مرحله بعدی است
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen cursor-default overflow-hidden bg-[#f7f8f8] pb-20 text-(--text) md:pb-0"
    >
      <div className="-mt-[clamp(3.5rem,6vw,6rem)]">
        <StatisticsSection />
      </div>

      <div className="mx-auto w-full max-w-[90rem] space-y-[clamp(2.5rem,4.5vw,4.5rem)] px-4 sm:px-6 lg:px-8">
        <AboutIntro />

        <section>
          <SectionHeading
            eyebrow="یک اکوسیستم آموزشی"
            title={
              <>
                برای ادامه دادن،
                <span className="text-(--primary)"> همه‌چیز کنار هم</span>
                {" قرار می‌گیرد"}
              </>
            }
            description="محتوا پلاس فقط مجموعه‌ای از فایل‌ها نیست؛ هر نوع محتوا نقش خودش را در تجربه یادگیری دارد و به مرحله بعدی وصل می‌شود."
          />

          <div className="relative mt-7">
            <div className="pointer-events-none absolute right-[12%] left-[12%] top-[3.6rem] hidden h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent xl:block" />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {ecosystemItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[clamp(1.6rem,2.5vw,2rem)] border border-slate-200/80 bg-white p-[clamp(1.25rem,2.3vw,1.6rem)] shadow-cu transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_1.25rem_2.75rem_rgba(15,23,42,0.08)]"
                  >
                    <div
                      className="pointer-events-none absolute -left-10 -top-10 size-28 rounded-full opacity-75 blur-2xl"
                      style={{ backgroundColor: item.background }}
                    />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div
                        className={`flex size-12 items-center justify-center rounded-2xl ${item.iconClass} transition-transform duration-300 group-hover:scale-105`}
                        style={{ backgroundColor: item.background }}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <span className="text-[11px] font-black text-slate-300">
                        {"۰" + (index + 1)}
                      </span>
                    </div>

                    <div className="relative z-10 mt-7 flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400">
                        {item.tag}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-300" />

                      <span className="text-[10px] font-bold text-slate-300">
                        مرحله یادگیری
                      </span>
                    </div>

                    <h3 className="relative z-10 mt-2 text-base font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="relative z-10 mt-2 text-xs leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <div className="relative z-10 mt-7 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-[10px] font-bold text-slate-300">
                        بخشی از مسیر یادگیری
                      </span>

                      <ArrowLeft
                        size={16}
                        className="text-slate-300 transition-colors duration-300 group-hover:text-(--primary)"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="نقشه مسیر یادگیری"
            title={
              <>
                مسیر یادگیری را{" "}
                <span className="text-(--primary)">روی نقشه ببین</span>
              </>
            }
            description="چهار ایستگاه، یک مسیر پیوسته و یک مقصد که همیشه می‌تواند تبدیل به شروع مرحله بعدی شود. اینجا مسیر یادگیری مثل یک نقشه واقعی دیده می‌شود، نه یک timeline ساده."
          />

          <div className="mt-7">
            <DesktopJourneyMap />
            <MobileJourneyMap />
          </div>
        </section>

        <section>
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="چیزی که برای ما مهم است"
                title={
                  <>
                    سه اصل که{" "}
                    <span className="text-(--primary)">
                      تجربه ما را می‌سازند
                    </span>
                  </>
                }
                description="از طراحی رابط تا انتخاب نوع محتوا، این سه اصل کمک می‌کنند تجربه محتوا پلاس ساده، کاربردی و انسانی باقی بماند."
              />
            </div>

            <div className="hidden items-center justify-end gap-2 text-[11px] font-bold text-slate-400 lg:col-span-5 lg:flex">
              <span className="h-px w-12 bg-slate-200" />
              اصول ثابت، تجربه‌ای یکپارچه
              <CheckCircle2 size={14} className="text-(--primary)" />
            </div>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-12">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className={`group rounded-[clamp(1.6rem,2.5vw,2rem)] border border-slate-200/80 bg-white p-[clamp(1.35rem,2.7vw,2rem)] shadow-cu transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_1.25rem_2.75rem_rgba(15,23,42,0.08)] ${value.size}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex size-12 items-center justify-center rounded-2xl ${value.iconClass} transition-transform duration-300 group-hover:scale-105`}
                      style={{ backgroundColor: value.background }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="text-[10px] font-black text-slate-300">
                      اصل
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-black text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-2 max-w-[34rem] text-xs leading-7 text-slate-500">
                    {value.description}
                  </p>

                  <div
                    className="mt-7 h-1 w-16 rounded-full opacity-75 transition-all duration-300 group-hover:w-24"
                    style={{ backgroundColor: value.background }}
                  />
                </div>
              );
            })}
          </div>
        </section>

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
                  پایه و موضوعت را انتخاب کن و از اولین ایستگاه مسیر یادگیری
                  شروع کن.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["کشف", "یادگیری", "تمرین", "رشد"].map((item, index) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white/75"
                    >
                      <span
                        className="size-1.5 rounded-full"
                        style={{
                          backgroundColor: [
                            "#d0f0fe",
                            "#d1ecdd",
                            "#f8eac9",
                            "#dfe5fb",
                          ][index],
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
      </div>
    </main>
  );
}
