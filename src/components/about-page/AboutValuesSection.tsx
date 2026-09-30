import { CheckCircle2 } from "lucide-react";

import AboutSectionHeading from "./AboutSectionHeading";
import { values } from "./about.data";

export default function AboutValuesSection() {
  return (
    <section>
      <AboutSectionHeading
        eyebrow="چیزی که برای ما مهم است"
        title={
          <>
            سه اصل که{" "}
            <span className="text-(--primary)">تجربه ما را می‌سازند</span>
          </>
        }
        description="از طراحی رابط تا انتخاب نوع محتوا، این سه اصل کمک می‌کنند تجربه بعثت محتوا ساده، کاربردی و انسانی باقی بماند."
      />

      <div className="mt-5 flex items-center gap-2 text-[11px] font-bold text-slate-400">
        <CheckCircle2 size={14} className="text-(--primary)" />
        <span>اصول ثابت، تجربه‌ای یکپارچه</span>
        <span className="hidden h-px w-14 bg-slate-200 sm:block" />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-12">
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
  );
}
