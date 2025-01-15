import type { Lang } from '@/dictionaries/locales'

export const langSelectorOptions: LangSelectorOption[] = [
  { name: 'English', code: 'en' },
  { name: 'Español', code: 'es' },
  { name: '中文', code: 'zh' },
  { name: 'Bahasa Indonesia', code: 'id' },
  { name: 'Tiếng Việt', code: 'vi' },
  { name: '한국어', code: 'ko' },
  { name: 'Português', code: 'pt' },
  { name: 'Français', code: 'fr' },
  // { name: 'Deutsch', code: 'de' },
  // { name: '日本語', code: 'ja' },
  // { name: 'Русский', code: 'ru' },
  // { name: 'Italiano', code: 'it' },
  // { name: 'Türkçe', code: 'tr' },
  // { name: 'हिन्दी', code: 'hi' }
]

export interface LangSelectorOption {
  name: string
  code: Lang
}
