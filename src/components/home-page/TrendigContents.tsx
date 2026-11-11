"use client";

import ResponsiveCarousel from "../common/ResponsiveCarousel";
import ContentCard from "../content/ContentCard";
import { toCardProps, useHomeContents } from "./useHomeContents";

export default function TrendingContents() {
  const { items, loading } = useHomeContents("most-viewed");

  if (!loading && !items.length) return null;

  return (
    <section
      dir="rtl"
      className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-6"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            محتواهای پرطرفدار
          </h2>

          <p className="mt-2 hidden text-sm text-slate-500 md:block">
            محتواهایی که این روزها بیشتر از همه مورد توجه کاربران هستند
          </p>
        </div>
      </div>

      <ResponsiveCarousel
        items={items}
        getItemKey={(content) => content.id}
        renderItem={(content) => <ContentCard content={toCardProps(content) as any} />}
      />
    </section>
  );
}
