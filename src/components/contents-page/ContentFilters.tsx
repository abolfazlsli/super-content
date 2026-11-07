"use client";

import { FilterOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useTaxonomy } from "../../services/taxonomy";

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
  query?: string;
  setQuery?: (value: string) => void;
  onReset?: () => void;
}

type SelectOption = {
  value: string;
  label: string;
};

const sortOptions: SelectOption[] = [
  { value: "", label: "بدون مرتب‌سازی" },
  { value: "newest", label: "جدیدترین ها" },
  { value: "most-viewed", label: "پربازدیدترین ها" },
  { value: "best", label: "محبوب‌ترین ها" },
];

const selectClassName = "w-full";
const mobileSelectClassName = "w-full mobile-filter-select";

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
  query = "",
  setQuery,
  onReset,
}: ContentsFiltersProps) {
  const taxonomy = useTaxonomy();
  const [searchText, setSearchText] = useState(query);

  useEffect(() => {
    setSearchText(query);
  }, [query]);

  // مقطع‌ها (گروه) و پایه‌های هر مقطع (دسته‌بندی)
  const baseOptions = useMemo(
    () => taxonomy.grades.map((group) => ({ value: group.id, label: group.name })),
    [taxonomy.grades],
  );

  const levelOptions = useMemo(
    () =>
      (taxonomy.grades.find((group) => group.id === base)?.categories ?? []).map(
        (category) => ({ value: category.id, label: category.name }),
      ),
    [taxonomy.grades, base],
  );

  // گروه درسی قابل انتخابه (همه درس‌های گروه) یا یک درس خاص
  const subjectOptions = useMemo(
    () =>
      taxonomy.subjects.map((group) => ({
        label: group.name,
        title: group.name,
        options: [
          { value: group.id, label: `همه ${group.name}` },
          ...group.categories.map((category) => ({
            value: category.id,
            label: category.name,
          })),
        ],
      })),
    [taxonomy.subjects],
  );

  const contentTypeOptions = useMemo(
    () =>
      taxonomy.types.map((category) => ({
        value: category.id,
        label: category.name,
      })),
    [taxonomy.types],
  );

  const searchBox = setQuery ? (
    <Input.Search
      value={searchText}
      onChange={(event) => setSearchText(event.target.value)}
      onSearch={(value) => setQuery(value.trim())}
      placeholder="جستجو در محتوا..."
      allowClear
      size="large"
    />
  ) : null;
  const selectedSort = sort || "";
  const selectedBase = base || undefined;
  const selectedLevel = level || undefined;
  const selectedSubject = subject || undefined;
  const selectedContentType = contentType || undefined;

  return (
    <aside
      dir="rtl"
      className="w-full lg:w-(--contents-side-width) lg:shrink-0"
    >
      <div className="hidden w-full lg:block">
        <div className="w-full overflow-hidden rounded-2xl border border-(--border) bg-white shadow-cu">
          <div className="p-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--primary-light) text-(--primary)">
                <FilterOutlined />
              </span>
              <div>
                <h2 className="text-sm font-black text-(--text)">فیلترها</h2>
                <p className="mt-1 text-[10px] font-medium text-(--muted)">
                  محتوای مناسب خودت را پیدا کن
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {searchBox}

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
        <div className="static w-full">
          <div className="w-full">
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
                {searchBox && (
                  <div className="col-span-2 min-w-0">{searchBox}</div>
                )}

                <div className="col-span-2 min-w-0">
                  <Select
                    value={selectedSort}
                    onChange={setSort}
                    options={sortOptions}
                    className={mobileSelectClassName}
                    size="large"
                    labelRender={({ label }) => (
                      <span className="whitespace-nowrap">{label}</span>
                    )}
                  />
                </div>

                <div className="min-w-0">
                  <Select
                    value={selectedBase}
                    onChange={setBase}
                    placeholder="مقطع تحصیلی"
                    options={baseOptions}
                    allowClear
                    className={mobileSelectClassName}
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
                    className={mobileSelectClassName}
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
                    className={mobileSelectClassName}
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
                    className={mobileSelectClassName}
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
