"use client";

import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  DownloadOutlined,
  FileTextOutlined,
  HeartFilled,
  HeartOutlined,
  HomeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Modal, Skeleton, message } from "antd";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ContentDetailPreview from "../../../../src/components/content/ContentDetailPreview";
import ContentDetailRating from "../../../../src/components/content/ContentDetailRating";
import ContentDetailStats from "../../../../src/components/content/ContentDetailStats";
import RelatedContentCard from "../../../../src/components/content/RelatedContentCard";
import ResponsiveCarousel from "../../../../src/components/common/ResponsiveCarousel";
import { getContentVisual } from "../../../../src/components/content/ContentCardCover";
import {
  getContentById,
  getContents,
  mapEntry,
  type ContentFile,
  type ContentItem,
} from "../../../../src/services/contents";
import {
  getEntryWithFiles,
  getSavedEntriesIds,
  toggleSaveEntry,
} from "../../../../src/services/users";
import { getCookie } from "../../../../src/services/cookie";

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

function formatNumber(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

function fileFormat(files: ContentFile[]) {
  const extension = files[0]?.name.split(".").pop();
  return extension && extension !== files[0]?.name
    ? extension.toUpperCase()
    : "-";
}

function createContentDetail(item: ContentItem): ContentDetail {
  return {
    id: item.id,
    type: item.type,
    title: item.title,
    description:
      item.description ||
      `محتوای ${item.type} ${item.subject} که برای یادگیری، تمرین و مرور تهیه شده است.`,
    author: item.author || "-",
    subject: item.subject || "-",
    grade: item.base || item.subject || "-",
    category: item.type,
    pages: item.files.length + item.hiddenFilesCount,
    downloads: item.likes,
    reviews: 0,
    rating: 0,
    price: item.price,
    originalPrice: 0,
    discount: 0,
    updatedAt: item.updatedAt || "-",
    format: fileFormat(item.files),
    size: "-",
    includes: item.details.length
      ? item.details.map((detail) => `${detail.label}: ${detail.value}`)
      : (includesByCategory[item.type] ?? [
          "محتوای آموزشی کاربردی",
          "پوشش مباحث اصلی",
          "مناسب مطالعه و تمرین",
          "قابل استفاده برای مرور",
        ]),
    bannerUrl: item.bannerUrl,
  };
}

export default function ContentDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [item, setItem] = useState<ContentItem | null>(null);
  const [relatedContents, setRelatedContents] = useState<ContentDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [files, setFiles] = useState<ContentFile[] | null>(null);

  const isLoggedIn = () => !!getCookie("acsess_token");

  useEffect(() => {
    let ignore = false;

    setLoading(true);
    setFiles(null);

    getContentById(params.id).then((entry) => {
      if (ignore) return;

      const mapped = entry ? mapEntry(entry) : null;
      setItem(mapped);
      setLoading(false);

      if (!mapped) return;

      // محتوای مرتبط : هم‌درس (یا هم‌پایه اگه درس نداشت)
      const related =
        mapped.categories.find(
          (category) => !category.group?.kind || category.group.kind === "subject",
        ) ?? mapped.categories.find((category) => category.group?.kind === "grade");

      getContents({
        size: 9,
        categories: related ? [related.id] : [],
      })
        .then((res) => {
          if (ignore) return;
          setRelatedContents(
            res.result
              .filter((related) => related.id !== mapped.id)
              .slice(0, 8)
              .map((related) => createContentDetail(mapEntry(related))),
          );
        })
        .catch(() => setRelatedContents([]));
    });

    if (isLoggedIn()) {
      getSavedEntriesIds().then((res) => {
        if (!ignore && res.sucsess) {
          setSaved(res.data.data.result.includes(params.id));
        }
      });
    }

    return () => {
      ignore = true;
    };
  }, [params.id]);

  const requireLogin = () => {
    message.info("برای این کار ابتدا وارد شوید");
    router.push("/login");
  };

  const handleToggleSave = async () => {
    if (!isLoggedIn()) return requireLogin();

    setSaving(true);
    const res = await toggleSaveEntry(params.id);
    setSaving(false);

    if (res.sucsess) {
      setSaved(res.data.data.result.saved);
      message.success(
        res.data.data.result.saved
          ? "به علاقه‌مندی‌ها اضافه شد"
          : "از علاقه‌مندی‌ها حذف شد",
      );
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      message.success("لینک کپی شد");
    } catch {
      message.error("کپی لینک انجام نشد");
    }
  };

  const handleDownload = async () => {
    if (!item) return;

    // محتوای رایگان: فایل‌ها در خروجی عمومی هستن
    if (item.entryType === "free") {
      setFiles(item.files);
      return;
    }

    if (!isLoggedIn()) return requireLogin();

    setDownloading(true);
    const res = await getEntryWithFiles(item.id);
    setDownloading(false);

    if (res.sucsess) {
      setFiles(mapEntry(res.data.data.result).files);
      return;
    }

    const status = (res.data as any)?.response?.status;
    if (status === 403) {
      message.warning("برای دسترسی به این محتوا باید آن را خریداری کنید");
    } else if (status === 401) {
      requireLogin();
    } else {
      message.error("دریافت فایل‌ها انجام نشد");
    }
  };

  if (loading) {
    return (
      <main dir="rtl" className="min-h-screen bg-[#f7f8f8] pb-20 md:pb-0">
        <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1392px] py-8 md:w-[calc(100%-5rem)]">
          <Skeleton active paragraph={{ rows: 10 }} />
        </div>
      </main>
    );
  }

  if (!item) {
    return (
      <main dir="rtl" className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[#f7f8f8]">
        <h1 className="text-lg font-black text-slate-800">محتوا پیدا نشد</h1>
        <Link href="/contents" className="text-sm font-bold text-(--primary)">
          بازگشت به محتواها
        </Link>
      </main>
    );
  }

  const content = createContentDetail(item);
  const visual = getContentVisual(content.type);
  const hasDiscount = content.discount > 0;
  const isFree = content.price <= 0;

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
                      onClick={handleDownload}
                      disabled={downloading}
                      className="flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--primary) px-4 text-xs font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(37,99,235,0.22)]"
                    >
                      <DownloadOutlined />
                      {downloading ? "در حال دریافت..." : "دریافت محتوا"}
                    </button>

                    <button
                      type="button"
                      aria-label="افزودن به علاقه‌مندی‌ها"
                      onClick={handleToggleSave}
                      disabled={saving}
                      className={`flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border bg-white transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 ${saved ? "border-rose-200 text-rose-500" : "border-slate-200 text-slate-500"}`}
                    >
                      {saved ? <HeartFilled /> : <HeartOutlined />}
                    </button>

                    <button
                      type="button"
                      aria-label="اشتراک‌گذاری"
                      onClick={handleShare}
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

      <Modal
        open={files !== null}
        onCancel={() => setFiles(null)}
        footer={null}
        title="فایل‌های محتوا"
      >
        {files && files.length ? (
          <div className="flex flex-col gap-2">
            {files.map((file) => (
              <a
                key={file.id}
                href={file.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3 text-xs font-bold text-slate-700 transition-colors hover:border-(--primary) hover:text-(--primary)"
              >
                <span className="truncate">{file.fieldName}</span>
                <span className="flex shrink-0 items-center gap-1.5 text-(--primary)">
                  <DownloadOutlined />
                  {file.name}
                </span>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500">فایلی برای این محتوا ثبت نشده است.</p>
        )}
      </Modal>
    </main>
  );
}
