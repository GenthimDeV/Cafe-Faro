// Datos no textuales de los cafés (mismo orden que `coffees.items` en los diccionarios).
// Perfil en escala 0–100.
export interface Coffee {
  /** Código de país decorativo de la tarjeta. */
  code: string;
  /** Color de origen (token definido en global.css). */
  color: string;
  sca: number;
  profile: { acidity: number; body: number; sweetness: number };
  /** Giro de la bolsa en grados (decorativo). */
  tilt: number;
}

export const coffees: Coffee[] = [
  {
    code: 'CO',
    color: 'var(--color-origin-colombia)',
    sca: 86,
    profile: { acidity: 50, body: 65, sweetness: 85 },
    tilt: -4,
  },
  {
    code: 'ET',
    color: 'var(--color-origin-ethiopia)',
    sca: 88,
    profile: { acidity: 90, body: 40, sweetness: 70 },
    tilt: 3,
  },
  {
    code: 'BR',
    color: 'var(--color-origin-brazil)',
    sca: 84,
    profile: { acidity: 30, body: 92, sweetness: 75 },
    tilt: -2,
  },
];
