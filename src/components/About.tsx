import { motion } from 'motion/react'
import { TELEGRAM_URL } from '../config'
import { SectionLabel } from './SectionLabel'

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-muted/20"
    >
      <SectionLabel label="о мне" count="by shou" />

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
          <span className="block pl-[10%]">И не один.</span>
          <span className="block pl-[20%]">Просто рядом.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-5 md:col-start-8 flex flex-col gap-7 font-sans text-text/90"
        >
          <p className="text-lg md:text-xl lg:text-[22px] leading-[1.55]">
            Форекс-трейдер и разработчик проектов. Понимаем систему арбитража
            изнутри — торгуем в плюс, участвуем в развитии Telegram-каналов,
            собираем под трейдеров инструменты, которых нет на рынке. Делаем
            сайты, ботов и кастомные тулзы.
          </p>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="self-start inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bg bg-text px-3.5 py-2.5 rounded-full whitespace-nowrap hover:bg-white transition-colors"
          >
            открыты к вашим проектам — в лс
            <span aria-hidden>↗</span>
          </a>

          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted pt-4 border-t border-muted/20">
            — by shou
          </p>
        </motion.div>
      </div>
    </section>
  )
}
