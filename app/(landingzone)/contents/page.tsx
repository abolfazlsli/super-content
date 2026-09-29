"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import ContentsFilters from "../../../src/components/contents-page/ContentFilters";

import ContentsHeader from "../../../src/components/contents-page/ContentsHeader";

import ContentsList, {
  type ContentsListItem,
} from "../../../src/components/contents-page/ContentsList";

import ContentsPagination from "../../../src/components/contents-page/ContentsPagination";

import { getContents, type ContentEntry } from "../../../src/services/contents";

const subjectLabels: Record<string, string> = {
  math: "ریاضی",
  science: "علوم",
  persian: "فارسی",
  social: "مطالعات اجتماعی",
  arabic: "عربی",
  english: "زبان انگلیسی",
  religion: "دینی",
};

const contentTypeLabels: Record<string, string> = {
  question: "نمونه سؤال",
  "question-bank": "گنجینه سؤال",
  lesson: "درسنامه",
  course: "دوره آموزشی",
  notes: "جزوه",
  exam: "آزمون",
  exercise: "تمرین",
  video: "ویدئو",
  qa: "پرسش و پاسخ",
};

function getFieldValue(
  entry: ContentEntry,
  names: string[],
): string | undefined {
  const field = entry.data?.find((item) =>
    names.some(
      (name) =>
        item.fild?.name?.trim().toLowerCase() === name.toLowerCase() ||
        item.placement?.trim().toLowerCase() === name.toLowerCase(),
    ),
  );

  return field?.value || undefined;
}

function mapContent(entry: ContentEntry): ContentsListItem {
  const title =
    getFieldValue(entry, ["title", "عنوان", "name", "نام"]) ??
    entry.data?.find((item) => item.value)?.value ??
    "محتوای آموزشی";

  const description = getFieldValue(entry, [
    "description",
    "توضیحات",
    "توضیح",
    "caption",
    "شرح",
  ]);

  const type =
    getFieldValue(entry, ["type", "نوع", "content_type", "نوع محتوا"]) ??
    entry.entry_type ??
    "محتوا";

  const subject =
    getFieldValue(entry, ["subject", "درس", "ماده"]) ??
    entry.categorys?.find((category) =>
      Object.values(subjectLabels).includes(category.name),
    )?.name;

  const base = getFieldValue(entry, ["base", "grade", "level", "پایه", "مقطع"]);

  return {
    id: entry.id,
    title,
    description,
    type,
    subject,
    base,
    views: 0,
    href: `/contents/${entry.id}`,
  };
}

