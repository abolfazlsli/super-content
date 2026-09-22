"use client";

import Link from "next/link";

import type { GradeQuickLink } from "./GradeLevels";

interface GradeLevelCardQuickLinksProps {
  quickLinks: GradeQuickLink[];
  gradeIndex: number;
  base: string;
  formatNumber: (num: number) => string;
  getMockCount: (type: string, gradeIndex: number) => number;
}

const contentTypeRoutes: Record<string, string> = {
  questions: "question",
  exams: "exam",
  files: "notes",
  tutorials: "lesson",
  "question-bank": "question-bank",
  courses: "course",
  videos: "video",
  qa: "qa",
};

export default function GradeLevelCardQuickLinks({
  quickLinks,
  gradeIndex,
  base,
  formatNumber,
  getMockCount,
}: GradeLevelCardQuickLinksProps) {
  return (
    <div className="mt-auto w-full shrink-0 overflow-hidden rounded-[16px] border border-slate-200/80 bg-slate-50/80">
      <div className="grid w-full grid-cols-4">
        {quickLinks.map((quickLink, index) => {
          const QuickIcon = quickLink.icon;
          const count = formatNumber(getMockCount(quickLink.id, gradeIndex));
          const contentType = contentTypeRoutes[quickLink.id] ?? quickLink.id;
          const href = `/contents?base=${base}&level=${gradeIndex}&type=${contentType}`;

          return (
            <div key={quickLink.id} className="flex min-w-0 items-stretch">
              <Link
                href={href}
                title={quickLink.label}
                className={`flex min-w-0 flex-1 flex-col items-center justify-center rounded-[11px] px-[clamp(0.15rem,1vw,0.35rem)] py-[clamp(0.4rem,1.2vw,0.5rem)] transition-colors duration-200 ${quickLink.hoverBg}`}
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
              </Link>

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
