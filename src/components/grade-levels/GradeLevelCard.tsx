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
  getMockCount: (type: string, gradeIndex: number) => number;
}

const getBaseByGrade = (gradeIndex: number) => {
  if (gradeIndex <= 3) return "elementary-first";
  if (gradeIndex <= 6) return "elementary-second";
  if (gradeIndex <= 9) return "middle-first";
  return "middle-second";
};

export default function GradeLevelCard({
  grade,
  gradient,
  lightBg,
  accentText,
  quickLinks,
  formatNumber,
  getMockCount,
}: GradeLevelCardProps) {
  const GradeIcon = grade.icon;
  const base = getBaseByGrade(grade.index);
  const gradeHref = `/contents?base=${base}&level=${grade.index}`;

  return (
    <div className="group/card relative isolate flex aspect-square min-h-[220px] overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)]">
      <div
        className={`absolute left-1/2 top-2 z-30 h-[4px] w-12 -translate-x-1/2 rounded-full bg-gradient-to-r ${gradient} opacity-85 transition-all duration-300 group-hover/card:top-2.5 group-hover/card:w-16 group-hover/card:opacity-100`}
      />

      <div
        className={`pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br ${gradient} opacity-[0.04] blur-3xl transition-opacity duration-300 group-hover/card:opacity-[0.07]`}
      />

      <div
        className={`pointer-events-none absolute -bottom-24 -right-20 h-48 w-48 rounded-full ${lightBg} opacity-50 blur-3xl transition-opacity duration-300 group-hover/card:opacity-70`}
      />

      <div className="relative z-10 flex h-full w-full flex-col p-4">
        <Link href={gradeHref} className="flex min-h-0 flex-1 flex-col">
          <div className="flex h-10 shrink-0 items-center justify-between">
            <div
              className={`flex h-9 min-w-9 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} px-2.5 text-sm font-black text-white shadow-[0_6px_16px_rgba(15,23,42,0.11)] transition-transform duration-300 group-hover/card:scale-105`}
            >
              {grade.number}
            </div>

            <div
              className={`flex h-9 w-9 items-center justify-center rounded-xl ${lightBg} ${accentText} ring-1 ring-slate-900/[0.025] transition-all duration-300 group-hover/card:-translate-y-0.5 group-hover/card:shadow-[0_6px_16px_rgba(15,23,42,0.08)]`}
            >
              <GradeIcon size={20} strokeWidth={1.75} />
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
            <div
              className={`relative flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[21px] ${lightBg} ${accentText} shadow-[0_8px_22px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/[0.025] transition-all duration-300 group-hover/card:-translate-y-1 group-hover/card:scale-[1.04] group-hover/card:shadow-[0_12px_28px_rgba(15,23,42,0.1)]`}
            >
              <div
                className={`absolute inset-[4px] rounded-[17px] bg-gradient-to-br ${gradient} opacity-[0.06] transition-opacity duration-300 group-hover/card:opacity-[0.1]`}
              />

              <GradeIcon
                size={32}
                strokeWidth={1.65}
                className="relative z-10 transition-transform duration-300 group-hover/card:scale-105"
              />
            </div>

            <h4 className="mt-2.5 text-[16px] font-black tracking-tight text-slate-800 transition-colors duration-300 group-hover/card:text-[var(--primary)]">
              {grade.label}
            </h4>

            <div className="mt-1.5 h-0.5 w-7 rounded-full bg-slate-200 transition-all duration-300 group-hover/card:w-10 group-hover/card:bg-(--primary)" />
          </div>
        </Link>

        <GradeLevelCardQuickLinks
          quickLinks={quickLinks}
          gradeIndex={grade.index}
          base={base}
          formatNumber={formatNumber}
          getMockCount={getMockCount}
        />
      </div>
    </div>
  );
}
