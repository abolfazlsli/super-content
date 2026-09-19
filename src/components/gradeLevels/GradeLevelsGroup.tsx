"use client";

import { ArrowLeft, ChevronLeft } from "lucide-react";

import GradeLevelCard from "./GradeLevelCard";
import type {
  EducationGroup,
  GradeQuickLink,
} from "./GradeLevels";

interface GradeLevelsGroupProps {
  group: EducationGroup;
  quickLinks: GradeQuickLink[];
  formatNumber: (num: number) => string;
  getMockCount: (type: string, gradeIndex: number) => number;
}

export default function GradeLevelsGroup({
  group,
  quickLinks,
  formatNumber,
  getMockCount,
}: GradeLevelsGroupProps) {
  const GroupIcon = group.icon;

  return (
    <section className="group/section relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-5">
      <div
        className={`pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${group.gradient} opacity-[0.055] blur-3xl`}
      />

      <div className="relative mb-5 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[17px] ${group.lightBg} ${group.accentText} border border-white shadow-[0_7px_20px_rgba(15,23,42,0.06)]`}
          >
            <div
              className={`absolute -bottom-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br ${group.gradient} opacity-10`}
            />

            <GroupIcon
              className="relative z-10"
              size={24}
              strokeWidth={1.7}
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-[15px] font-black text-slate-900 sm:text-base">
                {group.title}
              </h3>

              <span
                className={`hidden h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${group.gradient} sm:block`}
              />
            </div>

            <div className="mt-1 flex min-w-0 items-center gap-2">
              <span className="truncate text-[10px] font-semibold text-slate-400 sm:text-[11px]">
                {group.subtitle}
              </span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300" />

              <span className="hidden truncate text-[10px] text-slate-400 sm:block sm:text-[11px]">
                {group.description}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`group/button hidden h-10 shrink-0 items-center gap-1 rounded-full bg-gradient-to-r ${group.gradient} px-3.5 text-[10px] font-bold text-white shadow-[0_6px_16px_rgba(15,23,42,0.1)] transition-all duration-300 hover:gap-2 hover:shadow-[0_9px_22px_rgba(15,23,42,0.15)] sm:flex`}
        >
          مشاهده همه
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover/button:-translate-x-0.5"
          />
        </button>

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${group.lightBg} ${group.accentText} transition-all duration-300 group-hover/section:-translate-x-1 sm:hidden`}
        >
          <ChevronLeft size={16} />
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3">
        {group.grades.map((grade) => (
          <GradeLevelCard
            key={grade.number}
            grade={grade}
            gradient={group.gradient}
            lightBg={group.lightBg}
            accentText={group.accentText}
            quickLinks={quickLinks}
            formatNumber={formatNumber}
            getMockCount={getMockCount}
          />
        ))}
      </div>
    </section>
  );
}
