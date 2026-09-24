"use client";

import { Button } from "antd";

import ResponsiveCarousel from "../common/ResponsiveCarousel";
import CourseCard from "../course/CourseCard";
import { trendingCourses } from "../course/trendingCourses.data";

export default function TrendingCourses() {
  return (
    <section
      className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-6"
      dir="rtl"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            دوره‌های پرطرفدار
          </h2>

          <p className="mt-2 hidden text-sm text-slate-500 md:block">
            دوره‌هایی که این روزها بیشتر از همه مورد توجه کاربران هستند
          </p>
        </div>

        <Button
          type="link"
          className="px-0! text-xs! font-semibold! text-(--primary)! md:hidden!"
        >
          مشاهده همه دوره‌ها
        </Button>

        <Button
          type="link"
          className="hidden! px-0! text-sm! font-semibold! text-(--primary)! md:block!"
        >
          مشاهده همه
        </Button>
      </div>

      <ResponsiveCarousel
        items={trendingCourses}
        getItemKey={(course) => course.id}
        renderItem={(course) => <CourseCard course={course} />}
      />
    </section>
  );
}
