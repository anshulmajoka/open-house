"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { contactDetails } from "@/data/content";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [deliveryFailed, setDeliveryFailed] = useState(false);
  const titleId = useId();
  const dialogId = useId();
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    nameRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    setDeliveryFailed(false);
    if (!name) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!/^[0-9+\-\s]{8,16}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          company: String(data.get("company") || ""),
        }),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setDeliveryFailed(true);
        setError(payload?.error || "We could not send that just now.");
        return;
      }
      form.reset();
      setSent(true);
    } catch {
      setDeliveryFailed(true);
      setError("We could not send that just now.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex flex-col items-end gap-3">
      {open ? (
        <div
          id={dialogId}
          role="dialog"
          aria-labelledby={titleId}
          className="w-[min(100vw-2rem,22rem)] overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10"
        >
          <div className="bg-brand px-4 py-3 text-white">
            <h2 id={titleId} className="text-sm font-semibold">
              Chat with Open House
            </h2>
            <p className="mt-0.5 text-xs text-white/90">Share your details and we will email the team.</p>
          </div>

          {sent ? (
            <div className="p-4" role="status">
              <p className="text-sm font-semibold text-neutral-950">Message sent</p>
              <p className="mt-1 text-sm leading-6 text-neutral-600">
                Your details are on the way to the Open House team. We will reply using the email or phone you shared.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex min-h-11 items-center rounded-full border border-neutral-300 px-4 text-sm font-medium"
                onClick={() => setSent(false)}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="max-h-[min(28rem,calc(100dvh-8rem))] overflow-y-auto p-4" noValidate>
              <div className="grid gap-3">
                <label className="grid gap-1 text-sm font-medium text-neutral-800">
                  Name
                  <input
                    ref={nameRef}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={80}
                    className="h-11 rounded-xl border border-neutral-300 px-3 text-base font-normal outline-none focus:border-brand"
                  />
                </label>
                <label className="grid gap-1 text-sm font-medium text-neutral-800">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={120}
                    className="h-11 rounded-xl border border-neutral-300 px-3 text-base font-normal outline-none focus:border-brand"
                  />
                </label>
                <label className="grid gap-1 text-sm font-medium text-neutral-800">
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    maxLength={16}
                    className="h-11 rounded-xl border border-neutral-300 px-3 text-base font-normal outline-none focus:border-brand"
                  />
                </label>
                <label className="grid gap-1 text-sm font-medium text-neutral-800">
                  Message
                  <textarea
                    name="message"
                    rows={3}
                    maxLength={2000}
                    placeholder="How can we help?"
                    className="min-h-20 rounded-xl border border-neutral-300 px-3 py-2 text-base font-normal outline-none focus:border-brand"
                  />
                </label>
                <div className="sr-only" aria-hidden="true">
                  <label>
                    Company
                    <input name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
              </div>
              {error ? (
                <p className="mt-3 text-sm text-red-700" role="alert">
                  {error}
                  {deliveryFailed ? (
                    <>
                      {" "}
                      <a className="underline" href={`mailto:${contactDetails.email}`}>
                        Email {contactDetails.email}
                      </a>
                    </>
                  ) : null}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={sending}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send"}
              </button>
            </form>
          )}
        </div>
      ) : null}

      <button
        type="button"
        className="inline-flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-lg hover:bg-brand-dark"
        aria-expanded={open}
        aria-controls={open ? dialogId : undefined}
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H9l-4 3.5V6.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
