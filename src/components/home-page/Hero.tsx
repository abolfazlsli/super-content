"use client";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";

interface HeroProps {
  query: string;
  setQuery: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
  setPage: (page: number) => void;
}

const slides = [
  {
    id: 1,
    eyebrow: "محتوای آموزشی",
    title: "دانش مورد نیازت را همین‌جا پیدا کن",
    description:
      "به مجموعه‌ای از دوره‌ها، فایل‌ها و منابع آموزشی کاربردی دسترسی داشته باش.",
    primaryAction: "مشاهده محتوا",
    secondaryAction: "دسته‌بندی‌ها",
    badge: "پیشنهاد ویژه",
    background: "#d0f0fe",
    character: "/images/banners/character1.png",
  },
  {
    id: 2,
    eyebrow: "دوره‌های تخصصی",
    title: "مهارت‌های جدید را حرفه‌ای یاد بگیر",
    description:
      "از برنامه‌نویسی و طراحی تا مهارت‌های کاربردی، محتوای مناسب مسیرت را پیدا کن.",
    primaryAction: "مشاهده دوره‌ها",
    secondaryAction: "شروع یادگیری",
    badge: "محبوب‌ترین‌ها",
    background: "#d1ecdd",
    character: "/images/banners/character2.png",
  },
  {
    id: 3,
    eyebrow: "محتوای دیجیتال",
    title: "ابزارهای بهتر برای کار حرفه‌ای",
    description:
      "به منابع و محصولات دیجیتال مورد نیازت سریع‌تر و ساده‌تر دسترسی داشته باش.",
    primaryAction: "مشاهده محصولات",
    secondaryAction: "کاوش محتوا",
    badge: "جدید",
    background: "#f8eac9",
    character: "/images/banners/character3.png",
  },
];

