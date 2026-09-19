"use client";

import Link from "next/link";
import {
  BookOpen,
  Brain,
  Calculator,
  ChevronLeft,
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
} from "lucide-react";

const gradeQuickLinks = [
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

const educationGroups = [
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
      className="mx-auto w-full max-w-[1400px] px-3 py-6 sm:px-6 lg:px-8"
    >
      {/* Main Header */}
      <div className="mb-7 flex items-center gap-3">
        <div
          className="
            relative flex h-12 w-12 shrink-0 items-center justify-center
            overflow-hidden rounded-2xl
            bg-[var(--primary)]
            text-white
            shadow-[0_8px_22px_rgba(37,99,235,0.18)]
          "
        >
          <div className="absolute -left-3 -top-3 h-9 w-9 rounded-full bg-white/20" />

          <GraduationCap
            className="relative z-10"
            size={25}
            strokeWidth={1.7}
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black tracking-tight text-slate-900 sm:text-xl">
              محتوای آموزشی خودت را پیدا کن
            </h2>

            <Sparkles
              size={17}
              className="text-[var(--primary)]"
              strokeWidth={2}
            />
          </div>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            مقطع و پایه تحصیلی خودت را انتخاب کن و به محتوای موردنظرت برس.
          </p>
        </div>
      </div>

      {/* Education Groups */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {educationGroups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <div
              key={group.id}
              className="
                group/section
                relative overflow-hidden
                rounded-[28px]
                border border-slate-200/80
                bg-white
                p-4
                shadow-[0_8px_30px_rgba(15,23,42,0.045)]
                transition-all duration-300
                hover:border-slate-300
                hover:shadow-[0_14px_40px_rgba(15,23,42,0.07)]
                sm:p-5
              "
            >
              {/* Decorative background */}
              <div
                className={`
                  pointer-events-none absolute
                  -left-16 -top-20
                  h-44 w-44
                  rounded-full
                  bg-gradient-to-br ${group.gradient}
                  opacity-[0.045]
                  blur-3xl
                `}
              />

              {/* Group Header */}
              <div className="relative mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`
                      flex h-12 w-12 shrink-0 items-center justify-center
                      rounded-[16px]
                      ${group.lightBg}
                      ${group.accentText}
                      border border-white
                      shadow-[0_5px_15px_rgba(15,23,42,0.04)]
                    `}
                  >
                    <GroupIcon size={23} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-slate-900 sm:text-base">
                      {group.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[10px] font-medium text-slate-400 sm:text-[11px]">
                        {group.subtitle}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-300" />

                      <span className="text-[10px] text-slate-400 sm:text-[11px]">
                        {group.description}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`
                    hidden h-9 w-9
                    items-center justify-center
                    rounded-full
                    bg-gradient-to-br ${group.gradient}
                    text-white
                    shadow-md
                    transition-transform duration-300
                    group-hover/section:-translate-x-1
                    sm:flex
                  `}
                >
                  <ChevronLeft size={16} />
                </div>
              </div>

              {/* Square Grade Cards */}
              <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-3">
                {group.grades.map((grade) => {
                  const GradeIcon = grade.icon;

                  return (
                    <Link
                      key={grade.number}
                      href={grade.href}
                      className="
                        group/card
                        relative
                        aspect-square
                        min-h-[190px]
                        overflow-hidden
                        rounded-[22px]
                        border border-slate-200/90
                        bg-slate-50/70
                        shadow-[0_5px_18px_rgba(15,23,42,0.035)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-slate-300
                        hover:bg-white
                        hover:shadow-[0_15px_35px_rgba(15,23,42,0.10)]
                      "
                    >
                      {/* نوار رنگی سمت چپ */}
                      <div
                        className={`
                          absolute left-0 top-0
                          h-full w-1.5
                          rounded-r-full
                          bg-gradient-to-b ${group.gradient}
                          transition-all duration-300
                          group-hover/card:w-2
                        `}
                      />

                      {/* شماره پایه */}
                      <div
                        className={`
                          absolute right-3 top-3
                          flex h-8 min-w-8
                          items-center justify-center
                          rounded-xl
                          bg-gradient-to-br ${group.gradient}
                          px-1.5
                          text-[11px]
                          font-black
                          text-white
                          shadow-[0_5px_12px_rgba(15,23,42,0.12)]
                        `}
                      >
                        {grade.number}
                      </div>

                      {/* برچسب بالای کارت */}
                      <span className="absolute left-4 top-4 text-[9px] font-bold tracking-wide text-slate-400">
                        انتخاب پایه
                      </span>

                      {/* دایره تزئینی پس‌زمینه */}
                      <div
                        className="
                          pointer-events-none
                          absolute -bottom-10 -right-10
                          h-28 w-28
                          rounded-full
                          bg-slate-100/80
                          transition-all duration-500
                          group-hover/card:scale-[1.7]
                          group-hover/card:bg-[var(--primary)]/[0.045]
                        "
                      />

                      {/* محتوای کارت */}
                      <div
                        className="
                          relative flex h-full
                          flex-col
                          items-center
                          px-3 pb-3 pt-12
                        "
                      >
                        {/* آیکون پایه */}
                        <div
                          className={`
                            flex h-12 w-12
                            items-center justify-center
                            rounded-[16px]
                            ${group.lightBg}
                            ${group.accentText}
                            shadow-sm
                            transition-all duration-300
                            group-hover/card:scale-110
                            group-hover/card:shadow-md
                          `}
                        >
                          <GradeIcon size={23} strokeWidth={1.7} />
                        </div>

                        {/* عنوان پایه */}
                        <h4
                          className="
                            mt-2
                            text-sm
                            font-black
                            text-slate-800
                            transition-colors duration-300
                            group-hover/card:text-[var(--primary)]
                          "
                        >
                          {grade.label}
                        </h4>

                        <p className="mt-1 text-[9px] text-slate-400">
                          محتوای آموزشی
                        </p>

                        {/* لینک‌های محتوایی داخل همان کارت */}
                        <div className="mt-auto flex w-full items-stretch rounded-lg bg-slate-100/70 p-1">
                          {gradeQuickLinks.map((quickLink, index) => {
                            const QuickIcon = quickLink.icon;

                            const count = formatNumber(
                              getMockCount(quickLink.id, grade.index)
                            );

                            return (
                              <div
                                key={quickLink.id}
                                className="flex min-w-0 flex-1 items-center"
                              >
                                <div
                                  title={quickLink.label}
                                  className={`
                                    flex min-w-0 flex-1
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-lg
                                    px-1
                                    py-1.5
                                    transition-all duration-200
                                    ${quickLink.hoverBg}
                                  `}
                                >
                                  <QuickIcon
                                    size={11}
                                    strokeWidth={2.2}
                                    className={`${quickLink.iconColor} shrink-0`}
                                  />

                                  <span className="mt-0.5 text-[8px] font-medium text-slate-500">
                                    {count}
                                  </span>

                                  <span className="max-w-full truncate text-[8px] font-medium text-slate-400">
                                    {quickLink.shortLabel}
                                  </span>
                                </div>

                                {index < gradeQuickLinks.length - 1 && (
                                  <div className="mx-0.5 h-8 w-px shrink-0 bg-slate-200" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* خط رنگی پایین هنگام هاور */}
                      <div
                        className={`
                          absolute bottom-0 right-0
                          h-1 w-0
                          bg-gradient-to-l ${group.gradient}
                          transition-all duration-300
                          group-hover/card:w-full
                        `}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

