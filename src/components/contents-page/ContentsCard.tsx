import {
  CalendarOutlined,
  EyeFilled,
  FileTextOutlined,
  StarFilled,
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
  rating?: number;
  reviews?: number;
  price?: number;
  originalPrice?: number;
  discount?: number;
  pages?: number;
  format?: string;
  href?: string;
}

const formatNumber = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

const formatRating = (value: number) =>
  new Intl.NumberFormat("fa-IR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);

const formatPrice = (value: number) =>
  `${new Intl.NumberFormat("fa-IR").format(value)} تومان`;

export default function ContentsCard({
  title,
  description,
  type,
  subject,
  base,
  author,
  updatedAt,
  views = 0,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
  pages,
  format,
  href = "#",
}: ContentsCardProps) {
  const hasRating = typeof rating === "number" && typeof reviews === "number";

  const hasPrice = typeof price === "number";

  const hasDiscount =
    hasPrice &&
    typeof originalPrice === "number" &&
    originalPrice > price &&
    typeof discount === "number" &&
    discount > 0;

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
              <span className="max-w-[32%] truncate rounded-lg bg-slate-50 px-2 py-1 text-[9px] font-medium text-(--muted) transition-colors duration-200 group-hover:bg-[#EAF5FF] group-hover:text-[#4B7395] sm:px-2.5 sm:text-[10px]">
                {subject}
              </span>
            )}

            {base && (
              <span className="max-w-[32%] truncate rounded-lg bg-slate-50 px-2 py-1 text-[9px] font-medium text-(--muted) transition-colors duration-200 group-hover:bg-[#EAF5FF] group-hover:text-[#4B7395] sm:px-2.5 sm:text-[10px]">
                {base}
              </span>
            )}

            {hasRating && (
              <span className="mr-auto inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-[9px] font-bold leading-none text-amber-600 sm:px-2.5 sm:text-[10px]">
                <StarFilled className="!m-0 !inline-block !text-[9px] !leading-none" />
                <span className="!m-0 inline-flex items-center leading-none">
                  {formatRating(rating)}
                </span>
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

          <div className="mt-3 border-t border-(--border) pt-2.5 sm:mt-4 sm:pt-3">
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0 flex flex-1 flex-wrap items-center gap-x-3 gap-y-1.5 text-[9px] font-medium text-(--muted) sm:gap-x-4 sm:gap-y-2 sm:text-[10px]">
                {author && (
                  <span className="flex min-w-0 items-center gap-1.5">
                    <UserOutlined />
                    <span className="max-w-[100px] truncate sm:max-w-[120px]">
                      {author}
                    </span>
                  </span>
                )}

                {updatedAt && (
                  <span className="hidden items-center gap-1.5 sm:flex">
                    <CalendarOutlined />
                    {updatedAt}
                  </span>
                )}

                <span className="flex items-center gap-1.5">
                  <EyeFilled />
                  <span>{formatNumber(views)} بازدید</span>
                </span>

                {hasRating && reviews > 0 && (
                  <span className="hidden items-center gap-1.5 sm:flex">
                    <StarFilled />
                    <span>{formatNumber(reviews)} نظر</span>
                  </span>
                )}

                {pages && (
                  <span className="hidden items-center gap-1.5 md:flex">
                    <FileTextOutlined />
                    <span>{formatNumber(pages)} صفحه</span>
                  </span>
                )}

                {format && (
                  <span className="hidden rounded-md bg-slate-50 px-1.5 py-0.5 font-bold text-slate-500 md:inline-flex">
                    {format}
                  </span>
                )}
              </div>

              {hasPrice && (
                <div className="shrink-0 text-left">
                  {hasDiscount && (
                    <div className="mb-0.5 flex items-center justify-end gap-1.5">
                      <span className="rounded-md bg-[#E8F8EF] px-1.5 py-0.5 text-[8px] font-black text-[#159447] sm:text-[9px]">
                        {formatNumber(discount)}٪ تخفیف
                      </span>

                      <span className="text-[8px] font-medium text-slate-400 line-through sm:text-[9px]">
                        {formatNumber(originalPrice)}
                      </span>
                    </div>
                  )}

                  <div className="whitespace-nowrap text-[11px] font-black text-(--primary) sm:text-xs">
                    {formatPrice(price)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