export default function Hero(_props: HeroProps) {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <section
      className="w-full px-4 pt-0 -mt-1 md:mt-0 md:px-6 md:pt-3 lg:pt-4"
      dir="rtl"
    >
      <div className="relative mx-auto w-full max-w-360 overflow-hidden rounded-[28px] shadow-cu max-md:rounded-[20px]">
        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={5000}
          arrows={false}
          infinite
          dots={{ className: "heroSliderDots" }}
          draggable
          swipeToSlide
          rtl
        >
          {slides.map((slide) => (
            <div key={slide.id} className="cursor-grab active:cursor-grabbing">
              <div
                className="relative h-[60vh] overflow-hidden rounded-[28px] max-md:h-60 min-[768px]:max-[1199px]:h-[48vh] max-md:rounded-[20px]"
                style={{ backgroundColor: slide.background }}
              >
                <img
                  src={slide.character}
                  alt=""
                  aria-hidden="true"
                  className="absolute bottom-0 left-[4%] z-1 h-[92%] w-auto max-w-[48%] object-contain object-bottom max-md:left-[-3%] max-md:h-[96%] max-md:max-w-[55%] sm:left-[2%] sm:h-[94%] sm:max-w-[52%] md:left-[4%] md:h-[92%] md:max-w-[48%]"
                />

                <div className="absolute inset-0 z-2 bg-linear-to-l from-[#00000035] via-[#00000000] to-transparent max-md:from-[#00000045] max-md:via-[#00000005]" />

                <div className="absolute inset-y-0 right-0 z-10 flex w-[54%] select-none items-center max-[449px]:w-[68%] min-[450px]:max-[767px]:w-[76%] min-[768px]:max-[1199px]:w-[60%]">
                  <div className="w-full max-w-[700px] px-6 py-8 text-right [direction:rtl] sm:px-8 md:px-10 lg:px-12 max-md:px-3 max-md:py-5 min-[450px]:max-[767px]:pr-5! min-[450px]:max-[767px]:pl-0! min-[450px]:max-[767px]:py-5! min-[640px]:max-[767px]:py-4! min-[768px]:max-[1199px]:px-6 min-[768px]:max-[1199px]:py-4">
                    <span className="mb-3 inline-flex cursor-default rounded-full bg-black/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md max-md:mb-2 max-md:px-3 max-md:py-1 max-md:text-[10px] min-[640px]:max-[767px]:mb-1! min-[640px]:max-[767px]:px-2.5! min-[640px]:max-[767px]:py-0.5! min-[640px]:max-[767px]:text-[9px]!">
                      {slide.badge}
                    </span>

                    <span className="mb-3 block text-sm font-medium text-black/55 max-md:mb-2 max-md:text-[11px] min-[640px]:max-[767px]:mb-1! min-[640px]:max-[767px]:text-[10px]! min-[768px]:max-[1199px]:mb-2 min-[768px]:max-[1199px]:text-[13px]">
                      {slide.eyebrow}
                    </span>

                    <h1 className="mb-4 max-w-[680px] whitespace-nowrap text-2xl font-bold leading-normal text-slate-900 sm:text-3xl md:text-4xl lg:text-[40px] max-md:mb-2 max-md:max-w-[230px] max-md:whitespace-normal max-md:text-[19px] max-md:leading-[1.45] min-[450px]:max-[767px]:max-w-full! min-[450px]:max-[767px]:text-[20px]! min-[640px]:max-[767px]:mb-2! min-[640px]:max-[767px]:text-[18px]! min-[640px]:max-[767px]:leading-[1.35]! min-[768px]:max-[1199px]:mb-3 min-[768px]:max-[1199px]:max-w-[500px] min-[768px]:max-[1199px]:whitespace-normal min-[768px]:max-[1199px]:text-[30px] min-[768px]:max-[1199px]:leading-[1.4]">
                      {slide.title}
                    </h1>

                    <p className="mb-7 max-w-[620px] text-sm leading-7 text-slate-700 sm:text-base max-md:mb-4 max-md:max-w-[240px] max-md:text-[8px] max-md:leading-6 min-[450px]:max-[767px]:max-w-full! min-[450px]:max-[767px]:text-[11px]! min-[640px]:max-[767px]:mb-3! min-[640px]:max-[767px]:max-w-[520px]! min-[640px]:max-[767px]:text-[9px]! min-[640px]:max-[767px]:leading-4! min-[768px]:max-[1199px]:mb-5 min-[768px]:max-[1199px]:max-w-[500px] min-[768px]:max-[1199px]:text-[13px] min-[768px]:max-[1199px]:leading-6">
                      {slide.description}
                    </p>

                    <div className="flex flex-nowrap justify-start gap-2 max-md:gap-1.5 min-[640px]:max-[767px]:gap-2.5! min-[768px]:max-[1199px]:gap-2">
                      <Button
                        type="primary"
                        size="large"
                        href="/contents"
                        className="cursor-pointer rounded-xl max-md:h-6! max-md:rounded-md! max-md:px-2! max-md:text-[9px]! min-[640px]:max-[767px]:h-9! min-[640px]:max-[767px]:rounded-lg! min-[640px]:max-[767px]:px-4! min-[640px]:max-[767px]:text-[11px]! min-[768px]:max-[1199px]:h-9! min-[768px]:max-[1199px]:rounded-lg! min-[768px]:max-[1199px]:px-3! min-[768px]:max-[1199px]:text-[12px]!"
                      >
                        {slide.primaryAction}
                      </Button>

                      <Button
                        size="large"
                        href="/contents"
                        className="cursor-pointer rounded-xl border-black/15 bg-black/5 text-slate-800 backdrop-blur-md hover:bg-black/10 hover:text-slate-900 max-md:h-6! max-md:rounded-md! max-md:px-2! max-md:text-[9px]! min-[640px]:max-[767px]:h-9! min-[640px]:max-[767px]:rounded-lg! min-[640px]:max-[767px]:px-4! min-[640px]:max-[767px]:text-[11px]! min-[768px]:max-[1199px]:h-9! min-[768px]:max-[1199px]:rounded-lg! min-[768px]:max-[1199px]:px-3! min-[768px]:max-[1199px]:text-[12px]!"
                      >
                        {slide.secondaryAction}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="absolute bottom-6 left-6 z-20 hidden items-center gap-2 md:flex">
          <Button
            shape="circle"
            icon={<ArrowRightOutlined />}
            className="heroSliderControl cursor-pointer"
            onClick={() => carouselRef.current?.prev()}
          />
          <Button
            shape="circle"
            icon={<ArrowLeftOutlined />}
            className="heroSliderControl cursor-pointer"
            onClick={() => carouselRef.current?.next()}
          />
        </div>
      </div>
    </section>
  );
}
