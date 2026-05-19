import { GlowingEffect } from './GlowingEffect'

type Props = {
  title: string
  body: string
  sub: string
}

export function ServiceCard({ title, body, sub }: Props) {
  return (
    <article className="relative aspect-square w-full rounded-3xl border border-white/[0.06] p-[2px] overflow-hidden">
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      <div
        className="relative h-full w-full rounded-[1.35rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden"
        style={{
          background:
            'linear-gradient(160deg, #1A1A1A 0%, #131313 50%, #0E0E0E 100%)',
        }}
      >
        <span className="relative z-10 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {sub}
        </span>

        <div className="relative z-10 flex flex-col gap-5">
          <h3
            className="font-display font-black uppercase tracking-[-0.02em] text-3xl md:text-4xl leading-[0.95] text-text"
            style={{ fontVariationSettings: '"opsz" 24, "wght" 900' }}
          >
            {title}
          </h3>
          <p className="text-sm text-text/65 leading-relaxed max-w-[88%]">{body}</p>
        </div>
      </div>
    </article>
  )
}
