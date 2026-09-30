import { Flag, Layers3, MapPinned } from "lucide-react";

import { mapStops } from "./about.data";

import TerrainLines from "./TerrainLines";

const desktopCallouts: Record<
  string,
  {
    position: string;
    connectorPath: string;
    color: string;
    markerId: string;
    port: "top" | "bottom" | "left";
    anchorX: number;
    anchorY: number;
  }
> = {
  "۰۱": {
    position: "right-[1%] top-[30%]",
    connectorPath: "M1104 186C1102 166 1083 142 1060 126",
    color: "#63add0",
    markerId: "map-arrow-sky",
    port: "top",
    anchorX: 1060,
    anchorY: 126,
  },
  "۰۲": {
    position: "right-[27%] top-[2%]",
    connectorPath: "M792 140C786 175 773 226 758 258",
    color: "#6ea888",
    markerId: "map-arrow-green",
    port: "bottom",
    anchorX: 758,
    anchorY: 258,
  },
  "۰۳": {
    position: "left-[40%] top-[50%]",
    connectorPath: "M550 310C500 286 535 254 500 225",
    color: "#d1ae58",
    markerId: "map-arrow-gold",
    port: "top",
    anchorX: 500,
    anchorY: 225,
  },
  "۰۴": {
    position: "left-[1.5%] top-[22%]",
    connectorPath: "M96 232C99 310 60 414 110 468",
    color: "#7588cf",
    markerId: "map-arrow-indigo",
    port: "bottom",
    anchorX: 110,
    anchorY: 468,
  },
};

