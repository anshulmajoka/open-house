import type { Metadata } from "next";
import { leadership } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: "What Open House does for resale apartments in the NCR.",
};

const values = [
  {
    title: "Transparency",
    body: "Price, condition, and missing papers are written down before a token is discussed.",
  },
  {
    title: "A shorter list",
    body: "We would rather show three homes that fit than thirty that waste a Saturday.",
  },
  {
    title: "Buyer and seller first",
    body: "A partner is paid for a completed sale, not for adding noise to the visit.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">About Open House</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
        Resale homes with the price and the papers in the same place
      </h1>
      <p className="mt-4 max-w-3xl text-neutral-600">
        Open House is a sample company site for buying and selling pre-owned apartments in Gurgaon, Noida, and Ghaziabad. The homes on this preview are fictional. The process is the one we want the real product to follow.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-semibold">Vision</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            A family should be able to choose a resale flat the way they choose a new one: with a clear price, a floor plan, and no surprise at the registry office.
          </p>
        </article>
        <article className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-semibold">Mission</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Price from recent sales, check the file, stage the home, and stay through registration. Partners amplify reach. They do not replace that work.
          </p>
        </article>
      </div>

      <h2 className="mt-14 text-2xl font-semibold">What we will not bend</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
            <h3 className="text-lg font-semibold">{value.title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{value.body}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-14 text-2xl font-semibold">Sample leadership</h2>
      <p className="mt-2 max-w-2xl text-sm text-neutral-600">
        Names below are placeholders for the phase 1 site, not a real team page.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((person) => (
          <li key={person.name} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-sm font-semibold text-brand">
              {person.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <p className="mt-3 font-semibold">{person.name}</p>
            <p className="text-sm text-neutral-500">{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
