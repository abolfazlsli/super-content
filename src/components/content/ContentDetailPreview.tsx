"use client";

import { BookOutlined, FileTextOutlined } from "@ant-design/icons";

import { getContentVisual } from "./ContentCardCover";

interface ContentDetail {
  id: string;
  type: string;
  title: string;
  description: string;
  author: string;
  subject: string;
  grade: string;
  category: string;
  pages: number;
  downloads: number;
  reviews: number;
  rating: number;
  price: number;
  originalPrice: number;
  discount: number;
  updatedAt: string;
  format: string;
  size: string;
  includes: string[];
  bannerUrl?: string;
}

interface ContentDetailPreviewProps {
  content: ContentDetail;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export default function ContentDetailPreview({
  content,
}: ContentDetailPreviewProps) {
  const visual = getContentVisual(content.type);

  return (
    <div
      className={`relative h-full min-h-[360px] overflow-hidden rounded-[28px] border ${visual.border} ${visual.background} sm:min-h-[430px] lg:min-h-0`}
    >
      <div
        className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${visual.accent}`}
      />

      <div
        className={`absolute -bottom-24 -left-20 h-72 w-72 rounded-full ${visual.accent}`}
      />

      <div
        className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full ${visual.glow} blur-3xl`}
      />

      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_1px)] [background-size:22px_22px] text-slate-900" />

      <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3 sm:inset-x-7 sm:top-7 lg:top-5">
        <span
          className={`cursor-default rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-[10px] font-bold shadow-sm backdrop-blur-md ${visual.badgeColor}`}
        >
          {visual.label}
        </span>

        <span className="cursor-default rounded-full bg-white/60 px-3 py-1.5 text-[10px] font-medium text-slate-500 shadow-sm backdrop-blur-md">
          محتوای آموزشی
        </span>
      </div>

      <div className="relative flex min-h-[360px] items-center justify-center px-6 pb-7 pt-20 sm:absolute sm:inset-x-6 sm:bottom-10 sm:top-24 sm:min-h-0 sm:px-0 sm:pb-0 sm:pt-0 lg:bottom-7 lg:top-20">
        <div className="relative w-full max-w-[360px]">
          <div className="absolute -inset-5 rounded-[34px] bg-white/25 blur-xl" />

          <div className="relative cursor-default select-none overflow-hidden rounded-[24px] border border-white/80 bg-white/75 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:px-7 sm:pt-5 sm:pb-1 lg:p-5">
            {" "}
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/70 pb-3">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${visual.iconBackground} ${visual.iconColor}`}
                >
                  <span className="text-lg">{visual.icon}</span>
                </span>

                <div>
                  <p className="text-[9px] font-medium text-slate-400">
                    نوع محتوا
                  </p>

                  <p className="mt-0.5 text-xs font-bold text-slate-700">
                    {content.type}
                  </p>
                </div>
              </div>

              <FileTextOutlined className="text-lg text-slate-300" />
            </div>
            <div className="flex flex-col items-center px-2 py-7 text-center sm:py-10 lg:py-6">
              {content.bannerUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={content.bannerUrl}
                  alt={content.title}
                  className="h-36 w-full rounded-[20px] object-cover shadow-[0_15px_35px_rgba(15,23,42,0.10)] ring-1 ring-white"
                />
              ) : (
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-[26px] ${visual.iconBackground} ${visual.iconColor} shadow-[0_15px_35px_rgba(15,23,42,0.10)] ring-1 ring-white`}
                >
                  <span className="text-[40px]">{visual.icon}</span>
                </div>
              )}

              <h2 className="mt-5 line-clamp-2 text-base font-black leading-7 text-slate-800 sm:text-lg">
                {content.title}
              </h2>

              <p className="mt-2 text-[11px] font-medium text-slate-400">
                {content.grade} · {content.subject}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-slate-200/70 pt-3">
              <div className="text-center">
                <p className="text-[9px] text-slate-400">صفحه</p>

                <p className="mt-1 text-xs font-bold text-slate-700">
                  {formatNumber(content.pages)}
                </p>
              </div>

              <div className="border-x border-slate-200/70 text-center">
                <p className="text-[9px] text-slate-400">دانلود</p>

                <p className="mt-1 text-xs font-bold text-slate-700">
                  {formatNumber(content.downloads)}
                </p>
              </div>

              <div className="text-center">
                <p className="text-[9px] text-slate-400">فرمت</p>

                <p className="mt-1 text-xs font-bold text-slate-700">
                  {content.format}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 hidden cursor-default select-none items-center gap-2 rounded-xl bg-slate-900/80 px-3 py-2 text-[10px] font-medium text-white shadow-lg backdrop-blur-md sm:flex">
        <BookOutlined />
        پیش‌نمایش محتوا
      </div>
    </div>
  );
}
