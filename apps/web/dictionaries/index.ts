import 'server-only'

const dictionaries: { [key: string]: () => Promise<any> } = {
  en: () => import('./en').then((module) => module.default),
  es: () => import('./es').then((module) => module.default),
  fr: () => import('./fr').then((module) => module.default),
  id: () => import('./id').then((module) => module.default),
  ko: () => import('./ko').then((module) => module.default),
  pt: () => import('./pt').then((module) => module.default),
  vi: () => import('./vi').then((module) => module.default),
  zh: () => import('./zh').then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<any> => {
  if (!dictionaries[locale]) {
    throw new Error(`No dictionary found for locale: ${locale}`)
  }
  return dictionaries[locale]()
}
