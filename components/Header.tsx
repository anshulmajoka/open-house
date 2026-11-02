"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/properties", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/partner", label: "Partner" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" aria-label="Open House home" className="min-h-11 inline-flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active =
              link.href === "/properties"
                ? pathname.startsWith("/properties")
                : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${active ? "text-brand" : "text-neutral-800 hover:text-brand"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-full bg-neutral-900" />
            <span className="h-0.5 w-full bg-neutral-900" />
            <span className="h-0.5 w-full bg-neutral-900" />
          </span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-neutral-200 bg-white px-4 py-2 md:hidden" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-12 items-center text-base font-medium text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
