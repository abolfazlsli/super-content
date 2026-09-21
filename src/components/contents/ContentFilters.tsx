"use client";

import { FilterOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";

interface ContentsFiltersProps {
  base: string;
  setBase: (value: string) => void;
  level: string;
  setLevel: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
  contentType: string;
  setContentType: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
  onReset?: () => void;
}

type SelectOption = {
  value: string;
  label: string;
};

const sortOptions: SelectOption[] = [
  { value: "newest", label: "جدیدترین ها" },
  { value: "most-viewed", label: "پربازدیدترین ها" },
  { value: "best", label: "محبوب‌ترین ها" },
];

const baseOptions: SelectOption[] = [
  { value: "elementary-first", label: "دبستان دوره اول" },
  { value: "elementary-second", label: "دبستان دوره دوم" },
  { value: "middle-first", label: "دبیرستان دوره اول" },
  { value: "middle-second", label: "دبیرستان دوره دوم" },
];

const levelOptionsByBase: Record<string, SelectOption[]> = {
  "elementary-first": [
    { value: "1", label: "پایه اول" },
    { value: "2", label: "پایه دوم" },
    { value: "3", label: "پایه سوم" },
  ],
  "elementary-second": [
    { value: "4", label: "پایه چهارم" },
    { value: "5", label: "پایه پنجم" },
    { value: "6", label: "پایه ششم" },
  ],
  "middle-first": [
    { value: "7", label: "پایه هفتم" },
    { value: "8", label: "پایه هشتم" },
    { value: "9", label: "پایه نهم" },
  ],
  "middle-second": [
    { value: "10", label: "پایه دهم" },
    { value: "11", label: "پایه یازدهم" },
    { value: "12", label: "پایه دوازدهم" },
  ],
};

const subjectOptions: SelectOption[] = [
  { value: "math", label: "ریاضی" },
  { value: "science", label: "علوم" },
  { value: "persian", label: "فارسی" },
  { value: "social", label: "مطالعات اجتماعی" },
  { value: "arabic", label: "عربی" },
  { value: "english", label: "زبان انگلیسی" },
  { value: "religion", label: "دینی" },
];

const contentTypeOptions: SelectOption[] = [
  { value: "question", label: "نمونه سؤال" },
  { value: "question-bank", label: "گنجینه سؤال" },
  { value: "lesson", label: "درسنامه" },
  { value: "course", label: "دوره آموزشی" },
  { value: "notes", label: "جزوه" },
  { value: "exam", label: "آزمون" },
  { value: "exercise", label: "تمرین" },
  { value: "video", label: "ویدئو" },
  { value: "qa", label: "پرسش و پاسخ" },
];

const selectClassName = "w-full";

export default function ContentsFilters({
  base,
  setBase,
  level,
  setLevel,
  subject,
  setSubject,
  contentType,
  setContentType,
  sort,
  setSort,
  onReset,
}: ContentsFiltersProps) {
  const levelOptions = base ? levelOptionsByBase[base] ?? [] : [];
  const selectedSort = sort || undefined;
  const selectedBase = base || undefined;
  const selectedLevel = level || undefined;
  const selectedSubject = subject || undefined;
  const selectedContentType = contentType || undefined;

  return (
    <aside dir="rtl" className="w-full lg:w-65 lg:shrink-0">
      <div className="hidden lg:block lg:h-[560px] lg:w-65">
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
                  value={selectedSort}
                  onChange={setSort}
                  options={sortOptions}
                  className={selectClassName}
                  size="large"
                  placeholder="بدون مرتب‌سازی"
                  allowClear
                />
              </div>

              <div className="h-px bg-(--border)" />

              <div>
                <label className="mb-2 block text-xs font-bold text-(--text)">
                  مقطع تحصیلی
                </label>

                <Select
                  value={selectedBase}
                  onChange={setBase}
                  placeholder="انتخاب مقطع"
                  options={baseOptions}
                  allowClear
                  className={selectClassName}
                  size="large"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-(--text)">
                  پایه تحصیلی
                </label>

                <Select
                  value={selectedLevel}
                  onChange={setLevel}
                  placeholder="انتخاب پایه"
                  options={levelOptions}
                  allowClear
                  disabled={!base}
                  className={selectClassName}
                  size="large"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-(--text)">
                  درس
                </label>

                <Select
                  value={selectedSubject}
                  onChange={setSubject}
                  placeholder="انتخاب درس"
                  options={subjectOptions}
                  allowClear
                  className={selectClassName}
                  size="large"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-(--text)">
                  نوع محتوا
                </label>

                <Select
                  value={selectedContentType}
                  onChange={setContentType}
                  placeholder="انتخاب نوع محتوا"
                  options={contentTypeOptions}
                  allowClear
                  className={selectClassName}
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
        <div className="fixed top-[324px] right-0 left-0 z-50 w-full">
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
                    value={selectedSort}
                    onChange={setSort}
                    options={sortOptions}
                    className={selectClassName}
                    size="large"
                    placeholder="بدون مرتب‌سازی"
                    allowClear
                  />
                </div>

                <div className="min-w-0">
                  <Select
                    value={selectedBase}
                    onChange={setBase}
                    placeholder="مقطع تحصیلی"
                    options={baseOptions}
                    allowClear
                    className={selectClassName}
                    size="large"
                  />
                </div>

                <div className="min-w-0">
                  <Select
                    value={selectedLevel}
                    onChange={setLevel}
                    placeholder="پایه تحصیلی"
                    options={levelOptions}
                    allowClear
                    disabled={!base}
                    className={selectClassName}
                    size="large"
                  />
                </div>

                <div className="min-w-0">
                  <Select
                    value={selectedSubject}
                    onChange={setSubject}
                    placeholder="درس"
                    options={subjectOptions}
                    allowClear
                    className={selectClassName}
                    size="large"
                  />
                </div>

                <div className="min-w-0">
                  <Select
                    value={selectedContentType}
                    onChange={setContentType}
                    placeholder="نوع محتوا"
                    options={contentTypeOptions}
                    allowClear
                    className={selectClassName}
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
