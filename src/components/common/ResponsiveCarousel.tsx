"use client";

import { Carousel, Col, Row } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";

import CarouselNavigation from "./CarouselNavigation";

interface ResponsiveCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  getItemKey?: (item: T, index: number) => string | number;
}

export default function ResponsiveCarousel<T>({
  items,
  renderItem,
  getItemKey,
}: ResponsiveCarouselProps<T>) {
  const mobileCarouselRef = useRef<CarouselRef>(null);
  const desktopCarouselRef = useRef<CarouselRef>(null);

  const itemGroups: T[][] = [];

  for (let start = 0; start < items.length; start += 4) {
    const remaining = items.length - start;

    if (remaining >= 4) {
      itemGroups.push(items.slice(start, start + 4));
      continue;
    }

    itemGroups.push(items.slice(items.length - 4));
    break;
  }

  return (
    <div className="relative">
      <div className="lg:hidden">
        <CarouselNavigation
          carouselRef={mobileCarouselRef}
          previousLabel="مورد قبلی"
          nextLabel="مورد بعدی"
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
          {items.map((item, index) => (
            <div key={getItemKey?.(item, index) ?? index} className="w-full">
              {renderItem(item)}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="hidden lg:block">
        <CarouselNavigation
          carouselRef={desktopCarouselRef}
          previousLabel="موارد قبلی"
          nextLabel="موارد بعدی"
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
          {itemGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <Row gutter={[16, 16]}>
                {group.map((item, index) => (
                  <Col
                    key={getItemKey?.(item, groupIndex * 4 + index) ?? index}
                    xs={24}
                    sm={12}
                    lg={6}
                  >
                    {renderItem(item)}
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
