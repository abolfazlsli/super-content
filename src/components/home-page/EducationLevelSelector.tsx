"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Select } from "antd";

import { ArrowLeft, GraduationCap } from "lucide-react";

const grades = [
  { value: "preschool", label: "پیش‌دبستانی" },
  { value: "grade-1", label: "پایه اول" },
  { value: "grade-2", label: "پایه دوم" },
  { value: "grade-3", label: "پایه سوم" },
  { value: "grade-4", label: "پایه چهارم" },
  { value: "grade-5", label: "پایه پنجم" },
  { value: "grade-6", label: "پایه ششم" },
  { value: "grade-7", label: "پایه هفتم" },
  { value: "grade-8", label: "پایه هشتم" },
  { value: "grade-9", label: "پایه نهم" },
  { value: "grade-10", label: "پایه دهم" },
  { value: "grade-11", label: "پایه یازدهم" },
  { value: "grade-12", label: "پایه دوازدهم" },
];

const gradeMapping: Record<string, { base: string; level: string }> = {
  "grade-1": { base: "elementary-first", level: "1" },
  "grade-2": { base: "elementary-first", level: "2" },
  "grade-3": { base: "elementary-first", level: "3" },
  "grade-4": { base: "elementary-second", level: "4" },
  "grade-5": { base: "elementary-second", level: "5" },
  "grade-6": { base: "elementary-second", level: "6" },
  "grade-7": { base: "middle-first", level: "7" },
  "grade-8": { base: "middle-first", level: "8" },
  "grade-9": { base: "middle-first", level: "9" },
  "grade-10": { base: "middle-second", level: "10" },
  "grade-11": { base: "middle-second", level: "11" },
  "grade-12": { base: "middle-second", level: "12" },
};

export default function EducationLevelSelector() {
  const router = useRouter();
  const [grade, setGrade] = useState<string>();

  const handleContinue = () => {
    if (!grade) return;

    const selectedGrade = gradeMapping[grade];

    const params = new URLSearchParams({
      base: selectedGrade.base,
      level: selectedGrade.level,
    });

    router.push(`/contents?${params.toString()}`);
  };

  return (
    <section
      className="mx-auto w-full max-w-[1440px] px-3 py-2 sm:px-4 md:px-6"
      dir="rtl"
    >
      <div className="rounded-[20px] border border-slate-200 bg-white px-4 py-4 shadow-sm shadow-cu sm:rounded-[24px] sm:px-6 sm:py-4 md:min-h-[72px]">
        <div className="grid w-full grid-cols-1 items-center gap-3 sm:grid-cols-3 sm:gap-6 md:min-h-[40px] max-[1199px]:!grid-cols-1 max-[1199px]:!gap-3">
          <div className="flex items-center justify-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <GraduationCap
                size={21}
                className="!text-(--primary)"
                strokeWidth={1.8}
              />
            </span>

            <h2 className="text-sm font-bold text-slate-900 sm:whitespace-nowrap sm:text-base">
              دانش‌آموز کدام پایه هستی؟
            </h2>
          </div>

          <div className="flex w-full justify-center">
            <Select
              value={grade}
              onChange={setGrade}
              placeholder="پایه تحصیلی را انتخاب کنید"
              options={grades}
              size="large"
              className="w-full sm:w-[300px] max-[1199px]:!w-full"
            />
          </div>

          <div className="flex w-full justify-end">
            <Button
              type="primary"
              size="large"
              disabled={!grade}
              onClick={handleContinue}
              className="!flex !h-10 !w-full !items-center !justify-center !gap-2 !rounded-xl !bg-(--primary) sm:!w-[125px] max-[1199px]:!w-full"
            >
              بزن بریم
              <ArrowLeft size={17} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
