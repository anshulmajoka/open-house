export function formatPrice(inr: number) {
  if (inr >= 10_000_000) {
    const crore = inr / 10_000_000;
    const text = Number.isInteger(crore)
      ? String(crore)
      : crore.toFixed(2).replace(/\.?0+$/, "");
    return `${text} Cr`;
  }

  const lac = inr / 100_000;
  const text = Number.isInteger(lac)
    ? String(lac)
    : lac.toFixed(1).replace(/\.0$/, "");
  return `${text} Lac`;
}

export function formatSqft(sqft: number) {
  return `${sqft.toLocaleString("en-IN")} sqft`;
}
