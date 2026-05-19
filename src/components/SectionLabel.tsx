import { motion } from 'motion/react'

type Props = {
  label: string
  count?: string
}

export function SectionLabel({ label, count }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 md:mb-24 flex items-start justify-between gap-8 md:pl-[8%] lg:pl-[12%]"
    >
      <div className="flex items-center gap-5 md:gap-6 font-mono text-[15px] md:text-[17px] uppercase tracking-[0.22em] text-text">
        <svg
          width="84"
          height="38"
          viewBox="0 0 48 22"
          fill="none"
          aria-hidden
          className="text-text shrink-0"
        >
          <path
            d="M2 3 C 2 16, 16 18, 38 18 M30 12 L 40 18 L 30 23"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{label}</span>
      </div>
      {count && (
        <div className="hidden md:block font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          {count}
        </div>
      )}
    </motion.div>
  )
}
