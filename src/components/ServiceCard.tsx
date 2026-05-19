import { motion } from 'motion/react'

type Props = {
  num: string
  title: string
  sub: string
  body: string
}

export function ServiceCard({ num, title, sub, body }: Props) {
  return (
    <div
      className="relative w-full aspect-square rounded-[10px] p-px overflow-hidden"
      style={{
        background: 'radial-gradient(circle 280px at 0% 0%, #FFFFFF, #0C0D0D)',
      }}
    >
      {/* Точка, обегающая периметр карточки */}
      <motion.span
        aria-hidden
        className="absolute z-30 rounded-full bg-white"
        style={{
          width: 6,
          height: 6,
          boxShadow: '0 0 12px rgba(255,255,255,0.9)',
        }}
        animate={{
          top: ['10%', '10%', 'calc(100% - 30px)', 'calc(100% - 30px)', '10%'],
          right: ['10%', 'calc(100% - 35px)', 'calc(100% - 35px)', '10%', '10%'],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Внутренняя карточка */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[9px] border border-[#202222] p-6 md:p-8 flex flex-col justify-between text-white"
        style={{
          background: 'radial-gradient(circle 320px at 0% 0%, #444444, #0C0D0D)',
        }}
      >
        {/* Размытый ray-glow в верхне-левой части */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 220,
            height: 45,
            borderRadius: 100,
            backgroundColor: '#C7C7C7',
            opacity: 0.4,
            boxShadow: '0 0 50px #FFFFFF',
            filter: 'blur(10px)',
            transformOrigin: '10%',
            top: 0,
            left: 0,
            transform: 'rotate(40deg)',
          }}
        />

        {/* Декоративные линии — верх / низ / лево / право, на 10% от краёв */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-[10%] h-px w-full"
          style={{ background: 'linear-gradient(90deg, #888888 30%, #1D1F1F 70%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 bottom-[10%] h-px w-full bg-[#2C2C2C]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[10%] top-0 h-full w-px"
          style={{ background: 'linear-gradient(180deg, #747474 30%, #222424 70%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[10%] top-0 h-full w-px bg-[#2C2C2C]"
        />

        {/* Мета-строка */}
        <div className="relative z-10 flex items-baseline justify-between gap-4 pt-[4%]">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55">
            {num} / {title.toLowerCase()}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 text-right">
            {sub}
          </span>
        </div>

        {/* Заголовок + описание */}
        <div className="relative z-10 flex flex-col gap-4 pb-[4%] pl-[6%]">
          <h3 className="font-display font-light text-3xl md:text-4xl leading-tight text-white">
            {title}
          </h3>
          <p className="text-white/65 text-sm leading-relaxed max-w-[80%]">{body}</p>
        </div>
      </div>
    </div>
  )
}
