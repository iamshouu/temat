import { SectionLabel } from './SectionLabel'
import { ChatBubble } from './ChatBubble'

type Exchange = {
  step: string
  stage: string
  time: string
  client: string
  dev: string
}

const EXCHANGES: Exchange[] = [
  {
    step: '01',
    stage: 'Бриф',
    time: '14:02',
    client: 'Привет. Нужен сайт под курс по трейдингу. Темный, премиум.',
    dev: 'Привет 👋 Созвонимся 15 минут — разберу задачу, зафиксируем сроки и цену.',
  },
  {
    step: '02',
    stage: 'Концепт',
    time: '14:48',
    client: 'Ок, что дальше? Хочу понять как это будет выглядеть.',
    dev: 'Завтра пришлю скетчи + мудборд. Цвета, шрифты, тональность — согласуем направление.',
  },
  {
    step: '03',
    stage: 'Демо',
    time: '16:21',
    client: 'А кликнуть можно? Хочется потрогать.',
    dev: 'Готовлю прототип ключевых экранов. Покликаешь, скажешь правки — до зелёного света.',
  },
  {
    step: '04',
    stage: 'Сборка',
    time: '11:09',
    client: 'Когда финал? Уже хочется.',
    dev: 'Финальная вёрстка, motion, интеграция форм / CRM / ботов. Каждый день апдейт — без молчания.',
  },
  {
    step: '05',
    stage: 'Сдача',
    time: '19:34',
    client: 'Запускаем?',
    dev: 'Деплой готов, доки рядом, инструкция по правкам. Месяц поддержки в подарок ✦',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-muted/20"
    >
      <SectionLabel label="процесс" count="5 шагов" />

      <h2
        className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] mb-20 md:mb-32 md:pl-[8%] lg:pl-[12%]"
        style={{
          fontSize: 'clamp(48px, 8vw, 120px)',
          fontVariationSettings: '"opsz" 24, "wght" 900',
        }}
      >
        <span className="block">Как</span>
        <span className="block pl-[15%]">работаем.</span>
      </h2>

      <div className="mx-auto max-w-3xl flex flex-col gap-10 md:gap-12 px-2 md:px-0">
        {EXCHANGES.map((ex, i) => (
          <div key={ex.step} className="flex flex-col gap-2">
            {/* разделитель этапа */}
            <div className="flex items-center gap-4 mb-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                {ex.step} / {ex.stage.toLowerCase()}
              </div>
              <div className="flex-1 h-px bg-muted/25" />
            </div>

            {/* обмен сообщениями */}
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
                {ex.dev}
              </ChatBubble>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
