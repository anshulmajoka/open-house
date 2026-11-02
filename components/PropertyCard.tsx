import Link from "next/link";
import type { Property } from "@/data/properties";
import { formatPrice, formatSqft } from "@/lib/format";

const statusStyles: Record<Property["status"], string> = {
  Available: "bg-brand text-white",
  "Coming Soon": "bg-amber-500 text-white",
  Sold: "bg-neutral-800 text-white",
  Booked: "bg-sky-700 text-white",
};

export function PropertyCard({
  property,
  variant = "full",
}: {
  property: Property;
  variant?: "full" | "compact";
}) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] bg-neutral-200">
        <img
          src={property.images[0]?.src}
          alt={`${property.society} ${property.images[0]?.label ?? "photo"}`}
          className="h-full w-full object-cover"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[property.status]}`}
        >
          {property.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-950">{property.society}</h3>
          <p className="mt-1 text-sm text-neutral-500">
            {property.sector} ({property.city})
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-brand">
            {property.unit}
          </span>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
            {property.configuration}
          </span>
        </div>
        {variant === "full" ? (
          <div className="mt-auto space-y-2 text-sm text-neutral-700">
            <p className="flex items-baseline justify-between gap-3">
              <span>{formatSqft(property.sqft)}</span>
              <span className="text-base font-semibold text-neutral-950">
                {formatPrice(property.price)}
              </span>
            </p>
            <p className="text-neutral-500">
              Sunlight {property.sunlight}/10 · Transit {property.connectivity}/10
            </p>
            <p className="text-neutral-500">
              {property.baths} {property.baths === 1 ? "bath" : "baths"} · {property.balconies}{" "}
              {property.balconies === 1 ? "balcony" : "balconies"} · {property.floor} ·{" "}
              {property.parking} · {property.facing}
            </p>
          </div>
        ) : null}
      </div>
    </Link>
  );
}
