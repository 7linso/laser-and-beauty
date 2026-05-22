import type { PriceLine } from "@/data/prices/LaserHairRemPrices";

const formatMoney = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  }).format(value);
};

export const PriceRow = ({ name, price, originalPrice, note }: PriceLine) => {
  return (
    <div className="py-2 text-left px-2 sm:px-0">
      <div className="flex items-baseline gap-3 min-w-0">
        <span className="min-w-0 max-w-[60%] sm:max-w-none wrap-break-words whitespace-normal">
          {name}
        </span>

        <span
          className="flex-1 border-b border-dotted border-teal-200/40 -translate-y-0.5"
          aria-hidden
        />

        <span className="shrink-0 font-semibold tabular-nums flex gap-2 whitespace-nowrap">
          {originalPrice != null && (
            <span className="line-through text-teal-50/50">
              {formatMoney(originalPrice)}
            </span>
          )}
          <span className="text-teal-50/80">{formatMoney(price)}</span>
        </span>
      </div>

      {note && <p className="text-xs text-teal-200/80 mt-1 px-0.5">{note}</p>}
    </div>
  );
};
