"use client";

import {
  AuditOutlined,
  BookOutlined,
  CheckCircleOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  FormOutlined,
  IdcardOutlined,
  ReadOutlined,
  SnippetsOutlined,
  SolutionOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { BookOpen } from "lucide-react";

const contentVisuals = {
  "نمونه سوال": {
    icon: <SnippetsOutlined />,
    label: "نمونه سوال",
    background: "bg-gradient-to-br from-[#f8e0d0] via-[#fceddf] to-[#f4d3c0]",
    iconColor: "text-orange-700",
    iconBackground: "bg-orange-100/90",
    badgeBackground: "bg-orange-500/10",
    badgeColor: "text-orange-700",
    accent: "bg-orange-200/60",
    glow: "bg-orange-300/30",
    border: "border-orange-100",
  },
  جزوه: {
    icon: <ReadOutlined />,
    label: "جزوه",
    background: "bg-gradient-to-br from-[#e8defb] via-[#f1eaff] to-[#ddd0f5]",
    iconColor: "text-violet-700",
    iconBackground: "bg-violet-100/90",
    badgeBackground: "bg-violet-500/10",
    badgeColor: "text-violet-700",
    accent: "bg-violet-200/60",
    glow: "bg-violet-300/30",
    border: "border-violet-100",
  },
  آزمون: {
    icon: <AuditOutlined />,
    label: "آزمون",
    background: "bg-gradient-to-br from-[#d1ecdd] via-[#e5f5eb] to-[#c8e6d5]",
    iconColor: "text-emerald-700",
    iconBackground: "bg-emerald-100/90",
    badgeBackground: "bg-emerald-500/10",
    badgeColor: "text-emerald-700",
    accent: "bg-emerald-200/60",
    glow: "bg-emerald-300/30",
    border: "border-emerald-100",
  },
  درسنامه: {
    icon: <SolutionOutlined />,
    label: "درسنامه",
    background: "bg-gradient-to-br from-[#f9ebc8] via-[#fff5dc] to-[#f5e5b8]",
    iconColor: "text-amber-700",
    iconBackground: "bg-amber-100/90",
    badgeBackground: "bg-amber-500/10",
    badgeColor: "text-amber-700",
    accent: "bg-amber-200/60",
    glow: "bg-amber-300/30",
    border: "border-amber-100",
  },
  تمرین: {
    icon: <FormOutlined />,
    label: "تمرین",
    background: "bg-gradient-to-br from-[#f9dce5] via-[#fdeaf0] to-[#f5ccd9]",
    iconColor: "text-rose-700",
    iconBackground: "bg-rose-100/90",
    badgeBackground: "bg-rose-500/10",
    badgeColor: "text-rose-700",
    accent: "bg-rose-200/60",
    glow: "bg-rose-300/30",
    border: "border-rose-100",
  },
  ویدئو: {
    icon: <VideoCameraOutlined />,
    label: "ویدئو",
    background: "bg-gradient-to-br from-[#d5f1f2] via-[#e7f9fa] to-[#c9e8ea]",
    iconColor: "text-cyan-700",
    iconBackground: "bg-cyan-100/90",
    badgeBackground: "bg-cyan-500/10",
    badgeColor: "text-cyan-700",
    accent: "bg-cyan-200/60",
    glow: "bg-cyan-300/30",
    border: "border-cyan-100",
  },
  کتاب: {
    icon: <BookOutlined />,
    label: "کتاب",
    background: "bg-gradient-to-br from-[#dfe4f8] via-[#edf0ff] to-[#d2d9f1]",
    iconColor: "text-indigo-700",
    iconBackground: "bg-indigo-100/90",
    badgeBackground: "bg-indigo-500/10",
    badgeColor: "text-indigo-700",
    accent: "bg-indigo-200/60",
    glow: "bg-indigo-300/30",
    border: "border-indigo-100",
  },
  پاسخنامه: {
    icon: <CheckCircleOutlined />,
    label: "پاسخنامه",
    background: "bg-gradient-to-br from-[#d8eee9] via-[#e8f7f3] to-[#c9e5df]",
    iconColor: "text-teal-700",
    iconBackground: "bg-teal-100/90",
    badgeBackground: "bg-teal-500/10",
    badgeColor: "text-teal-700",
    accent: "bg-teal-200/60",
    glow: "bg-teal-300/30",
    border: "border-teal-100",
  },
  "خلاصه درس": {
    icon: <FileSearchOutlined />,
    label: "خلاصه درس",
    background: "bg-gradient-to-br from-[#dce9f8] via-[#edf5ff] to-[#cfdff2]",
    iconColor: "text-blue-700",
    iconBackground: "bg-blue-100/90",
    badgeBackground: "bg-blue-500/10",
    badgeColor: "text-blue-700",
    accent: "bg-blue-200/60",
    glow: "bg-blue-300/30",
    border: "border-blue-100",
  },
  فلش‌کارت: {
    icon: <IdcardOutlined />,
    label: "فلش‌کارت",
    background: "bg-gradient-to-br from-[#f0dff3] via-[#f8ebfa] to-[#e7d3eb]",
    iconColor: "text-fuchsia-700",
    iconBackground: "bg-fuchsia-100/90",
    badgeBackground: "bg-fuchsia-500/10",
    badgeColor: "text-fuchsia-700",
    accent: "bg-fuchsia-200/60",
    glow: "bg-fuchsia-300/30",
    border: "border-fuchsia-100",
  },
  default: {
    icon: <FileTextOutlined />,
    label: "محتوا",
    background: "bg-gradient-to-br from-[#d1f0fe] via-[#e4f7ff] to-[#c7e9fa]",
    iconColor: "text-sky-700",
    iconBackground: "bg-sky-100/90",
    badgeBackground: "bg-sky-500/10",
    badgeColor: "text-sky-700",
    accent: "bg-sky-200/60",
    glow: "bg-sky-300/30",
    border: "border-sky-100",
  },
} as const;

const contentTypeVisualMap = {
  question: "نمونه سوال",
  "question-bank": "نمونه سوال",
  lesson: "درسنامه",
  course: "کتاب",
  notes: "جزوه",
  exam: "آزمون",
  exercise: "تمرین",
  video: "ویدئو",
  qa: "پاسخنامه",
} as const;

export const getContentVisual = (type: string) => {
  const visualKey =
    contentTypeVisualMap[type as keyof typeof contentTypeVisualMap];

  if (visualKey) {
    return contentVisuals[visualKey];
  }

  if (type in contentVisuals) {
    return contentVisuals[type as keyof typeof contentVisuals];
  }

  return contentVisuals.default;
};

export default function ContentCardCover({
  type,
  title,
}: {
  type: string;
  title: string;
}) {
  const visual = getContentVisual(type);

  return (
    <div
      dir="rtl"
      className={`relative aspect-[1.65] min-h-[190px] shrink-0 overflow-hidden ${visual.background}`}
    >
      <div
        className={`absolute -right-14 -top-16 h-44 w-44 rounded-full ${visual.accent}`}
      />

      <div
        className={`absolute -bottom-20 -left-14 h-48 w-48 rounded-full ${visual.accent}`}
      />

      <div
        className={`absolute right-1/2 top-1/2 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full ${visual.glow} blur-3xl`}
      />

      <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_1px)] [background-size:18px_18px] text-slate-900" />

      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <span
          className={`rounded-full border border-white/70 bg-white/50 px-2.5 py-1 text-[10px] font-bold ${visual.badgeColor} shadow-sm backdrop-blur-md`}
        >
          {visual.label}
        </span>

        <span className="rounded-full bg-white/55 px-2 py-1 text-[10px] font-medium text-slate-500 backdrop-blur-md">
          محتوای آموزشی
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-11 top-0 flex flex-col items-center justify-center px-5 pt-4 text-center">
        <div
          className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-[24px] ${visual.iconBackground} ${visual.iconColor} shadow-[0_10px_25px_rgba(15,23,42,0.08)] ring-1 ring-white/80 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105`}
        >
          <div className="absolute inset-1 rounded-[20px] border border-white/50" />

          <span className="relative text-[36px]">{visual.icon}</span>
        </div>

        <span className="mt-3 max-w-[85%] truncate text-xs font-bold text-slate-700">
          {title}
        </span>
      </div>

      <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-slate-900/80 px-2.5 py-1.5 text-[10px] font-medium text-white shadow-sm backdrop-blur-md">
        <BookOpen size={12} />
        مشاهده محتوا
      </span>
    </div>
  );
}
