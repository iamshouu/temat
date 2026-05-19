import { motion } from 'motion/react'

const ITEMS = [
  'LANDING',
  'TELEGRAM BOT',
  'CRM',
  'AMOCRM',
  'BITRIX',
  'CUSTOM',
  'DARK MODE',
  'MOTION',
  'EDITORIAL',
  'PREMIUM',
]

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="relative overflow-hidden border-y border-muted/25 py-6 group">
      <motion.div
        className="flex gap-16 whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.25em] will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className={i % 2 === 0 ? 'text-text' : 'text-muted'}>{item}</span>
            <span className="text-accent">—</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
