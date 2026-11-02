import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-sm text-neutral-500">Placeholder for phase 1. Not legal advice.</p>
      <div className="mt-8 space-y-4 text-sm leading-7 text-neutral-700">
        <p>
          This preview does not ask you to create an account. It does not use a database. Contact, sell, and partner forms run in your browser and are discarded when you leave or refresh the page.
        </p>
        <p>
          We do not set tracking cookies for this phase. Your browser may still store whatever it needs to load the site. Photos are requested from Unsplash when a page loads.
        </p>
        <p>
          If a later version stores enquiries, this page will say what is collected, why, and how long it is kept. Until then, call or email if you want a conversation that a person will actually receive.
        </p>
      </div>
    </article>
  );
}
