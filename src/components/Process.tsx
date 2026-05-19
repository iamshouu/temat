import { motion } from 'motion/react'

const STEPS = [
  {
    num: '01',
    title: 'Бриф',
    body: 'Созваниваемся, разбираем задачу, фиксируем сроки и цену.',
  },
  {
    num: '02',
    title: 'Концепт',
    body: 'Скетчи, мудборд, выбор шрифтов и цвета. Согласовываем направление.',
  },
  {
    num: '03',
    title: 'Демо',
    body: 'Кликабельный прототип ключевых экранов. Правки до зелёного света.',
  },
  {
    num: '04',
    title: 'Сборка',
    body: 'Финальная вёрстка, анимации, интеграция форм / CRM / ботов. Каждый день — апдейт.',
  },
  {
    num: '05',
    title: 'Сдача',
    body: 'Деплой, документация, инструкция по правкам. Месяц поддержки в подарок.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-muted/20"
    >
      <div className="mb-16 md:mb-24 flex items-start justify-between gap-8">
        <div className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          03 / процесс
        </div>
        <div className="hidden md:block font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          5 шагов
        </div>
      </div>

      <h2
        className="font-display font-light leading-[0.95] mb-20 md:mb-32"
        style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
      >
        <span
          className="block italic"
          style={{ fontVariationSettings: '"SOFT" 100' }}
        >
          Как
        </span>
        <span className="block pl-[15%]">работаем.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="font-display font-light text-7xl md:text-6xl text-accent leading-none mb-4">
              {step.num}
            </div>
            <h3 className="font-display font-light text-2xl mb-3">{step.title}</h3>
            <p className="font-sans text-sm text-text/70 leading-relaxed">{step.body}</p>
            {i < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-muted/40" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
