import { GlowingEffect } from './GlowingEffect'

type Props = {
  title: string
  body: string
  image: string
  badge?: string
}

export function ServiceCard({ title, body, image, badge }: Props) {
  return (
    <article className="relative aspect-square w-full rounded-3xl border border-white/[0.08] p-2 md:p-3">
      {/* Pill-бэдж вынесен наружу — стоит над правым верхним углом карточки */}
      {badge && (
        <span
          className="absolute right-0 bottom-full mb-3 z-30 font-mono text-[10px] uppercase tracking-[0.22em] text-text px-3.5 py-2 rounded-full border border-white/15 whitespace-nowrap"
          style={{
            background: 'rgba(20,20,20,0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          {badge}
        </span>
      )}

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
        style={{ background: '#000000' }}
      >
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
                'linear-gradient(to top, #000000 0%, #000000 18%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.4) 75%, transparent 100%)',
            }}
          />
        </div>

        {/* Текст — абсолютно прижат к низу карточки, лежит поверх solid bg */}
        <div className="absolute inset-x-0 bottom-0 px-7 md:px-9 pb-7 md:pb-9 z-10 flex flex-col gap-5">
          <h3
            className="md:hidden font-display font-black uppercase tracking-[-0.02em] text-3xl leading-[0.95] text-text"
            style={{ fontVariationSettings: '"opsz" 24, "wght" 900' }}
          >
            {title}
          </h3>
          <p className="text-[16px] md:text-[18px] text-text/90 leading-[1.55] max-w-[92%]">
            {body}
          </p>
        </div>
      </div>
    </article>
  )
}
