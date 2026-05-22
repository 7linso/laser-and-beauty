"use client";

import { useState } from "react";
import type { PriceTab } from "@/data/prices/LaserHairRemPrices";
import { PriceRow } from "./PriceRow";

export default function PricesTabs({ tabs }: { tabs: PriceTab[] }) {
  const [activeKey, setActiveKey] = useState(tabs[0]?.key ?? "");
  const activeTab = tabs.find((t) => t.key === activeKey) ?? tabs[0];

  if (!activeTab) return null;

  return (
    <section className="px-4 bg-teal-900">
      <div className="max-w-5xl mx-auto py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-teal-50">Pricelist</h2>

        <div className="mb-12">
          <div className="overflow-x-auto pb-4 px-4 scrollbar-styled">
            <div className="flex gap-2 w-max mx-auto">
              {tabs.map((tab) => {
                const active = tab.key === activeKey;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveKey(tab.key)}
                    className={`shrink-0 px-4 py-1.5 rounded-full text-sm border transition
              ${
                active
                  ? "bg-teal-50 text-teal-950"
                  : "border-teal-200/30 text-teal-50 hover:bg-teal-800"
              }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-sm text-gray-100 pl-1 md:hidden animate-pulse">
            Swipe to scroll →
          </p>
        </div>

        <div className="space-y-10">
          {activeTab.sections.map((section) => (
            <div key={section.title} className="text-left">
              <h3 className="text-lg font-semibold text-teal-50 px-4 mb-4">
                {section.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {section.items.map((item) => (
                  <PriceRow key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {activeTab.header && (
          <p className="mt-12 text-sm text-teal-200/80">{activeTab.header}</p>
        )}
      </div>
    </section>
  );
}
