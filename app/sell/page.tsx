import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { SiteForm } from "@/components/SiteForm";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { buyerReach, sellFaqs, sellSteps, transactionFlow } from "@/data/content";

export const metadata: Metadata = {
  title: "Sell",
  description: "Ask for a written price on a resale apartment in Gurgaon, Noida, or Ghaziabad.",
};

const beforeAfter = [
  {
    label: "Before",
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    alt: "Living room before staging, with mixed furniture",
  },
  {
    label: "After",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    alt: "The same kind of living room after furniture and light are arranged",
  },
];

export default function SellPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          alt="House exterior used on the sell page"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/50" />
        <div className="relative mx-auto flex min-h-[22rem] w-full max-w-6xl flex-col justify-end px-4 py-12">
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            A written price within a day of the visit
          </h1>
          <p className="mt-3 max-w-xl text-white/90">
            The fastest way we know to sell a resale flat is a real number, a clean file, and buyers who can come this week.
          </p>
          <a
            href="#requirements"
            className="mt-6 inline-flex min-h-12 w-fit items-center rounded-full bg-brand px-6 text-sm font-semibold text-white"
          >
            Tell us about the flat
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold tracking-tight">How a sale starts</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {sellSteps.map((step, index) => (
            <article key={step.title} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <p className="text-sm font-semibold text-brand">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">See the difference staging makes</h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            These are sample interiors, not a before-and-after of one flat. They show the standard we aim for before the first buyer walks in.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {beforeAfter.map((shot) => (
              <figure key={shot.label} className="overflow-hidden rounded-2xl bg-neutral-100">
                <img src={shot.src} alt={shot.alt} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm font-semibold">{shot.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold tracking-tight">How buyers find the home</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {buyerReach.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">From the first call to the registry</h2>
          <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {transactionFlow.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-neutral-50 p-5 ring-1 ring-black/5">
                <p className="text-sm font-semibold text-brand">{index + 1}</p>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TestimonialCarousel />
      <FaqList items={sellFaqs} subtitle="Questions we hear before a seller shares the keys for a visit." />

      <section className="mx-auto w-full max-w-xl px-4 pb-8">
        <h2 className="text-2xl font-semibold">Ready to sell?</h2>
        <p className="mt-2 mb-4 text-sm text-neutral-600">
          Share the society and a phone number. We will not store this note in phase 1.
        </p>
        <SiteForm
          id="requirements"
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "phone", label: "Phone number", type: "tel", required: true },
            {
              name: "city",
              label: "City",
              type: "select",
              required: true,
              options: ["Gurgaon", "Noida", "Ghaziabad"],
            },
            { name: "society", label: "Society and sector", required: true },
            { name: "message", label: "Anything we should know", type: "textarea" },
          ]}
          submitLabel="Request a price"
          successTitle="Request checked"
          successBody="The form is valid. Nothing was sent. Call the number in the footer if you want a visit scheduled."
        />
      </section>
    </>
  );
}
