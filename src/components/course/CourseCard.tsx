"use client";

import { Clock3, PlayCircle, Star, Users } from "lucide-react";

import { type TrendingCourseItem } from "./trendingCourses.data";
import CourseCardCover from "./CourseCardCover";
import CourseCardPrice from "./CourseCardPrice";

interface CourseCardProps {
  course: TrendingCourseItem;
}

const formatNumber = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

const ratingStars = Array.from({ length: 5 });

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      dir="rtl"
      className="group flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-right transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
    >
      <CourseCardCover
        image={course.image}
        title={course.title}
        badge={course.badge}
      />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="h-12 shrink-0 overflow-hidden text-right text-sm font-bold leading-6 text-slate-900 transition-colors group-hover:text-(--primary)">
          {course.title}
        </h3>

        <p className="mt-2 h-4 shrink-0 truncate text-right text-xs text-slate-500">
          {course.instructor}
        </p>

        <div className="mt-3 flex h-5 shrink-0 items-center gap-2 text-xs">
          <span className="font-bold text-amber-500">{course.rating}</span>

          <span className="flex items-center gap-0.5 text-amber-400">
            {ratingStars.map((_, index) => (
              <Star key={index} size={13} fill="currentColor" />
            ))}
          </span>

          <span className="text-slate-400">
            ({formatNumber(course.reviews)})
          </span>
        </div>

        <div className="mt-3 flex h-4 shrink-0 items-center gap-3 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <Clock3 size={14} />
            {course.duration}
          </span>

          <span className="flex items-center gap-1">
            <PlayCircle size={14} />
            {course.lessons}
          </span>

          <span className="flex items-center gap-1">
            <Users size={14} />
            {formatNumber(course.students)}
          </span>
        </div>

        <CourseCardPrice
          price={course.price}
          discount={course.discount}
          originalPrice={course.originalPrice}
        />
      </div>
    </article>
  );
}
