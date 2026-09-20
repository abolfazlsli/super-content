"use client";

import type { GradeQuickLink } from "./GradeLevels";

interface GradeLevelCardQuickLinksProps {
  quickLinks: GradeQuickLink[];
  gradeIndex: number;
  formatNumber: (num: number) => string;
  getMockCount: (type: string, gradeIndex: number) => number;
}

export default function GradeLevelCardQuickLinks({
  quickLinks,
  gradeIndex,
  formatNumber,
  getMockCount,
}: GradeLevelCardQuickLinksProps) {
  return (
    <div className="mt-10 shrink-0 rounded-[16px] border border-slate-200/80 bg-slate-50/80">
      <div className="grid grid-cols-4">
        {quickLinks.map((quickLink, index) => {
          const QuickIcon = quickLink.icon;
          const count = formatNumber(
            getMockCount(quickLink.id, gradeIndex),
          );

          return (
            <div key={quickLink.id} className="flex min-w-0 items-stretch">
              <div
                title={quickLink.label}
                className={`flex min-w-0 flex-1 flex-col items-center justify-center rounded-[11px] px-1 py-2 transition-colors duration-200 ${quickLink.hoverBg}`}
              >
                <QuickIcon
                  size={20}
                  strokeWidth={1.9}
                  className={`${quickLink.iconColor} shrink-0`}
                />

                <span className="mt-1 text-[13px] font-black leading-5 text-slate-700">
                  {count}
                </span>

                <span className="mt-0.5 max-w-full truncate whitespace-nowrap text-[10px] font-semibold leading-4 text-slate-500">
                  {quickLink.shortLabel}
                </span>
              </div>

              {index < quickLinks.length - 1 && (
                <div className="my-1 w-px shrink-0 bg-slate-200/80" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
