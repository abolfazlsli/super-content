"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Header from "../../src/components/layout/Header";
import ContentsFilters from "../../src/components/contents/ContentFilters";
import ContentsHeader from "../../src/components/contents/ContentsHeader";
import ContentsList, {
  type ContentsListItem,
} from "../../src/components/contents/ContentsList";
import ContentsPagination from "../../src/components/contents/ContentsPagination";

type ContentItem = ContentsListItem & {
  baseKey: string;
  level: string;
};

const contents: ContentItem[] = [
  {
    id: "1",
    title: "مجموعه آزمون‌های مداد کاغذی ماهانه ریاضی",
    description:
      "مجموعه‌ای از آزمون‌های استاندارد برای تمرین و ارزیابی دانش‌آموزان.",
    type: "نمونه سؤال",
    subject: "ریاضی",
    base: "دوم دبستان",
    baseKey: "elementary",
    level: "2",
    author: "محتوا پلاس",
    updatedAt: "۲ روز پیش",
    views: 1240,
  },
  {
    id: "2",
    title: "۵ سری نمونه سؤال استاندارد نوبت اول علوم",
    description:
      "نمونه سؤالات طبقه‌بندی‌شده مناسب مرور و آمادگی امتحانات نوبت اول.",
    type: "نمونه سؤال",
    subject: "علوم",
    base: "دوم دبستان",
    baseKey: "elementary",
    level: "2",
    author: "محتوا پلاس",
    updatedAt: "۵ روز پیش",
    views: 982,
  },
  {
    id: "3",
    title: "درسنامه کامل فارسی و نگارش",
    description:
      "درسنامه‌ای خلاصه و کاربردی برای مرور نکات مهم فارسی و نگارش.",
    type: "درسنامه",
    subject: "فارسی",
    base: "دوم دبستان",
    baseKey: "elementary",
    level: "2",
    author: "محتوا پلاس",
    updatedAt: "۱ هفته پیش",
    views: 764,
  },
  {
    id: "4",
    title: "آزمون جامع پایان فصل ریاضی",
    description:
      "آزمون جامع همراه با سوالات متنوع برای سنجش میزان یادگیری.",
    type: "آزمون",
    subject: "ریاضی",
    base: "دوم دبستان",
    baseKey: "elementary",
    level: "2",
    author: "محتوا پلاس",
    updatedAt: "۱ هفته پیش",
    views: 631,
  },
  {
    id: "5",
    title: "جزوه خلاصه مطالعات اجتماعی",
    description:
      "نکات مهم و خلاصه درس‌های مطالعات اجتماعی برای مرور سریع.",
    type: "جزوه",
    subject: "مطالعات اجتماعی",
    base: "سوم دبستان",
    baseKey: "elementary",
    level: "3",
    author: "محتوا پلاس",
    updatedAt: "۲ هفته پیش",
    views: 518,
  },
  {
    id: "6",
    title: "تمرین‌های منتخب زبان انگلیسی",
    description:
      "مجموعه تمرین‌های منتخب برای تقویت واژگان و مهارت‌های پایه.",
    subject: "زبان انگلیسی",
    type: "تمرین",
    base: "هفتم",
    baseKey: "middle",
    level: "1",
    author: "محتوا پلاس",
    updatedAt: "۳ هفته پیش",
    views: 447,
  },
];

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

const updatedOrder: Record<string, number> = {
  "۲ روز پیش": 1,
  "۵ روز پیش": 2,
  "۱ هفته پیش": 3,
  "۲ هفته پیش": 4,
  "۳ هفته پیش": 5,
};

export default function ContentsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sort, setSort] = useState(searchParams.get("sort") ?? "best");
  const [base, setBase] = useState(searchParams.get("base") ?? "");
  const [level, setLevel] = useState(searchParams.get("level") ?? "");
  const [subject, setSubject] = useState(searchParams.get("subject") ?? "");
  const [contentType, setContentType] = useState(
    searchParams.get("type") ?? "",
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    setSort(searchParams.get("sort") ?? "best");
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

    if (!value || (key === "sort" && value === "best")) {
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

  const filteredContents = useMemo(() => {
    const selectedSubject = subjectLabels[subject];
    const selectedType = contentTypeLabels[contentType];

    const filtered = contents.filter((item) => {
      const matchesBase = !base || item.baseKey === base;
      const matchesLevel = !level || item.level === level;
      const matchesSubject = !subject || item.subject === selectedSubject;
      const matchesType = !contentType || item.type === selectedType;

      return (
        matchesBase &&
        matchesLevel &&
        matchesSubject &&
        matchesType
      );
    });

    return [...filtered].sort((a, b) => {
      if (sort === "best" || sort === "most-viewed") {
        return (b.views ?? 0) - (a.views ?? 0);
      }

      if (sort === "newest") {
        return (
          (updatedOrder[a.updatedAt ?? ""] ?? Number.MAX_SAFE_INTEGER) -
          (updatedOrder[b.updatedAt ?? ""] ?? Number.MAX_SAFE_INTEGER)
        );
      }

      if (sort === "most-liked") {
        return (b.views ?? 0) - (a.views ?? 0);
      }

      return 0;
    });
  }, [base, level, subject, contentType, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredContents.length / pageSize),
  );

  useEffect(() => {
    setCurrentPage((page) => Math.min(Math.max(page, 1), totalPages));
  }, [totalPages]);

  const paginatedContents = useMemo(() => {
    const start = (currentPage - 1) * pageSize;

    return filteredContents.slice(start, start + pageSize);
  }, [currentPage, pageSize, filteredContents]);

  const resetFilters = () => {
    setSort("best");
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
    setPageSize(size);
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
      className="contentsPage h-screen overflow-hidden bg-[#f7f8f8]"
    >
      <Header />

      <ContentsHeader total={filteredContents.length} />

      <div className="mx-auto h-full w-[calc(100%-20px)] px-0 pb-5 pt-[106px] md:w-[calc(100%-32px)] md:pb-8 lg:h-[calc(100vh-120px)] lg:w-[calc(100%-48px)] lg:max-w-[1392px] lg:px-0 lg:pb-16 lg:pt-[104px]">
        <div
          dir="ltr"
          className="flex h-full min-h-0 flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_270px] lg:items-start lg:gap-7"
        >
          <section
            dir="rtl"
            className="fixed inset-x-0 bottom-0 top-[500px] z-30 flex min-h-0 min-w-0 flex-col lg:static lg:z-auto lg:order-1 lg:h-full lg:pt-0"
          >
            <div
              dir="rtl"
              data-contents-scroll
              className="cu-content-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain px-0 pb-4 pl-1"
            >
              <ContentsList items={paginatedContents} />

              <ContentsPagination
                current={currentPage}
                pageSize={pageSize}
                total={filteredContents.length}
                onChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </div>
          </section>

          <aside
            dir="rtl"
            className="order-1 min-w-0 lg:order-2 lg:h-full"
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
              onReset={resetFilters}
            />
          </aside>
        </div>
      </div>
    </main>
  );
}
