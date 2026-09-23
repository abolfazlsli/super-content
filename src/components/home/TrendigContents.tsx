"use client";

import { Button, Carousel, Col, Row } from "antd";

import type { CarouselRef } from "antd/es/carousel";

import { useRef } from "react";

import CarouselNavigation from "../common/CarouselNavigation";

import ContentCard from "../../content/ContentCard";

import { contents } from "../../content/Contents.data";

const contentGroups = Array.from(
  { length: Math.ceil(contents.length / 4) },
  (_, index) => contents.slice(index * 4, index * 4 + 4),
);

export default function TrendingContents() {
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
            محتواهای پرطرفدار
          </h2>

          <p className="mt-2 hidden text-sm text-slate-500 md:block">
            محتواهایی که این روزها بیشتر از همه مورد توجه کاربران هستند
          </p>
        </div>

        <Button
          type="link"
          className="px-0! text-xs! font-semibold! text-(--primary)! md:hidden!"
        >
          مشاهده همه محتواها
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
          previousLabel="محتوای قبلی"
          nextLabel="محتوای بعدی"
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
          {contents.map((content) => (
            <div key={content.id} className="w-full">
              <ContentCard content={content} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="relative hidden md:block">
        <CarouselNavigation
          carouselRef={desktopCarouselRef}
          previousLabel="محتواهای قبلی"
          nextLabel="محتواهای بعدی"
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
          {contentGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <Row gutter={[16, 16]}>
                {group.map((content) => (
                  <Col key={content.id} xs={24} sm={12} lg={6}>
                    <ContentCard content={content} />
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
