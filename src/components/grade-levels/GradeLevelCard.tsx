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
  return (
    <Link
      href={grade.href}
      className="group/card relative isolate flex aspect-square min-h-[220px] overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_18px_42px_rgba(15,23,42,0.09)]"
    >
      {" "}
      <div
        className={`absolute bottom-5 left-2.5 top-5 z-30 w-[6px] rounded-full bg-gradient-to-b ${gradient} opacity-90 transition-all duration-300 group-hover/card:bottom-4 group-hover/card:top-4 group-hover/card:w-[7px]`}
      />{" "}
      <div
        className={`pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br ${gradient} opacity-[0.04] blur-3xl`}
      />{" "}
      <div
        className={`pointer-events-none absolute -bottom-24 -right-20 h-48 w-48 rounded-full ${lightBg} opacity-50 blur-3xl`}
      />{" "}
      <div className="relative z-10 flex h-full w-full flex-col p-4">
        {" "}
        <div className="flex h-10 shrink-0 items-center justify-between">
          {" "}
          <div
            className={`flex h-9 min-w-9 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} px-2.5 text-sm font-black text-white shadow-[0_6px_16px_rgba(15,23,42,0.11)] transition-transform duration-300 group-hover/card:scale-105`}
          >
            {" "}
            {grade.number}{" "}
          </div>{" "}
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl ${lightBg} ${accentText} ring-1 ring-slate-900/[0.025] transition-transform duration-300 group-hover/card:-translate-y-0.5`}
          >
            {" "}
            <GradeIcon size={20} strokeWidth={1.75} />{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
          {" "}
          <div
            className={`relative flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[20px] ${lightBg} ${accentText} shadow-[0_8px_22px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/[0.025] transition-all duration-300 group-hover/card:-translate-y-1 group-hover/card:scale-[1.03]`}
          >
            {" "}
            <div
              className={`absolute inset-[4px] rounded-[16px] bg-gradient-to-br ${gradient} opacity-[0.06]`}
            />{" "}
            <GradeIcon size={29} strokeWidth={1.65} className="relative z-10" />{" "}










          </div>{" "}
          <h4 className="mt-2.5 text-[15px] font-black tracking-tight text-slate-800 transition-colors duration-300 group-hover/card:text-[var(--primary)]">
            {" "}
            {grade.label}{" "}
          </h4>{" "}
          <div className="mt-1.5 h-0.5 w-7 rounded-full bg-slate-200 transition-all duration-300 group-hover/card:w-10" />{" "}
        </div>{" "}
        <GradeLevelCardQuickLinks
          quickLinks={quickLinks}
          gradeIndex={grade.index}
          formatNumber={formatNumber}
          getMockCount={getMockCount}
        />{" "}
      </div>{" "}
    </Link>
  );
}
