import { motion } from 'motion/react'
import { SectionLabel } from './SectionLabel'
import { TracingBeam } from './TracingBeam'
import { ServiceCard } from './ServiceCard'

const ICON_STROKE = 'currentColor'

const ICONS = {
  landing: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4.5" width="18" height="13" rx="1" />
      <path d="M3 8.5h18" />
      <path d="M9 20.5h6M12 17.5v3" />
    </svg>
  ),
  bot: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="8" width="16" height="11" rx="2" />
      <path d="M12 4v4" />
      <circle cx="12" cy="3.5" r="1" />
      <path d="M9 13h.01M15 13h.01" strokeWidth="2" />
      <path d="M9 16h6" />
    </svg>
  ),
  crm: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M3 9h18M9 4v16M3 14h6" />
    </svg>
  ),
  custom: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 6l-5 6 5 6" />
      <path d="M16 6l5 6-5 6" />
      <path d="M14 4l-4 16" />
    </svg>
  ),
}

const SERVICES = [
  {
    id: '01',
    title: 'Лендинги',
    sub: '5–10 дней',
    body: 'Конверсионные лендинги под услугу, продукт или курс. Адаптивные, тёмные, с motion-секцией и формой в CRM/Telegram.',
    icon: ICONS.landing,
  },
  {
    id: '02',
    title: 'Telegram-боты',
    sub: 'сигналы / оплата / прогрев',
    body: 'Боты для приватных каналов, подписок, авто-сигналов и серий прогрева. Платежи через Stripe / CryptoCloud / ЮKassa.',
    icon: ICONS.bot,
  },
  {
    id: '03',
    title: 'CRM (Bitrix / amoCRM)',
    sub: 'воронки, поля, дашборды',
    body: 'Настройка под команду трейдеров: кастомные поля сделок, авто-распределение лидов, отчёты для ментора.',
    icon: ICONS.crm,
  },
  {
    id: '04',
    title: 'Индивидуальные решения',
    sub: 'по брифу',
    body: 'Дашборды, копитрейд-системы, личные кабинеты с подпиской, парсеры рынка. Обсуждаем под задачу.',
    icon: ICONS.custom,
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
          <motion.div
            key={s.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className={`w-full md:max-w-[420px] ${positions[i]}`}
          >
            <ServiceCard
              num={s.id}
              title={s.title}
              sub={s.sub}
              body={s.body}
              icon={s.icon}
            />
          </motion.div>
          )
        })}
      </div>
      </TracingBeam>
    </section>
  )
}
