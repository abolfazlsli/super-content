"use client";

import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  DownloadOutlined,
  FileTextOutlined,
  HeartOutlined,
  HomeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useParams } from "next/navigation";
import ContentDetailPreview from "../../../../src/components/content/ContentDetailPreview";
import ContentDetailRating from "../../../../src/components/content/ContentDetailRating";
import ContentDetailStats from "../../../../src/components/content/ContentDetailStats";
import RelatedContentCard from "../../../../src/components/content/RelatedContentCard";
import ResponsiveCarousel from "../../../../src/components/common/ResponsiveCarousel";
import { getContentVisual } from "../../../../src/components/content/ContentCardCover";
import { contents as contentsData } from "../../../../src/components/content/Contents.data";

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
}

const includesByCategory: Record<string, string[]> = {
  question: [
    "نمونه سوالات استاندارد",
    "پوشش مباحث اصلی کتاب",
    "سطح‌بندی سوالات",
    "مناسب مرور و جمع‌بندی",
  ],
  "question-bank": [
    "مجموعه سوالات متنوع",
    "سوالات طبقه‌بندی‌شده",
    "پوشش مباحث اصلی",
    "مناسب تمرین و مرور",
  ],
  lesson: [
    "درسنامه کامل و کاربردی",
    "توضیح مفاهیم مهم",
    "نکات امتحانی",
    "مثال‌های آموزشی",
  ],
  course: [
    "آموزش مرحله‌به‌مرحله",
    "ویدئوهای آموزشی",
    "مثال‌های کاربردی",
    "تمرین‌های تکمیلی",
  ],
  notes: [
    "نکات مهم و کاربردی",
    "جمع‌بندی مطالب",
    "مناسب مرور سریع",
    "نکات پرتکرار امتحانی",
  ],
  exam: [
    "آزمون استاندارد",
    "سطح‌بندی سوالات",
    "پوشش مباحث اصلی",
    "مناسب سنجش آمادگی",
  ],
  exercise: [
    "تمرین‌های متنوع",
    "سوالات طبقه‌بندی‌شده",
    "تمرین‌های مفهومی",
    "مناسب تثبیت مطالب",
  ],
  video: [
    "آموزش مفهومی",
    "توضیح مرحله‌به‌مرحله",
    "حل مثال‌های کاربردی",
    "تمرین تکمیلی",
  ],
  qa: [
    "پرسش‌های پرتکرار",
    "پاسخ‌های آموزشی",
    "نکات مهم درسی",
    "مناسب رفع اشکال",
  ],
};

const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

function formatYear(value: number) {
  return new Intl.NumberFormat("fa-IR", {
    useGrouping: false,
  }).format(value);
}

function getUpdatedAt(id: number) {
  const day = 1 + (id % 29);
  const month = 1 + (id % 12);
  const year = 1405;

  return `${formatNumber(day)} ${persianMonths[month - 1]} ${formatYear(year)}`;
}

function createContentDetail(
  item: (typeof contentsData)[number],
): ContentDetail {
  return {
    id: String(item.id),
    type: item.type,
    title: item.title,
    description: `مجموعه‌ای ${item.type.toLowerCase()} از محتوای ${item.subject} ${item.grade} که برای یادگیری، تمرین، مرور و آمادگی بهتر دانش‌آموزان تهیه شده است.`,
    author: item.author,
    subject: item.subject,
    grade: `پایه ${item.grade}`,
    category: item.category,
    pages: item.pages,
    downloads: item.downloads,
    reviews: item.reviews,
    rating: item.rating,
    price: item.price,
    originalPrice: item.originalPrice,
    discount: item.discount,
    updatedAt: getUpdatedAt(item.id),
    format: item.format,
    size: item.size,
    includes: includesByCategory[item.category] ?? [
      "محتوای آموزشی کاربردی",
      "پوشش مباحث اصلی",
      "مناسب مطالعه و تمرین",
      "قابل استفاده برای مرور",
    ],
  };
}

