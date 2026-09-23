"use client";

import { DownloadOutlined, StarFilled } from "@ant-design/icons";

interface ContentDetailRatingProps {
  rating: number;
  reviews: number;
  downloads: number;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export default function ContentDetailRating({
  rating,
  reviews,
  downloads,
}: ContentDetailRatingProps) {
  return (
    <div className="mt-3 w-full border-y border-slate-100 py-3">
      <div className="flex w-full items-center justify-end gap-4">
        <div dir="rtl" className="flex items-center gap-1.5">
          <span className="text-sm font-black text-amber-500">
            {formatNumber(rating)}
          </span>

          <span className="flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarFilled key={index} className="text-[11px]" />
            ))}
          </span>

          <span className="text-[10px] font-medium text-slate-400">
            ({formatNumber(reviews)} نظر)
          </span>
        </div>

        <span className="h-4 w-px bg-slate-200" />

        <span
          dir="rtl"
          className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400"
        >
          <DownloadOutlined />
          {formatNumber(downloads)} دانلود
        </span>
      </div>
    </div>
  );
}
