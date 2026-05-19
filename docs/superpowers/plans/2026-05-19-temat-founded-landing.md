# Temat founded — Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Премиум dark editorial-лендинг под нишу трейдеров, с видео-hero, навигацией через `/`, motion-анимациями и одним CTA в Telegram. Локальный dev-сервер из коробки.

**Architecture:** Single-page React приложение на Vite. Компоненты по секциям (Header, Hero, Marquee, Services, Cases, Process, About, Contact) + один хук `useActiveSection` для подсветки активного пункта. Все настройки (Telegram URL, список секций) — в `src/config.ts`. Видео хранится в `public/hero.mp4`. Анимации через `motion` (motion.dev), styling через Tailwind v3 + CSS-переменные.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind CSS v3, motion@^12 (motion.dev), Google Fonts (Fraunces variable + JetBrains Mono + Inter).

**Project root:** `D:\claude projects\temat-founded\` — папка уже существует (внутри только `docs/superpowers/specs/`).

---

## File Structure

```
temat-founded/
├── public/
│   └── hero.mp4                 ← копия из C:\Users\shouw\Downloads\15005548_1920_1080_24fps.mp4
├── src/
│   ├── components/
│   │   ├── Header.tsx           ← sticky nav через "/"
│   │   ├── Hero.tsx             ← видео + editorial-заголовок
│   │   ├── Marquee.tsx          ← бесконечная бегущая строка
│   │   ├── Services.tsx         ← 4 карточки услуг
│   │   ├── Cases.tsx            ← 6 стилизованных кейсов
│   │   ├── Process.tsx          ← 5 шагов работы
│   │   ├── About.tsx            ← editorial-эссе о Дане
│   │   └── Contact.tsx          ← CTA + футер
│   ├── hooks/
│   │   └── useActiveSection.ts  ← IntersectionObserver для подсветки nav
│   ├── config.ts                ← TELEGRAM_URL, SECTIONS, BRAND
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css                ← @tailwind + CSS-переменные палитры
│   └── vite-env.d.ts
├── index.html                   ← preconnect + Google Fonts CSS
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── package.json
```

---

### Task 1: Scaffold project files (package.json, configs, entry)

**Files to create:** `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `index.html`, `.gitignore`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "temat-founded",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "motion": "^12.38.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.5.3",
    "vite": "^5.4.1"
  }
}
```

- [ ] **Step 2: Create `vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, host: true },
})
```

- [ ] **Step 3: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 4: Create `tsconfig.node.json`**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 5: Create `index.html`**

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Temat founded — сайты для тех, кто торгует</title>
    <meta name="description" content="Лендинги, Telegram-боты, CRM и индивидуальные решения для трейдеров. shou/web." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,0..100;1,9..144,300..900,0..100&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Create `.gitignore`**

```
node_modules
dist
dist-ssr
*.local
.DS_Store
.vscode/*
!.vscode/extensions.json
.idea
*.log
.env
.env.local
```

- [ ] **Step 7: Install dependencies**

Run from `D:\claude projects\temat-founded\`:
```
npm install
```
Expected: creates `node_modules/`, generates `package-lock.json`, no errors.

- [ ] **Step 8: Init git and first commit**

```
git init
git add .
git commit -m "chore: scaffold vite + react + ts project"
```

---

### Task 2: Tailwind setup + global CSS palette

**Files:** `tailwind.config.js`, `postcss.config.js`, `src/index.css`, `src/vite-env.d.ts`

- [ ] **Step 1: Create `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0908',
        text: '#EAE4D9',
        accent: '#D4A574',
        muted: '#5C5750',
        surface: '#13110F',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Create `postcss.config.js`**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 3: Create `src/vite-env.d.ts`**

```ts
/// <reference types="vite/client" />
```

- [ ] **Step 4: Create `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0A0908;
  --text: #EAE4D9;
  --accent: #D4A574;
  --muted: #5C5750;
  --surface: #13110F;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: var(--accent);
  color: var(--bg);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 5: Commit**

```
git add tailwind.config.js postcss.config.js src/index.css src/vite-env.d.ts
git commit -m "chore: add tailwind config, palette and base CSS"
```

---

### Task 3: Project config, video asset, app entry point

**Files:** `src/config.ts`, `src/main.tsx`, `src/App.tsx`, `public/hero.mp4`

- [ ] **Step 1: Create `src/config.ts`**

```ts
export const TELEGRAM_URL = 'https://t.me/Danya_shouuu'
export const TELEGRAM_HANDLE = '@Danya_shouuu'
export const BRAND = 'TEMAT founded'

export const SECTIONS = [
  { id: 'services', label: 'услуги' },
  { id: 'cases', label: 'кейсы' },
  { id: 'process', label: 'процесс' },
  { id: 'about', label: 'о мне' },
  { id: 'contact', label: 'контакты' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']
```

- [ ] **Step 2: Create `src/main.tsx`**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 3: Create temporary `src/App.tsx` (smoke test)**

```tsx
export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text flex items-center justify-center">
      <h1 className="font-display text-6xl">Temat founded</h1>
    </div>
  )
}
```

- [ ] **Step 4: Copy video asset to public/**

Create the `public/` directory and copy the source video:
```
mkdir public
copy "C:\Users\shouw\Downloads\15005548_1920_1080_24fps.mp4" "public\hero.mp4"
```
Expected: `public/hero.mp4` exists.

- [ ] **Step 5: Start dev server and verify smoke screen**

Use `preview_start` with command `npm run dev` and cwd `D:\claude projects\temat-founded`. Take `preview_snapshot` — expect "Temat founded" heading visible.

- [ ] **Step 6: Commit**

```
git add src/config.ts src/main.tsx src/App.tsx public/hero.mp4
git commit -m "feat: app entry, config and hero video asset"
```

---

### Task 4: useActiveSection hook (IntersectionObserver)

**Files:** `src/hooks/useActiveSection.ts`

- [ ] **Step 1: Create hook**

```ts
import { useEffect, useState } from 'react'
import type { SectionId } from '../config'

export function useActiveSection(ids: readonly SectionId[]): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id as SectionId)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
```

- [ ] **Step 2: Commit**

```
git add src/hooks/useActiveSection.ts
git commit -m "feat: add useActiveSection hook"
```

---

### Task 5: Header with `/` navigation

**Files:** `src/components/Header.tsx`, modify `src/App.tsx`

- [ ] **Step 1: Create `src/components/Header.tsx`**

```tsx
import { motion, useScroll, useTransform } from 'motion/react'
import { BRAND, SECTIONS, TELEGRAM_URL } from '../config'
import { useActiveSection } from '../hooks/useActiveSection'

export function Header() {
  const { scrollY } = useScroll()
  const height = useTransform(scrollY, [0, 200], [88, 56])
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.7])
  const backdrop = useTransform(scrollY, [0, 200], ['blur(0px)', 'blur(20px)'])
  const background = useTransform(bgOpacity, (o) => `rgba(10, 9, 8, ${o})`)
  const borderOpacity = useTransform(scrollY, [0, 200], [0, 0.15])
  const borderColor = useTransform(borderOpacity, (o) => `rgba(92, 87, 80, ${o})`)

  const active = useActiveSection(SECTIONS.map((s) => s.id))

  return (
    <motion.header
      style={{
        height,
        backdropFilter: backdrop,
        WebkitBackdropFilter: backdrop,
        backgroundColor: background,
        borderBottom: '1px solid',
        borderBottomColor: borderColor,
      }}
      className="fixed top-0 inset-x-0 z-50 flex items-center px-6 md:px-12"
    >
      <div className="flex w-full items-center justify-between gap-6">
        <a
          href="#top"
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-text hover:text-accent transition-colors"
        >
          {BRAND}
        </a>

        <nav className="hidden md:flex items-center gap-3 font-mono text-[13px] lowercase">
          {SECTIONS.map((s, i) => (
            <span key={s.id} className="flex items-center gap-3">
              <a
                href={`#${s.id}`}
                className={`transition-colors duration-300 hover:text-accent ${
                  active === s.id ? 'text-accent' : 'text-text'
                }`}
              >
                {s.label}
              </a>
              {i < SECTIONS.length - 1 && (
                <span
                  aria-hidden
                  className="text-muted select-none transition-transform duration-500 hover:rotate-[15deg]"
                >
                  /
                </span>
              )}
            </span>
          ))}
        </nav>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-text hover:text-accent transition-colors"
        >
          tg ↗
        </a>
      </div>
    </motion.header>
  )
}
```

- [ ] **Step 2: Wire Header in `src/App.tsx`**

Replace `src/App.tsx` with:

```tsx
import { Header } from './components/Header'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      <Header />
      <main className="pt-32">
        <section id="services" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">services placeholder</span>
        </section>
        <section id="cases" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">cases placeholder</span>
        </section>
        <section id="process" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">process placeholder</span>
        </section>
        <section id="about" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">about placeholder</span>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">contact placeholder</span>
        </section>
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Visual verify**

`preview_eval` → `window.location.reload()`. `preview_snapshot` — expect header visible at top, 5 nav links with `/` separators. Scroll to second section via `preview_eval` → `document.getElementById('cases').scrollIntoView()` and `preview_screenshot` to confirm "кейсы" highlighted in accent color.

- [ ] **Step 4: Commit**

```
git add src/components/Header.tsx src/App.tsx
git commit -m "feat: sticky header with slash-separated nav"
```

---

### Task 6: Hero section with video background

**Files:** `src/components/Hero.tsx`, modify `src/App.tsx`

- [ ] **Step 1: Create `src/components/Hero.tsx`**

```tsx
import { motion } from 'motion/react'
import { TELEGRAM_URL } from '../config'

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster=""
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(10,9,8,0.45) 55%, rgba(10,9,8,0.9) 100%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg via-bg/60 to-transparent pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 pt-28 md:p-12 md:pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-text/60"
        >
          TEMAT // FOUNDED · 2025 —
        </motion.div>

        <div className="flex flex-col gap-10 max-w-6xl pb-12 md:pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(56px, 12vw, 180px)' }}
          >
            <span className="block">Сайты для тех,</span>
            <span
              className="block italic pl-[12%] md:pl-[28%]"
              style={{ fontVariationSettings: '"SOFT" 100' }}
            >
              кто торгует.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-text/60 max-w-md">
              Landing / Bot / CRM / Custom — built fast, built dark.
            </p>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border border-accent px-6 py-3 font-mono text-[12px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 hover:bg-accent hover:text-bg"
            >
              [ написать в telegram&nbsp;→ ]
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-6 md:right-12 z-10 hidden sm:flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-text/50"
      >
        <span style={{ writingMode: 'vertical-rl' }}>scroll ↓</span>
        <div className="relative h-[60px] w-px bg-muted/50 overflow-hidden">
          <motion.div
            className="absolute inset-x-0 h-1/3 bg-accent"
            animate={{ y: ['-100%', '300%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Wire Hero into `src/App.tsx`**

```tsx
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <section id="services" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">services placeholder</span>
        </section>
        <section id="cases" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">cases placeholder</span>
        </section>
        <section id="process" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">process placeholder</span>
        </section>
        <section id="about" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">about placeholder</span>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">contact placeholder</span>
        </section>
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Visual verify**

`preview_eval` → `window.location.reload()`. `preview_screenshot` — expect dark hero, video playing, "Сайты для тех, кто торгует." typography. Check `preview_console_logs` for errors.

- [ ] **Step 4: Commit**

```
git add src/components/Hero.tsx src/App.tsx
git commit -m "feat: hero section with video background and editorial title"
```

---

### Task 7: Marquee ticker

**Files:** `src/components/Marquee.tsx`, modify `src/App.tsx`

- [ ] **Step 1: Create `src/components/Marquee.tsx`**

```tsx
import { motion } from 'motion/react'

const ITEMS = [
  'LANDING',
  'TELEGRAM BOT',
  'CRM',
  'AMOCRM',
  'BITRIX',
  'CUSTOM',
  'DARK MODE',
  'MOTION',
  'EDITORIAL',
  'PREMIUM',
]

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="relative overflow-hidden border-y border-muted/25 py-6 group">
      <motion.div
        className="flex gap-16 whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.25em] will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className={i % 2 === 0 ? 'text-text' : 'text-muted'}>{item}</span>
            <span className="text-accent">—</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
```

- [ ] **Step 2: Wire Marquee into `src/App.tsx`** (insert after `<Hero />`)

```tsx
import { Marquee } from './components/Marquee'
// ...
<Hero />
<Marquee />
```

- [ ] **Step 3: Visual verify**

`preview_eval` → `window.location.reload()`. `preview_screenshot` after scrolling 100vh — expect bar with `LANDING — TELEGRAM BOT — ...` scrolling.

- [ ] **Step 4: Commit**

```
git add src/components/Marquee.tsx src/App.tsx
git commit -m "feat: infinite marquee ticker between hero and services"
```

---

### Task 8: Services section (4 cards, asymmetric grid)

**Files:** `src/components/Services.tsx`, modify `src/App.tsx`

- [ ] **Step 1: Create `src/components/Services.tsx`**

```tsx
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
    body: 'Боты для приватных каналов, подписок, авто-сигналов и серий прогрева. Платежи через Stripe/CryptoCloud/ЮKassa.',
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
        className="font-display font-light leading-[0.95] mb-20 md:mb-32"
        style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
      >
        <span className="block">Что я</span>
        <span
          className="block italic pl-[20%]"
          style={{ fontVariationSettings: '"SOFT" 100' }}
        >
          делаю.
        </span>
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
```

- [ ] **Step 2: Wire `Services` into `src/App.tsx`** — replace the `services` placeholder section.

Change:
```tsx
<section id="services" className="h-screen flex items-center justify-center">
  <span className="font-mono text-muted">services placeholder</span>
</section>
```
to:
```tsx
<Services />
```
And add at the top:
```tsx
import { Services } from './components/Services'
```

- [ ] **Step 3: Visual verify**

`preview_eval` → `window.location.reload()`, then `preview_eval` → `document.getElementById('services').scrollIntoView()`. `preview_screenshot` — expect "Что я делаю." display title, 4 cards with the second/fourth offset down (`md:translate-y-12`).

- [ ] **Step 4: Commit**

```
git add src/components/Services.tsx src/App.tsx
git commit -m "feat: services section with 4 offset cards"
```

---

### Task 9: Cases section (6 placeholder cards)

**Files:** `src/components/Cases.tsx`, modify `src/App.tsx`

- [ ] **Step 1: Create `src/components/Cases.tsx`**

```tsx
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
```

- [ ] **Step 2: Wire `Cases` into `src/App.tsx`** — replace `cases` placeholder, add import.

- [ ] **Step 3: Visual verify**

`preview_eval` → `window.location.reload()`, then scroll to `#cases`. `preview_screenshot` — expect grid of 6 cards 4:5 ratio with accent metric numbers like "+217%".

- [ ] **Step 4: Commit**

```
git add src/components/Cases.tsx src/App.tsx
git commit -m "feat: cases section with 6 trader-niche placeholders"
```

---

### Task 10: Process section (5 steps)

**Files:** `src/components/Process.tsx`, modify `src/App.tsx`

- [ ] **Step 1: Create `src/components/Process.tsx`**

```tsx
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
    body: 'Финальная вёрстка, анимации, интеграция форм/CRM/ботов. Каждый день — апдейт.',
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
```

- [ ] **Step 2: Wire `Process` into `src/App.tsx`** — replace `process` placeholder, add import.

- [ ] **Step 3: Visual verify**

`preview_eval` → reload, scroll to `#process`. `preview_screenshot` — expect 5 columns desktop, big accent `01..05` numbers.

- [ ] **Step 4: Commit**

```
git add src/components/Process.tsx src/App.tsx
git commit -m "feat: process section with 5 steps"
```

---

### Task 11: About section

**Files:** `src/components/About.tsx`, modify `src/App.tsx`

- [ ] **Step 1: Create `src/components/About.tsx`**

```tsx
import { motion } from 'motion/react'

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-muted/20"
    >
      <div className="mb-16 md:mb-24 flex items-start justify-between gap-8">
        <div className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          04 / о мне
        </div>
        <div className="hidden md:block font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          — Даня
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 font-display font-light leading-[0.95]"
          style={{ fontSize: 'clamp(40px, 5vw, 80px)' }}
        >
          <span className="block">Не агентство.</span>
          <span
            className="block italic pl-[10%]"
            style={{ fontVariationSettings: '"SOFT" 100' }}
          >
            Один человек,
          </span>
          <span className="block pl-[20%]">один проект — рядом.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-4 md:col-start-9 flex flex-col gap-6 font-sans text-text/80 leading-relaxed"
        >
          <p>
            Делаю сайты, ботов и кастомные тулзы для трейдеров — тех, кто торгует и
            кому нужен инструмент, а не «как у всех». Без агентств, без менеджеров,
            без бюрократии.
          </p>
          <p>
            Каждый проект веду сам: от первого скетча до деплоя. Спокойно отвечаю в
            Telegram, держу сроки, не теряюсь после оплаты.
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted pt-4 border-t border-muted/20">
            — Даня, shou/web
          </p>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Wire `About` into `src/App.tsx`** — replace `about` placeholder, add import.

- [ ] **Step 3: Visual verify**

`preview_eval` → reload, scroll to `#about`. `preview_screenshot` — expect display-heading "Не агентство. Один человек, один проект — рядом." on left, paragraph block on right.

- [ ] **Step 4: Commit**

```
git add src/components/About.tsx src/App.tsx
git commit -m "feat: about section — editorial essay"
```

---

### Task 12: Contact CTA + footer

**Files:** `src/components/Contact.tsx`, modify `src/App.tsx`

- [ ] **Step 1: Create `src/components/Contact.tsx`**

```tsx
import { motion } from 'motion/react'
import { TELEGRAM_HANDLE, TELEGRAM_URL } from '../config'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-muted/20"
    >
      <div className="mb-16 md:mb-24 flex items-start justify-between gap-8">
        <div className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          05 / контакты
        </div>
        <div className="hidden md:block font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          один канал
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="font-display font-light leading-[0.9] mb-12 md:mb-20"
        style={{ fontSize: 'clamp(64px, 12vw, 180px)' }}
      >
        <span className="block">Готов</span>
        <span
          className="block italic pl-[20%]"
          style={{ fontVariationSettings: '"SOFT" 100' }}
        >
          обсудить?
        </span>
      </motion.h2>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        href={TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="group block border border-accent p-8 md:p-12 mb-20 md:mb-28 transition-colors duration-300 hover:bg-accent"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-text/60 group-hover:text-bg/60 mb-3 transition-colors">
              telegram → {TELEGRAM_HANDLE}
            </div>
            <div className="font-display font-light text-4xl md:text-6xl text-accent group-hover:text-bg leading-tight transition-colors">
              написать в telegram
            </div>
          </div>
          <div className="font-mono text-3xl text-accent group-hover:text-bg transition-colors">
            ↗
          </div>
        </div>
      </motion.a>

      <footer className="pt-8 border-t border-muted/30 flex flex-col md:flex-row gap-4 md:gap-8 justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
        <span>© 2025 — 2026</span>
        <span>TEMAT founded</span>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
        >
          t.me/Danya_shouuu
        </a>
      </footer>
    </section>
  )
}
```

- [ ] **Step 2: Wire `Contact` into `src/App.tsx`** — replace `contact` placeholder, add import.

- [ ] **Step 3: Visual verify**

`preview_eval` → reload, scroll to `#contact`. `preview_screenshot` — expect "Готов обсудить?" display title and CTA block "написать в telegram" with accent border.

- [ ] **Step 4: Commit**

```
git add src/components/Contact.tsx src/App.tsx
git commit -m "feat: contact CTA block and footer"
```

---

### Task 13: Final wire, full-page polish, build check

**Files:** `src/App.tsx`

- [ ] **Step 1: Replace `src/App.tsx` with final composition**

```tsx
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Cases } from './components/Cases'
import { Process } from './components/Process'
import { About } from './components/About'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Cases />
        <Process />
        <About />
        <Contact />
      </main>
    </div>
  )
}
```

- [ ] **Step 2: Visual smoke pass on the whole page**

`preview_eval` → `window.location.reload()`.

Scroll through each anchor and screenshot:
1. `preview_eval` → `document.getElementById('top').scrollIntoView()` → `preview_screenshot`
2. `preview_eval` → `document.getElementById('services').scrollIntoView()` → `preview_screenshot`
3. `preview_eval` → `document.getElementById('cases').scrollIntoView()` → `preview_screenshot`
4. `preview_eval` → `document.getElementById('process').scrollIntoView()` → `preview_screenshot`
5. `preview_eval` → `document.getElementById('about').scrollIntoView()` → `preview_screenshot`
6. `preview_eval` → `document.getElementById('contact').scrollIntoView()` → `preview_screenshot`

Confirm: header active-link follows scroll position (accent color jumps between nav items).

`preview_console_logs` — expect no errors (warnings from `<source>` codec are OK).
`preview_network` — expect `hero.mp4` request status 200/206.

- [ ] **Step 3: Responsive check at mobile width**

`preview_resize` to 390×844 (iPhone 14). `preview_screenshot` of hero — expect title scales down, CTA still visible, scroll-indicator hidden on small screens. Scroll through page — no horizontal scroll.

`preview_resize` back to desktop 1440×900.

- [ ] **Step 4: Production build check**

Run from project root:
```
npm run build
```
Expected: TypeScript compiles, Vite outputs to `dist/`, no errors. Reports bundle sizes.

- [ ] **Step 5: Commit**

```
git add src/App.tsx
git commit -m "feat: compose full landing — all sections wired"
```

- [ ] **Step 6: Final report**

Confirm to the user:
- Local dev: `npm run dev` → http://localhost:5173
- Production build: `npm run build` → `dist/`
- Telegram URL is in `src/config.ts` — change in one place if needed.

---

## Self-Review

Walked through the plan against the spec:

**Spec coverage check:**
- §4 page structure (Hero, Marquee, Services, Cases, Process, About, Contact) → tasks 6-12 ✓
- §5 visual system (palette, typography, motion) → tasks 1, 2 + applied throughout ✓
- §6 hero with video → task 6 ✓
- §7 nav through "/" → task 5 ✓
- §8 section details → tasks 7-12 ✓
- §9 tech stack → tasks 1, 2 ✓
- §10 file layout → all tasks adhere ✓
- §11 open questions: none — nothing dangling

**Placeholder check:** no `TBD`, no `add appropriate error handling`, no `similar to Task N` — every step has concrete code or concrete command.

**Type consistency:** `SectionId` defined in `src/config.ts` (Task 3), consumed by `useActiveSection` (Task 4) and `Header` (Task 5) — signatures match. `TELEGRAM_URL` / `TELEGRAM_HANDLE` consistent between config and consumers.

**Scope:** one focused plan, ~13 small tasks, single deliverable (working local landing).