export default function ContentDetailPage() {
  const params = useParams<{ id: string }>();

  const contentItem = contentsData.find(
    (item) => String(item.id) === params.id,
  );

  const content = contentItem
    ? createContentDetail(contentItem)
    : createContentDetail(contentsData[0]);

  const visual = getContentVisual(content.type);
  const hasDiscount = content.discount > 0;
  const isFree = content.price <= 0;

  const relatedContents = contentsData
    .filter(
      (item) =>
        item.id !== Number(content.id) &&
        (item.subject === content.subject ||
          item.grade === content.grade.replace("پایه ", "")),
    )
    .slice(0, 8)
    .map(createContentDetail);

  return (
    <main dir="rtl" className="min-h-screen bg-[#f7f8f8] pb-20 md:pb-0">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1392px] md:w-[calc(100%-5rem)]">
        <nav
          aria-label="مسیر صفحه"
          className="flex items-center gap-1 overflow-x-auto whitespace-nowrap px-3 py-2 text-[11px] font-medium text-slate-400 scrollbar-none sm:gap-1.5 sm:px-2 sm:py-4 sm:text-[14px] lg:overflow-hidden lg:py-2"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-1.5 transition-colors hover:text-(--primary)"
          >
            <HomeOutlined />
            خانه
          </Link>

          <ArrowLeftOutlined className="shrink-0 text-[7px] text-slate-300 sm:text-[8px]" />

          <Link
            href="/contents"
            className="shrink-0 transition-colors hover:text-(--primary)"
          >
            محتواهای آموزشی
          </Link>

          <ArrowLeftOutlined className="shrink-0 text-[7px] text-slate-300 sm:text-[8px]" />

          <span className="shrink-0 cursor-default text-slate-500">
            {content.title}
          </span>
        </nav>

        <div className="lg:grid lg:min-h-[calc(100dvh-11rem)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-[clamp(1.25rem,2vw,2rem)]">
          <section className="grid min-h-0 gap-3 lg:grid-cols-[minmax(0,1.04fr)_minmax(420px,0.96fr)] lg:items-stretch lg:gap-[clamp(0.75rem,1vw,1rem)]">
            <div className="order-1 min-w-0 lg:order-2 lg:min-h-0">
              <ContentDetailPreview content={content} />
            </div>

            <div className="order-2 flex min-w-0 lg:order-1 lg:min-h-0">
              <div className="flex w-full flex-col rounded-[28px] border border-slate-100 bg-white p-5 shadow-cu sm:p-7 lg:p-[clamp(1.25rem,1.8vw,1.75rem)]">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold ${visual.badgeBackground} ${visual.badgeColor}`}
                  >
                    <span className="text-sm">{visual.icon}</span>
                    {visual.label}
                  </span>

                  <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-500">
                    {content.subject}
                  </span>

                  <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-500">
                    {content.grade}
                  </span>
                </div>

                <h1 className="mt-4 text-xl font-black leading-8 tracking-[-0.025em] text-slate-900 sm:text-2xl sm:leading-9 lg:mt-3 lg:text-[25px] lg:leading-[1.55]">
                  {content.title}
                </h1>

                <p className="mt-3 text-xs font-medium leading-6 text-slate-500 sm:text-sm sm:leading-7 lg:mt-2 lg:leading-6">
                  {content.description}
                </p>

                <div className="mt-4 lg:mt-3">
                  <ContentDetailStats
                    author={content.author}
                    pages={content.pages}
                    updatedAt={content.updatedAt}
                    format={content.format}
                    size={content.size}
                    subject={content.subject}
                  />

                  <ContentDetailRating
                    rating={content.rating}
                    reviews={content.reviews}
                    downloads={content.downloads}
                  />
                </div>

                <div className="mt-4 border-t border-slate-100 pt-4 lg:mt-auto lg:pt-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[10px] font-medium text-slate-400">
                        دسترسی به این محتوا
                      </p>

                      {isFree ? (
                        <div className="mt-1 text-xl font-black text-emerald-600">
                          رایگان
                        </div>
                      ) : (
                        <div className="mt-1 flex flex-wrap items-end gap-2">
                          <span className="text-xl font-black text-slate-900">
                            {formatNumber(content.price)} تومان
                          </span>

                          {hasDiscount && (
                            <span className="text-xs text-slate-400 line-through">
                              {formatNumber(content.originalPrice)} تومان
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {hasDiscount && (
                      <span className="w-fit rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-600">
                        {formatNumber(content.discount)}٪ تخفیف
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex gap-2.5">
                    <button
                      type="button"
                      className="flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--primary) px-4 text-xs font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(37,99,235,0.22)]"
                    >
                      <DownloadOutlined />
                      دریافت محتوا
                    </button>

                    <button
                      type="button"
                      aria-label="افزودن به علاقه‌مندی‌ها"
                      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
                    >
                      <HeartOutlined />
                    </button>

                    <button
                      type="button"
                      aria-label="اشتراک‌گذاری"
                      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800"
                    >
                      <ShareAltOutlined />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5 grid gap-4 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] lg:gap-[clamp(1rem,1.8vw,1.75rem)]">
            <div className="min-w-0 rounded-[28px] border border-slate-100 bg-white p-5 shadow-cu sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary-light) text-(--primary)">
                  <FileTextOutlined />
                </span>

                <div>
                  <h2 className="text-sm font-black text-slate-900 sm:text-base">
                    درباره این محتوا
                  </h2>

                  <p className="mt-1 text-[10px] font-medium text-slate-400">
                    اطلاعات و توضیحات تکمیلی
                  </p>
                </div>
              </div>

              <div className="mt-5 text-xs leading-8 text-slate-600 sm:text-sm sm:leading-9">
                <p>{content.description}</p>

                <p className="mt-4">
                  این محتوا با هدف ساده‌تر کردن فرایند یادگیری و مرور مطالب
                  آموزشی تهیه شده و می‌تواند برای مطالعه شخصی، تمرین و آمادگی
                  آزمون مورد استفاده قرار بگیرد.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-100 bg-white p-5 shadow-cu sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary-light) text-(--primary)">
                  <CheckCircleOutlined />
                </span>

                <div>
                  <h2 className="text-sm font-black text-slate-900 sm:text-base">
                    این محتوا شامل
                  </h2>

                  <p className="mt-1 text-[10px] font-medium text-slate-400">
                    موارد موجود در فایل
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {content.includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-xs font-medium leading-6 text-slate-600"
                  >
                    <CheckCircleOutlined className="mt-1 shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="mt-5 rounded-[28px] border border-slate-100 bg-white p-5 shadow-cu sm:p-7 lg:mt-[clamp(1.5rem,2.5vw,2.5rem)]">
          <div className="w-full">
            <div className="flex items-start justify-between gap-4">
              <h2 className="min-w-0 text-sm font-black text-slate-900 sm:text-base">
                محتواهای مرتبط
              </h2>

              <Link
                href="/contents"
                className="flex shrink-0 items-center gap-1.5 whitespace-nowrap pt-0.5 text-[12px] font-bold text-(--primary)"
              >
                مشاهده همه محتواها
                <ArrowLeftOutlined />
              </Link>
            </div>
          </div>

          <div className="mt-5">
            <ResponsiveCarousel
              items={relatedContents}
              getItemKey={(item) => item.id}
              renderItem={(item) => <RelatedContentCard content={item} />}
            />
          </div>
        </section>

        <div className="h-8 sm:h-10 lg:h-16" />
      </div>
    </main>
  );
}
