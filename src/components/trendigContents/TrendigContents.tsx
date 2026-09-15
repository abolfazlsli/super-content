"use client";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  AuditOutlined,
  BookOutlined,
  CheckCircleOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  FormOutlined,
  IdcardOutlined,
  PlayCircleOutlined,
  ReadOutlined,
  SnippetsOutlined,
  SolutionOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Col, Row } from "antd";
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

const contentVisuals = {
  "نمونه سوال": {
    icon: <SnippetsOutlined />,
    label: "نمونه سوال",
    background: "bg-gradient-to-br from-[#f8e0d0] via-[#fceddf] to-[#f4d3c0]",
    iconColor: "text-orange-700",
    iconBackground: "bg-orange-100/90",
    badgeBackground: "bg-orange-500/10",
    badgeColor: "text-orange-700",
    accent: "bg-orange-200/60",
    glow: "bg-orange-300/30",
    border: "border-orange-100",
  },

  جزوه: {
    icon: <ReadOutlined />,
    label: "جزوه",
    background: "bg-gradient-to-br from-[#e8defb] via-[#f1eaff] to-[#ddd0f5]",
    iconColor: "text-violet-700",
    iconBackground: "bg-violet-100/90",
    badgeBackground: "bg-violet-500/10",
    badgeColor: "text-violet-700",
    accent: "bg-violet-200/60",
    glow: "bg-violet-300/30",
    border: "border-violet-100",
  },

  آزمون: {
    icon: <AuditOutlined />,
    label: "آزمون",
    background: "bg-gradient-to-br from-[#d1ecdd] via-[#e5f5eb] to-[#c8e6d5]",
    iconColor: "text-emerald-700",
    iconBackground: "bg-emerald-100/90",
    badgeBackground: "bg-emerald-500/10",
    badgeColor: "text-emerald-700",
    accent: "bg-emerald-200/60",
    glow: "bg-emerald-300/30",
    border: "border-emerald-100",
  },

  درسنامه: {
    icon: <SolutionOutlined />,
    label: "درسنامه",
    background: "bg-gradient-to-br from-[#f9ebc8] via-[#fff5dc] to-[#f5e5b8]",
    iconColor: "text-amber-700",
    iconBackground: "bg-amber-100/90",
    badgeBackground: "bg-amber-500/10",
    badgeColor: "text-amber-700",
    accent: "bg-amber-200/60",
    glow: "bg-amber-300/30",
    border: "border-amber-100",
  },

  تمرین: {
    icon: <FormOutlined />,
    label: "تمرین",
    background: "bg-gradient-to-br from-[#f9dce5] via-[#fdeaf0] to-[#f5ccd9]",
    iconColor: "text-rose-700",
    iconBackground: "bg-rose-100/90",
    badgeBackground: "bg-rose-500/10",
    badgeColor: "text-rose-700",
    accent: "bg-rose-200/60",
    glow: "bg-rose-300/30",
    border: "border-rose-100",
  },

  ویدئو: {
    icon: <VideoCameraOutlined />,
    label: "ویدئو",
    background: "bg-gradient-to-br from-[#d5f1f2] via-[#e7f9fa] to-[#c9e8ea]",
    iconColor: "text-cyan-700",
    iconBackground: "bg-cyan-100/90",
    badgeBackground: "bg-cyan-500/10",
    badgeColor: "text-cyan-700",
    accent: "bg-cyan-200/60",
    glow: "bg-cyan-300/30",
    border: "border-cyan-100",
  },

  کتاب: {
    icon: <BookOutlined />,
    label: "کتاب",
    background: "bg-gradient-to-br from-[#dfe4f8] via-[#edf0ff] to-[#d2d9f1]",
    iconColor: "text-indigo-700",
    iconBackground: "bg-indigo-100/90",
    badgeBackground: "bg-indigo-500/10",
    badgeColor: "text-indigo-700",
    accent: "bg-indigo-200/60",
    glow: "bg-indigo-300/30",
    border: "border-indigo-100",
  },

  پاسخنامه: {
    icon: <CheckCircleOutlined />,
    label: "پاسخنامه",
    background: "bg-gradient-to-br from-[#d8eee9] via-[#e8f7f3] to-[#c9e5df]",
    iconColor: "text-teal-700",
    iconBackground: "bg-teal-100/90",
    badgeBackground: "bg-teal-500/10",
    badgeColor: "text-teal-700",
    accent: "bg-teal-200/60",
    glow: "bg-teal-300/30",
    border: "border-teal-100",
  },

  "خلاصه درس": {
    icon: <FileSearchOutlined />,
    label: "خلاصه درس",
    background: "bg-gradient-to-br from-[#dce9f8] via-[#edf5ff] to-[#cfdff2]",
    iconColor: "text-blue-700",
    iconBackground: "bg-blue-100/90",
    badgeBackground: "bg-blue-500/10",
    badgeColor: "text-blue-700",
    accent: "bg-blue-200/60",
    glow: "bg-blue-300/30",
    border: "border-blue-100",
  },

  فلش‌کارت: {
    icon: <IdcardOutlined />,
    label: "فلش‌کارت",
    background: "bg-gradient-to-br from-[#f0dff3] via-[#f8ebfa] to-[#e7d3eb]",
    iconColor: "text-fuchsia-700",
    iconBackground: "bg-fuchsia-100/90",
    badgeBackground: "bg-fuchsia-500/10",
    badgeColor: "text-fuchsia-700",
    accent: "bg-fuchsia-200/60",
    glow: "bg-fuchsia-300/30",
    border: "border-fuchsia-100",
  },

  default: {
    icon: <FileTextOutlined />,
    label: "محتوا",
    background: "bg-gradient-to-br from-[#d1f0fe] via-[#e4f7ff] to-[#c7e9fa]",
    iconColor: "text-sky-700",
    iconBackground: "bg-sky-100/90",
    badgeBackground: "bg-sky-500/10",
    badgeColor: "text-sky-700",
    accent: "bg-sky-200/60",
    glow: "bg-sky-300/30",
    border: "border-sky-100",
  },
} as const;