function MapStopCard({
  stop,
  layout,
}: {
  stop: (typeof mapStops)[number];
  layout: (typeof desktopCallouts)[string];
}) {
  const Icon = stop.icon;

  return (
    <div
      className={`absolute z-30 hidden w-[clamp(9.5rem,14vw,13.25rem)] md:block min-[768px]:max-[1023px]:w-[clamp(7.5rem,13vw,9rem)] ${layout.position}`}
    >
      <div className="group relative overflow-visible rounded-[clamp(1rem,1.35vw,1.35rem)] border border-white/90 bg-white/88 p-[clamp(0.65rem,1vw,0.875rem)] min-[768px]:max-[1023px]:rounded-[1rem] min-[768px]:max-[1023px]:p-2 shadow-[0_1.15rem_3rem_rgba(31,52,74,0.1)] backdrop-blur-2xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1.4rem_3.4rem_rgba(31,52,74,0.14)]">
        <div
          className="pointer-events-none absolute -right-7 -top-7 size-20 rounded-full opacity-60 blur-3xl"
          style={{ backgroundColor: stop.background }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-[clamp(0.5rem,0.8vw,0.75rem)] min-[768px]:max-[1023px]:gap-1.5">
            <div
              className={`flex size-[clamp(2rem,3vw,2.5rem)] shrink-0 items-center justify-center rounded-[0.9rem] ${stop.iconClass} ring-4 ring-white/80 transition-transform duration-300 group-hover:scale-105 min-[768px]:max-[1023px]:size-8 min-[768px]:max-[1023px]:rounded-[0.7rem]`}
              style={{ backgroundColor: stop.background }}
            >
              <Icon
                size={18}
                strokeWidth={1.8}
                className="min-[768px]:max-[1023px]:size-4"
              />
            </div>

            <div className="flex min-w-0 flex-col items-end gap-1 min-[768px]:max-[1023px]:gap-0.5">
              <span className="rounded-full border border-slate-100 bg-slate-50 px-[clamp(0.35rem,0.55vw,0.5rem)] py-0.5 text-[clamp(0.5625rem,0.7vw,0.625rem)] font-black text-slate-400 min-[768px]:max-[1023px]:px-1.5 min-[768px]:max-[1023px]:text-[8px]">
                {stop.kicker}
              </span>

              <span className="text-[9px] font-black text-slate-200 min-[768px]:max-[1023px]:text-[8px]">
                {stop.id}
              </span>
            </div>
          </div>

          <div className="mt-[clamp(0.6rem,0.9vw,0.75rem)] min-[768px]:max-[1023px]:mt-2">
            <div className="flex items-center gap-1.5 min-[768px]:max-[1023px]:gap-1">
              <span
                className="size-1.5 rounded-full min-[768px]:max-[1023px]:size-1"
                style={{ backgroundColor: layout.color }}
              />

              <span className="text-[clamp(0.5rem,0.65vw,0.5625rem)] font-black text-slate-400 min-[768px]:max-[1023px]:text-[8px]">
                {stop.region}
              </span>
            </div>

            <p className="mt-1.5 text-[clamp(0.625rem,0.78vw,0.75rem)] leading-[1.85] text-slate-500 min-[768px]:max-[1023px]:hidden">
              {stop.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DesktopJourneyMap() {
  const route =
    "M1060 126C1002 67 949 96 916 177C881 262 825 280 758 258C690 236 630 157 553 197C470 240 463 319 382 354C304 388 244 305 160 339C123 354 101 402 110 468";

  return (
    <div className="relative hidden overflow-hidden rounded-[clamp(1.75rem,3vw,2.75rem)] border border-slate-200/80 bg-[#edf5fb] shadow-[0_1.5rem_4rem_rgba(30,55,80,0.08)] md:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_14%,rgba(208,240,254,0.95),transparent_25%),radial-gradient(circle_at_84%_28%,rgba(209,236,221,0.72),transparent_27%),radial-gradient(circle_at_62%_86%,rgba(248,234,201,0.8),transparent_25%)]" />

      <TerrainLines />

      <div className="absolute inset-x-5 top-5 z-50 flex items-center justify-between gap-3 min-[768px]:max-[1023px]:hidden">
        {" "}
        <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/82 px-3.5 py-2 text-[10px] font-black text-slate-500 shadow-sm backdrop-blur-xl">
          <MapPinned size={14} />
          نقشه مسیر یادگیری
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/82 px-3.5 py-2 text-[10px] font-bold text-slate-500 shadow-sm backdrop-blur-xl">
            <Layers3 size={13} />۴ ایستگاه
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/82 px-3.5 py-2 text-[10px] font-bold text-slate-500 shadow-sm backdrop-blur-xl">
            <Flag size={13} />۱ مقصد
          </span>
        </div>
      </div>

      <svg
        className="relative block aspect-[2.35] h-auto w-full"
        viewBox="0 0 1200 620"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="journey-grid"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M44 0H0V44"
              fill="none"
              stroke="rgba(71,85,105,0.05)"
              strokeWidth="1"
            />
          </pattern>

          <linearGradient
            id="route-gradient"
            x1="1060"
            y1="126"
            x2="110"
            y2="468"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#63add0" />
            <stop offset="0.34" stopColor="#6ea888" />
            <stop offset="0.67" stopColor="#d1ae58" />
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
              dy="9"
              stdDeviation="12"
              floodColor="#244b60"
              floodOpacity="0.12"
            />
          </filter>

          <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="16"
              floodColor="#29455a"
              floodOpacity="0.09"
            />
          </filter>

          <filter
            id="connector-shadow"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#ffffff"
              floodOpacity="0.9"
            />
          </filter>

          <marker
            id="map-arrow-sky"
            viewBox="0 0 12 12"
            refX="10"
            refY="6"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M1 1L11 6L1 11L3.5 6Z" fill="#63add0" />
          </marker>

          <marker
            id="map-arrow-green"
            viewBox="0 0 12 12"
            refX="10"
            refY="6"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M1 1L11 6L1 11L3.5 6Z" fill="#6ea888" />
          </marker>

          <marker
            id="map-arrow-gold"
            viewBox="0 0 12 12"
            refX="10"
            refY="6"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M1 1L11 6L1 11L3.5 6Z" fill="#d1ae58" />
          </marker>

          <marker
            id="map-arrow-indigo"
            viewBox="0 0 12 12"
            refX="10"
            refY="6"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M1 1L11 6L1 11L3.5 6Z" fill="#7588cf" />
          </marker>
        </defs>

        <rect width="1200" height="620" fill="url(#journey-grid)" />

        <path
          d="M34 170C125 105 208 107 292 164C365 214 443 236 526 206C614 174 695 125 782 159C877 196 938 235 1023 208C1110 180 1163 181 1217 209"
          fill="none"
          stroke="rgba(255,255,255,0.68)"
          strokeWidth="92"
          strokeLinecap="round"
        />

        <path
          d="M40 420C130 359 215 359 302 417C390 477 462 492 549 456C641 417 716 382 811 422C897 459 985 459 1066 419C1136 384 1178 391 1216 413"
          fill="none"
          stroke="rgba(255,255,255,0.54)"
          strokeWidth="104"
          strokeLinecap="round"
        />

        <path
          d="M140 170C205 135 261 145 320 119"
          stroke="rgba(71,85,105,0.075)"
          strokeWidth="2"
          strokeDasharray="7 11"
        />

        <path
          d="M822 490C907 507 991 480 1073 430"
          stroke="rgba(71,85,105,0.075)"
          strokeWidth="2"
          strokeDasharray="7 11"
        />

        <ellipse
          cx="220"
          cy="120"
          rx="145"
          ry="76"
          stroke="rgba(99,102,241,0.09)"
          strokeWidth="2"
          strokeDasharray="8 12"
        />

        <ellipse
          cx="1010"
          cy="449"
          rx="156"
          ry="82"
          stroke="rgba(16,185,129,0.09)"
          strokeWidth="2"
          strokeDasharray="8 12"
        />

        <path
          d={route}
          stroke="rgba(255,255,255,0.95)"
          strokeWidth="28"
          strokeLinecap="round"
          filter="url(#route-shadow)"
        />

        <path
          d={route}
          stroke="url(#route-gradient)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray="2 14"
        />

        {mapStops.map((stop) => {
          const layout = desktopCallouts[stop.id];

          return (
            <g key={stop.id}>
              <circle
                cx={layout.anchorX}
                cy={layout.anchorY}
                r="30"
                fill="rgba(255,255,255,0.46)"
              />

              <circle
                cx={layout.anchorX}
                cy={layout.anchorY}
                r="22"
                fill="white"
                filter="url(#soft-shadow)"
              />

              <circle
                cx={layout.anchorX}
                cy={layout.anchorY}
                r="12"
                fill={layout.color}
              />

              <circle
                cx={layout.anchorX}
                cy={layout.anchorY}
                r="5"
                fill="white"
                opacity="0.98"
              />

              <circle
                cx={layout.anchorX}
                cy={layout.anchorY}
                r="18"
                fill="none"
                stroke={layout.color}
                strokeWidth="2"
                opacity="0.18"
              />
            </g>
          );
        })}
      </svg>

      <svg
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
        viewBox="0 0 1200 620"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {mapStops.map((stop) => {
          const layout = desktopCallouts[stop.id];

          return (
            <g key={stop.id}>
              <path
                d={layout.connectorPath}
                stroke="rgba(255,255,255,0.98)"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#connector-shadow)"
              />

              <path
                d={layout.connectorPath}
                stroke={layout.color}
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd={`url(#${layout.markerId})`}
              />
            </g>
          );
        })}
      </svg>

      {mapStops.map((stop) => {
        const layout = desktopCallouts[stop.id];

        return <MapStopCard key={stop.id} stop={stop} layout={layout} />;
      })}
    </div>
  );
}
