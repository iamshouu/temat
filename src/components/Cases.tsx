import { motion } from 'motion/react'

const CASES = [
  {
    num: '01',
    title: 'Signal-bot для приватного канала',
    year: '2025',
    tags: 'Telegram · TS · Stripe',
    metric: '+217%',
    metricLabel: 'подписок за 2 мес.',
  },
  {
    num: '02',
    title: 'Лендинг + воронка для курса',
    year: '2025',
    tags: 'Next.js · amoCRM',
    metric: '14%',
    metricLabel: 'конверсия в заявку',
  },
  {
    num: '03',
    title: 'CRM для команды трейдеров',
    year: '2024',
    tags: 'Bitrix24 · API',
    metric: '5×',
    metricLabel: 'быстрее обработка сделок',
  },
  {
    num: '04',
    title: 'Сайт инвест-фонда',
    year: '2024',
    tags: 'React · i18n · CMS',
    metric: '3',
    metricLabel: 'языка локализации',
  },
  {
    num: '05',
    title: 'Copytrade-бот',
    year: '2025',
    tags: 'Node · WebSocket',
    metric: '<100ms',
    metricLabel: 'задержка дублирования',
  },
  {
    num: '06',
    title: 'Дашборд приват-клуба',
    year: '2025',
    tags: 'React · Supabase · Recharts',
    metric: '12',
    metricLabel: 'кастомных метрик',
  },
]

export function Cases() {
  return (
    <section
      id="cases"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-muted/20"
    >
      <div className="mb-16 md:mb-24 flex items-start justify-between gap-8">
        <div className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          02 / кейсы
        </div>
        <div className="hidden md:block font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          (6)
        </div>
      </div>

      <h2
        className="font-display font-light leading-[0.95] mb-20 md:mb-32"
        style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
      >
        <span className="block">Из последнего —</span>
        <span
          className="block italic pl-[25%]"
          style={{ fontVariationSettings: '"SOFT" 100' }}
        >
          выборка.
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map((c, i) => (
          <motion.article
            key={c.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative aspect-[4/5] border border-muted/30 bg-surface p-6 md:p-8 transition-colors duration-300 hover:border-accent flex flex-col justify-between"
          >
            <div className="flex justify-between items-start font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              <span>{c.num} / case</span>
              <span>{c.year}</span>
            </div>

            <div className="flex flex-col gap-8">
              <div className="font-display font-light text-3xl md:text-4xl leading-tight group-hover:text-accent transition-colors">
                {c.title}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-5xl md:text-6xl text-accent leading-none">
                  {c.metric}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {c.metricLabel}
                </span>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted pt-4 border-t border-muted/20">
                {c.tags}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
