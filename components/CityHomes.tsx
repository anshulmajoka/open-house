"use client";

import Link from "next/link";
import { useState } from "react";
import { cities, propertiesIn, type City } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";

export function CityHomes() {
  const [city, setCity] = useState<City>("Gurgaon");
  const homes = propertiesIn(city);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
          Handpicked homes
        </h2>
        <p className="mt-3 text-neutral-600">
          A short list in each city. Every home has a price, a size, and a status you can filter.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex max-w-full gap-2 overflow-x-auto rounded-full bg-neutral-200/70 p-1" role="tablist" aria-label="City">
          {cities.map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={city === option}
              onClick={() => setCity(option)}
              className={`min-h-11 shrink-0 rounded-full px-5 text-sm font-semibold ${
                city === option ? "bg-brand text-white" : "text-neutral-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {homes.map((property) => (
          <PropertyCard key={property.slug} property={property} variant="compact" />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/properties"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          View all properties
        </Link>
      </div>
    </section>
  );
}
