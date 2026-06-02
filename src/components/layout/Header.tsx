'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/src/components/common/Container';

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: 'Industries',
    children: [
      { label: 'Restaurants', href: '/industries/restaurants' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Grocery', href: '/industries/grocery' },
      { label: 'Gas Stations & Convenience Stores', href: '/gas-stations-convenience-stores' },
      { label: 'Lodging', href: '/industries/lodging' },
      { label: 'E-Commerce', href: '/industries/ecommerce' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Credit Card Terminals',  href: '/products/terminals' },
      { label: 'ATM Machines',           href: '/products/atm-machines' },
      { label: 'Printers',              href: '/products/printers' },
      { label: 'Mobile Pay Products',   href: '/products/mobile-pay' },
      { label: 'Wireless Terminal',     href: '/products/wireless-terminal' },
      { label: 'Pin Pads',              href: '/products/pin-pads' },
    ],
  },
  { label: 'Rates & Fees',  href: '/rates-fees' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact Us',    href: '/contact' },
  {
    label: 'Login',
    children: [
      { label: 'ISO Login',      href: 'https://mi.isoaccess.com/' },
      { label: 'Merchant Login', href: 'https://www.youraccessone.com/64_ms_login.aspx' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About National e-Payment', href: '/company' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

function DropdownMenu({ items, onClose }: { items: NavChild[]; onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-0 mt-2 min-w-[230px] rounded-2xl border border-ash/80 bg-white/95 py-2 shadow-[0_20px_50px_-12px_rgba(10,39,64,0.28)] backdrop-blur-xl z-50"
      style={{ animation: 'fade-up 0.16s ease' }}
    >
      {items.map((child) => (
        <a
          key={child.label}
          href={child.href}
          target={child.href.startsWith('http') ? '_blank' : undefined}
          rel={child.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={onClose}
          className="mx-1.5 flex items-center rounded-xl px-3.5 py-2.5 text-sm text-ink transition-colors hover:bg-surface hover:text-forest"
        >
          {child.label}
        </a>
      ))}
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu]           = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled]           = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(10,39,64,0.18)]'
          : 'bg-white/95 backdrop-blur-md shadow-[rgba(14,15,12,0.06)_0px_1px_0px]'
      }`}
    >
      {/* Top bar */}
      <div className="bg-ink text-white">
        <Container>
          <div className="flex justify-between items-center py-1.5 text-xs text-ghost">
            <div className="flex gap-4 min-w-0">
              <a href="tel:+18664369022" className="hover:text-lime transition-colors font-semibold">(866) 436-9022</a>
              <a href="mailto:support@nationalepayment.com" className="hover:text-lime transition-colors hidden sm:inline truncate">
                support@nationalepayment.com
              </a>
            </div>
            <div className="hidden sm:flex gap-3">
              <a href="https://mi.isoaccess.com/" target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">ISO Login</a>
              <span className="text-white/20">|</span>
              <a href="https://www.youraccessone.com/64_ms_login.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">Merchant Login</a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <Container>
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="National e-Payment"
              width={1184}
              height={383}
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-9' : 'h-11'}`}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children ? handleMouseEnter(item.label) : undefined}
                onMouseLeave={() => item.children ? handleMouseLeave() : undefined}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface hover:text-forest whitespace-nowrap"
                  >
                    {item.label}
                    {item.children && (
                      <span className={`text-[10px] opacity-40 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`} aria-hidden="true">▾</span>
                    )}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface hover:text-forest whitespace-nowrap cursor-pointer">
                    {item.label}
                    {item.children && (
                      <span className={`text-[10px] opacity-40 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`} aria-hidden="true">▾</span>
                    )}
                  </button>
                )}
                {item.children && openMenu === item.label && (
                  <DropdownMenu items={item.children} onClose={() => setOpenMenu(null)} />
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/signup"
              className="btn-shine relative hidden sm:inline-flex items-center bg-lime text-navy text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_8px_22px_-8px_rgba(159,232,112,0.9)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Apply Now
            </a>
            <button
              className="lg:hidden text-ink p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-ash pb-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-2 py-2.5 text-sm text-ink hover:text-forest font-medium transition-colors"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs opacity-40" aria-hidden="true">{mobileExpanded === item.label ? '▴' : '▾'}</span>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="bg-surface rounded-xl mb-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            target={child.href.startsWith('http') ? '_blank' : undefined}
                            rel={child.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-sm text-ink hover:text-forest transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-2 py-2.5 text-sm text-ink hover:text-forest font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="/signup"
              className="mt-2 block w-full text-center bg-lime text-navy text-sm font-bold px-4 py-2.5 rounded-full hover:bg-teal-dark transition-colors"
            >
              Apply Now
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
}
