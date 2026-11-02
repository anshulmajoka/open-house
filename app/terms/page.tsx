import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Terms & Conditions</h1>
      <p className="mt-4 text-sm text-neutral-500">Placeholder for phase 1. Not legal advice.</p>
      <div className="mt-8 space-y-4 text-sm leading-7 text-neutral-700">
        <p>
          This website is a static preview of Open House. Listings, prices, scores, people, and office addresses are sample content. They are not offers to sell a specific apartment.
        </p>
        <p>
          Forms on this site check what you type and then stop. They do not create an account, a booking, or a contract. A sale only starts when both sides sign a written agreement outside this website.
        </p>
        <p>
          You may browse the pages for personal use. You may not copy the layout or sample listings and present them as a live inventory.
        </p>
        <p>
          To the extent the law allows, Open House is not liable for decisions made from this preview. Confirm every price, area, and document with the current file before you pay a token.
        </p>
      </div>
    </article>
  );
}
