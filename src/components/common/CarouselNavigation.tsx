"use client";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { CarouselRef } from "antd/es/carousel";

interface CarouselNavigationProps {
  carouselRef: React.RefObject<CarouselRef | null>;
  previousLabel: string;
  nextLabel: string;
}

export default function CarouselNavigation({
  carouselRef,
  previousLabel,
  nextLabel,
}: CarouselNavigationProps) {
  return (
    <>
      <Button
        type="default"
        shape="circle"
        icon={<ArrowRightOutlined />}
        aria-label={previousLabel}
        className="absolute! right-[-18px]! top-1/2! z-20! h-10! w-10! -translate-y-1/2! border-slate-200! bg-white! shadow-md!"
        onClick={() => carouselRef.current?.next()}
      />

      <Button
        type="default"
        shape="circle"
        icon={<ArrowLeftOutlined />}
        aria-label={nextLabel}
        className="absolute! left-[-18px]! top-1/2! z-20! h-10! w-10! -translate-y-1/2! border-slate-200! bg-white! shadow-md!"
        onClick={() => carouselRef.current?.prev()}
      />
    </>
  );
}
