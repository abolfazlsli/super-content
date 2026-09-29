import { MapPinned, MapPin } from "lucide-react";

import { mapStops } from "./about.data";

export default function MobileJourneyMap() {
  return (
    <div className="relative overflow-hidden rounded-[clamp(1.75rem,4vw,2.5rem)] border border-slate-200/80 bg-[#edf5fb] p-4 shadow-cu sm:p-5 md:hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(208,240,254,0.95),transparent_27%),radial-gradient(circle_at_85%_48%,rgba(209,236,221,0.72),transparent_27%),radial-gradient(circle_at_18%_90%,rgba(248,234,201,0.78),transparent_24%)]" />

      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-black text-slate-600">
          <MapPinned size={15} />
          نقشه مسیر یادگیری
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/90 bg-white/75 px-3 py-1.5 text-[10px] font-bold text-slate-500 shadow-sm">
            ۴ ایستگاه
          </span>

          <span className="rounded-full border border-white/90 bg-white/75 px-3 py-1.5 text-[10px] font-bold text-slate-500 shadow-sm">
            ۱ مقصد
          </span>
        </div>
      </div>

      <div className="relative mx-auto mt-5 min-h-[clamp(37rem,155vw,48rem)] max-w-[27rem]">
        <svg
          className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-[78%] -translate-x-1/2"
          viewBox="0 0 280 840"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="route-gradient-mobile"
              x1="140"
              y1="34"
              x2="140"
              y2="804"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#63add0" />
              <stop offset="0.35" stopColor="#6ea888" />
              <stop offset="0.68" stopColor="#d1ae58" />
              <stop offset="1" stopColor="#7588cf" />
            </linearGradient>
          </defs>

          <path
            d="M140 38C38 101 241 159 140 252C41 344 240 405 140 492C52 574 228 644 138 804"
            stroke="rgba(255,255,255,0.96)"
            strokeWidth="23"
            strokeLinecap="round"
          />

          <path
            d="M140 38C38 101 241 159 140 252C41 344 240 405 140 492C52 574 228 644 138 804"
            stroke="url(#route-gradient-mobile)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="2 15"
          />

          <circle cx="140" cy="38" r="15" fill="white" />
          <circle cx="140" cy="38" r="8" fill="#63add0" />

          <circle cx="140" cy="252" r="15" fill="white" />
          <circle cx="140" cy="252" r="8" fill="#6ea888" />

          <circle cx="140" cy="492" r="15" fill="white" />
          <circle cx="140" cy="492" r="8" fill="#d1ae58" />

          <circle cx="138" cy="804" r="15" fill="white" />
          <circle cx="138" cy="804" r="8" fill="#7588cf" />
        </svg>

        {mapStops.map((stop) => {
          const Icon = stop.icon;

          return (
            <div
              key={stop.id}
              className={`absolute z-10 w-[84%] ${stop.mobilePosition}`}
            >
              <div className="rounded-[1.45rem] border border-white/90 bg-white/86 p-4 shadow-[0_1rem_2.3rem_rgba(31,52,74,0.09)] backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${stop.iconClass}`}
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

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-[9px] font-bold text-slate-300">
                    {stop.region}
                  </span>

                  <span
                    className="h-1.5 w-10 rounded-full"
                    style={{ backgroundColor: stop.background }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mt-1 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400">
        <MapPin size={13} />
        نقطه پایان، شروع مرحله بعدی است
      </div>
    </div>
  );
}
