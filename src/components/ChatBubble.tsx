import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type Props = {
  role: 'client' | 'dev'
  name: string
  avatar?: string
  time?: string
  children: ReactNode
  delay?: number
}

export function ChatBubble({ role, name, avatar, time, children, delay = 0 }: Props) {
  const isDev = role === 'dev'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-end gap-3 ${isDev ? 'flex-row-reverse' : 'flex-row'} max-w-[80%] ${isDev ? 'self-end' : 'self-start'}`}
    >
      <div
        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-mono uppercase tracking-wider ${
          isDev
            ? 'bg-text text-bg'
            : 'border border-muted/40 bg-surface text-text/70'
        }`}
      >
        {avatar ?? name.slice(0, 1)}
      </div>

      <div className="flex flex-col gap-1">
        <div
          className={`flex items-center gap-2 px-1 ${isDev ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {name}
          </span>
          {time && (
            <span className="font-mono text-[10px] tracking-wider text-muted/60">
              {time}
            </span>
          )}
        </div>
        <div
          className={`rounded-2xl px-5 py-3 text-[15px] leading-[1.45] ${
            isDev
              ? 'bg-text text-bg rounded-br-sm'
              : 'border border-white/[0.07] bg-white/[0.03] text-text/90 rounded-bl-sm'
          }`}
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}
