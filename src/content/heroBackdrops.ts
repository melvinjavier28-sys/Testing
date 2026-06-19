/**
 * Hero backdrop image sets — industry-matched photo collages shown behind premium-hero sections.
 * Each set mixes a location/people shot with a terminal-in-use shot so the page reads as
 * purpose-built for that vertical. Images live in public/hero/ and render faded + grayscale
 * via HeroBackdrop, so the navy brand stays dominant.
 *
 * To add a scene: drop the images in public/hero/industries/ and reference them here.
 * Missing files simply don't render — the hero gracefully falls back to the gradient.
 */

// Reusable transaction/device shots already hosted from the homepage hero.
const TXN = '/hero/transaction.jpg'; // PAX checkout, card tap
const VP800 = '/hero/valor-vp800.png'; // Valor VP800 terminal
const STORE = '/hero/store-en.jpg'; // US convenience store interior

export const heroBackdrops = {
  // Homepage default / generic pages: people + device + storefront.
  default: [TXN, VP800, STORE],

  // ── Industry verticals (location shot + terminal-in-use shot) ──
  'gas-stations': ['/hero/industries/gas-station.jpg', '/hero/industries/gas-cstore.jpg', TXN],
  restaurants: ['/hero/industries/restaurant.jpg', '/hero/industries/restaurant-pos.jpg', VP800],
  retail: ['/hero/industries/retail.jpg', '/hero/industries/retail-pos.jpg', TXN],
  grocery: ['/hero/industries/grocery.jpg', '/hero/industries/grocery-pos.jpg', STORE],
  lodging: ['/hero/industries/hotel.jpg', '/hero/industries/hotel-pos.jpg', VP800],
  ecommerce: ['/hero/industries/ecommerce.jpg', '/hero/industries/ecommerce-pay.jpg', TXN],

  // ── Other top-level pages ──
  products: [VP800, '/hero/industries/retail-pos.jpg', TXN],
  partners: ['/hero/industries/partners.jpg', '/hero/industries/retail.jpg', TXN],
  company: ['/hero/industries/team.jpg', STORE, TXN],
  contact: ['/hero/industries/support.jpg', TXN, STORE],
} as const;

export type HeroBackdropKey = keyof typeof heroBackdrops;

/** Resolve a named set, falling back to the generic collage for unknown keys. */
export function getHeroBackdrop(key?: string): readonly string[] {
  if (key && key in heroBackdrops) {
    return heroBackdrops[key as HeroBackdropKey];
  }
  return heroBackdrops.default;
}
