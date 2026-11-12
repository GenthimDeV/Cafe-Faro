// Precio y moneda del plan: único sitio donde se definen.
// PENDIENTE (brief): precio y moneda definitivos.
export const plan = {
  price: 18,
  currency: '$',
} as const;

/** "18 $" — formato usado en la tarjeta del plan. */
export const priceLabel = `${plan.price} ${plan.currency}`;
