import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteForm } from "@/components/SiteForm";
import { partnerFaqs } from "@/data/content";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Partner",
  description: "Channel partner page for sharing buyers and inventory with Open House.",
};

const perks = [
  { title: "Visit on a fixed slot", body: "The flat is open, lit, and staffed. Your buyer is not waiting in the lobby." },
  { title: "Papers you can forward", body: "Floor plan, price, and the legal checklist travel with the listing." },
  { title: "0.5% when it sells", body: "Commission is written down when you register the buyer, and paid after the agreement." },
];

export default function PartnerPage() {
  const inventory = properties.filter((property) => property.status === "Available").slice(0, 6);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Channel partners</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Higher commission on homes we already stand behind
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Bring a buyer or a flat. We confirm the match, book the visit, and pay a fixed 0.5% after the agreement to sell.
          </p>
          <a
            href="#register"
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-brand px-6 text-sm font-semibold text-white"
          >
            Register with us
          </a>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {perks.map((perk) => (
              <article key={perk.title} className="rounded-2xl bg-neutral-50 p-5 ring-1 ring-black/5">
                <h2 className="text-lg font-semibold">{perk.title}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{perk.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold tracking-tight">Homes your buyers can see this week</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {inventory.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Have an inventory?</h2>
            <p className="mt-3 text-neutral-600">
              If the flat is in Gurgaon, Noida, or Ghaziabad and the papers are in order, send the society name. We reply with a yes, a no, or a price we can defend.
            </p>
          </div>
          <SiteForm
            id="register"
            fields={[
              { name: "name", label: "Your name", required: true },
              { name: "phone", label: "Phone number", type: "tel", required: true },
              { name: "email", label: "Email address", type: "email", required: true },
              {
                name: "role",
                label: "I want to",
                type: "select",
                required: true,
                options: ["Share a buyer", "List a home", "Both"],
              },
              { name: "message", label: "Society, buyer budget, or both", type: "textarea" },
            ]}
            submitLabel="List with us"
            successTitle="Partner note checked"
            successBody="The form is valid. Nothing was sent or stored. Use the phone number in the footer to talk to partnerships."
          />
        </div>
      </section>

      <FaqList items={partnerFaqs} subtitle="How commission, visits, and shared buyers work." />
    </>
  );
}
