export interface CatalogProduct {
  name: string;
  price?: number;
  callForPrice?: boolean;
  slug?: string;
}

export interface CatalogCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  products: CatalogProduct[];
}

export const terminals: CatalogCategory = {
  id: 'terminals',
  slug: 'terminals',
  name: 'Credit Card Terminals',
  description: 'Reliable, EMV-certified point-of-sale terminals for retail, restaurant, and service businesses.',
  products: [
    { name: 'Clover® Mini', callForPrice: true },
    { name: 'Clover® Flex', callForPrice: true },
    { name: 'Clover® Station', callForPrice: true },
    { name: 'Dejavoo Z11', price: 250 },
    { name: 'Ingenico iCT220', price: 200 },
    { name: 'Ingenico ICT250', price: 250 },
    { name: 'PAX S80', price: 200 },
    { name: 'Poynt 5', callForPrice: true },
    { name: 'Poynt Smart Terminal', callForPrice: true },
    { name: 'Verifone Vx 520', price: 200 },
  ],
};

export const tritonATMs: CatalogCategory = {
  id: 'triton',
  slug: 'triton',
  name: 'Triton ATM Machines',
  description: 'Triton ATMs are trusted by retailers and financial institutions worldwide for reliability and ease of service.',
  products: [
    { name: 'Triton Argo 12S', callForPrice: true },
    { name: 'Triton Argo 7D', callForPrice: true },
    { name: 'Triton Argo 7S', callForPrice: true },
    { name: 'Triton FT5000', callForPrice: true },
    { name: 'Triton Traverse', callForPrice: true },
  ],
};

export const nautilusATMs: CatalogCategory = {
  id: 'nautilus-hyosung',
  slug: 'nautilus-hyosung',
  name: 'Nautilus Hyosung ATM Machines',
  description: 'Nautilus Hyosung ATMs deliver superior cash handling, modern touchscreen interfaces, and industry-leading uptime.',
  products: [
    { name: 'Nautilus Hyosung 2700CE', price: 2485 },
    { name: 'Nautilus Hyosung 2700T', price: 4265 },
    { name: 'Nautilus Hyosung 4000W', callForPrice: true },
    { name: 'Nautilus Hyosung 5200', price: 2855 },
    { name: 'Nautilus Hyosung Halo II', price: 2260 },
    { name: 'Nautilus Hyosung MX5300CE', callForPrice: true },
  ],
};

export const genmegaATMs: CatalogCategory = {
  id: 'genmega',
  slug: 'genmega',
  name: 'Genmega ATM Machines',
  description: 'Genmega provides a full line of freestanding and through-the-wall ATMs for retail, hospitality, and high-volume locations.',
  products: [
    { name: 'Genmega C6000', price: 3150 },
    { name: 'Genmega G2500', price: 2245 },
    { name: 'Genmega GT3000', price: 3630 },
    { name: 'Genmega GT5000', price: 7290 },
    { name: 'Genmega Onyx', price: 2435 },
    { name: 'Genmega Onyx W', price: 2640 },
    { name: 'GK1000 Bill Payment Kiosk', price: 3995 },
  ],
};

export const hantleATMs: CatalogCategory = {
  id: 'hantle',
  slug: 'hantle',
  name: 'Hantle ATM Machines',
  description: 'Hantle offers freestanding and countertop ATMs built for convenience stores, casinos, and high-traffic retail.',
  products: [
    { name: 'Hantle 1700W', price: 2190 },
    { name: 'Hantle C4000', price: 3120 },
    { name: 'Hantle CoinGoat', callForPrice: true },
    { name: 'Hantle T4000', price: 5900 },
  ],
};

export const mobilePayProducts: CatalogCategory = {
  id: 'mobile-pay',
  slug: 'mobile-pay',
  name: 'Mobile Pay Products',
  description: 'Accept payments anywhere with compact mobile card readers — perfect for events, deliveries, and field sales.',
  products: [
    { name: 'Clover® Go', price: 100 },
    { name: 'ISOACCESS Mobile Pay', price: 100 },
  ],
};

export const wirelessTerminals: CatalogCategory = {
  id: 'wireless-terminal',
  slug: 'wireless-terminal',
  name: 'Wireless Terminals',
  description: '4G LTE and WiFi-enabled terminals for businesses that need to take the register to the customer.',
  products: [
    { name: 'Ingenico Iwl 250', price: 400 },
    { name: 'Ingenico IWL 255', price: 425 },
    { name: 'PAX s90', price: 425 },
    { name: 'Verifone Vf 680', price: 300 },
  ],
};

export const pinPads: CatalogCategory = {
  id: 'pin-pads',
  slug: 'pin-pads',
  name: 'PIN Pads',
  description: 'PCI-certified encrypted PIN entry devices for integration with any countertop POS system.',
  products: [
    { name: 'First Data FD35', price: 150 },
    { name: 'First Data FD40', price: 250 },
    { name: 'Ingenico iPP320', price: 250 },
    { name: 'PAX S300', price: 275 },
    { name: 'PAX SP30', price: 250 },
    { name: 'Verifone MX 915', price: 425 },
    { name: 'Verifone MX 925', price: 475 },
    { name: 'Verifone VX 805', price: 190 },
    { name: 'Verifone VX 820', price: 250 },
  ],
};

export const printers: CatalogCategory = {
  id: 'printers',
  slug: 'printers',
  name: 'Printers',
  description: 'Receipt printers compatible with Clover, most POS systems, and standalone deployments.',
  products: [
    { name: 'Clover® Bluetooth Printer', price: 160 },
    { name: 'Epson TM-T20II', price: 130 },
    { name: 'Star Micronics TSP100', price: 375 },
  ],
};

export const allATMBrands = [
  { name: 'Triton ATM', slug: 'triton', href: '/products/atm-machines/triton', count: tritonATMs.products.length },
  { name: 'Nautilus Hyosung', slug: 'nautilus-hyosung', href: '/products/atm-machines/nautilus-hyosung', count: nautilusATMs.products.length },
  { name: 'Genmega', slug: 'genmega', href: '/products/atm-machines/genmega', count: genmegaATMs.products.length },
  { name: 'Hantle', slug: 'hantle', href: '/products/atm-machines/hantle', count: hantleATMs.products.length },
];

export const allCategories = [
  { name: 'Terminals', slug: 'terminals', href: '/products/terminals', count: terminals.products.length },
  { name: 'ATM Machines', slug: 'atm-machines', href: '/products/atm-machines', count: tritonATMs.products.length + nautilusATMs.products.length + genmegaATMs.products.length + hantleATMs.products.length },
  { name: 'Mobile Pay Products', slug: 'mobile-pay', href: '/products/mobile-pay', count: mobilePayProducts.products.length },
  { name: 'Wireless Terminals', slug: 'wireless-terminal', href: '/products/wireless-terminal', count: wirelessTerminals.products.length },
  { name: 'PIN Pads', slug: 'pin-pads', href: '/products/pin-pads', count: pinPads.products.length },
  { name: 'Printers', slug: 'printers', href: '/products/printers', count: printers.products.length },
];
