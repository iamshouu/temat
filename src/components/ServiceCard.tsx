import { GlowingEffect } from './GlowingEffect'

type Props = {
  title: string
  body: string
  sub: string
  image: string
}

export function ServiceCard({ title, body, sub, image }: Props) {
  return (
    <article className="relative aspect-square w-full rounded-3xl border border-white/[0.08] p-2 md:p-3">
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />

      <div
        className="relative h-full w-full rounded-2xl overflow-hidden"
        style={{ background: '#0E0E0E' }}
      >
        {/* мета поверх */}
        <span className="absolute top-4 md:top-5 left-4 md:left-5 z-20 font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
          {sub}
        </span>

        {/* Image — верхняя часть карточки, абсолютно позиционирована */}
        <div className="absolute inset-x-0 top-0 h-[62%] overflow-hidden">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* fade фотографии в bg-цвет — выходит за нижнюю границу image-области, чтобы не было стыка */}
          <div
            className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, #0E0E0E 0%, #0E0E0E 18%, rgba(14,14,14,0.85) 45%, rgba(14,14,14,0.4) 75%, transparent 100%)',
            }}
          />
        </div>

        {/* Текст — абсолютно прижат к низу карточки, лежит поверх solid bg */}
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-8 pb-6 md:pb-8 z-10 flex flex-col gap-4">
          <h3
            className="md:hidden font-display font-black uppercase tracking-[-0.02em] text-2xl leading-[0.95] text-text"
            style={{ fontVariationSettings: '"opsz" 24, "wght" 900' }}
          >
            {title}
          </h3>
          <p className="text-sm md:text-base text-text/75 leading-relaxed max-w-[92%]">
            {body}
          </p>
        </div>
      </div>
    </article>
  )
}
