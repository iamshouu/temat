import { motion } from 'motion/react'
import { SectionLabel } from './SectionLabel'
import { TracingBeam } from './TracingBeam'

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
      <TracingBeam className="pl-10 md:pl-16">
      <SectionLabel label="услуги" count="(4)" />

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

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-6 md:gap-8 md:px-[10%] lg:px-[14%]">
        {SERVICES.map((s, i) => {
          const positions = [
            'md:[grid-area:1/1] md:justify-self-start',
            'md:[grid-area:2/2] md:justify-self-end',
            'md:[grid-area:3/1] md:justify-self-start',
            'md:[grid-area:4/2] md:justify-self-end',
          ]
          return (
          <motion.article
            key={s.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className={`group relative aspect-square w-full md:max-w-[420px] border border-muted/30 bg-surface/40 p-8 md:p-10 transition-colors duration-300 hover:border-accent flex flex-col justify-between ${positions[i]}`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {s.id} / {s.title.toLowerCase()}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted text-right">
                {s.sub}
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-display font-light text-4xl md:text-5xl leading-tight group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="text-text/70 leading-relaxed max-w-md">{s.body}</p>
            </div>
          </motion.article>
          )
        })}
      </div>
      </TracingBeam>
    </section>
  )
}
