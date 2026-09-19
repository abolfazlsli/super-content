"use client";

import {
  BookOpen,
  Brain,
  Calculator,
  ClipboardList,
  FileQuestion,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  MessageCircleQuestion,
  PencilRuler,
  School,
  Sparkles,
  Video,
  type LucideIcon,
} from "lucide-react";

import GradeLevelsGroup from "./GradeLevelsGroup";

export interface GradeQuickLink {
  id: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  iconColor: string;
  hoverBg: string;
}

export interface GradeLevel {
  number: string;
  index: number;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface EducationGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  lightBg: string;
  accentText: string;
  grades: GradeLevel[];
}

const gradeQuickLinks: GradeQuickLink[] = [
  {
    id: "questions",
    label: "نمونه سوال",
    shortLabel: "سوال",
    icon: FileQuestion,
    iconColor: "text-blue-500",
    hoverBg: "hover:bg-blue-50",
  },
  {
    id: "videos",
    label: "فایل آموزشی",
    shortLabel: "ویدیو",
    icon: Video,
    iconColor: "text-emerald-500",
    hoverBg: "hover:bg-emerald-50",
  },
  {
    id: "qa",
    label: "پرسش و پاسخ",
    shortLabel: "پرسش",
    icon: MessageCircleQuestion,
    iconColor: "text-amber-500",
    hoverBg: "hover:bg-amber-50",
  },
  {
    id: "exams",
    label: "آزمون آنلاین",
    shortLabel: "آزمون",
    icon: ClipboardList,
    iconColor: "text-violet-500",
    hoverBg: "hover:bg-violet-50",
  },
];

const educationGroups: EducationGroup[] = [
  {
    id: "elementary-first",
    title: "دبستان دوره اول",
    subtitle: "پایه‌های اول تا سوم",
    description: "آغاز مسیر یادگیری",
    icon: School,
    gradient: "from-sky-400 to-blue-600",
    lightBg: "bg-sky-50",
    accentText: "text-sky-600",
    grades: [
      {
        number: "۱",
        index: 1,
        label: "پایه اول",
        href: "/grade/grade-1",
        icon: PencilRuler,
      },
      {
        number: "۲",
        index: 2,
        label: "پایه دوم",
        href: "/grade/grade-2",
        icon: BookOpen,
      },
      {
        number: "۳",
        index: 3,
        label: "پایه سوم",
        href: "/grade/grade-3",
        icon: Calculator,
      },
    ],
  },
  {
    id: "elementary-second",
    title: "دبستان دوره دوم",
    subtitle: "پایه‌های چهارم تا ششم",
    description: "تقویت مهارت‌های پایه",
    icon: BookOpen,
    gradient: "from-emerald-400 to-teal-600",
    lightBg: "bg-emerald-50",
    accentText: "text-emerald-600",
    grades: [
      {
        number: "۴",
        index: 4,
        label: "پایه چهارم",
        href: "/grade/grade-4",
        icon: BookOpen,
      },
      {
        number: "۵",
        index: 5,
        label: "پایه پنجم",
        href: "/grade/grade-5",
        icon: Lightbulb,
      },
      {
        number: "۶",
        index: 6,
        label: "پایه ششم",
        href: "/grade/grade-6",
        icon: Brain,
      },
    ],
  },
  {
    id: "middle-school",
    title: "دبیرستان دوره اول",
    subtitle: "پایه‌های هفتم تا نهم",
    description: "ورود به دوره متوسطه",
    icon: FlaskConical,
    gradient: "from-violet-400 to-purple-600",
    lightBg: "bg-violet-50",
    accentText: "text-violet-600",
    grades: [
      {
        number: "۷",
        index: 7,
        label: "پایه هفتم",
        href: "/grade/grade-7",
        icon: FlaskConical,
      },
      {
        number: "۸",
        index: 8,
        label: "پایه هشتم",
        href: "/grade/grade-8",
        icon: Brain,
      },
      {
        number: "۹",
        index: 9,
        label: "پایه نهم",
        href: "/grade/grade-9",
        icon: Calculator,
      },
    ],
  },
  {
    id: "high-school",
    title: "دبیرستان دوره دوم",
    subtitle: "پایه‌های دهم تا دوازدهم",
    description: "مسیر تخصصی و آمادگی آزمون",
    icon: GraduationCap,
    gradient: "from-orange-400 to-rose-600",
    lightBg: "bg-orange-50",
    accentText: "text-orange-600",
    grades: [
      {
        number: "۱۰",
        index: 10,
        label: "پایه دهم",
        href: "/grade/grade-10",
        icon: BookOpen,
      },
      {
        number: "۱۱",
        index: 11,
        label: "پایه یازدهم",
        href: "/grade/grade-11",
        icon: Lightbulb,
      },
      {
        number: "۱۲",
        index: 12,
        label: "پایه دوازدهم",
        href: "/grade/grade-12",
        icon: GraduationCap,
      },
    ],
  },
];

const formatNumber = (num: number) => {
  return new Intl.NumberFormat("fa-IR").format(num);
};

const getMockCount = (type: string, gradeIndex: number) => {
  if (type === "questions") return 2755 - gradeIndex * 150;
  if (type === "videos") return 1191 - gradeIndex * 50;
  if (type === "qa") return 341 + gradeIndex * 12;
  if (type === "exams") return 157 + gradeIndex * 5;

  return 0;
};

export default function GradeLevels() {
  return (
    <section
      dir="rtl"
      className="mx-auto w-full max-w-[1440px] px-3 py-6 sm:px-4 md:px-6"
    >
      <div className="mb-7 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[var(--primary)] text-white shadow-[0_8px_22px_rgba(37,99,235,0.18)]">
            <div className="absolute -left-3 -top-3 h-9 w-9 rounded-full bg-white/20" />
            <GraduationCap
              className="relative z-10"
              size={25}
              strokeWidth={1.7}
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="truncate text-lg font-black tracking-tight text-slate-900 sm:text-xl">
                محتوای آموزشی خودت را پیدا کن
              </h2>

              <Sparkles
                size={17}
                className="shrink-0 text-[var(--primary)]"
                strokeWidth={2}
              />
            </div>

            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
              مقطع و پایه تحصیلی خودت را انتخاب کن و به محتوای موردنظرت برس.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {educationGroups.map((group) => (
          <GradeLevelsGroup
            key={group.id}
            group={group}
            quickLinks={gradeQuickLinks}
            formatNumber={formatNumber}
            getMockCount={getMockCount}
          />
        ))}
      </div>
    </section>
  );
}
