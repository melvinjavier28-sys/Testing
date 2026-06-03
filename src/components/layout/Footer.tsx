import Container from '@/src/components/common/Container';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

/* Brand glyphs (lucide v1 dropped brand icons) ─ 24×24 viewBox, currentColor fill */
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.44 2.9h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
  </svg>
);
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.12H5.04L17.08 19.77Z" />
  </svg>
);
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/MerchantIndustryLLC/', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com/MerchantIndstry', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/merchant-industry-llc/', Icon: LinkedInIcon },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      {/* Lime accent hairline */}
      <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-lime/60 to-transparent" />

      <Container>
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-xl mb-3">
              <span className="text-gradient-lime">National</span> e-Payment
            </h4>
            <p className="text-sm text-white/55 mb-5 leading-relaxed">
              Registered MSP/ISO serving merchants nationwide with payment processing, terminals, and equipment.
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+18664369022" className="flex items-center gap-2.5 text-white/70 hover:text-lime transition-colors">
                  <Phone className="w-4 h-4 text-lime/70" /> (866) 436-9022
                </a>
              </li>
              <li>
                <a href="mailto:support@nationalepayment.com" className="flex items-center gap-2.5 text-white/70 hover:text-lime transition-colors">
                  <Mail className="w-4 h-4 text-lime/70" /> support@nationalepayment.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/45">
                <MapPin className="w-4 h-4 mt-0.5 text-lime/70 shrink-0" />
                <span>36-36 33rd Street, Ste 209<br />Long Island City, NY 11106</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Gas Stations & C-Stores', '/gas-stations-convenience-stores'],
                ['Restaurants', '/industries/restaurants'],
                ['Retail', '/industries/retail'],
                ['Grocery', '/industries/grocery'],
                ['Lodging', '/industries/lodging'],
                ['E-Commerce', '/industries/ecommerce'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="link-underline text-white/55 hover:text-lime transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Credit Card Terminals', '/products#valor'],
                ['POS Systems', '/products#clover'],
                ['Mobile Pay Products', '/products#pax'],
                ['Wireless Terminals', '/products#pax'],
                ['PIN Pads', '/products#verifone'],
                ['Duo Pricer', '/products'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="link-underline text-white/55 hover:text-lime transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + CTA */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm mb-6">
              {[
                ['Rates & Fees', '/rates-fees'],
                ['ISO Partner Program', '/partners'],
                ['Contact Us', '/contact'],
                ['ISO Login', 'https://mi.isoaccess.com/'],
                ['Merchant Login', 'https://www.youraccessone.com/64_ms_login.aspx'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="link-underline text-white/55 hover:text-lime transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/signup"
              className="btn-shine relative inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-navy hover:-translate-y-0.5 transition-transform"
            >
              Free Signup <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-xs text-white/40 max-w-2xl leading-relaxed text-center md:text-left">
            National Epayment® is a registered MSP/ISO of Elavon, Inc. (U.S. Bancorp), Wells Fargo Bank N.A.,
            Esquire Bank N.A., and Commercial Bank of California. American Express may require separate approval.
            The Clover name is owned by Clover Network, Inc., a wholly-owned subsidiary of First Data Corporation.
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-lime hover:text-lime hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="pb-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-xs text-white/35">
          <span>© {currentYear} National e-Payment NY, LLC. All rights reserved.</span>
          <a href="/privacy-policy" className="hover:text-lime transition-colors">Privacy Policy</a>
        </div>
      </Container>
    </footer>
  );
}
