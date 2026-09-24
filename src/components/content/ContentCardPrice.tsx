"use client";

interface ContentCardPriceProps {
  price: number;
  discount: number;
  originalPrice: number;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price);

export default function ContentCardPrice({
  price,
  discount,
  originalPrice,
}: ContentCardPriceProps) {
  const hasDiscount = discount > 0;
  const isFree = price <= 0;

  return (
    <div className="mt-auto shrink-0 border-t border-slate-100 pt-4">
      <div className="flex h-14 items-end justify-between gap-3">
        <div className="flex h-full flex-col justify-end text-right">
          {isFree ? (
            <div className="text-base font-extrabold leading-6 text-emerald-600">
              رایگان
            </div>
          ) : hasDiscount ? (
            <>
              <div className="text-base font-extrabold leading-6 text-slate-900">
                {formatPrice(price)} تومان
              </div>

              <div className="mt-1 h-4 text-xs leading-4 text-slate-400 line-through">
                {formatPrice(originalPrice)} تومان
              </div>
            </>
          ) : (
            <div className="text-base font-extrabold leading-6 text-slate-900">
              {formatPrice(price)} تومان
            </div>
          )}
        </div>

        <div className="flex h-full items-end">
          <span
            className={`rounded-lg px-2.5 py-1.5 text-[10px] font-bold ${
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
