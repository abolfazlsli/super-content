"use client";

import { FilterOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";

interface ContentsFiltersProps {
  base: string;
  setBase: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
  contentType: string;
  setContentType: (value: string) => void;
  onReset?: () => void;
}

const baseOptions = [
  { value: "elementary-1", label: "اول دبستان" },
  { value: "elementary-2", label: "دوم دبستان" },
  { value: "elementary-3", label: "سوم دبستان" },
  { value: "elementary-4", label: "چهارم دبستان" },
  { value: "elementary-5", label: "پنجم دبستان" },
  { value: "elementary-6", label: "ششم دبستان" },
  { value: "middle-1", label: "هفتم" },
  { value: "middle-2", label: "هشتم" },
  { value: "middle-3", label: "نهم" },
  { value: "high-1", label: "دهم" },
  { value: "high-2", label: "یازدهم" },
  { value: "high-3", label: "دوازدهم" },
];

const subjectOptions = [
  { value: "math", label: "ریاضی" },
  { value: "science", label: "علوم" },
  { value: "persian", label: "فارسی" },
  { value: "social", label: "مطالعات اجتماعی" },
  { value: "arabic", label: "عربی" },
  { value: "english", label: "زبان انگلیسی" },
  { value: "religion", label: "دینی" },
];

const contentTypeOptions = [
  { value: "question", label: "نمونه سؤال" },
  { value: "lesson", label: "درسنامه" },
  { value: "notes", label: "جزوه" },
  { value: "exam", label: "آزمون" },
  { value: "exercise", label: "تمرین" },
  { value: "video", label: "ویدئو" },
];

const termOptions = [
  { value: "first", label: "نوبت اول" },
  { value: "second", label: "نوبت دوم" },
  { value: "summer", label: "تابستان" },
  { value: "general", label: "عمومی" },
];

export default function ContentsFilters({
  base,
  setBase,
  subject,
  setSubject,
  contentType,
  setContentType,
  onReset,
}: ContentsFiltersProps) {
  return (
    <aside dir="rtl" className="w-full lg:w-65 lg:shrink-0">
      <div className="sticky top-28 rounded-2xl border border-(--border) bg-white p-5 shadow-cu">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary-light) text-(--primary)">
              <FilterOutlined />
            </span>

            <div>
              <h2 className="text-sm font-black text-(--text)">
                فیلترها
              </h2>

              <p className="mt-1 text-[10px] font-medium text-(--muted)">
                محتوای مناسب خودت را پیدا کن
              </p>
            </div>
          </div>

          <Button
            type="text"
            size="small"
            icon={<ReloadOutlined />}
            onClick={onReset}
            className="text-xs! text-(--muted)!"
          >
            پاک کردن
          </Button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-xs font-bold text-(--text)">
              مقطع تحصیلی
            </label>

            <Select
              value={base || undefined}
              onChange={setBase}
              placeholder="انتخاب مقطع"
              options={baseOptions}
              allowClear
              className="w-full"
              size="large"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-(--text)">
              درس
            </label>

            <Select
              value={subject || undefined}
              onChange={setSubject}
              placeholder="انتخاب درس"
              options={subjectOptions}
              allowClear
              className="w-full"
              size="large"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-(--text)">
              نوع محتوا
            </label>

            <Select
              value={contentType || undefined}
              onChange={setContentType}
              placeholder="انتخاب نوع محتوا"
              options={contentTypeOptions}
              allowClear
              className="w-full"
              size="large"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-(--text)">
              نوبت
            </label>

            <Select
              placeholder="انتخاب نوبت"
              options={termOptions}
              allowClear
              className="w-full"
              size="large"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}