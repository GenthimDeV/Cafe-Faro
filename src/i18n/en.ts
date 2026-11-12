import type { Dictionary } from './es';
import { priceLabel } from '../data/plan';

export const en: Dictionary = {
  meta: {
    title: 'Café Faro · Specialty coffee subscription',
    description:
      'Specialty coffee roasted in small batches and delivered to your door every month.',
  },
  a11y: {
    skipToContent: 'Skip to content',
  },
  // Textos provisionales: la tarea 4.1 los revisa como EN nativo.
  header: {
    homeLabel: 'Café Faro, home',
    navLabel: 'Main',
    langLabel: 'Language',
    links: {
      how: 'How it works',
      coffees: 'The coffees',
      plan: 'The plan',
      faq: 'FAQ',
    },
    cta: 'Subscribe',
  },
  hero: {
    batch: 'Batch 07 · roasting on December 1st',
    titleBefore: 'Freshly roasted coffee, ',
    titleAccent: 'on a steady course',
    titleAfter: ' to your cup.',
    text: 'Every month we pick a specialty coffee, roast it in small batches and ship it within 72 hours. You just decide how to brew it.',
    cta: `Subscribe for ${priceLabel}/month`,
    secondary: 'See how it works',
  },
  about: {
    eyebrow: '01 — What Café Faro is',
    titleBefore: 'We roast little, ',
    titleAccent: 'on purpose.',
    text: 'We are a small roastery by the sea. We keep no stock: we roast just enough for our subscribers, so every bag arrives at its best.',
    cards: [
      {
        title: 'Roasted to order',
        text: 'We roast after the month’s orders close, never before.',
      },
      {
        title: 'Traceable origin',
        text: 'Every bag tells you which farm it comes from and who grew it.',
      },
      {
        title: 'Ground your way',
        text: 'Whole bean or ground for espresso, moka pot, filter or French press.',
      },
    ],
    batch: {
      label: 'BATCHES OF',
      value: '12 kg',
      text: 'Small enough to control every roast from start to finish.',
    },
  },
  how: {
    eyebrow: '02 — How it works',
    titleBefore: 'Three steps and the coffee ',
    titleAccent: 'arrives by itself.',
    intro:
      'You subscribe once. Every month, the same ritual: roast, pack and ship.',
    stepLabel: 'STEP',
    steps: [
      {
        title: 'Pick your grind',
        text: 'Tell us how you brew at home and we grind it for that method.',
      },
      {
        title: 'We roast your batch',
        text: 'In the first week of the month we roast the chosen coffee, curve by curve.',
      },
      {
        title: 'It arrives at your door',
        text: '250 g at your door with a tasting card and the recipe that suits it best.',
      },
    ],
    grinds: ['Espresso', 'Moka pot', 'Filter', 'Whole bean'],
    roastStages: ['CHARGE', '1ST CRACK', 'DROP'],
    roastLabel: 'Roast progress: 72%',
    transit: 'On its way · under 72 h from roasting',
  },
  coffees: {
    eyebrow: '03 — Which coffees are included',
    titleBefore: 'A different origin ',
    titleAccent: 'every month.',
    text: 'We rotate between three regions. All of them score 84 or higher on the SCA scale.',
    brand: 'FARO',
    profile: { acidity: 'Acidity', body: 'Body', sweetness: 'Sweetness' },
    scale: 'out of 100',
    items: [
      {
        month: 'JANUARY',
        name: 'Huila, Colombia',
        roast: 'Medium roast',
        text: 'Sweet and round. For anyone starting out in specialty coffee.',
        notes: ['Panela', 'Orange', 'Cocoa'],
      },
      {
        month: 'FEBRUARY',
        name: 'Sidamo, Ethiopia',
        roast: 'Light roast',
        text: 'Floral and bright. Shines as filter or V60.',
        notes: ['Jasmine', 'Lemon', 'Black tea'],
      },
      {
        month: 'MARCH',
        name: 'Cerrado, Brazil',
        roast: 'Medium-dark roast',
        text: 'Dense body and low acidity. Made for espresso and moka.',
        notes: ['Hazelnut', 'Chocolate', 'Caramel'],
      },
    ],
  },
  plan: {
    eyebrow: '04 — The plan',
    titleBefore: 'One plan. ',
    titleAccent: 'No fine print.',
    features: [
      '250 g of freshly roasted coffee every month',
      'Tasting card and a recipe for your method',
      'Shipping included, in under 72 h',
      'Pause or cancel from your account, free of charge',
    ],
    cardTitle: 'Faro subscription',
    badge: 'Monthly',
    perMonth: '/ month',
    nextRoastLabel: 'Next roast',
    nextRoastValue: 'DEC 01',
    cta: 'Subscribe now',
    demo: 'Demo: this button does not charge you or store any data.',
  },
};
