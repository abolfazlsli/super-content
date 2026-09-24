"use client";

import { Pagination } from "antd";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface ContentsPaginationProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const PAGE_SIZE_OPTIONS = [5, 10, 20, 30] as const;
const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

const toPersianDigits = (value: number | string) =>
  String(value).replace(
    /\d/g,
    (digit) => PERSIAN_DIGITS[Number(digit)],
  );

const renderPaginationItem = (
  page: number,
  type: string,
  originalElement: React.ReactNode,
) => {
  if (type === "page") {
    return (
      <span
        dir="rtl"
        className="flex h-full w-full items-center justify-center"
      >
        {toPersianDigits(page)}
      </span>
    );
  }

  if (type === "prev") {
    return (
      <span
        aria-label="صفحه قبل"
        className="flex h-full w-full items-center justify-center"
      >
        <ChevronRight size={19} strokeWidth={2.2} />
      </span>
    );
  }

  if (type === "next") {
    return (
      <span
        aria-label="صفحه بعد"
        className="flex h-full w-full items-center justify-center"
      >
        <ChevronLeft size={19} strokeWidth={2.2} />
      </span>
    );
  }

  return originalElement;
};

export default function ContentsPagination({
  current,
  pageSize,
  total,
  onChange,
  onPageSizeChange,
}: ContentsPaginationProps) {
  if (total <= pageSize) {
    return null;
  }

  return (
    <div
      dir="rtl"
      className="mt-6 flex w-full justify-center px-1 pb-2 sm:mt-8"
    >
      <div className="flex w-fit max-w-full items-center gap-2 rounded-2xl border border-(--border) bg-white p-1.5 shadow-[0_3px_14px_rgba(15,23,42,0.05)]">
        <Pagination
          current={current}
          pageSize={pageSize}
          total={total}
          onChange={onChange}
          showSizeChanger={false}
          showQuickJumper={false}
          responsive
          hideOnSinglePage
          className="contentsPagination"
          itemRender={renderPaginationItem}
        />

        <div className="h-7 w-px shrink-0 bg-(--border)" />

        <div className="flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-slate-50 px-2">
          <span className="whitespace-nowrap text-[10px] font-medium text-(--muted) sm:text-[11px]">
            نمایش
          </span>

          <div className="relative">
            <select
              value={pageSize}
              onChange={(event) =>
                onPageSizeChange(Number(event.target.value))
              }
              aria-label="تعداد محتوا در هر صفحه"
              className="h-7 cursor-pointer appearance-none rounded-lg border border-(--border) bg-white pl-6 pr-2.5 text-sm font-bold text-(--text) outline-none transition-all duration-200 hover:border-(--border-hover) hover:bg-[#F4FAFF] focus:border-(--primary) focus:ring-2 focus:ring-[#DFF1FF]"
            >
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {toPersianDigits(size)}
                </option>
              ))}
            </select>

            <ChevronDown
              size={12}
              strokeWidth={2}
              className="pointer-events-none absolute left-1.5 top-1/2 -translate-y-1/2 text-(--muted)"
            />
          </div>

          <span className="whitespace-nowrap text-[10px] font-medium text-(--muted) sm:text-[11px]">
            محتوا در صفحه
          </span>
        </div>
      </div>
    </div>
  );
}
