export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="11" fill="#d4ff4f" />
      <path d="M5 26.5h10a7.5 7.5 0 0 0 7.5-7.5V12" fill="none" stroke="#0d0b1a" strokeWidth="7" />
      <rect x="10.5" y="21" width="3.5" height="11" rx="1" fill="#0d0b1a" />
      <rect x="17" y="10.5" width="11" height="3.5" rx="1" fill="#0d0b1a" />
      <path
        d="M31 4.5c.3 2.5 1.2 3.8 4 4.5-2.8.6-3.7 1.9-4 4.6-.4-2.7-1.4-4-4-4.6 2.7-.7 3.7-2 4-4.5Z"
        fill="#3a22f2"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-9 shrink-0" />
      <span className="relative font-display text-[1.35rem] leading-none font-bold tracking-[-0.04em]">
        <span className="absolute -top-3.5 left-0 font-hand text-base font-semibold tracking-normal opacity-80">
          the
        </span>
        brand pipeline
      </span>
    </span>
  );
}
