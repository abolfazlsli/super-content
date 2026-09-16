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
  sort: string;
  setSort: (value: string) => void;
  onReset?: () => void;
}

const sortOptions = [
  { value: "best", label: "محبوب‌ترین" },
  { value: "newest", label: "جدیدترین" },
  { value: "most-viewed", label: "پربازدیدترین" },
  { value: "most-liked", label: "محبوب‌ترین‌ها" },
];

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

export default function ContentsFilters({
  base,
  setBase,
  subject,
  setSubject,
  contentType,
  setContentType,
  sort,
  setSort,
  onReset,
}: ContentsFiltersProps) {
  return (
    <aside dir="rtl" className="w-full lg:w-65 lg:shrink-0">
      <div className="hidden lg:block lg:h-[520px] lg:w-65">
        <div className="fixed top-[222px] z-40 w-65 overflow-hidden rounded-2xl border border-(--border) bg-white shadow-cu">
          <div className="p-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--primary-light) text-(--primary)">
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

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-xs font-bold text-(--text)">
                  مرتب‌سازی بر اساس
                </label>

                <Select
                  value={sort}
                  onChange={setSort}
                  options={sortOptions}
                  className="w-full"
                  size="large"
                />
              </div>

              <div className="h-px bg-(--border)" />

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
            </div>
          </div>

          <div className="border-t border-(--border) bg-(--surface) px-5 py-3">
            <Button
              type="text"
              icon={<ReloadOutlined />}
              onClick={onReset}
              className="flex! h-9! w-full! items-center! justify-center! rounded-xl! text-xs! font-bold! text-(--muted)! transition-all! hover:bg-white! hover:text-(--primary)! hover:shadow-sm!"
            >
              پاک کردن فیلترها
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full lg:hidden">
        <div className="fixed top-[324px] left-0 right-0 z-50 w-full">
          <div className="mx-auto w-[calc(100%-20px)] md:w-[calc(100%-32px)]">
            <div className="overflow-hidden rounded-2xl border border-(--border) bg-white shadow-cu">
              <div className="flex items-center gap-3 border-b border-(--border) px-3 py-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-(--primary-light) text-(--primary)">
                  <FilterOutlined />
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="text-xs font-black text-(--text)">
                    فیلترها
                  </h2>

                  <p className="mt-0.5 text-[9px] font-medium text-(--muted)">
                    گزینه‌های موردنظر خودت را انتخاب کن
                  </p>
                </div>

                <Button
                  type="text"
                  icon={<ReloadOutlined />}
                  onClick={onReset}
                  aria-label="پاک کردن فیلترها"
                  className="flex! h-9! w-9! shrink-0! items-center! justify-center! rounded-xl! p-0! text-(--muted)! hover:bg-(--surface)! hover:text-(--primary)!"
                />
              </div>

              <div
                dir="rtl"
                className="grid grid-cols-2 gap-2.5 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3"
              >
                <div className="min-w-0">
                  <Select
                    value={sort}
                    onChange={setSort}
                    options={sortOptions}
                    className="w-full"
                    size="large"
                    placeholder="مرتب‌سازی"
                  />
                </div>

                <div className="min-w-0">
                  <Select
                    value={base || undefined}
                    onChange={setBase}
                    placeholder="مقطع تحصیلی"
                    options={baseOptions}
                    allowClear
                    className="w-full"
                    size="large"
                  />
                </div>

                <div className="min-w-0">
                  <Select
                    value={subject || undefined}
                    onChange={setSubject}
                    placeholder="درس"
                    options={subjectOptions}
                    allowClear
                    className="w-full"
                    size="large"
                  />
                </div>

                <div className="min-w-0">
                  <Select
                    value={contentType || undefined}
                    onChange={setContentType}
                    placeholder="نوع محتوا"
                    options={contentTypeOptions}
                    allowClear
                    className="w-full"
                    size="large"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
