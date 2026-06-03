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

export const allCategories = [
  { name: 'Terminals', slug: 'terminals', href: '/products/terminals', count: terminals.products.length },
  { name: 'Mobile Pay Products', slug: 'mobile-pay', href: '/products/mobile-pay', count: mobilePayProducts.products.length },
  { name: 'Wireless Terminals', slug: 'wireless-terminal', href: '/products/wireless-terminal', count: wirelessTerminals.products.length },
  { name: 'PIN Pads', slug: 'pin-pads', href: '/products/pin-pads', count: pinPads.products.length },
  { name: 'Printers', slug: 'printers', href: '/products/printers', count: printers.products.length },
];
