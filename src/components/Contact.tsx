import { motion } from 'motion/react'
import { TELEGRAM_HANDLE, TELEGRAM_URL } from '../config'
import { SectionLabel } from './SectionLabel'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-muted/20"
    >
      <SectionLabel label="контакты" count="один канал" />

      <motion.h2
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] mb-12 md:mb-20 bg-clip-text text-transparent"
        style={{
          fontSize: 'clamp(64px, 12vw, 180px)',
          fontVariationSettings: '"opsz" 32, "wght" 900',
          backgroundImage:
            'linear-gradient(to top, #FFFFFF 0%, #FFFFFF 25%, #BFBFBF 70%, #8A8A8A 100%)',
        }}
      >
        <span className="block">Готов</span>
        <span className="block pl-[20%]">обсудить?</span>
      </motion.h2>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        href={TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="group block border border-accent p-8 md:p-12 mb-20 md:mb-28 transition-colors duration-300 hover:bg-accent"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-text/60 group-hover:text-bg/60 mb-3 transition-colors">
              telegram → {TELEGRAM_HANDLE}
            </div>
            <div className="font-display font-light text-4xl md:text-6xl text-accent group-hover:text-bg leading-tight transition-colors">
              написать в telegram
            </div>
          </div>
          <div className="font-mono text-3xl text-accent group-hover:text-bg transition-colors">
            ↗
          </div>
        </div>
      </motion.a>

      <footer className="pt-8 border-t border-muted/30 flex flex-col md:flex-row gap-4 md:gap-8 justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
        <span>© 2025 — 2026</span>
        <span>TEMAT founded</span>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
        >
          t.me/Danya_shouuu
        </a>
      </footer>
    </section>
  )
}
