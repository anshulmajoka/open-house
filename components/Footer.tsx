import Link from "next/link";
import { contactDetails } from "@/data/content";
import { Logo } from "./Logo";

const pageLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-600">
            Open House lists resale apartments in Gurgaon, Noida, and Ghaziabad
            with a price, a legal file, and a visit you can actually use.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-neutral-950">Company</h2>
          <ul className="mt-3 space-y-1">
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm text-neutral-700 hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-neutral-950">Talk to us</h2>
          <p className="mt-3 text-sm text-neutral-700">
            <a className="inline-flex min-h-11 items-center hover:text-brand" href={contactDetails.phoneHref}>
              {contactDetails.phoneDisplay}
            </a>
          </p>
          <p className="text-sm text-neutral-700">
            <a className="inline-flex min-h-11 items-center hover:text-brand" href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
          </p>
          <p className="text-sm text-neutral-500">{contactDetails.hours}</p>
        </div>
      </div>
    </footer>
  );
}
