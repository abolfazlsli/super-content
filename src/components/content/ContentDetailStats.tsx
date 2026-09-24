"use client";

import {
  BookOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface ContentDetailStatsProps {
  author: string;
  pages: number;
  updatedAt: string;
  format: string;
  size: string;
  subject: string;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

function StatItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="group flex min-w-0 cursor-default select-none items-center gap-3 rounded-xl py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/80">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--primary-light) text-sm text-(--primary) transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-(--primary-hover)">
        {icon}
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium leading-4 text-slate-400 transition-colors duration-200 group-hover:text-(--primary)">
          {label}
        </p>

        <p className="mt-0.5 truncate text-[13px] font-bold leading-5 text-slate-800 transition-colors duration-200 group-hover:text-(--primary)">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ContentDetailStats({
  author,
  pages,
  updatedAt,
  format,
  size,
  subject,
}: ContentDetailStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-1.5 rounded-2xl p-0 sm:grid-cols-3 sm:gap-2">
      <StatItem icon={<UserOutlined />} label="تهیه‌کننده" value={author} />

      <StatItem
        icon={<FileTextOutlined />}
        label="تعداد صفحات"
        value={`${formatNumber(pages)} صفحه`}
      />

      <StatItem
        icon={<ClockCircleOutlined />}
        label="آخرین بروزرسانی"
        value={updatedAt}
      />

      <StatItem icon={<FileTextOutlined />} label="فرمت فایل" value={format} />

      <StatItem icon={<InfoCircleOutlined />} label="حجم فایل" value={size} />

      <StatItem icon={<BookOutlined />} label="موضوع" value={subject} />
    </div>
  );
}
