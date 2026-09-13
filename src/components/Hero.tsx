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
    image: "/images/banners/banner1.jpg",
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
    image: "/images/banners/banner2.jpg",
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
    image: "/images/banners/banner3.jpg",
  },
];

export default function Hero(_props: HeroProps) {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <section className="w-full px-4 py-4 md:px-6" dir="rtl">
      {" "}
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[28px]">
        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={5000}
          arrows={false}
          infinite
          dots={{ className: "heroSliderDots" }}
          draggable
          swipeToSlide
        >
          {slides.map((slide) => (
            <div key={slide.id} className="cursor-grab active:cursor-grabbing">
              {" "}
              <div className="relative h-[260px] overflow-hidden rounded-[28px] sm:h-[320px] md:h-[400px] lg:h-[460px]">
                {" "}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full -scale-x-100 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/30 to-transparent" />
                <div className="absolute inset-y-0 right-0 z-10 flex w-[45%] select-none items-center">
                  <div className="w-full px-6 py-8 text-right text-white [direction:rtl] sm:px-8 md:px-10 lg:px-12">
                    <span className="mb-3 inline-flex cursor-default rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
                      {slide.badge}
                    </span>

                    <span className="mb-3 block text-sm font-medium text-white/80">
                      {slide.eyebrow}
                    </span>

                    <h1 className="mb-4 text-2xl font-bold leading-[1.5] sm:text-3xl md:text-4xl lg:text-[40px]">
                      {slide.title}
                    </h1>

                    <p className="mb-7 max-w-[500px] text-sm leading-7 text-white/85 sm:text-base">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap justify-start gap-3">
                      <Button
                        type="primary"
                        size="large"
                        className="cursor-pointer rounded-xl"
                      >
                        {slide.primaryAction}
                      </Button>

                      <Button
                        size="large"
                        className="cursor-pointer rounded-xl border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
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