export default function ContentsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sort, setSort] = useState(searchParams.get("sort") ?? "");
  const [base, setBase] = useState(searchParams.get("base") ?? "");
  const [level, setLevel] = useState(searchParams.get("level") ?? "");
  const [subject, setSubject] = useState(searchParams.get("subject") ?? "");
  const [contentType, setContentType] = useState(
    searchParams.get("type") ?? "",
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [contents, setContents] = useState<ContentsListItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSort(searchParams.get("sort") ?? "");
    setBase(searchParams.get("base") ?? "");
    setLevel(searchParams.get("level") ?? "");
    setSubject(searchParams.get("subject") ?? "");
    setContentType(searchParams.get("type") ?? "");
    setCurrentPage(1);
  }, [searchParams]);

  const updateFilterQuery = (
    key: "type" | "base" | "level" | "subject" | "sort",
    value: string,
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const query = params.toString();

    router.replace(query ? `/contents?${query}` : "/contents");
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setCurrentPage(1);
    updateFilterQuery("sort", value);
  };

  const handleBaseChange = (value: string) => {
    setBase(value);
    setLevel("");
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("base", value);
    } else {
      params.delete("base");
    }

    params.delete("level");

    const query = params.toString();

    router.replace(query ? `/contents?${query}` : "/contents");
  };

  const handleLevelChange = (value: string) => {
    setLevel(value);
    setCurrentPage(1);
    updateFilterQuery("level", value);
  };

  const handleSubjectChange = (value: string) => {
    setSubject(value);
    setCurrentPage(1);
    updateFilterQuery("subject", value);
  };

  const handleContentTypeChange = (value: string) => {
    setContentType(value);
    setCurrentPage(1);
    updateFilterQuery("type", value);
  };

  useEffect(() => {
    let cancelled = false;

    const loadContents = async () => {
      try {
        setLoading(true);

        const response = await getContents({
          offset: (currentPage - 1) * pageSize,
          size: pageSize,
        });

        if (cancelled) {
          return;
        }

        setContents(response.result.map(mapContent));
        setTotal(response.total);
      } catch {
        if (cancelled) {
          return;
        }

        setContents([]);
        setTotal(0);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadContents();

    return () => {
      cancelled = true;
    };
  }, [currentPage, pageSize]);

  const filteredContents = useMemo(() => {
    const selectedSubject = subjectLabels[subject];
    const selectedType = contentTypeLabels[contentType];

    const filtered = contents.filter((item) => {
      const matchesBase = !base || item.base === base;
      const matchesLevel = !level || item.base === level;
      const matchesSubject = !subject || item.subject === selectedSubject;
      const matchesType = !contentType || item.type === selectedType;

      return matchesBase && matchesLevel && matchesSubject && matchesType;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "best" || sort === "most-viewed") {
        return (b.views ?? 0) - (a.views ?? 0);
      }

      if (sort === "newest") {
        return 0;
      }

      return 0;
    });
  }, [contents, base, level, subject, contentType, sort]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  useEffect(() => {
    setCurrentPage((page) => Math.min(Math.max(page, 1), totalPages));
  }, [totalPages]);

  const resetFilters = () => {
    setSort("");
    setBase("");
    setLevel("");
    setSubject("");
    setContentType("");
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams.toString());

    params.delete("type");
    params.delete("base");
    params.delete("level");
    params.delete("subject");
    params.delete("sort");

    const query = params.toString();

    router.replace(query ? `/contents?${query}` : "/contents");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(Math.min(size, 30));
    setCurrentPage(1);
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth < 1024) {
        return;
      }

      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (target.closest("[data-contents-scroll]")) {
        return;
      }

      const scrollContainer = document.querySelector<HTMLElement>(
        "[data-contents-scroll]",
      );

      if (!scrollContainer) {
        return;
      }

      const maxScroll =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;

      if (maxScroll <= 0) {
        return;
      }

      const nextScrollTop = Math.max(
        0,
        Math.min(maxScroll, scrollContainer.scrollTop + event.deltaY),
      );

      if (nextScrollTop === scrollContainer.scrollTop) {
        return;
      }

      scrollContainer.scrollTop = nextScrollTop;
      event.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main
      dir="rtl"
      className="contentsPage min-h-screen bg-[#f7f8f8] lg:h-screen lg:overflow-hidden lg:[--contents-side-width:clamp(16rem,18vw,17rem)] lg:[--contents-layout-gap:1.75rem]"
    >
      <ContentsHeader total={total} />

      <div className="mx-auto w-[calc(100%-40px)] pb-5 pt-2 md:w-[calc(100%-80px)] md:pb-8 lg:h-[calc(100vh-120px)] lg:w-[calc(100%-80px)] lg:max-w-[1392px] lg:px-0 lg:pb-16 lg:pt-[7.5rem] min-[1481px]:lg:w-[calc(100%-48px)]">
        <div
          dir="ltr"
          className="flex min-h-0 flex-col gap-2 lg:grid lg:h-full lg:grid-cols-[minmax(0,1fr)_var(--contents-side-width)] lg:items-start lg:gap-(--contents-layout-gap)"
        >
          <aside dir="rtl" className="order-1 min-w-0 lg:order-2 lg:h-full">
            <ContentsFilters
              base={base}
              setBase={handleBaseChange}
              level={level}
              setLevel={handleLevelChange}
              subject={subject}
              setSubject={handleSubjectChange}
              contentType={contentType}
              setContentType={handleContentTypeChange}
              sort={sort}
              setSort={handleSortChange}
              onReset={resetFilters}
            />
          </aside>

          <section
            dir="rtl"
            className="order-2 flex min-h-0 min-w-0 flex-col lg:order-1 lg:h-full lg:w-auto"
          >
            <div
              dir="rtl"
              data-contents-scroll
              className="cu-content-scroll min-h-0 flex-1 overscroll-contain px-0 pb-4 pl-1 lg:overflow-y-auto"
            >
              {loading ? (
                <div className="flex min-h-72 items-center justify-center rounded-2xl border border-(--border) bg-white text-sm font-medium text-(--muted)">
                  در حال دریافت محتوا...
                </div>
              ) : (
                <ContentsList items={filteredContents} />
              )}

              <ContentsPagination
                current={currentPage}
                pageSize={pageSize}
                total={total}
                onChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
