import { motion } from 'motion/react'
import { SectionLabel } from './SectionLabel'
import { ChatBubble } from './ChatBubble'

type Exchange = {
  step: string
  stage: string
  time: string
  client: string
  dev: string
}

type DevContent = { text?: string; link?: string }

type ExchangeNew = {
  step: string
  stage: string
  time: string
  client: string
  dev: DevContent
}

const EXCHANGES: ExchangeNew[] = [
  {
    step: '01',
    stage: 'Бриф',
    time: '14:02',
    client: 'Привет, нужен сайт под курс по трейдингу, свободен?',
    dev: { text: 'Привет, да, созвонимся, либо скинь тз — разберём задачу и цену обсудим.' },
  },
  {
    step: '02',
    stage: 'Концепт',
    time: '17:30',
    client: 'Окей, а можно будет посмотреть как сайт будет выглядеть?',
    dev: { text: 'Да, завтра пришлю скетчи — цвета, шрифты и тд.' },
  },
  {
    step: '03',
    stage: 'Демо',
    time: '12:45',
    client: 'Привет, ну что там, демо готово?',
    dev: { link: 'shou.dev/preview/trader-course' },
  },
  {
    step: '04',
    stage: 'Правки',
    time: '17:08',
    client: 'Неплохо, но есть что поправить, созвонимся?',
    dev: { text: 'Да, давай.' },
  },
  {
    step: '05',
    stage: 'Сдача',
    time: '10:15',
    client: 'Запускаем?',
    dev: { text: 'Деплой готов, вот инструкция по правкам, и месяц поддержки в подарок ✦' },
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-muted/20"
    >
      <SectionLabel label="процесс" count="5 шагов" />

      <motion.h2
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] mb-20 md:mb-32 md:pl-[8%] lg:pl-[12%]"
        style={{
          fontSize: 'clamp(48px, 8vw, 120px)',
          fontVariationSettings: '"opsz" 24, "wght" 900',
        }}
      >
        <span className="block">Как</span>
        <span className="block pl-[15%]">работаем.</span>
      </motion.h2>

      <div className="mx-auto max-w-3xl flex flex-col gap-10 md:gap-12 px-2 md:px-0">
        {EXCHANGES.map((ex, i) => (
          <div key={ex.step} className="flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                {ex.step} / {ex.stage.toLowerCase()}
              </div>
              <div className="flex-1 h-px bg-muted/25" />
            </div>

            <div className="flex flex-col gap-4">
              <ChatBubble
                role="client"
                name="клиент"
                avatar="К"
                time={ex.time}
                delay={i * 0.05}
              >
                {ex.client}
              </ChatBubble>
              <ChatBubble
                role="dev"
                name="shou"
                avatar="S"
                time={ex.time}
                delay={i * 0.05 + 0.15}
              >
                {ex.dev.link ? (
                  <a
                    href="#"
                    className="font-mono text-[14px] underline decoration-bg/40 underline-offset-2 hover:decoration-bg"
                  >
                    {ex.dev.link}
                  </a>
                ) : (
                  ex.dev.text
                )}
              </ChatBubble>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
