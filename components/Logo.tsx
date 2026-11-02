export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-neutral-950 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
      >
        <circle cx="16" cy="16" r="16" className="fill-brand" />
        <path
          d="M8 15.5 16 8l8 7.5V24a1 1 0 0 1-1 1h-5v-5h-4v5H9a1 1 0 0 1-1-1v-8.5Z"
          className="fill-white"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">
        Open <span className="font-medium">House</span>
      </span>
    </span>
  );
}
