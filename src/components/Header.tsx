import { motion, useScroll, useTransform } from 'motion/react'
import { BRAND, SECTIONS, TELEGRAM_URL } from '../config'
import { useActiveSection } from '../hooks/useActiveSection'

export function Header() {
  const { scrollY } = useScroll()
  const height = useTransform(scrollY, [0, 200], [88, 56])

  const active = useActiveSection(SECTIONS.map((s) => s.id))

  return (
    <motion.header
      style={{ height }}
      className="fixed top-0 inset-x-0 z-50 flex items-center px-6 md:px-12 pointer-events-none"
    >
      <div className="flex w-full items-center justify-between gap-6 pointer-events-auto">
        <a
          href="#top"
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-text hover:text-accent transition-colors"
        >
          {BRAND}
        </a>

        <div className="flex items-center gap-8 md:gap-10">
          <nav className="hidden md:flex items-center gap-3 font-mono text-[13px] lowercase">
            {SECTIONS.map((s, i) => (
              <span key={s.id} className="flex items-center gap-3">
                <a
                  href={`#${s.id}`}
                  className={`transition-colors duration-300 hover:text-accent ${
                    active === s.id ? 'text-accent' : 'text-text'
                  }`}
                >
                  {s.label}
                </a>
                {i < SECTIONS.length - 1 && (
                  <span
                    aria-hidden
                    className="text-muted select-none transition-transform duration-500 hover:rotate-[15deg]"
                  >
                    /
                  </span>
                )}
              </span>
            ))}
          </nav>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-text hover:text-accent transition-colors"
          >
            tg ↗
          </a>
        </div>
      </div>
    </motion.header>
  )
}
