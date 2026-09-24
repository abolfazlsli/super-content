import {
  CalendarOutlined,
  EyeOutlined,
  FileTextOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface ContentsCardProps {
  title: string;
  description?: string;
  type: string;
  subject?: string;
  base?: string;
  author?: string;
  updatedAt?: string;
  views?: number;
  href?: string;
}

export default function ContentsCard({
  title,
  description,
  type,
  subject,
  base,
  author,
  updatedAt,
  views = 0,
  href = "#",
}: ContentsCardProps) {
  return (
    <a
      href={href}
      dir="rtl"
      className="group block rounded-2xl border border-(--border) bg-white p-3.5 transition-all duration-200 hover:border-(--border-hover) hover:bg-[#F4FAFF] hover:shadow-cu sm:p-4 md:p-5"
    >
      <div className="flex gap-3 sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--primary-light) text-lg text-(--primary) transition-colors duration-200 group-hover:bg-[#DFF2FF] group-hover:text-[#0878DE] sm:h-14 sm:w-14 sm:rounded-2xl sm:text-xl">
          <FileTextOutlined />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-1.5 sm:mb-2 sm:gap-2">
            <span className="rounded-lg bg-(--primary-light) px-2 py-1 text-[9px] font-bold text-(--primary) transition-colors duration-200 group-hover:bg-[#DFF2FF] group-hover:text-[#0878DE] sm:px-2.5 sm:text-[10px]">
              {type}
            </span>

            {subject && (
              <span className="max-w-[42%] truncate rounded-lg bg-slate-50 px-2 py-1 text-[9px] font-medium text-(--muted) transition-colors duration-200 group-hover:bg-[#EAF5FF] group-hover:text-[#4B7395] sm:px-2.5 sm:text-[10px]">
                {subject}
              </span>
            )}

            {base && (
              <span className="max-w-[42%] truncate rounded-lg bg-slate-50 px-2 py-1 text-[9px] font-medium text-(--muted) transition-colors duration-200 group-hover:bg-[#EAF5FF] group-hover:text-[#4B7395] sm:px-2.5 sm:text-[10px]">
                {base}
              </span>
            )}
          </div>

          <h3 className="line-clamp-2 text-[13px] font-black leading-6 text-(--text) transition-colors group-hover:text-(--primary) sm:text-sm sm:leading-7 md:text-[15px]">
            {title}
          </h3>

          {description && (
            <p className="mt-1 line-clamp-2 text-[10px] leading-5 text-(--muted) sm:mt-1.5 sm:text-xs sm:leading-6">
              {description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-(--border) pt-2.5 text-[9px] font-medium text-(--muted) sm:mt-4 sm:gap-x-4 sm:gap-y-2 sm:pt-3 sm:text-[10px]">
            {author && (
              <span className="flex min-w-0 items-center gap-1.5">
                <UserOutlined />
                <span className="max-w-[120px] truncate">{author}</span>
              </span>
            )}

            {updatedAt && (
              <span className="flex items-center gap-1.5">
                <CalendarOutlined />
                {updatedAt}
              </span>
            )}

            <span className="flex items-center gap-1.5">
              <EyeOutlined />
              {new Intl.NumberFormat("fa-IR").format(views)}
              بازدید
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
