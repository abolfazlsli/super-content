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
import { useEffect, useMemo, useState } from "react";

import GradeLevelsGroup from "./GradeLevelsGroup";
import {
  contentsHref,
  getCategoryCounts,
  useTaxonomy,
  type CategoryCounts,
} from "../../services/taxonomy";

export interface GradeQuickLink {
  id: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  iconColor: string;
  hoverBg: string;
}

export interface GradeLevel {
  id: string;
  baseId: string;
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

/* استایل‌ها به ترتیب روی مقطع‌ها و لینک‌های نوع محتوا تکرار میشن */
const groupStyles = [
  {
    icon: School,
    gradient: "from-sky-400 to-blue-600",
    lightBg: "bg-sky-50",
    accentText: "text-sky-600",
  },
  {
    icon: BookOpen,
    gradient: "from-emerald-400 to-teal-600",
    lightBg: "bg-emerald-50",
    accentText: "text-emerald-600",
  },
  {
    icon: FlaskConical,
    gradient: "from-violet-400 to-purple-600",
    lightBg: "bg-violet-50",
    accentText: "text-violet-600",
  },
  {
    icon: GraduationCap,
    gradient: "from-orange-400 to-rose-600",
    lightBg: "bg-orange-50",
    accentText: "text-orange-600",
  },
];

const gradeIcons: LucideIcon[] = [
  PencilRuler,
  BookOpen,
  Calculator,
  Lightbulb,
  Brain,
  FlaskConical,
  GraduationCap,
];

const quickLinkStyles = [
  { icon: FileQuestion, iconColor: "text-blue-500", hoverBg: "hover:bg-blue-50" },
  { icon: Video, iconColor: "text-emerald-500", hoverBg: "hover:bg-emerald-50" },
  { icon: MessageCircleQuestion, iconColor: "text-amber-500", hoverBg: "hover:bg-amber-50" },
  { icon: ClipboardList, iconColor: "text-violet-500", hoverBg: "hover:bg-violet-50" },
];

const toPersianNumber = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

const formatNumber = (num: number) => {
  return new Intl.NumberFormat("fa-IR").format(num);
};

export default function GradeLevels() {
  const taxonomy = useTaxonomy();
  const [counts, setCounts] = useState<CategoryCounts>({});

  // چهار نوع محتوای اول به عنوان لینک سریع هر پایه
  const gradeQuickLinks: GradeQuickLink[] = useMemo(
    () =>
      taxonomy.types.slice(0, 4).map((type, index) => ({
        id: type.id,
        label: type.name,
        shortLabel: type.name,
        ...quickLinkStyles[index % quickLinkStyles.length],
      })),
    [taxonomy.types],
  );

  const educationGroups: EducationGroup[] = useMemo(() => {
    let gradeIndex = 0;

    return taxonomy.grades.map((group, groupIndex) => ({
      id: group.id,
      title: group.name,
      subtitle: group.caption ?? "",
      description: `${toPersianNumber(group.categories.length)} پایه`,
      ...groupStyles[groupIndex % groupStyles.length],
      grades: group.categories.map((category) => {
        gradeIndex += 1;
        return {
          id: category.id,
          baseId: group.id,
          number: toPersianNumber(gradeIndex),
          index: gradeIndex,
          label: category.name,
          href: contentsHref({ base: group.id, level: category.id }),
          icon: gradeIcons[(gradeIndex - 1) % gradeIcons.length],
        };
      }),
    }));
  }, [taxonomy.grades]);

  useEffect(() => {
    const rows = educationGroups.flatMap((group) =>
      group.grades.map((grade) => grade.id),
    );
    const cols = gradeQuickLinks.map((link) => link.id);

    getCategoryCounts(rows, cols).then(setCounts);
  }, [educationGroups, gradeQuickLinks]);

  const getCount = (typeId: string, gradeId: string) =>
    counts[gradeId]?.[typeId] ?? 0;

  if (!taxonomy.loading && !educationGroups.length) return null;

  return (
    <section
      dir="rtl"
      className="mx-auto w-full max-w-[90rem] px-[clamp(0.75rem,2vw,1.5rem)] py-[clamp(1.5rem,3vw,2rem)]"
    >
      <div className="mb-[clamp(1.25rem,2.5vw,1.75rem)] flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-[clamp(0.625rem,1.25vw,0.75rem)]">
          <div className="relative flex size-[clamp(2.75rem,4vw,3rem)] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[var(--primary)] text-white shadow-[0_0.5rem_1.375rem_rgba(37,99,235,0.18)]">
            <div className="absolute -left-3 -top-3 size-9 rounded-full bg-white/20" />

            <GraduationCap
              className="relative z-10 size-[clamp(1.35rem,2vw,1.5625rem)]"
              strokeWidth={1.7}
            />
          </div>

          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-2">
              <h2 className="truncate text-[clamp(1rem,1.6vw,1.25rem)] font-black tracking-tight text-slate-900">
                محتوای آموزشی خودت را پیدا کن
              </h2>

              <Sparkles
                className="size-[clamp(0.9rem,1.4vw,1.0625rem)] shrink-0 text-[var(--primary)]"
                strokeWidth={2}
              />
            </div>

            <p className="mt-1 text-[clamp(0.7rem,1.1vw,0.875rem)] leading-5 text-slate-500">
              مقطع و پایه تحصیلی خودت را انتخاب کن و به محتوای موردنظرت برس.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,34rem),1fr))] gap-[clamp(1rem,2vw,1.25rem)]">
        {educationGroups.map((group) => (
          <GradeLevelsGroup
            key={group.id}
            group={group}
            quickLinks={gradeQuickLinks}
            formatNumber={formatNumber}
            getCount={getCount}
          />
        ))}
      </div>
    </section>
  );
}
