import type { ReactNode } from 'react'

type Props = {
  num: string
  title: string
  body: string
  sub: string
  icon: ReactNode
}

export function ServiceCard({ num, title, body, sub, icon }: Props) {
  return (
    <article className="group relative aspect-square w-full overflow-hidden border border-muted/25 bg-bg transition-colors duration-500 hover:border-muted">
      {/* угол-подсветка на hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 -left-1/3 h-[140%] w-[140%] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(237,237,237,0.06), transparent 55%)',
        }}
      />

      {/* фоновая огромная цифра outline */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 left-3 md:-top-4 md:left-4 select-none font-display leading-none"
        style={{
          fontSize: 'clamp(150px, 28vw, 280px)',
          fontWeight: 900,
          fontVariationSettings: '"opsz" 32, "wght" 900',
          color: 'transparent',
          WebkitTextStroke: '1px #3D3D3D',
        }}
      >
        {num}
      </span>

      {/* иконка в правом верхнем углу */}
      <div className="absolute top-5 right-5 md:top-6 md:right-6 text-text/70 group-hover:text-text transition-colors duration-500">
        {icon}
      </div>

      {/* служебная горизонтальная линия */}
      <div
        aria-hidden
        className="absolute left-5 right-5 md:left-6 md:right-6 top-[55%] h-px bg-muted/25"
      />

      {/* контент в нижней части */}
      <div className="absolute right-5 md:right-6 bottom-5 md:bottom-6 left-5 md:left-6 flex flex-col gap-3 items-end text-right">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          {sub}
        </span>
        <h3
          className="font-display font-black uppercase tracking-[-0.02em] text-2xl md:text-3xl leading-[0.95]"
          style={{ fontVariationSettings: '"opsz" 24, "wght" 900' }}
        >
          {title}
        </h3>
        <div className="h-px w-10 bg-muted/50" />
        <p className="text-[13px] text-text/65 leading-relaxed max-w-[85%]">
          {body}
        </p>
      </div>
    </article>
  )
}
