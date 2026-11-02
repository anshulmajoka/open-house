import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertyBrowser } from "@/components/PropertyBrowser";

export const metadata: Metadata = {
  title: "Properties",
  description: "Browse sample resale apartments in Gurgaon, Noida, and Ghaziabad.",
};

export default function PropertiesPage() {
  return (
    <Suspense fallback={<p className="px-4 py-16 text-center text-neutral-600">Loading homes...</p>}>
      <PropertyBrowser />
    </Suspense>
  );
}
