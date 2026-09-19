"use client";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Col, Row } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";

import ContentCard from "./ContentCard";
import { contents } from "./Contents.data";

const contentGroups = Array.from(
  { length: Math.ceil(contents.length / 4) },
  (_, index) => contents.slice(index * 4, index * 4 + 4),
);

export default function PopularContents() {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <section
      className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-6"
      dir="rtl"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            محتواهای محبوب
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
                    <ContentCard content={content} />
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
