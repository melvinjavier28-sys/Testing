// Equipment catalog — the hardware National e-Payment actually sells.
// Images for Valor and Ingenico are self-hosted under /public/products.
// Brands without a sourced photo render a branded placeholder tile
// (see ProductImage component) — drop an official photo in /public/products
// and set `image` to swap it in.

export interface Product {
  slug: string;
  name: string;
  type: string;
  blurb: string;
  image?: string; // path under /public, e.g. /products/valor/vp800.png
}

export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  externalUrl: string;
  products: Product[];
}

export const brands: Brand[] = [
  {
    slug: 'valor',
    name: 'Valor PayTech',
    tagline: 'Smart Android terminals and PIN pads for every counter.',
    externalUrl: 'https://valorpaytech.com/',
    products: [
      { slug: 'vl100-pro', name: 'VL100 Pro', type: 'Countertop Terminal', blurb: 'Compact countertop smart terminal for everyday retail payments.', image: '/products/valor/vl100-pro.png' },
      { slug: 'vp100', name: 'VP100', type: 'Countertop POS', blurb: 'Touchscreen countertop POS with built-in customer engagement.', image: '/products/valor/vp100.png' },
      { slug: 'vp350', name: 'VP350', type: 'Countertop POS', blurb: 'Full touchscreen POS for restaurants and retail.', image: '/products/valor/vp350.png' },
      { slug: 'vp550c', name: 'VP550C', type: 'Next-Gen POS', blurb: 'Cloud-ready next-gen POS built for business growth.', image: '/products/valor/vp550c.png' },
      { slug: 'vl300', name: 'VL300', type: 'PIN Pad', blurb: 'Budget-friendly, security-first PIN pad.', image: '/products/valor/vl300.png' },
      { slug: 'vp300', name: 'VP300', type: 'PIN Pad', blurb: 'Compact PIN pad for small-business checkout.', image: '/products/valor/vp300.png' },
      { slug: 'vp300-pro', name: 'VP300 Pro', type: 'Mobile PIN Pad', blurb: 'Portable contactless PIN pad for pop-ups and hospitality.', image: '/products/valor/vp300-pro.png' },
      { slug: 'vl110', name: 'VL110', type: 'Wireless Terminal', blurb: 'Wireless terminal for on-the-go and startup businesses.', image: '/products/valor/vl110.png' },
      { slug: 'vl550', name: 'VL550', type: 'Next-Gen Terminal', blurb: 'Smart terminal with on-screen signature capture.', image: '/products/valor/vl550.png' },
      { slug: 'vp550', name: 'VP550', type: 'Next-Gen POS', blurb: 'Accepts tap, dip, swipe, and QR-code payments.', image: '/products/valor/vp550.png' },
      { slug: 'vp550e', name: 'VP550E', type: 'Android POS', blurb: 'Android POS with extended enterprise features.', image: '/products/valor/vp550e.png' },
      { slug: 'vp800', name: 'VP800', type: 'Next-Gen Terminal', blurb: 'Future-proof terminal for high-volume businesses.', image: '/products/valor/vp800.png' },
      { slug: 'rckt', name: 'RCKT', type: 'Mobile Reader', blurb: 'Pocket-size mobile POS to take payments anywhere.', image: '/products/valor/rckt.png' },
    ],
  },
  {
    slug: 'clover',
    name: 'Clover',
    tagline: 'All-in-one POS systems that scale from a single counter to a full floor.',
    externalUrl: 'https://www.clover.com/shop',
    products: [
      { slug: 'station-duo', name: 'Station Duo', type: 'Countertop POS', blurb: 'Dual-screen countertop POS for high-volume counters.' },
      { slug: 'station-solo', name: 'Station Solo', type: 'Countertop POS', blurb: 'All-in-one countertop POS with a large merchant display.' },
      { slug: 'mini', name: 'Clover Mini', type: 'Compact POS', blurb: 'Space-saving countertop POS that does it all.' },
      { slug: 'flex', name: 'Clover Flex', type: 'Handheld POS', blurb: 'Handheld all-in-one for tableside and line-busting.' },
      { slug: 'compact', name: 'Clover Compact', type: 'Compact Terminal', blurb: 'Small-footprint smart terminal for tight counters.' },
      { slug: 'go', name: 'Clover Go', type: 'Mobile Reader', blurb: 'Contactless card reader for your phone or tablet.' },
      { slug: 'kiosk', name: 'Clover Kiosk', type: 'Self-Service', blurb: 'Self-ordering kiosk for quick-service and retail.' },
    ],
  },
  {
    slug: 'pax',
    name: 'PAX Technology',
    tagline: 'Android smart terminals, PIN pads, and unattended devices.',
    externalUrl: 'https://www.pax.us/products/',
    products: [
      { slug: 'a920-pro', name: 'A920 Pro', type: 'Smart Mobile Terminal', blurb: 'Premium Android smart terminal with a vivid touchscreen.', image: '/products/pax/a920-pro.png' },
      { slug: 'a920-max', name: 'A920 MAX', type: 'Smart Mobile Terminal', blurb: 'Large-screen Android terminal for high-volume use.', image: '/products/pax/a920-max.png' },
      { slug: 'a80', name: 'A80', type: 'Countertop Terminal', blurb: 'Sleek countertop terminal that saves counter space.', image: '/products/pax/a80.png' },
      { slug: 'a35', name: 'A35', type: 'PIN Pad', blurb: 'Interactive multilane PIN pad for retail checkout.', image: '/products/pax/a35.png' },
      { slug: 'a800', name: 'A800', type: 'Mobile Terminal', blurb: 'Lightweight Android mobile payment terminal.', image: '/products/pax/a800.png' },
      { slug: 'aries8', name: 'Aries8', type: 'Smart PIN Pad', blurb: 'Interactive customer-facing smart PIN pad.' },
      { slug: 'a77', name: 'A77', type: 'Mobile Terminal', blurb: 'Compact handheld terminal for field payments.', image: '/products/pax/a77.png' },
      { slug: 'im30', name: 'IM30', type: 'Unattended Terminal', blurb: 'Rugged unattended terminal for self-service kiosks.' },
    ],
  },
  {
    slug: 'ingenico',
    name: 'Ingenico',
    tagline: 'TETRA multilane terminals built for fast retail checkout.',
    externalUrl: 'https://ingenico.com/us-en/products-services/payment-terminals/tetra/lane7000-8000',
    products: [
      { slug: 'lane-7000', name: 'Lane/7000', type: 'Multilane Terminal', blurb: '5-inch touchscreen multilane checkout terminal.', image: '/products/ingenico/lane-8000.png' },
      { slug: 'lane-8000', name: 'Lane/8000', type: 'Multilane Terminal', blurb: '7-inch touchscreen flagship multilane terminal.', image: '/products/ingenico/lane-8000.png' },
    ],
  },
  {
    slug: 'verifone',
    name: 'Verifone',
    tagline: 'Consumer-facing PIN pads for multilane retail.',
    externalUrl: 'https://www.verifone.com/en-us/hardware-product/verifone-m400',
    products: [
      { slug: 'm400', name: 'M400', type: 'Multilane PIN Pad', blurb: '5-inch multi-touch consumer-facing PIN pad.', image: '/products/verifone/m400.jpg' },
    ],
  },
];