const getContentVisual = (type: string) => {
  if (type in contentVisuals) {
    return contentVisuals[type as keyof typeof contentVisuals];
  }

  return contentVisuals.default;
};

function ContentCover({ type, title }: { type: string; title: string }) {
  const visual = getContentVisual(type);

  return (
    <div
      dir="rtl"
      className={`relative aspect-[1.65] overflow-hidden ${visual.background}`}
    >
      <div
        className={`absolute -right-14 -top-16 h-44 w-44 rounded-full ${visual.accent}`}
      />

      <div
        className={`absolute -bottom-20 -left-14 h-48 w-48 rounded-full ${visual.accent}`}
      />

      <div
        className={`absolute right-1/2 top-1/2 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full ${visual.glow} blur-3xl`}
      />

      <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_1px)] [background-size:18px_18px] text-slate-900" />

      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <span
          className={`rounded-full border border-white/70 bg-white/50 px-2.5 py-1 text-[10px] font-bold ${visual.badgeColor} shadow-sm backdrop-blur-md`}
        >
          {visual.label}
        </span>

        <span className="rounded-full bg-white/55 px-2 py-1 text-[10px] font-medium text-slate-500 backdrop-blur-md">
          محتوای آموزشی
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 pt-4 text-center">
        <div
          className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-[24px] ${visual.iconBackground} ${visual.iconColor} shadow-[0_10px_25px_rgba(15,23,42,0.08)] ring-1 ring-white/80 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105`}
        >
          <div className="absolute inset-1 rounded-[20px] border border-white/50" />

          <span className="relative text-[36px]">
            {visual.icon}
          </span>
        </div>

        <span className="mt-3 max-w-[85%] truncate text-xs font-bold text-slate-700">
          {title}
        </span>
      </div>

      <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-slate-900/80 px-2.5 py-1.5 text-[10px] font-medium text-white shadow-sm backdrop-blur-md">
        <BookOpen size={12} />
        مشاهده محتوا
      </span>
    </div>
  );
}

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
                {group.map((content) => {
                  const visual = getContentVisual(content.type);

                  return (
                    <Col key={content.id} xs={24} sm={12} lg={6}>
                      <article
                        dir="rtl"
                        className={`group h-full cursor-pointer overflow-hidden rounded-[20px] border bg-white text-right transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)] ${visual.border}`}
                      >
                        <ContentCover
                          type={content.type}
                          title={content.title}
                        />

                        <div className="p-4">
                          <div className="mb-3 flex items-center justify-start">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-bold ${visual.badgeBackground} ${visual.badgeColor}`}
                            >
                              <span className="text-[13px]">
                                {visual.icon}
                              </span>
                              {content.type}
                            </span>
                          </div>

                          <h3 className="min-h-[48px] text-right text-sm font-bold leading-6 text-slate-900 transition-colors group-hover:text-(--primary)">
                            {content.title}
                          </h3>

                          <p className="mt-2 truncate text-right text-xs text-slate-500">
                            {content.author}
                          </p>

                          <div className="mt-3 flex items-center justify-start gap-2 text-xs">
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

                          <div className="mt-3 flex items-center justify-start gap-4 text-[11px] text-slate-500">
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
                            <div className="text-right">
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
                              <span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-600">
                                {content.discount}% تخفیف
                              </span>
                            )}
                          </div>
                        </div>
                      </article>
                    </Col>
                  );
                })}
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
