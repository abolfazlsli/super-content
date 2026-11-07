"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import ContentsFilters from "../../../src/components/contents-page/ContentFilters";
import ContentsHeader from "../../../src/components/contents-page/ContentsHeader";
import ContentsList, {
  type ContentsListItem,
} from "../../../src/components/contents-page/ContentsList";
import ContentsPagination from "../../../src/components/contents-page/ContentsPagination";

import {
  getContents,
  mapEntry,
  type ContentItem,
} from "../../../src/services/contents";

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
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    setSort(searchParams.get("sort") ?? "");
    setBase(searchParams.get("base") ?? "");
    setLevel(searchParams.get("level") ?? "");
    setSubject(searchParams.get("subject") ?? "");
    setContentType(searchParams.get("type") ?? "");
    setQuery(searchParams.get("q") ?? "");
    setCurrentPage(1);
  }, [searchParams]);

  const updateFilterQuery = (
    key: "type" | "base" | "level" | "subject" | "sort" | "q",
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

  const [contents, setContents] = useState<ContentItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let ignore = false;

    // شناسه‌ها مستقیم به بکند میرن ؛ پایه انتخاب شده باشه مقطع لازم نیست
    getContents({
      offset: (currentPage - 1) * pageSize,
      size: pageSize,
      categories: [level || base, subject, contentType].filter(Boolean),
      search: query ? [query] : [],
      sort: sort as "newest" | "best" | "most-viewed" | "",
    })
      .then((res) => {
        if (ignore) return;
        setContents(res.result.map(mapEntry));
        setTotal(res.total);
      })
      .catch(() => {
        if (ignore) return;
        setContents([]);
        setTotal(0);
      });

    return () => {
      ignore = true;
    };
  }, [base, level, subject, contentType, query, sort, currentPage, pageSize]);

  const filteredContents = useMemo(
    () =>
      contents.map(
        (item): ContentsListItem => ({
          id: item.id,
          title: item.title,
          description: item.description,
          type: item.type,
          subject: item.subject,
          base: item.base,
          author: item.author,
          updatedAt: item.updatedAt,
          views: item.likes,
          price: item.price > 0 ? item.price : undefined,
          href: item.href,
        }),
      ),
    [contents],
  );

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
    setQuery("");
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams.toString());

    params.delete("type");
    params.delete("base");
    params.delete("level");
    params.delete("subject");
    params.delete("sort");
    params.delete("q");

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

      // دراپ‌داون‌ها و مودال‌های antd (خارج از صفحه رندر میشن) اسکرول خودشون رو دارن
      if (
        target.closest(
          ".ant-select-dropdown, .ant-dropdown, .ant-modal-wrap, .ant-drawer, .ant-popover",
        )
      ) {
        return;
      }

      // هر المانی که خودش در این جهت قابل اسکروله (مثل پنل فیلترها) اسکرول خودش رو انجام بده
      for (
        let element: HTMLElement | null = target;
        element && element !== document.body;
        element = element.parentElement
      ) {
        const { overflowY } = window.getComputedStyle(element);
        const scrollable =
          (overflowY === "auto" || overflowY === "scroll") &&
          element.scrollHeight > element.clientHeight;

        if (!scrollable) continue;

        const canScroll =
          event.deltaY > 0
            ? element.scrollTop + element.clientHeight < element.scrollHeight - 1
            : element.scrollTop > 0;

        if (canScroll) return;
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
      className="contentsPage relative isolate min-h-screen w-full max-w-full overflow-x-clip bg-[#f7f8f8] lg:h-[calc(100vh-6rem)] lg:min-h-0 lg:overflow-hidden lg:[--contents-side-width:clamp(16rem,18vw,17rem)] lg:[--contents-layout-gap:1.75rem]"
    >
      <ContentsHeader total={total} />

      <div className="mx-auto w-full max-w-full px-4 pb-6 pt-3 sm:px-5 sm:pt-4 md:px-8 md:pb-8 lg:h-[calc(100%-120px)] lg:w-[calc(100%_-_5rem)] lg:max-w-[1392px] lg:px-0 lg:pb-16 lg:pt-[7.5rem] min-[1481px]:lg:w-[calc(100%_-_3rem)]">
        <div className="flex min-h-0 w-full max-w-full flex-col gap-3 lg:grid lg:h-full lg:grid-cols-[var(--contents-side-width)_minmax(0,1fr)] lg:items-start lg:gap-(--contents-layout-gap)">
          <aside
            dir="rtl"
            className="cu-content-scroll order-1 w-full max-w-full min-w-0 lg:order-1 lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:pl-1"
          >
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
              query={query}
              setQuery={(value) => {
                setQuery(value);
                setCurrentPage(1);
                updateFilterQuery("q", value);
              }}
              onReset={resetFilters}
            />
          </aside>

          <section
            dir="rtl"
            className="order-2 flex w-full max-w-full min-w-0 flex-col lg:order-2 lg:h-full"
          >
            <div
              dir="rtl"
              data-contents-scroll
              className="cu-content-scroll min-h-0 w-full max-w-full flex-1 overscroll-contain pb-4 lg:overflow-y-auto lg:pl-2 lg:pr-1 lg:pt-1"
            >
              <ContentsList items={filteredContents} />

              <div className="pt-4">
                <ContentsPagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={total}
                  onChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
