type Props = {
  title: string
  body: string
  sub: string
}

export function ServiceCard({ title, body, sub }: Props) {
  return (
    <article
      className="group relative aspect-square w-full overflow-hidden rounded-3xl border border-white/[0.06] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-white/15"
      style={{
        background:
          'linear-gradient(160deg, #1A1A1A 0%, #131313 50%, #0E0E0E 100%)',
      }}
    >
      {/* мягкая подсветка верхне-левого угла */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 -left-1/4 h-[150%] w-[150%] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.04), transparent 55%)',
        }}
      />

      {/* мета сверху */}
      <span className="relative z-10 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {sub}
      </span>

      {/* заголовок + описание снизу */}
      <div className="relative z-10 flex flex-col gap-5">
        <h3
          className="font-display font-black uppercase tracking-[-0.02em] text-3xl md:text-4xl leading-[0.95] text-text"
          style={{ fontVariationSettings: '"opsz" 24, "wght" 900' }}
        >
          {title}
        </h3>
        <p className="text-sm text-text/65 leading-relaxed max-w-[88%]">{body}</p>
      </div>
    </article>
  )
}
