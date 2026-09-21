"use client";

import QuickLinks from "../quick-links/QuickLinks";

interface ContentsHeaderProps {
  total: number;
}

export default function ContentsHeader({
  total,
}: ContentsHeaderProps) {
  const formattedTotal = new Intl.NumberFormat("fa-IR").format(total);

  return (
    <>
      <div
        dir="rtl"
        className="fixed top-[88px] left-0 right-0 z-50 w-full lg:hidden"
      >
        <div className="mx-auto w-[calc(100%-20px)] max-[1199px]:md:w-[calc(100%-40px)]">
          <div className="flex h-[148px] w-full items-center overflow-hidden rounded-2xl bg-white px-2 py-3 shadow-cu">
            <QuickLinks variant="contents" />
          </div>

          <div className="mt-3 flex h-16 w-full items-center rounded-2xl bg-white px-4 shadow-cu">
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
        className="fixed top-[108px] left-0 right-0 z-40 hidden h-[88px] w-full lg:block"
      >
        <div className="mx-auto flex h-full w-[calc(100%-48px)] max-w-[1392px] items-center">
          <div
            dir="ltr"
            className="grid h-full w-full grid-cols-[minmax(0,1fr)_270px] items-center gap-7"
          >
            <div className="order-1 flex h-full min-w-0 items-center overflow-hidden rounded-3xl bg-white px-5 shadow-cu">
              <QuickLinks variant="contents" />
            </div>

            <div className="order-2 flex h-full w-65 min-w-0 items-center justify-self-end rounded-3xl bg-white px-5 shadow-cu">
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
