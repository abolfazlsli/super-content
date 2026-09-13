"use client";

import {
  ArrowRightOutlined,
  HomeOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { Button } from "antd";

import Link from "next/link";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="relative min-h-[calc(100svh-72px)] select-none overflow-hidden bg-[#f7f8f8] px-4 py-10 sm:px-6 md:py-16"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0C89FE]/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#4A3BD0]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/2 top-1/2 h-56 w-56 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38D9F5]/5 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100svh-152px)] w-full max-w-[1440px] items-center justify-center">
        <section className="relative w-full max-w-[820px] overflow-hidden rounded-[28px] border border-(--border) bg-white px-6 py-12 text-center shadow-[0_20px_60px_rgba(45,60,110,0.07)] sm:px-10 md:px-16 md:py-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-(--primary)/30 to-transparent" />

          <div className="pointer-events-none absolute -right-8 top-8 h-20 w-20 rounded-[22px] border border-(--primary)/5 bg-(--primary)/2" />

          <div className="pointer-events-none absolute -bottom-8 left-10 h-24 w-24 rounded-full border border-(--primary-dark)/5" />

          <div className="relative z-10">
            <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-(--primary) to-(--primary-dark) opacity-10 blur-xl" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-[24px] border border-white bg-gradient-to-br from-(--primary) to-(--primary-dark) text-3xl font-black text-white shadow-lg shadow-[#0C89FE]/20">
                404
              </div>

              <span className="absolute -right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-[#38D9F5] text-white shadow-md">
                <SearchOutlined className="text-[11px]" />
              </span>
            </div>

            <span className="mb-3 block text-sm font-bold text-(--primary)">
              صفحه پیدا نشد
            </span>

            <h1 className="text-2xl font-black leading-[1.6] tracking-tight text-(--text) sm:text-3xl md:text-4xl">
              این صفحه دیگر در دسترس نیست
            </h1>

            <p className="mx-auto mt-4 max-w-[540px] text-sm leading-7 text-(--muted) sm:text-base">
              به نظر می‌رسد آدرسی که دنبال آن هستی اشتباه است یا این صفحه حذف
              شده است. می‌توانی از صفحه اصلی دوباره مسیرت را پیدا کنی.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/">
                <Button
                  type="primary"
                  size="large"
                  icon={<HomeOutlined />}
                  className="h-11! cursor-pointer rounded-xl! px-7! font-bold! shadow-md! shadow-[#0C89FE]/15! transition-all! hover:-translate-y-0.5!"
                >
                  بازگشت به خانه
                </Button>
              </Link>

              <Link href="/courses">
                <Button
                  size="large"
                  icon={<ArrowRightOutlined />}
                  className="h-11! cursor-pointer rounded-xl! border-(--border)! bg-white! px-7! font-bold! text-(--text)! transition-all! hover:-translate-y-0.5! hover:border-(--primary)! hover:text-(--primary)!"
                >
                  مشاهده دوره‌ها
                </Button>
              </Link>
            </div>

            <div className="mx-auto mt-10 flex max-w-[500px] items-center justify-center gap-3">
              <span className="h-px flex-1 bg-(--border)" />

              <span className="flex items-center gap-2 text-[11px] font-medium text-(--muted)">
                <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
                محتوای مورد نیازت را پیدا کن
              </span>

              <span className="h-px flex-1 bg-(--border)" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
