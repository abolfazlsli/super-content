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
    <div className="mt-10 shrink-0 rounded-[15px] border border-slate-200/80 bg-slate-50/80 p-1">
      {" "}
      <div className="grid grid-cols-4">
        {" "}
        {quickLinks.map((quickLink, index) => {
          const QuickIcon = quickLink.icon;
          const count = formatNumber(getMockCount(quickLink.id, gradeIndex));
          return (
            <div key={quickLink.id} className="flex min-w-0 items-stretch">
              {" "}
              <div
                title={quickLink.label}
                className={`flex min-w-0 flex-1 flex-col items-center justify-center rounded-[10px] px-0.5 py-1.5 transition-colors duration-200 ${quickLink.hoverBg}`}
              >
                {" "}
                <QuickIcon
                  size={15}
                  strokeWidth={2}
                  className={`${quickLink.iconColor} shrink-0`}
                />{" "}
                <span className="mt-0.5 text-[10px] font-black leading-4 text-slate-700">
                  {" "}
                  {count}{" "}
                </span>{" "}
                <span className="max-w-full truncate whitespace-nowrap text-[8px] font-semibold leading-3 text-slate-400">
                  {" "}
                  {quickLink.shortLabel}{" "}
                </span>{" "}
              </div>{" "}
              {index < quickLinks.length - 1 && (
                <div className="my-1 w-px shrink-0 bg-slate-200/80" />
              )}{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
    </div>
  );
}
