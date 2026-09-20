"use client";

import GradeLevelCard from "./GradeLevelCard";

import type { EducationGroup, GradeQuickLink } from "./GradeLevels";

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

      <div className="relative mb-5 flex flex-col items-center justify-center text-center">
        <div
          className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[17px] ${group.lightBg} ${group.accentText} border border-white shadow-[0_7px_20px_rgba(15,23,42,0.06)]`}
        >
          <div
            className={`absolute -bottom-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br ${group.gradient} opacity-10`}
          />

          <GroupIcon
            className="relative z-10"
            size={25}
            strokeWidth={1.7}
          />
        </div>

        <div className="mt-3 min-w-0">
          <div className="flex items-center justify-center gap-2">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${group.gradient}`}
            />

            <h3 className="text-[17px] font-black text-slate-900 sm:text-lg">
              {group.title}
            </h3>

            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${group.gradient}`}
            />
          </div>

          <div className="mt-1.5 flex items-center justify-center gap-2">
            <span className="text-[11px] font-semibold text-slate-400 sm:text-xs">
              {group.subtitle}
            </span>

            <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300" />

            <span className="text-[11px] text-slate-400 sm:text-xs">
              {group.description}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-10 xl:gap-4">
        {group.grades.map((grade) => (
          <div
            key={grade.number}
            className="w-full sm:w-[270px] sm:shrink-0 xl:w-[calc((100%-32px)/3)]"
          >
            <GradeLevelCard
              grade={grade}
              gradient={group.gradient}
              lightBg={group.lightBg}
              accentText={group.accentText}
              quickLinks={quickLinks}
              formatNumber={formatNumber}
              getMockCount={getMockCount}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
