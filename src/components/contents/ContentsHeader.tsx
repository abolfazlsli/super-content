"use client";

import { AppstoreOutlined, SlidersOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";

interface ContentsHeaderProps {
  total: number;
  sort: string;
  setSort: (value: string) => void;
  onFilterOpen?: () => void;
}

const sortOptions = [
  {
    value: "best",
    label: "محبوب‌ترین",
  },
  {
    value: "newest",
    label: "جدیدترین",
  },
  {
    value: "most-viewed",
    label: "پربازدیدترین",
  },
  {
    value: "most-liked",
    label: "محبوب‌ترین‌ها",
  },
];

export default function ContentsHeader({
  total,
  sort,
  setSort,
  onFilterOpen,
}: ContentsHeaderProps) {
  return (
    <div dir="rtl" className="mb-6">
      <div className="mb-3">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-2xl font-black tracking-[-0.02em] text-(--text) md:text-3xl">
              محتواهای آموزشی
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-(--muted)">
              نمونه‌سؤال، جزوه، درسنامه، آزمون و منابع آموزشی مورد نیازت را
              پیدا کن.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-(--muted)">
            <AppstoreOutlined className="text-base text-(--primary)" />
            <span>
              {new Intl.NumberFormat("fa-IR").format(total)} محتوا
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-(--border) bg-white p-3 shadow-[0_8px_25px_rgba(45,60,110,0.03)]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-(--text)">
            مرتب‌سازی:
          </span>

          <Select
            value={sort}
            onChange={setSort}
            options={sortOptions}
            size="middle"
            className="min-w-36"
            popupMatchSelectWidth={false}
          />
        </div>

        <Button
          icon={<SlidersOutlined />}
          className="rounded-xl border-(--border) text-xs font-medium text-slate-600 md:hidden"
          onClick={onFilterOpen}
        >
          فیلترها
        </Button>
      </div>
    </div>
  );
}
