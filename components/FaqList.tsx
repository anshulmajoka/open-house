"use client";

import { useState } from "react";

export type Faq = { question: string; answer: string };

export function FaqList({
  items,
  title = "Frequently asked questions",
  subtitle = "Straight answers about buying and selling with Open House.",
}: {
  items: Faq[];
  title?: string;
  subtitle?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">{title}</h2>
        <p className="mt-3 text-neutral-600">{subtitle}</p>
      </div>
      <div className="mt-8 divide-y divide-neutral-200 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
        {items.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-neutral-950 sm:text-base"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : index)}
              >
                {item.question}
                <span aria-hidden="true" className="text-xl text-neutral-400">
                  {expanded ? "–" : "+"}
                </span>
              </button>
              {expanded ? (
                <p className="px-4 pb-4 text-sm leading-6 text-neutral-600">{item.answer}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
