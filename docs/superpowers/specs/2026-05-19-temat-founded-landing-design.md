# Temat founded — landing design spec

- **Date:** 2026-05-19
- **Owner:** Даня (shou/web)
- **Project root:** `D:\claude projects\temat-founded\`

## 1. Context

Персональный лендинг под нишу «трейдеры». Даня продаёт лендинги, Telegram-боты, оптимизацию CRM (Bitrix / amoCRM) и индивидуальные решения. Сайт — лицо услуг shou/web для этой ЦА.

Премиум editorial-вайб, тёмная палитра, видео-hero. Главный CTA — переход в Telegram.

## 2. Goals

- Профессиональный лендинг, который сам по себе работает как кейс «вот так я делаю сайты»
- Видео-фон на hero как первое впечатление
- Нестандартная навигация — пункты через `/` (mono-типографика)
- Editorial-типографика и асимметричные блоки (отстройка от шаблонных трейдинг-сайтов)
- Один внятный CTA — написать в Telegram
- Локальный dev-сервер из коробки

## 3. Non-goals

- Никаких упоминаний AI / Claude / автогенерации (требование пользователя — `user_role.md`)
- Никаких цен в открытом виде (premium-вайб — обсуждается в TG)
- Реальные кейсы и фото не нужны — только стилизованные плейсхолдеры в трейдинг-тематике
- Backend / форма на сайте (CTA — прямая ссылка в TG, не Tier 1/2 бэк)
- Мульти-страничность, блог, многоязычие — это лендинг, не сайт
- CMS, авторизация, личные кабинеты

## 4. Page structure

Одностраничный лендинг с anchor-навигацией:

| #  | Section    | Purpose                                                                            |
|----|------------|------------------------------------------------------------------------------------|
| 00 | Hero       | Видео на весь экран + editorial-заголовок + CTA в Telegram + scroll-индикатор      |
| —  | Marquee    | Бесконечная бегущая строка: `LANDING — BOT — CRM — AMOCRM — BITRIX — CUSTOM — ...` |
| 01 | Services   | 4 крупные карточки: Лендинги / Telegram-боты / CRM / Индивидуальные решения        |
| 02 | Cases      | 4-6 стилизованных плейсхолдер-кейсов в трейдинг-тематике с метриками               |
| 03 | Process    | 5 шагов: бриф → концепт → демо → сборка → сдача                                    |
| 04 | About      | Короткое editorial-эссе про Даню (одна колонка, без bullet-points)                 |
| 05 | Contact    | Большой CTA «Написать в Telegram» + минимальный футер                              |

## 5. Visual system

### 5.1 Palette (warm off-black editorial)

| Token        | Hex        | Usage                                       |
|--------------|------------|---------------------------------------------|
| `bg`         | `#0A0908`  | Глобальный фон                              |
| `text`       | `#EAE4D9`  | Основной текст                              |
| `accent`     | `#D4A574`  | Латунь/янтарь — CTA, активный пункт меню    |
| `muted`      | `#5C5750`  | Линии, разделители `/`, метаданные          |
| `surface`    | `#13110F`  | Карточки, поверхности с легким контрастом   |

### 5.2 Typography

- **Fraunces** (Google Fonts, variable, использовать SOFT axis для editorial-характера) — display-заголовки. Размеры через `clamp(80px, 12vw, 180px)` на hero, `clamp(48px, 6vw, 96px)` на разделах
- **JetBrains Mono** — навигация, цифры секций (`00 — 05`), лейблы, метаданные кейсов, скролл-индикатор, кнопки
- **Inter** — body-текст 16-18px

Нестандартность достигается через:
- Смешение Fraunces regular + italic в одном заголовке
- Offset второй строки заголовка вправо на ~30%
- Mono-микротекст рядом с гигантским serif

### 5.3 Motion vocabulary (`motion` / motion.dev)

- **Stagger reveal** заголовков при попадании в viewport: `blur(8px)→0` + `translateY(40px)→0`, 0.05s между словами, `whileInView`
- **Marquee**: бесконечный horizontal scroll через анимированный `x` или CSS-кейфреймы
- **Hover-tilt** на карточках Services/Cases: `perspective(1000px) + rotateX/Y` на 3-5°
- **Sticky header sсжимается** на scroll: высота 88px → 56px, появляется `backdrop-filter: blur(20px)` + полупрозрачный BG. Реализация через `useScroll` + `useTransform`
- **Cursor-spotlight** на hero: едва заметный radial-gradient следует за курсором (mouse move listener + CSS variable)
- **Reduced motion** — все анимации проверяют `prefers-reduced-motion`, отключают transform/blur, оставляют opacity

## 6. Hero (детали)

`<video autoplay muted loop playsInline>` на весь экран, `object-cover`. Источник: `public/hero.mp4` (скопировать из `C:\Users\shouw\Downloads\15005548_1920_1080_24fps.mp4` на этапе scaffold).

Overlay-слои поверх видео (сверху вниз):
1. Radial vignette dark (затемнение по краям)
2. Linear gradient снизу `from-bg/90 to-transparent` (под текст)
3. Cursor-spotlight (легкий, на hover)

Контент поверх:
- **Top-left** (mono 12px, muted): `TEMAT // FOUNDED · 2025 —`
- **Center-left** (display, smashed bottom):
  - Строка 1: `Сайты для тех,` (Fraunces, regular)
  - Строка 2: `кто торгует.` (Fraunces, italic, offset-right ~30%)
