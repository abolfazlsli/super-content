"use client";

import { PlayCircle } from "lucide-react";
import { Tag } from "antd";

interface CourseCardCoverProps {
  image: string;
  title: string;
  badge: string;
}

export default function CourseCardCover({
  image,
  title,
  badge,
}: CourseCardCoverProps) {
  return (
    <div className="relative aspect-video overflow-hidden bg-slate-100">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <Tag className="absolute! right-3! top-3! m-0! border-0! bg-white/95! px-2.5! py-1! text-[11px]! font-bold! text-slate-800! shadow-sm!">
        {badge}
      </Tag>

      <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-[11px] font-medium text-white">
        <PlayCircle size={13} />
        مشاهده دوره
      </span>
    </div>
  );
}
