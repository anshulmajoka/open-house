import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { SiteForm } from "@/components/SiteForm";
import { contactDetails, contactFaqs, offices } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Phone, email, and office addresses for Open House.",
};

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">We are here to help</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Ask about a home, a sale, or a partnership. This preview does not deliver the form. The phone and email do.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a href={contactDetails.phoneHref} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Call</p>
            <p className="mt-2 font-semibold">{contactDetails.phoneDisplay}</p>
          </a>
          <a href={`mailto:${contactDetails.email}`} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Email</p>
            <p className="mt-2 font-semibold break-all">{contactDetails.email}</p>
          </a>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Visit</p>
            <p className="mt-2 font-semibold">{contactDetails.hours}</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <div className="mt-4">
              <SiteForm
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "email", label: "Email address", type: "email", required: true },
                  { name: "phone", label: "Phone number", type: "tel", required: true },
                  { name: "message", label: "Message", type: "textarea", required: true },
                ]}
                submitLabel="Send message"
                successTitle="Message checked"
                successBody="The fields look complete. Nothing was emailed or stored. Use the phone or email above if you need a reply."
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Offices</h2>
            <ul className="mt-4 grid gap-3">
              {offices.map((office) => (
                <li key={office.city} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                  <h3 className="font-semibold">{office.city}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{office.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FaqList items={contactFaqs} subtitle="Hours, replies, and what to share about a home." />
    </>
  );
}
