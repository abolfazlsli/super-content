import ContentsCard from "./ContentsCard";

export interface ContentsListItem {
  id: number | string;
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

interface ContentsListProps {
  items: ContentsListItem[];
}

export default function ContentsList({ items }: ContentsListProps) {
  if (!items.length) {
    return (
      <div className="w-full pb-20">
        <div
          dir="rtl"
          className="flex min-h-60 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-(--border) bg-white px-5 text-center shadow-cu sm:min-h-80 sm:px-6"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary-light) text-2xl text-(--primary)">
            −
          </div>

          <h3 className="text-base font-black text-(--text)">
            محتوایی پیدا نشد
          </h3>

          <p className="mt-2 max-w-md text-xs leading-6 text-(--muted)">
            فیلترهای انتخاب‌شده نتیجه‌ای نداشتند. فیلترها را تغییر بده یا دوباره
            جستجو کن.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="flex w-full flex-col gap-3">
      {items.map((item) => (
        <ContentsCard
          key={item.id}
          title={item.title}
          description={item.description}
          type={item.type}
          subject={item.subject}
          base={item.base}
          author={item.author}
          updatedAt={item.updatedAt}
          views={item.views}
          rating={item.rating}
          reviews={item.reviews}
          price={item.price}
          originalPrice={item.originalPrice}
          discount={item.discount}
          pages={item.pages}
          format={item.format}
          href={item.href}
        />
      ))}
    </div>
  );
}
