import { motion } from 'motion/react'

const SERVICES = [
  {
    id: '01',
    title: 'Лендинги',
    sub: '5–10 дней',
    body: 'Конверсионные лендинги под услугу, продукт или курс. Адаптивные, тёмные, с motion-секцией и формой в CRM/Telegram.',
  },
  {
    id: '02',
    title: 'Telegram-боты',
    sub: 'сигналы / оплата / прогрев',
    body: 'Боты для приватных каналов, подписок, авто-сигналов и серий прогрева. Платежи через Stripe / CryptoCloud / ЮKassa.',
  },
  {
    id: '03',
    title: 'CRM (Bitrix / amoCRM)',
    sub: 'воронки, поля, дашборды',
    body: 'Настройка под команду трейдеров: кастомные поля сделок, авто-распределение лидов, отчёты для ментора.',
  },
  {
    id: '04',
    title: 'Индивидуальные решения',
    sub: 'по брифу',
    body: 'Дашборды, копитрейд-системы, личные кабинеты с подпиской, парсеры рынка. Обсуждаем под задачу.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative px-6 md:px-12 py-32 md:py-48">
      <div className="mb-16 md:mb-24 flex items-start justify-between gap-8">
        <div className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          01 / услуги
        </div>
        <div className="hidden md:block font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          (4)
        </div>
      </div>

      <h2
        className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] mb-20 md:mb-32"
        style={{
          fontSize: 'clamp(48px, 8vw, 120px)',
          fontVariationSettings: '"opsz" 24, "wght" 900',
        }}
      >
        <span className="block">Что я</span>
        <span className="block pl-[20%]">делаю.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -6 }}
            className={`group relative border border-muted/30 bg-surface/40 p-8 md:p-12 transition-colors duration-300 hover:border-accent ${
              i % 2 === 1 ? 'md:translate-y-12' : ''
            }`}
          >
            <div className="flex items-baseline justify-between mb-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {s.id} / {s.title.toLowerCase()}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {s.sub}
              </span>
            </div>
            <h3 className="font-display font-light text-4xl md:text-5xl leading-tight mb-6 group-hover:text-accent transition-colors">
              {s.title}
            </h3>
            <p className="text-text/70 leading-relaxed max-w-md">{s.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
