import ContentsCard from "./ContentsCard";

export interface ContentsListItem {
  id: string;
  title: string;
  description?: string;
  type: string;
  subject?: string;
  base?: string;
  author?: string;
  updatedAt?: string;
  views?: number;
  href?: string;
}

interface ContentsListProps {
  items: ContentsListItem[];
}

export default function ContentsList({ items }: ContentsListProps) {
  if (!items.length) {
    return (
      <div
        dir="rtl"
        className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-(--border) bg-white px-6 text-center shadow-cu"
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
    );
  }

  return (
    <div dir="rtl" className="space-y-3">
      {items.map((item) => (
        <ContentsCard key={item.id} {...item} />
      ))}
    </div>
  );
}