- **Sub-line** (mono 14px): `Lending / Bot / CRM / Custom — built fast, built dark.`
- **CTA**: рамка 1px accent, mono-uppercase `[ написать в telegram → ]`, на hover — заливка accent + инверсия текста
- **Bottom-right** scroll-индикатор: вертикальная mono `scroll ↓` + 60px линия с анимированным сегментом

## 7. Navigation through `/`

Sticky header. Layout строки:

```
[ TEMAT founded ]    услуги / кейсы / процесс / о мне / контакты    [ tg ↗ ]
```

Правила:
- Все пункты — JetBrains Mono, lowercase, 13px
- `/` рендерим отдельным `<span>` цветом `muted`
- При hover на соседний пункт `/` тонко поворачивается на 15°
- Активный пункт (когда скроллим над соответствующей секцией) — цвет `accent`
- На scroll header сжимается 88px → 56px, появляется backdrop-blur
- Мобила (<768px): в строку влезает только бренд + бургер; при открытии меню — те же пункты с `/` в столбец, разделители остаются

## 8. Section details

### 8.1 Marquee

Между Hero и Services. Бесконечная строка, скорость ~30s на круг:

```
LANDING — TELEGRAM BOT — CRM — AMOCRM — BITRIX — CUSTOM — DARK MODE — MOTION — ...
```

Mono-uppercase, accent + muted чередуются. На hover — пауза анимации.

### 8.2 Services

4 карточки в asymmetric grid (не 1×4, а 2+2 со смещением):

| Slot                       | Title                | Sub-line (mono)            |
|----------------------------|----------------------|----------------------------|
| Лендинги                   | `01 / landing`       | `5–10 дней`                |
| Telegram-боты              | `02 / bot`           | `сигналы, оплата, прогрев` |
| CRM (Bitrix / amoCRM)      | `03 / crm`           | `воронки, поля, дашборд`   |
| Индивидуальные решения     | `04 / custom`        | `по брифу`                 |

Каждая карточка: тонкая 1px рамка muted, на hover — рамка accent + tilt 4°. Внутри: цифра-mono сверху, Fraunces-заголовок, короткое описание Inter.

### 8.3 Cases (плейсхолдеры в трейдинг-тематике)

4-6 карточек. Идеи контента (можно подкрутить при имплементации):

1. **Signal-bot** для приватного канала — фильтр подписок + автоотправка сигналов
2. **Landing + воронка** под курс по трейдингу — заявка → amoCRM
3. **CRM-кастом** для команды трейдеров — поля под сделки, дашборд для ментора
4. **Корпоративный сайт** инвест-фонда — multi-page, многоязычность
5. **Copytrade-бот** — система дублирования сделок мастер-аккаунта
6. **Дашборд приват-клуба** — метрики подписок, статистика сделок

Метаданные карточки: год / срок / стек / accent-метрика (например, `+217% подписок`).

### 8.4 Process

5 шагов горизонтально (на мобиле — вертикально). Большие mono-цифры `01 → 05`, краткий Fraunces-заголовок и Inter-описание для каждого:

`01 / Бриф` → `02 / Концепт` → `03 / Демо` → `04 / Сборка` → `05 / Сдача`

### 8.5 About

Editorial-колонка ~400-500 знаков. Тон: уверенный, без хвастовства, no-bullshit. Подпись «— Даня, shou/web». Никаких упоминаний AI.

### 8.6 Contact

Полноэкранная секция. Huge Fraunces-заголовок «Готов обсудить?», под ним mono `→ https://t.me/Danya_shouuu`. Большая кнопка-блок «написать в telegram». Hover — accent fill.

Футер: тонкая 1px-линия сверху, в строку: `© 2025 — 2026` · `TEMAT FOUNDED` · `t.me/Danya_shouuu`.

## 9. Tech stack

| Component       | Choice                                                                                  |
|-----------------|-----------------------------------------------------------------------------------------|
| Bundler         | Vite 5 + React 18 + TypeScript                                                          |
| Styling         | Tailwind CSS v3 + CSS custom properties (палитра, font-stack в `:root`)                 |
| Animations      | `motion` v12+ (motion.dev) — `import { motion, useScroll, useTransform } from "motion/react"` |
| Fonts           | Fraunces (variable) + JetBrains Mono + Inter — Google Fonts CSS-импорт в `index.css`   |
| Video           | `public/hero.mp4` (копируется из `C:\Users\shouw\Downloads\15005548_1920_1080_24fps.mp4`) |
| Telegram config | `src/config.ts` экспортирует `TELEGRAM_URL = 'https://t.me/Danya_shouuu'`               |
| Dev server      | `npm install && npm run dev` → http://localhost:5173                                    |
| Project folder  | `D:\claude projects\temat-founded\`                                                     |

## 10. File layout (целевой)

```
temat-founded/
├── public/
│   └── hero.mp4
├── src/
│   ├── components/
│   │   ├── Header.tsx          ← навигация через "/"
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── Services.tsx
│   │   ├── Cases.tsx
│   │   ├── Process.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   └── useActiveSection.ts ← подсветка активного пункта меню
│   ├── config.ts               ← TELEGRAM_URL и пр.
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/superpowers/specs/
│   └── 2026-05-19-temat-founded-landing-design.md
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 11. Open questions

Нет. Все ключевые решения зафиксированы:
- Услуги — 4 направления (лендинги/боты/CRM/custom)
- Навигация — 5 пунктов через `/`
- Стиль — editorial dark, Fraunces + Mono
- CTA — прямая ссылка в Telegram
- Кейсы — стилизованные плейсхолдеры в трейдинг-тематике
- Цены — нет
- Telegram — https://t.me/Danya_shouuu
