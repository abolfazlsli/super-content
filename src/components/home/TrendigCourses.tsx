"use client";

import { Button, Carousel, Col, Row, Tag } from "antd";

import type { CarouselRef } from "antd/es/carousel";

import { Clock3, PlayCircle, Star, Users } from "lucide-react";

import { useRef } from "react";

import CarouselNavigation from "../common/CarouselNavigation";

import { trendingCourses } from "../course/trendingCourses.data";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price);

const formatNumber = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

const courseGroups = Array.from(
  { length: Math.ceil(trendingCourses.length / 4) },
  (_, index) => trendingCourses.slice(index * 4, index * 4 + 4),
);

export default function TrendingCourses() {
  const mobileCarouselRef = useRef<CarouselRef>(null);
  const desktopCarouselRef = useRef<CarouselRef>(null);

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

      <div className="relative md:hidden">
        <CarouselNavigation
          carouselRef={mobileCarouselRef}
          previousLabel="دوره‌های قبلی"
          nextLabel="دوره‌های بعدی"
        />

        <Carousel
          ref={mobileCarouselRef}
          dots
          arrows={false}
          infinite
          draggable
          swipeToSlide
          rtl
          autoplay
          autoplaySpeed={2000}
        >
          {trendingCourses.map((course) => (
            <div key={course.id} className="w-full">
              <article
                dir="rtl"
                className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <Tag className="absolute! right-3! top-3! m-0! border-0! bg-white/95! px-2.5! py-1! text-[11px]! font-bold! text-slate-800! shadow-sm!">
                    {course.badge}
                  </Tag>

                  <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-[11px] font-medium text-white">
                    <PlayCircle size={13} />
                    مشاهده دوره
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-2 min-h-[48px] text-sm font-bold leading-6 text-slate-900 transition-colors group-hover:text-(--primary)">
                    {course.title}
                  </h3>

                  <p className="mt-2 truncate text-xs text-slate-500">
                    {course.instructor}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs">
                    <span className="font-bold text-amber-500">
                      {course.rating}
                    </span>

                    <span className="flex items-center gap-0.5 text-amber-400">
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                    </span>

                    <span className="text-slate-400">
                      ({formatNumber(course.reviews)})
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-500">
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

                  <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                    <div>
                      <div className="text-base font-extrabold text-slate-900">
                        {formatPrice(course.price)} تومان
                      </div>

                      {course.discount > 0 && (
                        <div className="mt-1 text-xs text-slate-400 line-through">
                          {formatPrice(course.originalPrice)} تومان
                        </div>
                      )}
                    </div>

                    {course.discount > 0 && (
                      <span className="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600">
                        {course.discount}% تخفیف
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="relative hidden md:block">
        <CarouselNavigation
          carouselRef={desktopCarouselRef}
          previousLabel="دوره‌های قبلی"
          nextLabel="دوره‌های بعدی"
        />

        <Carousel
          ref={desktopCarouselRef}
          dots
          arrows={false}
          infinite
          draggable
          swipeToSlide
          rtl
          autoplay
          autoplaySpeed={5000}
        >
          {courseGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <Row gutter={[16, 16]}>
                {group.map((course) => (
                  <Col key={course.id} xs={24} sm={12} lg={6}>
                    <article
                      dir="rtl"
                      className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                    >
                      <div className="relative aspect-video overflow-hidden bg-slate-100">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        <Tag className="absolute! right-3! top-3! m-0! border-0! bg-white/95! px-2.5! py-1! text-[11px]! font-bold! text-slate-800! shadow-sm!">
                          {course.badge}
                        </Tag>

                        <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-[11px] font-medium text-white">
                          <PlayCircle size={13} />
                          مشاهده دوره
                        </span>
                      </div>

                      <div className="p-4">
                        <h3 className="line-clamp-2 min-h-[48px] text-sm font-bold leading-6 text-slate-900 transition-colors group-hover:text-(--primary)">
                          {course.title}
                        </h3>

                        <p className="mt-2 truncate text-xs text-slate-500">
                          {course.instructor}
                        </p>

                        <div className="mt-3 flex items-center gap-2 text-xs">
                          <span className="font-bold text-amber-500">
                            {course.rating}
                          </span>

                          <span className="flex items-center gap-0.5 text-amber-400">
                            <Star size={13} fill="currentColor" />
                            <Star size={13} fill="currentColor" />
                            <Star size={13} fill="currentColor" />
                            <Star size={13} fill="currentColor" />
                            <Star size={13} fill="currentColor" />
                          </span>

                          <span className="text-slate-400">
                            ({formatNumber(course.reviews)})
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-500">
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

                        <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                          <div>
                            <div className="text-base font-extrabold text-slate-900">
                              {formatPrice(course.price)} تومان
                            </div>

                            {course.discount > 0 && (
                              <div className="mt-1 text-xs text-slate-400 line-through">
                                {formatPrice(course.originalPrice)} تومان
                              </div>
                            )}
                          </div>

                          {course.discount > 0 && (
                            <span className="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600">
                              {course.discount}% تخفیف
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
