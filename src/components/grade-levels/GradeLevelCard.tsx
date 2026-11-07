"use client";

import Link from "next/link";
import type { GradeLevel, GradeQuickLink } from "./GradeLevels";
import GradeLevelCardQuickLinks from "./GradeLevelCardQuickLinks";

interface GradeLevelCardProps {
  grade: GradeLevel;
  gradient: string;
  lightBg: string;
  accentText: string;
  quickLinks: GradeQuickLink[];
  formatNumber: (num: number) => string;
  getCount: (typeId: string, gradeId: string) => number;
}

export default function GradeLevelCard({
  grade,
  gradient,
  lightBg,
  accentText,
  quickLinks,
  formatNumber,
  getCount,
}: GradeLevelCardProps) {
  const GradeIcon = grade.icon;
  const gradeHref = grade.href;

  return (
    <div className="group/card relative isolate flex min-w-0 min-h-[14rem] overflow-hidden rounded-[clamp(1.25rem,2vw,1.625rem)] border border-slate-200/80 bg-white shadow-[0_0.5rem_1.75rem_rgba(15,23,42,0.05)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_1.125rem_2.8125rem_rgba(15,23,42,0.11)]">
      <div
        className={`absolute left-1/2 top-2 z-30 h-1 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r ${gradient} opacity-85 transition-all duration-300 group-hover/card:top-2.5 group-hover/card:w-16 group-hover/card:opacity-100`}
      />

      <div
        className={`pointer-events-none absolute -left-24 -top-24 size-48 rounded-full bg-gradient-to-br ${gradient} opacity-[0.04] blur-3xl transition-opacity duration-300 group-hover/card:opacity-[0.07]`}
      />

      <div
        className={`pointer-events-none absolute -bottom-24 -right-20 size-48 rounded-full ${lightBg} opacity-50 blur-3xl transition-opacity duration-300 group-hover/card:opacity-70`}
      />

      <div className="relative z-10 flex min-h-full w-full min-w-0 flex-col p-[clamp(0.875rem,1.5vw,1rem)]">
        <Link href={gradeHref} className="flex min-h-0 flex-1 flex-col">
          <div className="flex min-w-0 items-center justify-between gap-3">
            <div
              className={`flex min-w-9 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} px-2.5 py-2 text-sm font-black text-white shadow-[0_0.375rem_1rem_rgba(15,23,42,0.11)] transition-transform duration-300 group-hover/card:scale-105`}
            >
              {grade.number}
            </div>

            <div
              className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${lightBg} ${accentText} ring-1 ring-slate-900/[0.025] transition-all duration-300 group-hover/card:-translate-y-0.5 group-hover/card:shadow-[0_0.375rem_1rem_rgba(15,23,42,0.08)]`}
            >
              <GradeIcon className="size-5" strokeWidth={1.75} />
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-[clamp(0.75rem,2vw,1.5rem)]">
            <div
              className={`relative flex size-[clamp(4rem,6vw,4.25rem)] shrink-0 items-center justify-center rounded-[clamp(1rem,1.75vw,1.3125rem)] ${lightBg} ${accentText} shadow-[0_0.5rem_1.375rem_rgba(15,23,42,0.06)] ring-1 ring-slate-900/[0.025] transition-all duration-300 group-hover/card:-translate-y-1 group-hover/card:scale-[1.04] group-hover/card:shadow-[0_0.75rem_1.75rem_rgba(15,23,42,0.1)]`}
            >
              <div
                className={`absolute inset-1 rounded-[1.0625rem] bg-gradient-to-br ${gradient} opacity-[0.06] transition-opacity duration-300 group-hover/card:opacity-[0.1]`}
              />

              <GradeIcon
                className="relative z-10 size-8 transition-transform duration-300 group-hover/card:scale-105"
                strokeWidth={1.65}
              />
            </div>

            <h4 className="mt-2.5 text-[clamp(0.9375rem,1.35vw,1rem)] font-black tracking-tight text-slate-800 transition-colors duration-300 group-hover/card:text-[var(--primary)]">
              {grade.label}
            </h4>

            <div className="mt-1.5 h-0.5 w-7 rounded-full bg-slate-200 transition-all duration-300 group-hover/card:w-10 group-hover/card:bg-(--primary)" />
          </div>
        </Link>

        <GradeLevelCardQuickLinks
          quickLinks={quickLinks}
          gradeId={grade.id}
          base={grade.baseId}
          formatNumber={formatNumber}
          getCount={getCount}
        />
      </div>
    </div>
  );
}
