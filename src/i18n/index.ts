import { es, type Dictionary } from './es';
import { en } from './en';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function useTranslations(lang: Locale): Dictionary {
  return dictionaries[lang];
}
