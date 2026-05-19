type Props = {
  label: string
  count?: string
}

export function SectionLabel({ label, count }: Props) {
  return (
    <div className="mb-16 md:mb-24 flex items-start justify-between gap-8">
      <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
        <svg
          width="48"
          height="22"
          viewBox="0 0 48 22"
          fill="none"
          aria-hidden
          className="text-accent shrink-0"
        >
          <path
            d="M2 3 C 2 16, 16 18, 38 18 M30 12 L 40 18 L 30 23"
            stroke="currentColor"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{label}</span>
      </div>
      {count && (
        <div className="hidden md:block font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          {count}
        </div>
      )}
    </div>
  )
}
