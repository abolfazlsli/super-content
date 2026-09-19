"use client";

import { Download, FileText, Star } from "lucide-react";

import ContentCardCover, { getContentVisual } from "./ContentCardCover";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price);

const formatNumber = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

interface ContentCardProps {
  content: {
    id: string | number;
    type: string;
    title: string;
    author: string;
    rating: number;
    reviews: number;
    pages: number;
    downloads: number;
    price: number;
    discount: number;
    originalPrice: number;
  };
}

export default function ContentCard({ content }: ContentCardProps) {
  const visual = getContentVisual(content.type);

  return (
    <article
      dir="rtl"
      className={`group h-full cursor-pointer overflow-hidden rounded-[20px] border bg-white text-right transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)] ${visual.border}`}
    >
      <ContentCardCover type={content.type} title={content.title} />

      <div className="p-4">
        <div className="mb-3 flex items-center justify-start">
          <span
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-bold ${visual.badgeBackground} ${visual.badgeColor}`}
          >
            <span className="text-[13px]">{visual.icon}</span>
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
          <span className="font-bold text-amber-500">{content.rating}</span>

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
  );
}