"use client";

import { Download, FileText, Star } from "lucide-react";

import ContentCardCover, { getContentVisual } from "./ContentCardCover";
import ContentCardPrice from "./ContentCardPrice";

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

const ratingStars = Array.from({ length: 5 });

export default function ContentCard({ content }: ContentCardProps) {
  const visual = getContentVisual(content.type);

  return (
    <article
      dir="rtl"
      className={`group flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-[20px] border border-slate-200/80 bg-white text-right transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_1.125rem_2.8125rem_rgba(15,23,42,0.11)] ${visual.border}`}
    >
      <ContentCardCover type={content.type} title={content.title} />

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex h-7 shrink-0 items-center justify-start">
          <span
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-bold ${visual.badgeBackground} ${visual.badgeColor}`}
          >
            <span className="text-[13px]">{visual.icon}</span>
            {content.type}
          </span>
        </div>

        <h3 className="h-12 shrink-0 overflow-hidden text-right text-sm font-bold leading-6 text-slate-900 transition-colors group-hover:text-(--primary)">
          {content.title}
        </h3>

        <p className="mt-2 h-4 shrink-0 truncate text-right text-xs text-slate-500">
          {content.author}
        </p>

        <div className="mt-3 flex h-5 shrink-0 items-center justify-start gap-2 text-xs">
          <span className="font-bold text-amber-500">
            {formatNumber(content.rating)}
          </span>

          <span className="flex items-center gap-0.5 text-amber-400">
            {ratingStars.map((_, index) => (
              <Star
                key={index}
                size={13}
                fill="currentColor"
              />
            ))}
          </span>

          <span className="text-slate-400">
            ({formatNumber(content.reviews)})
          </span>
        </div>

        <div className="my-3 flex h-4 shrink-0 items-center justify-start gap-4 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <FileText size={14} />
            {formatNumber(content.pages)} صفحه
          </span>

          <span className="flex items-center gap-1">
            <Download size={14} />
            {formatNumber(content.downloads)}
          </span>
        </div>

        <ContentCardPrice
          price={content.price}
          discount={content.discount}
          originalPrice={content.originalPrice}
        />
      </div>
    </article>
  );
}
