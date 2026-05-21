import { motion } from 'motion/react'
import { useState } from 'react'
import { TELEGRAM_URL } from '../config'

export function Hero() {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-bg">
      <div
        aria-hidden
        className="absolute inset-0 hero-placeholder"
        style={{ opacity: videoReady ? 0 : 1, transition: 'opacity 700ms ease-out' }}
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        style={{ opacity: videoReady ? 1 : 0 }}
      >
        <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.45) 100%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/85 via-bg/35 to-transparent pointer-events-none" />

      <div className="relative z-10 grid h-full grid-rows-[1fr_auto] p-6 pt-28 md:p-12 md:pt-32">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black uppercase text-center leading-[0.9] tracking-[-0.02em] bg-clip-text text-transparent"
              style={{
                fontSize: 'clamp(40px, 9vw, 128px)',
                fontVariationSettings: '"opsz" 32, "wght" 900',
                backgroundImage:
                  'linear-gradient(to top, #FFFFFF 0%, #FFFFFF 25%, #BFBFBF 70%, #8A8A8A 100%)',
              }}
            >
              <span className="block">Мы оптимизируем</span>
              <span className="block">всё.</span>
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, rotate: -2, x: 30 }}
              animate={{ opacity: 1, rotate: -8, x: 0 }}
              transition={{ duration: 1.0, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-script absolute pointer-events-none select-none text-text/95"
              style={{
                right: 'clamp(-72px, -6vw, -36px)',
                bottom: 'clamp(-8px, 1vw, 12px)',
                fontSize: 'clamp(36px, 5vw, 84px)',
                fontWeight: 700,
                lineHeight: 1,
                transformOrigin: 'left center',
                textShadow: '0 2px 24px rgba(10,10,10,0.6)',
              }}
            >
              by shou
            </motion.span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-2 md:pb-6"
        >
          <div className="flex flex-col gap-1.5 max-w-md font-mono text-[11px] uppercase tracking-[0.22em]">
            <span className="text-text/80">разработка проектов под:</span>
            <span className="text-text/45">
              сайты · боты · crm · кастомные тулзы
            </span>
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border border-accent px-6 py-3 font-mono text-[12px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 hover:bg-accent hover:text-bg"
          >
            [ написать в telegram&nbsp;→ ]
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 text-text/70"
        aria-hidden
      >
        <svg width="26" height="42" viewBox="0 0 26 42" fill="none">
          <rect
            x="1.5"
            y="1.5"
            width="23"
            height="39"
            rx="11.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <motion.line
            x1="13"
            y1="10"
            x2="13"
            y2="18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </section>
  )
}
