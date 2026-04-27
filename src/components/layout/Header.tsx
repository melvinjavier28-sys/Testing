'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '/#services' },
    { label: 'Products', href: '/#products' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Company', href: '/company' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <header className="bg-navy sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-2xl">
            National e-Payment
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white hover:text-teal transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-4">
            <Button variant="outline" href="/contact">
              Sign In
            </Button>
            <Button variant="primary" href="/signup">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white hover:text-teal transition-colors block py-2">
                {item.label}
              </a>
            ))}
            <Button variant="primary" href="/signup" className="w-full">
              Get Started
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
