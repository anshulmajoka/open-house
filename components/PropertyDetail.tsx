"use client";

import { useState } from "react";
import Link from "next/link";
import type { Property } from "@/data/properties";
import { formatPrice, formatSqft } from "@/lib/format";
import { SiteForm } from "./SiteForm";

export function PropertyDetail({ property }: { property: Property }) {
  const [index, setIndex] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);
  const image = property.images[index];

  function step(delta: number) {
    setIndex((current) => (current + delta + property.images.length) % property.images.length);
  }

  const specs = [
    ["Super area", formatSqft(property.sqft)],
    ["Carpet area", formatSqft(property.carpetSqft)],
    ["Price", formatPrice(property.price)],
    ["Floor", property.floor],
    ["Bathrooms", String(property.baths)],
    ["Balconies", String(property.balconies)],
    ["Facing", property.facing],
    ["Parking", property.parking],
    ["Balcony view", property.balconyView],
    ["Unit", property.unit],
  ];

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8">
      <p className="text-sm text-neutral-500">
        <Link href="/properties" className="font-medium text-brand">
          Properties
        </Link>
        <span> / {property.society}</span>
      </p>

      <div
        className="relative mt-4 overflow-hidden rounded-2xl bg-neutral-200"
        onTouchStart={(event) => setTouchX(event.changedTouches[0]?.clientX ?? null)}
        onTouchEnd={(event) => {
          if (touchX == null) return;
          const delta = (event.changedTouches[0]?.clientX ?? touchX) - touchX;
          if (delta > 40) step(-1);
          if (delta < -40) step(1);
          setTouchX(null);
        }}
      >
        <img
          src={image.src}
          alt={`${property.society} — ${image.label}`}
          className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
        />
        <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800">
          {image.label}
        </p>
        <div className="absolute inset-y-0 left-0 flex items-center p-2">
          <button
            type="button"
            onClick={() => step(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-lg font-semibold"
            aria-label="Previous photo"
          >
            ‹
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center p-2">
          <button
            type="button"
            onClick={() => step(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-lg font-semibold"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {property.images.map((item, imageIndex) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setIndex(imageIndex)}
            className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg ring-2 ${
              imageIndex === index ? "ring-brand" : "ring-transparent"
            }`}
            aria-label={`Show ${item.label}`}
          >
            <img src={item.src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{property.status}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
            {property.configuration} in {property.society}
          </h1>
          <p className="mt-2 text-neutral-600">
            {property.sector}, {property.city}. Unit {property.unit}.
          </p>
          <p className="mt-4 max-w-2xl text-neutral-700">{property.summary}</p>

          <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {specs.map(([label, value]) => (
              <div key={label} className="rounded-xl bg-white p-4 ring-1 ring-black/5">
                <dt className="text-xs uppercase tracking-wide text-neutral-500">{label}</dt>
                <dd className="mt-1 font-semibold text-neutral-950">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-4 ring-1 ring-black/5">
              <p className="text-xs uppercase tracking-wide text-neutral-500">Sunlight</p>
              <p className="mt-1 text-2xl font-semibold">{property.sunlight}/10</p>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-black/5">
              <p className="text-xs uppercase tracking-wide text-neutral-500">Connectivity</p>
              <p className="mt-1 text-2xl font-semibold">{property.connectivity}/10</p>
            </div>
          </div>

          <h2 className="mt-10 text-xl font-semibold">Why this home</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
            {property.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold">Area breakdown</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {property.rooms.map((room) => (
              <div key={room.name} className="rounded-xl bg-white p-4 ring-1 ring-black/5">
                <p className="font-semibold text-neutral-950">{room.name}</p>
                <p className="mt-1 text-sm text-neutral-600">
                  {room.area} · {room.size}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-semibold">Furnishing</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {property.furnishing.map((item) => (
              <li key={item} className="rounded-full bg-white px-3 py-2 text-sm ring-1 ring-black/5">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <SiteForm
            id="enquire"
            fields={[
              { name: "name", label: "Full name", required: true },
              { name: "phone", label: "Phone number", type: "tel", required: true },
              { name: "email", label: "Email address", type: "email" },
              {
                name: "message",
                label: "Message",
                type: "textarea",
                required: true,
              },
            ]}
            submitLabel="Enquire"
            successTitle="Enquiry noted on this device"
            successBody={`Thanks. In this preview nothing is sent. Call us if you want to visit ${property.society}, unit ${property.unit}.`}
          />
        </aside>
      </div>
    </article>
  );
}
