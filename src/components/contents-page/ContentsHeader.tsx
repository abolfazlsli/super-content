"use client";

import QuickLinks from "../quick-links/QuickLinks";

interface ContentsHeaderProps {
  total: number;
}

export default function ContentsHeader({ total }: ContentsHeaderProps) {
  const formattedTotal = new Intl.NumberFormat("fa-IR").format(total);

  return (
    <>
      <div dir="rtl" className="relative z-0 w-full lg:hidden">
        <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-6xl flex-col gap-2 md:w-[calc(100%-5rem)]">
          <div className="flex w-full items-center overflow-hidden rounded-2xl bg-white px-3 py-4 shadow-cu">
            <QuickLinks variant="contents" />
          </div>

          <div className="flex w-full items-center rounded-2xl bg-white px-4 py-3 shadow-cu">
            <div className="flex w-full items-center justify-between gap-3">
              <h1 className="min-w-0 truncate whitespace-nowrap text-base font-black tracking-[-0.02em] text-(--text) md:text-lg">
                محتواهای آموزشی
              </h1>

              <span className="shrink-0 whitespace-nowrap text-[10px] font-medium text-(--muted) md:text-[11px]">
                {formattedTotal} محتوا
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        dir="rtl"
        className="hidden h-[100px] w-full pt-3 lg:block"
      >
        <div className="mx-auto h-[88px] w-[calc(100%-5rem)] max-w-[1392px]">
          <div
            dir="ltr"
            className="grid h-full w-full grid-cols-[minmax(0,1fr)_var(--contents-side-width)] items-center gap-(--contents-layout-gap)"
          >
            <div className="col-start-1 row-start-1 flex h-full min-w-0 items-center overflow-hidden rounded-3xl bg-white px-5 shadow-cu">
              <QuickLinks variant="contents" />
            </div>

            <div className="col-start-2 row-start-1 flex h-full w-full min-w-0 items-center justify-self-end rounded-3xl bg-white px-5 shadow-cu">
              <div
                dir="rtl"
                className="flex w-full items-center justify-between gap-3"
              >
                <h1 className="min-w-0 truncate whitespace-nowrap text-xl font-black tracking-[-0.02em] text-(--text)">
                  محتواهای آموزشی
                </h1>

                <span className="shrink-0 whitespace-nowrap text-[11px] font-medium text-(--muted)">
                  {formattedTotal} محتوا
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
