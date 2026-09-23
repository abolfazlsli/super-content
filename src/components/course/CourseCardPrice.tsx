"use client";

interface CourseCardPriceProps {
  price: number;
  discount: number;
  originalPrice: number;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price);

export default function CourseCardPrice({
  price,
  discount,
  originalPrice,
}: CourseCardPriceProps) {
  const hasDiscount = discount > 0;

  return (
    <div className="mt-auto shrink-0 border-t border-slate-100 pt-4">
      <div className="flex h-14 items-end justify-between gap-3">
        <div className="flex h-full flex-col justify-end text-right">
          <div className="text-base font-extrabold leading-6 text-slate-900">
            {formatPrice(price)} تومان
          </div>

          <div
            className={`mt-1 h-4 text-xs leading-4 text-slate-400 ${
              hasDiscount ? "line-through" : "invisible"
            }`}
          >
            {formatPrice(originalPrice)} تومان
          </div>
        </div>

        <div className="flex h-full items-end">
          <span
            className={`rounded-md px-2 py-1 text-[11px] font-bold ${
              hasDiscount ? "bg-emerald-50 text-emerald-600" : "invisible"
            }`}
          >
            {discount}% تخفیف
          </span>
        </div>
      </div>
    </div>
  );
}
