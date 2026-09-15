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
      className="group block rounded-2xl border border-(--border) bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-(--border-hover) hover:shadow-cu md:p-5"
    >
      <div className="flex gap-4">
        <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--primary-light) text-xl text-(--primary) sm:flex">
          <FileTextOutlined />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-(--primary-light) px-2.5 py-1 text-[10px] font-bold text-(--primary)">
              {type}
            </span>

            {subject && (
              <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-(--muted)">
                {subject}
              </span>
            )}

            {base && (
              <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-(--muted)">
                {base}
              </span>
            )}
          </div>

          <h3 className="line-clamp-2 text-sm font-black leading-7 text-(--text) transition-colors group-hover:text-(--primary) md:text-[15px]">
            {title}
          </h3>

          {description && (
            <p className="mt-1.5 line-clamp-2 text-xs leading-6 text-(--muted)">
              {description}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-(--border) pt-3 text-[10px] font-medium text-(--muted)">
            {author && (
              <span className="flex items-center gap-1.5">
                <UserOutlined />
                {author}
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
