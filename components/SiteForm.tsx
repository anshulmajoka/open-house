"use client";

import { FormEvent, useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
  required?: boolean;
};

export function SiteForm({
  id,
  fields,
  submitLabel,
  successTitle,
  successBody,
}: {
  id?: string;
  fields: Field[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
}) {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    for (const field of fields) {
      const value = String(data.get(field.name) || "").trim();
      if (field.required && !value) {
        setError(`Please enter your ${field.label.toLowerCase()}.`);
        return;
      }
      if (field.name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setError("Please enter a valid email address.");
        return;
      }
      if (field.name === "phone" && value && !/^[0-9+\-\s]{8,16}$/.test(value)) {
        setError("Please enter a valid phone number.");
        return;
      }
    }

    setError("");
    setDone(true);
  }

  if (done) {
    return (
      <div id={id} className="rounded-2xl bg-white p-6 ring-1 ring-black/5" role="status">
        <h3 className="text-lg font-semibold text-neutral-950">{successTitle}</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">{successBody}</p>
        <button
          type="button"
          className="mt-4 inline-flex min-h-11 items-center rounded-full border border-neutral-300 px-4 text-sm font-medium"
          onClick={() => setDone(false)}
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 sm:p-6" noValidate>
      <div className="grid gap-4">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-1.5 text-sm font-medium text-neutral-800">
            {field.label}
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                required={field.required}
                rows={4}
                className="min-h-28 rounded-xl border border-neutral-300 px-3 py-3 text-base font-normal outline-none focus:border-brand"
              />
            ) : field.type === "select" ? (
              <select
                name={field.name}
                required={field.required}
                defaultValue=""
                className="h-12 rounded-xl border border-neutral-300 bg-white px-3 text-base font-normal outline-none focus:border-brand"
              >
                <option value="" disabled>
                  Choose one
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                className="h-12 rounded-xl border border-neutral-300 px-3 text-base font-normal outline-none focus:border-brand"
              />
            )}
          </label>
        ))}
      </div>
      {error ? (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark sm:w-auto"
      >
        {submitLabel}
      </button>
      <p className="mt-3 text-xs leading-5 text-neutral-500">
        Nothing is saved or sent. This preview only checks the form on your device.
      </p>
    </form>
  );
}
