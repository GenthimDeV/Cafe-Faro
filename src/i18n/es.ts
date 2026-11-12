import { priceLabel } from '../data/plan';

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
  about: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    text: string;
    cards: { title: string; text: string }[];
    batch: { label: string; value: string; text: string };
  };
  how: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    intro: string;
    stepLabel: string;
    steps: { title: string; text: string }[];
    grinds: string[];
    roastStages: string[];
    roastLabel: string;
    transit: string;
  };
  coffees: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    text: string;
    brand: string;
    profile: { acidity: string; body: string; sweetness: string };
    scale: string;
    items: {
      month: string;
      name: string;
      roast: string;
      text: string;
      notes: string[];
    }[];
  };
  plan: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    features: string[];
    cardTitle: string;
    badge: string;
    perMonth: string;
    nextRoastLabel: string;
    nextRoastValue: string;
    cta: string;
    demo: string;
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
    cta: `Suscribirme por ${priceLabel}/mes`,
    secondary: 'Ver cómo funciona',
  },
  about: {
    eyebrow: '01 — Qué es Café Faro',
    titleBefore: 'Tostamos poco, ',
    titleAccent: 'a propósito.',
    text: 'Somos un tostadero pequeño frente al mar. No guardamos stock: tostamos lo justo para quienes están suscritos, así cada bolsa llega en su mejor momento.',
    cards: [
      {
        title: 'Tostado por encargo',
        text: 'Tostamos después de cerrar los pedidos del mes, nunca antes.',
      },
      {
        title: 'Origen trazable',
        text: 'Cada bolsa dice de qué finca viene y quién lo cultivó.',
      },
      {
        title: 'Molido a tu medida',
        text: 'En grano o molido para espresso, moka, filtro o prensa.',
      },
    ],
    batch: {
      label: 'LOTES DE',
      value: '12 kg',
      text: 'Pequeños para controlar cada tueste de principio a fin.',
    },
  },
  how: {
    eyebrow: '02 — Cómo funciona',
    titleBefore: 'Tres pasos y el café ',
    titleAccent: 'llega solo.',
    intro:
      'Te suscribes una vez. Cada mes, el mismo ritual: tostar, empacar y enviar.',
    stepLabel: 'PASO',
    steps: [
      {
        title: 'Elige tu molienda',
        text: 'Dinos cómo preparas el café en casa y ajustamos el molido para ese método.',
      },
      {
        title: 'Tostamos tu lote',
        text: 'La primera semana del mes tostamos el café elegido, curva por curva.',
      },
      {
        title: 'Lo recibes en casa',
        text: '250 g en tu puerta con una ficha de cata y la receta que mejor le va.',
      },
    ],
    grinds: ['Espresso', 'Moka', 'Filtro', 'Grano'],
    roastStages: ['CARGA', '1.er CRACK', 'SALIDA'],
    roastLabel: 'Progreso del tueste: 72 %',
    transit: 'En camino · menos de 72 h desde el tueste',
  },
  coffees: {
    eyebrow: '03 — Qué cafés incluye',
    titleBefore: 'Un origen distinto ',
    titleAccent: 'cada mes.',
    text: 'Rotamos entre tres regiones. Todos puntúan 84 o más en la escala SCA.',
    brand: 'FARO',
    profile: { acidity: 'Acidez', body: 'Cuerpo', sweetness: 'Dulzor' },
    scale: 'de 100',
    items: [
      {
        month: 'ENERO',
        name: 'Huila, Colombia',
        roast: 'Tueste medio',
        text: 'Dulce y redondo. Para quien empieza en el café de especialidad.',
        notes: ['Panela', 'Naranja', 'Cacao'],
      },
      {
        month: 'FEBRERO',
        name: 'Sidamo, Etiopía',
        roast: 'Tueste claro',
        text: 'Floral y brillante. Luce mejor en filtro o en V60.',
        notes: ['Jazmín', 'Limón', 'Té negro'],
      },
      {
        month: 'MARZO',
        name: 'Cerrado, Brasil',
        roast: 'Tueste medio-oscuro',
        text: 'Cuerpo denso y poca acidez. Hecho para espresso y moka.',
        notes: ['Avellana', 'Chocolate', 'Caramelo'],
      },
    ],
  },
  plan: {
    eyebrow: '04 — El plan',
    titleBefore: 'Un solo plan. ',
    titleAccent: 'Sin letra pequeña.',
    features: [
      '250 g de café recién tostado cada mes',
      'Ficha de cata y receta para tu método',
      'Envío incluido en menos de 72 h',
      'Pausa o cancela desde tu cuenta, sin coste',
    ],
    cardTitle: 'Suscripción Faro',
    badge: 'Mensual',
    perMonth: '/ mes',
    nextRoastLabel: 'Próximo tueste',
    nextRoastValue: '01 DIC',
    cta: 'Suscribirme ahora',
    demo: 'Demo: este botón no realiza cobros ni guarda datos.',
  },
};
