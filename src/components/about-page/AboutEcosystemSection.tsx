import { ArrowLeft } from "lucide-react";

import AboutSectionHeading from "./AboutSectionHeading";
import { ecosystemItems } from "./about.data";

export default function AboutEcosystemSection() {
  return (
    <section>
      <AboutSectionHeading
        eyebrow="یک اکوسیستم آموزشی"
        title={
          <>
            برای ادامه دادن،{" "}
            <span className="text-(--primary)">همه‌چیز کنار هم</span> قرار
            می‌گیرد
          </>
        }
        description="محتوا پلاس فقط مجموعه‌ای از فایل‌ها نیست؛ هر نوع محتوا نقش خودش را در تجربه یادگیری دارد و به مرحله بعدی وصل می‌شود."
      />

      <div className="relative mt-8">
        <div className="pointer-events-none absolute right-[10%] left-[10%] top-[3.8rem] hidden h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent xl:block" />

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
  );
}
