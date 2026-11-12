export type Dictionary = {
  meta: { title: string; description: string };
  a11y: { skipToContent: string };
  header: {
    homeLabel: string;
    navLabel: string;
    langLabel: string;
    links: { how: string; coffees: string; plan: string; faq: string };
    cta: string;
  };
  hero: {
    batch: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    text: string;
    cta: string;
    secondary: string;
  };
};

export const es: Dictionary = {
  meta: {
    title: 'Café Faro · Suscripción de café de especialidad',
    description:
      'Café de especialidad tostado en pequeños lotes y enviado a tu casa cada mes.',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
  },
  header: {
    homeLabel: 'Café Faro, inicio',
    navLabel: 'Principal',
    langLabel: 'Idioma',
    links: {
      how: 'Cómo funciona',
      coffees: 'Los cafés',
      plan: 'El plan',
      faq: 'Preguntas',
    },
    cta: 'Suscribirme',
  },
  hero: {
    batch: 'Lote 07 · tostando el 1 de diciembre',
    titleBefore: 'Café recién tostado, con ',
    titleAccent: 'rumbo fijo',
    titleAfter: ' a tu taza.',
    text: 'Cada mes elegimos un café de especialidad, lo tostamos en lotes pequeños y te lo enviamos en menos de 72 horas. Tú solo decides cómo prepararlo.',
    cta: 'Suscribirme por 18 $/mes',
    secondary: 'Ver cómo funciona',
  },
};
