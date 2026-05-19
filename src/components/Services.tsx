import { Fragment } from 'react'
import { motion } from 'motion/react'
import { SectionLabel } from './SectionLabel'
import { TracingBeam } from './TracingBeam'
import { ServiceCard } from './ServiceCard'

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
          const cardPos = [
            'md:[grid-area:1/1] md:justify-self-start',
            'md:[grid-area:2/2] md:justify-self-end',
            'md:[grid-area:3/1] md:justify-self-start',
            'md:[grid-area:4/2] md:justify-self-end',
          ]
          const titlePos = [
            'md:[grid-area:1/2] md:justify-self-start md:self-center md:pl-6 lg:pl-10 md:text-left',
            'md:[grid-area:2/1] md:justify-self-end md:self-center md:pr-6 lg:pr-10 md:text-right',
            'md:[grid-area:3/2] md:justify-self-start md:self-center md:pl-6 lg:pl-10 md:text-left',
            'md:[grid-area:4/1] md:justify-self-end md:self-center md:pr-6 lg:pr-10 md:text-right',
          ]
          return (
            <Fragment key={s.id}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className={`w-full md:max-w-[420px] ${cardPos[i]}`}
              >
                <ServiceCard title={s.title} sub={s.sub} body={s.body} />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.15 + (i % 2) * 0.1 }}
                className={`hidden md:block font-display font-black uppercase tracking-[-0.02em] leading-[0.92] text-text ${titlePos[i]}`}
                style={{
                  fontSize: 'clamp(36px, 4.2vw, 72px)',
                  fontVariationSettings: '"opsz" 32, "wght" 900',
                  textWrap: 'balance',
                }}
              >
                {s.title}
              </motion.h3>
            </Fragment>
          )
        })}
      </div>
      </TracingBeam>
    </section>
  )
}
