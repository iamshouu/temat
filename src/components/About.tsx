import { motion } from 'motion/react'

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-muted/20"
    >
      <div className="mb-16 md:mb-24 flex items-start justify-between gap-8">
        <div className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          04 / о мне
        </div>
        <div className="hidden md:block font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          — Даня
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 font-display font-black uppercase leading-[0.9] tracking-[-0.02em]"
          style={{
            fontSize: 'clamp(40px, 5vw, 80px)',
            fontVariationSettings: '"opsz" 24, "wght" 900',
          }}
        >
          <span className="block">Не агентство.</span>
          <span className="block pl-[10%]">Один человек,</span>
          <span className="block pl-[20%]">один проект — рядом.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-4 md:col-start-9 flex flex-col gap-6 font-sans text-text/80 leading-relaxed"
        >
          <p>
            Делаю сайты, ботов и кастомные тулзы для трейдеров — тех, кто торгует и
            кому нужен инструмент, а не «как у всех». Без агентств, без менеджеров,
            без бюрократии.
          </p>
          <p>
            Каждый проект веду сам: от первого скетча до деплоя. Спокойно отвечаю в
            Telegram, держу сроки, не теряюсь после оплаты.
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted pt-4 border-t border-muted/20">
            — Даня, shou/web
          </p>
        </motion.div>
      </div>
    </section>
  )
}
