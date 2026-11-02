"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  cities,
  properties,
  type City,
  type Configuration,
  type Status,
} from "@/data/properties";
import { PropertyCard } from "./PropertyCard";

const configurations: Configuration[] = [
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "3 BHK + SQ",
  "4 BHK",
];

const priceBands = ["All", "< 1 Cr", "1-1.5 Cr", "1.5-2 Cr", "2-3 Cr", "> 3 Cr"] as const;
const areaBands = [
  "All",
  "< 1500 sqft",
  "1500-2000 sqft",
  "2000-2500 sqft",
  "2500-3000 sqft",
  "> 3000 sqft",
] as const;
const statuses = ["All", "Available", "Coming Soon", "Sold", "Booked"] as const;

type PriceBand = (typeof priceBands)[number];
type AreaBand = (typeof areaBands)[number];

function matchesPrice(price: number, band: PriceBand) {
  const crore = price / 10_000_000;
  if (band === "All") return true;
  if (band === "< 1 Cr") return crore < 1;
  if (band === "1-1.5 Cr") return crore >= 1 && crore < 1.5;
  if (band === "1.5-2 Cr") return crore >= 1.5 && crore < 2;
  if (band === "2-3 Cr") return crore >= 2 && crore <= 3;
  return crore > 3;
}

function matchesArea(sqft: number, band: AreaBand) {
  if (band === "All") return true;
  if (band === "< 1500 sqft") return sqft < 1500;
  if (band === "1500-2000 sqft") return sqft >= 1500 && sqft < 2000;
  if (band === "2000-2500 sqft") return sqft >= 2000 && sqft < 2500;
  if (band === "2500-3000 sqft") return sqft >= 2500 && sqft <= 3000;
  return sqft > 3000;
}

function Chip({
  label,
  pressed,
  onClick,
}: {
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 rounded-full px-4 text-sm font-medium ${
        pressed ? "bg-brand text-white" : "bg-neutral-100 text-neutral-800"
      }`}
    >
      {label}
    </button>
  );
}

export function PropertyBrowser() {
  const params = useSearchParams();
  const initialQuery = params.get("q") ?? "";
  const initialCity = params.get("city");
  const [query, setQuery] = useState(initialQuery);
  const [city, setCity] = useState<City | "All">(
    cities.includes(initialCity as City) ? (initialCity as City) : "All",
  );
  const [configs, setConfigs] = useState<Configuration[]>([]);
  const [price, setPrice] = useState<PriceBand>("All");
  const [area, setArea] = useState<AreaBand>("All");
  const [status, setStatus] = useState<(typeof statuses)[number]>("All");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return properties.filter((property) => {
      const haystack = `${property.society} ${property.sector} ${property.city} ${property.unit}`.toLowerCase();
      if (needle && !haystack.includes(needle)) return false;
      if (city !== "All" && property.city !== city) return false;
      if (configs.length && !configs.includes(property.configuration)) return false;
      if (!matchesPrice(property.price, price)) return false;
      if (!matchesArea(property.sqft, area)) return false;
      if (status !== "All" && property.status !== (status as Status)) return false;
      return true;
    });
  }, [query, city, configs, price, area, status]);

  const active = [
    city !== "All" ? city : null,
    configs.length ? configs.join(", ") : null,
    price !== "All" ? price : null,
    area !== "All" ? area : null,
    status !== "All" ? status : null,
    query.trim() ? `“${query.trim()}”` : null,
  ].filter(Boolean);

  function toggleConfig(option: Configuration) {
    setConfigs((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  }

  function clearFilters() {
    setQuery("");
    setCity("All");
    setConfigs([]);
    setPrice("All");
    setArea("All");
    setStatus("All");
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16">
      <header className="bg-transparent pb-6 pt-10 text-center md:pt-14">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
          Available properties
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
          Explore sample homes picked for size, price, and a file you can read before you visit.
        </p>
        <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-brand" />
      </header>

      <form
        className="mx-auto mt-2 max-w-2xl"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="sr-only" htmlFor="society-search">
          Search by society name
        </label>
        <input
          id="society-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by society name..."
          className="h-12 w-full rounded-full border border-neutral-300 bg-white px-5 text-base outline-none focus:border-brand"
        />
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-neutral-900"
          aria-expanded={filtersOpen}
          onClick={() => setFiltersOpen((value) => !value)}
        >
          <span aria-hidden="true">▾</span>
          {filtersOpen ? "Hide filters" : "Filters"}
        </button>
        <p className="text-sm text-neutral-500">
          {active.length ? active.join(" · ") : "No filters applied"}
        </p>
        {active.length ? (
          <button
            type="button"
            onClick={clearFilters}
            className="min-h-11 text-sm font-medium text-brand"
          >
            Clear
          </button>
        ) : null}
      </div>

      {filtersOpen ? (
        <div className="mt-3 grid gap-6 rounded-2xl bg-white p-4 ring-1 ring-black/5 sm:p-6 md:grid-cols-2">
          <fieldset>
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              City
            </legend>
            <div className="flex flex-wrap gap-2">
              {(["All", ...cities] as const).map((option) => (
                <Chip
                  key={option}
                  label={option}
                  pressed={city === option}
                  onClick={() => setCity(option)}
                />
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Configuration
            </legend>
            <div className="flex flex-wrap gap-2">
              {configurations.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  pressed={configs.includes(option)}
                  onClick={() => toggleConfig(option)}
                />
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Price range
            </legend>
            <div className="flex flex-wrap gap-2">
              {priceBands.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  pressed={price === option}
                  onClick={() => setPrice(option)}
                />
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Area range
            </legend>
            <div className="flex flex-wrap gap-2">
              {areaBands.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  pressed={area === option}
                  onClick={() => setArea(option)}
                />
              ))}
            </div>
          </fieldset>
          <fieldset className="md:col-span-2">
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Status
            </legend>
            <div className="flex flex-wrap gap-2">
              {statuses.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  pressed={status === option}
                  onClick={() => setStatus(option)}
                />
              ))}
            </div>
          </fieldset>
        </div>
      ) : null}

      {results.length ? (
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {results.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-neutral-600">
          No homes match these filters. Clear one and try again.
        </p>
      )}
    </div>
  );
}
