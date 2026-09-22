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
    <section className="group/section relative min-w-0 overflow-hidden rounded-[clamp(1.25rem,2vw,1.75rem)] border border-slate-200/80 bg-white p-[clamp(0.875rem,1.5vw,1.25rem)] shadow-[0_0.5rem_1.875rem_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_1.125rem_3rem_rgba(15,23,42,0.08)]">
      <div
        className={`pointer-events-none absolute -left-20 -top-24 size-56 rounded-full bg-gradient-to-br ${group.gradient} opacity-[0.055] blur-3xl`}
      />

      <div className="relative mb-[clamp(1rem,2vw,1.25rem)] flex flex-col items-center justify-center text-center">
        <div
          className={`relative flex size-[clamp(2.75rem,4vw,3rem)] shrink-0 items-center justify-center overflow-hidden rounded-[clamp(0.9rem,1.5vw,1.0625rem)] ${group.lightBg} ${group.accentText} border border-white shadow-[0_0.4375rem_1.25rem_rgba(15,23,42,0.06)]`}
        >
          <div
            className={`absolute -bottom-3 -left-3 size-8 rounded-full bg-gradient-to-br ${group.gradient} opacity-10`}
          />

          <GroupIcon
            className="relative z-10 size-[clamp(1.35rem,2vw,1.5625rem)]"
            strokeWidth={1.7}
          />
        </div>

        <div className="mt-3 min-w-0 max-w-full">
          <div className="flex min-w-0 items-center justify-center gap-2">
            <span
              className={`size-1.5 shrink-0 rounded-full bg-gradient-to-r ${group.gradient}`}
            />

            <h3 className="min-w-0 text-[clamp(1rem,1.5vw,1.125rem)] font-black text-slate-900">
              {group.title}
            </h3>

            <span
              className={`size-1.5 shrink-0 rounded-full bg-gradient-to-r ${group.gradient}`}
            />
          </div>

          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span className="text-[clamp(0.6875rem,1vw,0.75rem)] font-semibold text-slate-400">
              {group.subtitle}
            </span>

            <span className="size-1 shrink-0 rounded-full bg-slate-300" />

            <span className="text-[clamp(0.6875rem,1vw,0.75rem)] text-slate-400">
              {group.description}
            </span>
          </div>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-[clamp(0.75rem,1.5vw,1rem)] min-[650px]:grid-cols-3">
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
