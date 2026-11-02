import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-start px-4 py-20">
      <h1 className="text-3xl font-semibold">That page is not on this preview</h1>
      <p className="mt-3 text-neutral-600">Try the property list, or go back to the home page.</p>
      <Link
        href="/properties"
        className="mt-6 inline-flex min-h-12 items-center rounded-full bg-brand px-6 text-sm font-semibold text-white"
      >
        Browse properties
      </Link>
    </div>
  );
}
