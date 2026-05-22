import { Fragment } from 'react'
import { motion } from 'motion/react'
import { TELEGRAM_URL } from '../config'
import { SectionLabel } from './SectionLabel'
import { TracingBeam } from './TracingBeam'
import { ServiceCard } from './ServiceCard'

const B = import.meta.env.BASE_URL

const SERVICES = [
  {
    id: '01',
    title: 'Сайты',
    sub: 'от 5 дней',
    body: 'Лендинги, многостраничные и корпоративные сайты, бренд-страницы, marketing-сайты. Тёмные, адаптивные, с motion-анимациями и интеграцией форм в CRM или Telegram.',
    image: `${B}services/landing.jpg`,
    badge: 'опт от 10 шт',
    tgNote: 'отдельные задачи — в лс',
  },
  {
    id: '02',
    title: 'Telegram-боты',
    sub: 'сигналы / оплата / прогрев',
    body: 'Боты для приватных каналов, подписок, авто-сигналов и серий прогрева. Платежи через Stripe / CryptoCloud / ЮKassa.',
    image: `${B}services/bot.jpg`,
  },
  {
    id: '03',
    title: 'CRM (Bitrix / amoCRM)',
    sub: 'воронки, поля, дашборды',
    body: 'Настройка под команду трейдеров: кастомные поля сделок, авто-распределение лидов, отчёты для ментора.',
    image: `${B}services/crm.jpg`,
  },
  {
    id: '04',
    title: 'Индивидуальные решения',
    sub: 'по брифу',
    body: 'Дашборды, копитрейд-системы, личные кабинеты с подпиской, парсеры рынка. Пишите — обсудим.',
    image: `${B}services/custom.jpg`,
  },
]

export function Services() {
  return (
    <section id="services" className="relative px-6 md:px-12 py-24 md:py-48">
      <TracingBeam className="pl-10 md:pl-10">
      <SectionLabel label="услуги" count="(4)" />

      <motion.h2
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] mb-12 md:mb-32 md:pl-[8%] lg:pl-[12%]"
        style={{
          fontSize: 'clamp(48px, 8vw, 120px)',
          fontVariationSettings: '"opsz" 24, "wght" 900',
        }}
      >
        <span className="block">Что мы</span>
        <span className="block pl-[20%]">делаем.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-6 md:gap-8 md:px-[3%] lg:px-[5%]">
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
          const titleRotations = [-7, 5, -4, 6]
          return (
            <Fragment key={s.id}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className={`w-full md:max-w-[560px] ${cardPos[i]}`}
              >
                <ServiceCard
                  title={s.title}
                  body={s.body}
                  image={s.image}
                  badge={(s as { badge?: string }).badge}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: titleRotations[i] }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.2 + (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`hidden md:flex flex-col gap-3 ${titlePos[i]}`}
              >
                <div className={`flex items-start gap-6 ${i % 2 === 0 ? 'justify-between flex-row' : 'justify-between flex-row-reverse'}`}>
                  <h3
                    className="font-manrope font-extrabold leading-[0.95] tracking-[-0.02em] text-text"
                    style={{
                      fontSize: 'clamp(40px, 5vw, 84px)',
                      textWrap: 'balance',
                    }}
                  >
                    {s.title}
                  </h3>
                  {(s as { tgNote?: string }).tgNote && (
                    <a
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 flex-shrink-0 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bg bg-text px-3.5 py-2.5 rounded-full whitespace-nowrap hover:bg-white transition-colors"
                    >
                      {(s as { tgNote?: string }).tgNote}
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
                <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-muted">
                  {s.sub}
                </span>

                <svg
                  aria-hidden
                  width="180"
                  height="100"
                  viewBox="0 0 180 100"
                  fill="none"
                  className={`mt-6 text-muted ${i % 2 === 0 ? 'self-start' : 'self-end -scale-x-100'}`}
                >
                  <path
                    d="M 168 12 C 168 60, 100 90, 28 80"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 48 72 L 28 80 L 45 94"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </motion.div>
            </Fragment>
          )
        })}
      </div>
      </TracingBeam>
    </section>
  )
}
