"use client";

import { useState } from "react";
import { testimonials as defaultItems } from "@/data/content";

type Item = { title: string; quote: string; name: string; role: string };

export function TestimonialCarousel({
  items = defaultItems,
}: {
  items?: Item[];
}) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  function go(step: number) {
    setIndex((current) => (current + step + items.length) % items.length);
  }

  return (
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
          What buyers and sellers say
        </h2>
        <p className="mt-3 text-neutral-600">
          Sample stories from people who bought or sold a resale flat with us.
        </p>
        <figure className="mt-8">
          <blockquote>
            <p className="text-lg font-semibold text-neutral-950">{item.title}</p>
            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">{item.quote}</p>
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold text-neutral-950">{item.name}</p>
            <p className="text-sm text-neutral-500">{item.role}</p>
          </figcaption>
        </figure>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-neutral-300 px-4 text-sm font-medium"
            aria-label="Previous story"
          >
            Prev
          </button>
          <p className="text-sm text-neutral-500">
            {index + 1} / {items.length}
          </p>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-neutral-300 px-4 text-sm font-medium"
            aria-label="Next story"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
