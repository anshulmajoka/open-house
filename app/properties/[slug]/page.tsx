import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetail } from "@/components/PropertyDetail";
import { getProperty, properties } from "@/data/properties";

export const dynamicParams = false;

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Home" };
  return {
    title: `${property.configuration} in ${property.society}`,
    description: property.summary,
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();
  return <PropertyDetail property={property} />;
}
