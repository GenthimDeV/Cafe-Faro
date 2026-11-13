import { priceLabel } from '../data/plan';

export type Dictionary = {
  meta: { title: string; description: string; ogImageAlt: string };
  a11y: { skipToContent: string };
  header: {
    homeLabel: string;
    navLabel: string;
    langLabel: string;
    langNames: { es: string; en: string };
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
  marquee: { items: string[] };
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
  faq: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    titleBefore: string;
    titleAccent: string;
    text: string;
    cta: string;
    demo: string;
  };
  subscribe: {
    title: string;
    priceNote: string;
    demo: string;
    close: string;
    closeLabel: string;
    progress: string;
    steps: { coffee: string; delivery: string; summary: string };
    coffeeLegend: string;
    grindLegend: string;
    back: string;
    next: string;
    choiceError: string;
    delivery: {
      name: string;
      email: string;
      address: string;
      postal: string;
      city: string;
      required: string;
      emailInvalid: string;
      postalInvalid: string;
    };
    summary: {
      coffee: string;
      grind: string;
      delivery: string;
      price: string;
      priceValue: string;
      edit: string;
      editCoffee: string;
      editDelivery: string;
      confirm: string;
      confirming: string;
    };
    done: { title: string; text: string; demo: string };
  };
  footer: {
    label: string;
    brand: string;
    copyright: string;
    madeBy: string;
    demoNote: string;
  };
};

export const es: Dictionary = {
  meta: {
    title: 'Café Faro · Suscripción de café de especialidad',
    description:
      'Café de especialidad tostado en pequeños lotes y enviado a tu casa cada mes.',
    ogImageAlt: 'Logotipo de Café Faro: un faro con su haz de luz ámbar sobre el mar de noche.',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
  },
  header: {
    homeLabel: 'Café Faro, inicio',
    navLabel: 'Principal',
    langLabel: 'Idioma',
    langNames: { es: 'Español', en: 'English' },
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
  marquee: {
    items: [
      'Huila, Colombia',
      'Sidamo, Etiopía',
      'Cerrado, Brasil',
      'Tostado por encargo',
      'Envío en 72 h',
      '84+ puntos SCA',
    ],
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
    roastStages: ['GRANO VERDE', 'AROMA', 'TOSTADO'],
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
  faq: {
    eyebrow: '05 — Preguntas frecuentes',
    titleBefore: 'Lo que suelen ',
    titleAccent: 'preguntarnos.',
    items: [
      {
        q: '¿Cuándo llega mi primera bolsa?',
        a: 'Tostamos la primera semana de cada mes y enviamos al terminar. Recibirás tu café en menos de 72 horas desde el tueste.',
      },
      {
        q: '¿Puedo cambiar la molienda?',
        a: 'Sí. Puedes elegir espresso, moka, filtro o grano entero y cambiarlo antes de cada tueste.',
      },
      {
        q: '¿Cómo pauso o cancelo?',
        a: 'Desde tu cuenta, en un clic y sin coste. Si cancelas antes del cierre de pedidos, no se tuesta tu lote.',
      },
      {
        q: '¿Cuánto café incluye cada envío?',
        a: 'Una bolsa de 250 g, suficiente para unas 14 tazas de filtro o unos 12 espressos dobles.',
      },
      {
        q: '¿Esto es una tienda real?',
        a: 'No. Café Faro es una marca ficticia creada como demo de portfolio: no hay cobros, pedidos ni datos guardados.',
      },
    ],
  },
  finalCta: {
    titleBefore: 'Tu próxima taza ya tiene ',
    titleAccent: 'rumbo.',
    text: 'Suscríbete hoy y recibe el lote de diciembre recién tostado.',
    cta: `Suscribirme por ${priceLabel}/mes`,
    demo: 'Demo: este botón no realiza cobros ni guarda datos.',
  },
  subscribe: {
    title: 'Suscripción Faro',
    priceNote: `${priceLabel} al mes · 250 g de café recién tostado`,
    demo: 'Demo: no se realiza ningún cobro ni se guardan datos.',
    close: 'Cerrar',
    closeLabel: 'Cerrar el diálogo de suscripción',
    progress: 'Paso {n} de {total}',
    steps: { coffee: 'Tu café', delivery: 'Datos de entrega', summary: 'Resumen' },
    coffeeLegend: 'Elige tu café',
    grindLegend: 'Elige tu molienda',
    back: 'Atrás',
    next: 'Siguiente',
    choiceError: 'Elige un café y una molienda para continuar.',
    delivery: {
      name: 'Nombre y apellidos',
      email: 'Correo electrónico',
      address: 'Dirección',
      postal: 'Código postal',
      city: 'Ciudad',
      required: 'Este campo es obligatorio.',
      emailInvalid: 'Escribe un correo válido, por ejemplo nombre@correo.com.',
      postalInvalid: 'El código postal debe tener entre 4 y 10 letras o números.',
    },
    summary: {
      coffee: 'Café',
      grind: 'Molienda',
      delivery: 'Entrega',
      price: 'Precio',
      priceValue: `${priceLabel} al mes`,
      edit: 'Editar',
      editCoffee: 'Editar café y molienda',
      editDelivery: 'Editar datos de entrega',
      confirm: 'Confirmar suscripción',
      confirming: 'Confirmando…',
    },
    done: {
      title: '¡Gracias, {name}!',
      text: 'Tu suscripción Faro está lista… en esta demo.',
      demo: 'Es una simulación: no se ha realizado ningún cobro ni se ha guardado ningún dato.',
    },
  },
  footer: {
    label: 'Pie de página',
    brand: 'FARO',
    copyright: 'Café Faro, marca ficticia.',
    madeBy: 'Diseño y desarrollo por',
    demoNote: 'Proyecto de portfolio, sin fines comerciales.',
  },
};
