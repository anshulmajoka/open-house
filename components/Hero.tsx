"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { heroSlides } from "@/data/content";

export function Hero() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = String(new FormData(event.currentTarget).get("q") || "").trim();
    router.push(value ? `/properties?q=${encodeURIComponent(value)}` : "/properties");
  }

  const slide = heroSlides[index];

  return (
    <section className="relative isolate min-h-[32rem] overflow-hidden text-white sm:min-h-[36rem]">
      {heroSlides.map((item, slideIndex) => (
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-neutral-950/45" />
      <div className="relative mx-auto flex min-h-[32rem] w-full max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[36rem]">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Homes you can trust
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
          No surprises. Just verified resale homes in Gurgaon, Noida, and Ghaziabad.
        </p>
        <form
          onSubmit={onSearch}
          className="mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
          role="search"
        >
          <label className="sr-only" htmlFor="home-search">
            Search properties
          </label>
          <input
            id="home-search"
            name="q"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by city, sector, or society"
            className="h-14 w-full rounded-full bg-white px-5 text-base text-neutral-900 outline-none ring-brand focus:ring-2"
          />
          <button
            type="submit"
            className="h-14 shrink-0 rounded-full bg-brand px-8 text-base font-semibold text-white hover:bg-brand-dark"
          >
            Search
          </button>
        </form>
        <div className="mt-8 flex gap-2" role="tablist" aria-label="Hero slides">
          {heroSlides.map((item, slideIndex) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={`Go to slide ${slideIndex + 1}`}
              className="flex h-11 w-11 items-center justify-center"
              onClick={() => setIndex(slideIndex)}
            >
              <span
                className={`block h-2.5 rounded-full ${
                  slideIndex === index ? "w-8 bg-brand" : "w-2.5 bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
        <span className="sr-only">{slide.alt}</span>
      </div>
    </section>
  );
}
