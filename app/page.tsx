import Link from "next/link";
import { CityHomes } from "@/components/CityHomes";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { handholding, homeFaqs } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CityHomes />
      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
              Start with what you actually need
            </h2>
            <p className="mt-3 text-neutral-600">
              Tell us the city, the size, and the budget. We answer with homes that already match, not a portal dump.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Tell us your requirements
          </Link>
        </div>
      </section>
      <TestimonialCarousel />
      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">What we handle</h2>
          <p className="mt-2 text-neutral-600">The running around sits with us.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {handholding.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <h3 className="text-lg font-semibold text-neutral-950">{item.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <FaqList items={homeFaqs} />
    </>
  );
}
