"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";

import Link from "next/link";

import { getContentVisual } from "./ContentCardCover";

interface RelatedContent {
  id: string;
  type: string;
  title: string;
  meta: string;
}

interface RelatedContentCardProps {
  content: RelatedContent;
}

export default function RelatedContentCard({
  content,
}: RelatedContentCardProps) {
  const visual = getContentVisual(content.type);

  return (
    <Link
      href={`/contents/${content.id}`}
      className="group flex min-w-0 items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]"
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${visual.iconBackground} ${visual.iconColor}`}
      >
        <span className="text-2xl">{visual.icon}</span>
      </div>

      <div className="min-w-0 flex-1">
        <span className={`text-[10px] font-bold ${visual.badgeColor}`}>
          {visual.label}
        </span>

        <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-slate-800 transition-colors group-hover:text-(--primary)">
          {content.title}
        </h3>

        <p className="mt-1 truncate text-[12px] font-medium text-slate-400">
          {content.meta}
        </p>
      </div>

      <ArrowLeftOutlined className="shrink-0 text-xs text-slate-300 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-(--primary)" />
    </Link>
  );
}
