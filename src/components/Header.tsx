import { motion, useScroll, useTransform } from 'motion/react'
import { BRAND, SECTIONS, TELEGRAM_URL } from '../config'
import { useActiveSection } from '../hooks/useActiveSection'

export function Header() {
  const { scrollY } = useScroll()
  const height = useTransform(scrollY, [0, 200], [88, 56])
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.7])
  const backdrop = useTransform(scrollY, [0, 200], ['blur(0px)', 'blur(20px)'])
  const background = useTransform(bgOpacity, (o) => `rgba(10, 9, 8, ${o})`)
  const borderOpacity = useTransform(scrollY, [0, 200], [0, 0.15])
  const borderColor = useTransform(borderOpacity, (o) => `rgba(92, 87, 80, ${o})`)

  const active = useActiveSection(SECTIONS.map((s) => s.id))

  return (
    <motion.header
      style={{
        height,
        backdropFilter: backdrop,
        WebkitBackdropFilter: backdrop,
        backgroundColor: background,
        borderBottom: '1px solid',
        borderBottomColor: borderColor,
      }}
      className="fixed top-0 inset-x-0 z-50 flex items-center px-6 md:px-12"
    >
      <div className="flex w-full items-center justify-between gap-6">
        <a
          href="#top"
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-text hover:text-accent transition-colors"
        >
          {BRAND}
        </a>

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
    </motion.header>
  )
}
