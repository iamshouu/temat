export const TELEGRAM_URL = 'https://t.me/Iamshouu'
export const TELEGRAM_HANDLE = '@Iamshouu'
export const BRAND = 'TematFoundation'

export const SECTIONS = [
  { id: 'services', label: 'услуги' },
  { id: 'process', label: 'процесс' },
  { id: 'about', label: 'о нас' },
  { id: 'contact', label: 'контакты' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']
