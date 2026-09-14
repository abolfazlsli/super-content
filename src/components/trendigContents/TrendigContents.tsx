"use client";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import { Button, Carousel, Col, Row, Tag } from "antd";

import type { CarouselRef } from "antd/es/carousel";

import { BookOpen, Download, FileText, Star } from "lucide-react";

import { useRef } from "react";

import { trendingContents } from "./trendingContents.data";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price);

const formatNumber = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

const contentGroups = Array.from(
  { length: Math.ceil(trendingContents.length / 4) },
  (_, index) => trendingContents.slice(index * 4, index * 4 + 4),
);

export default function TrendingContents() {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <section
      className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-6"
      dir="rtl"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            محتواهای پرطرفدار
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            محتواهایی که این روزها بیشتر از همه مورد توجه کاربران هستند
          </p>
        </div>

        <Button
          type="link"
          className="hidden! px-0! text-sm! font-semibold! text-(--primary)! md:block!"
        >
          مشاهده همه
        </Button>
      </div>

      <div className="relative">
        <Button
          type="default"
          shape="circle"
          icon={<ArrowRightOutlined />}
          aria-label="محتواهای قبلی"
          className="absolute! right-[-18px]! top-1/2! z-20! hidden! h-10! w-10! -translate-y-1/2! border-slate-200! bg-white! shadow-md! md:flex!"
          onClick={() => carouselRef.current?.prev()}
        />

        <Button
          type="default"
          shape="circle"
          icon={<ArrowLeftOutlined />}
          aria-label="محتواهای بعدی"
          className="absolute! left-[-18px]! top-1/2! z-20! hidden! h-10! w-10! -translate-y-1/2! border-slate-200! bg-white! shadow-md! md:flex!"
          onClick={() => carouselRef.current?.next()}
        />

        <Carousel
          ref={carouselRef}
          dots
          arrows={false}
          infinite
          draggable
          swipeToSlide
          rtl
          autoplay
          autoplaySpeed={5000}
        >
          {contentGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <Row gutter={[16, 16]}>
                {group.map((content) => (
                  <Col key={content.id} xs={24} sm={12} lg={6}>
                    <article
                      dir="rtl"
                      className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                    >
                      <div className="relative aspect-video overflow-hidden bg-slate-100">
                        <img
                          src={content.image}
                          alt={content.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        <Tag className="absolute! right-3! top-3! m-0! border-0! bg-white/95! px-2.5! py-1! text-[11px]! font-bold! text-slate-800! shadow-sm!">
                          {content.badge}
                        </Tag>

                        <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-[11px] font-medium text-white">
                          <BookOpen size={13} />
                          مشاهده محتوا
                        </span>
                      </div>

                      <div className="p-4">
                        <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-(--primary)">
                          <FileText size={13} />
                          {content.type}
                        </div>

                        <h3 className="line-clamp-2 min-h-[48px] text-sm font-bold leading-6 text-slate-900 transition-colors group-hover:text-(--primary)">
                          {content.title}
                        </h3>

                        <p className="mt-2 truncate text-xs text-slate-500">
                          {content.author}
                        </p>

                        <div className="mt-3 flex items-center gap-2 text-xs">
                          <span className="font-bold text-amber-500">
                            {content.rating}
                          </span>

                          <span className="flex items-center gap-0.5 text-amber-400">
                            <Star size={13} fill="currentColor" />
                            <Star size={13} fill="currentColor" />
                            <Star size={13} fill="currentColor" />
                            <Star size={13} fill="currentColor" />
                            <Star size={13} fill="currentColor" />
                          </span>

                          <span className="text-slate-400">
                            ({formatNumber(content.reviews)})
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-500">
                          <span className="flex items-center gap-1">
                            <FileText size={14} />
                            {formatNumber(content.pages)} صفحه
                          </span>

                          <span className="flex items-center gap-1">
                            <Download size={14} />
                            {formatNumber(content.downloads)}
                          </span>
                        </div>

                        <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                          <div>
                            {content.price > 0 ? (
                              content.discount > 0 ? (
                                <>
                                  <div className="text-base font-extrabold text-slate-900">
                                    {formatPrice(content.price)} تومان
                                  </div>
                                  <div className="mt-1 text-xs text-slate-400 line-through">
                                    {formatPrice(content.originalPrice)} تومان
                                  </div>
                                </>
                              ) : (
                                <div className="text-base font-extrabold text-slate-900">
                                  {formatPrice(content.price)} تومان
                                </div>
                              )
                            ) : (
                              <div className="text-base font-extrabold text-emerald-600">
                                رایگان
                              </div>
                            )}
                          </div>

                          {content.discount > 0 && (
                            <span className="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600">
                              {content.discount}% تخفیف
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

      <Button
        type="link"
        className="mt-2! block! px-0! text-sm! font-semibold! text-(--primary)! md:hidden!"
      >
        مشاهده همه محتواها
      </Button>
    </section>
  );
}
