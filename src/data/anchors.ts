import type { Locale } from '../i18n';

export type AnchorKey = 'top' | 'content' | 'how' | 'coffees' | 'plan' | 'faq';

// Anclas (URL con #) en el idioma de cada versión.
export const anchors: Record<Locale, Record<AnchorKey, string>> = {
  es: {
    top: 'inicio',
    content: 'contenido',
    how: 'como-funciona',
    coffees: 'cafes',
    plan: 'plan',
    faq: 'preguntas',
  },
  en: {
    top: 'top',
    content: 'content',
    how: 'how-it-works',
    coffees: 'coffees',
    plan: 'plan',
    faq: 'faq',
  },
};
