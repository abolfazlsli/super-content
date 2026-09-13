"use client";

import { useState } from "react";

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

export default function EducationLevelSelector() {
  const [grade, setGrade] = useState<string>();

  return (
    <section
      className="mx-auto w-full max-w-[1440px] px-4 py-2 md:px-6"
      dir="rtl"
    >
      <div className="min-h-[84px] rounded-[24px] border border-slate-200 bg-white px-6 py-4 shadow-sm">
        <div className="grid h-full grid-cols-3 items-center gap-6">
          <div className="flex items-center justify-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <GraduationCap size={21} strokeWidth={1.8} />
            </span>

            <h2 className="whitespace-nowrap text-sm font-bold text-slate-900 md:text-base">
              دانش‌آموز کدام پایه هستی؟
            </h2>
          </div>

          <div className="flex justify-center">
            <Select
              value={grade}
              onChange={setGrade}
              placeholder="پایه تحصیلی را انتخاب کنید"
              options={grades}
              size="large"
              className="w-[300px]"
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="primary"
              size="large"
              disabled={!grade}
              onClick={() => {}}
              className="!flex !h-10 !w-[125px] !items-center !justify-center !gap-2 !rounded-xl"
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