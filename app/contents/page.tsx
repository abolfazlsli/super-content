"use client";

import { useEffect, useMemo, useState } from "react";

import ContentsFilters from "../../src/components/contents/ContentFilters";
import ContentsHeader from "../../src/components/contents/ContentsHeader";
import ContentsList, {
  type ContentsListItem,
} from "../../src/components/contents/ContentsList";
import ContentsPagination from "../../src/components/contents/ContentsPagination";
import Header from "../../src/components/Header";

const contents: ContentsListItem[] = [
  {
    id: "1",
    title: "مجموعه آزمون‌های مداد کاغذی ماهانه ریاضی",
    description:
      "مجموعه‌ای از آزمون‌های استاندارد برای تمرین و ارزیابی دانش‌آموزان.",
    type: "نمونه سؤال",
    subject: "ریاضی",
    base: "دوم دبستان",
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
    author: "محتوا پلاس",
    updatedAt: "۲ هفته پیش",
    views: 518,
  },
  {
    id: "6",
    title: "تمرین‌های منتخب زبان انگلیسی",
    description:
      "مجموعه تمرین‌های منتخب برای تقویت واژگان و مهارت‌های پایه.",
    type: "تمرین",
    subject: "زبان انگلیسی",
    base: "هفتم",
    author: "محتوا پلاس",
    updatedAt: "۳ هفته پیش",
    views: 447,
  },
];

const pageSize = 5;

const baseLabels: Record<string, string> = {
  "elementary-1": "اول دبستان",
  "elementary-2": "دوم دبستان",
  "elementary-3": "سوم دبستان",
  "elementary-4": "چهارم دبستان",
  "elementary-5": "پنجم دبستان",
  "elementary-6": "ششم دبستان",
  "middle-1": "هفتم",
  "middle-2": "هشتم",
  "middle-3": "نهم",
  "high-1": "دهم",
  "high-2": "یازدهم",
  "high-3": "دوازدهم",
};

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
  lesson: "درسنامه",
  notes: "جزوه",
  exam: "آزمون",
  exercise: "تمرین",
  video: "ویدئو",
};

const updatedOrder: Record<string, number> = {
  "۲ روز پیش": 1,
  "۵ روز پیش": 2,
  "۱ هفته پیش": 3,
  "۲ هفته پیش": 4,
  "۳ هفته پیش": 5,
};

export default function ContentsPage() {
  const [sort, setSort] = useState("best");
  const [base, setBase] = useState("");
  const [subject, setSubject] = useState("");
  const [contentType, setContentType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredContents = useMemo(() => {
    const selectedBase = baseLabels[base];
    const selectedSubject = subjectLabels[subject];
    const selectedType = contentTypeLabels[contentType];

    const result = contents.filter((item) => {
      const matchesBase = !base || item.base === selectedBase;
      const matchesSubject = !subject || item.subject === selectedSubject;
      const matchesType = !contentType || item.type === selectedType;

      return matchesBase && matchesSubject && matchesType;
    });

    return [...result].sort((a, b) => {
      if (sort === "most-viewed" || sort === "best") {
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
  }, [base, subject, contentType, sort]);

  const totalPages = Math.ceil(filteredContents.length / pageSize);

  useEffect(() => {
    if (currentPage > Math.max(totalPages, 1)) {
      setCurrentPage(Math.max(totalPages, 1));
    }
  }, [currentPage, totalPages]);

  const paginatedContents = useMemo(() => {
    const start = (currentPage - 1) * pageSize;

    return filteredContents.slice(start, start + pageSize);
  }, [currentPage, filteredContents]);

  const resetFilters = () => {
    setBase("");
    setSubject("");
    setContentType("");
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBaseChange = (value: string) => {
    setBase(value);
    setCurrentPage(1);
  };

  const handleSubjectChange = (value: string) => {
    setSubject(value);
    setCurrentPage(1);
  };

  const handleContentTypeChange = (value: string) => {
    setContentType(value);
    setCurrentPage(1);
  };

  return (
    <main dir="rtl" className="contentsPage min-h-screen bg-[#f7f8f8]">
      <Header />

      <div className="mx-auto w-full max-w-360 px-5 pb-16 pt-0 md:px-6 lg:px-8">
        <ContentsHeader
          total={filteredContents.length}
          sort={sort}
          setSort={handleSortChange}
        />

        <div
          dir="ltr"
          className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-7"
        >
          <section dir="rtl" className="min-w-0">
            <ContentsList items={paginatedContents} />

            <ContentsPagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredContents.length}
              onChange={handlePageChange}
            />
          </section>

          <aside className="min-w-0">
            <ContentsFilters
              base={base}
              setBase={handleBaseChange}
              subject={subject}
              setSubject={handleSubjectChange}
              contentType={contentType}
              setContentType={handleContentTypeChange}
              onReset={resetFilters}
            />
          </aside>
        </div>
      </div>
    </main>
  );
}