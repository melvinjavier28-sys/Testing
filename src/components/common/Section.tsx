import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'light' | 'navy';
  className?: string;
}

export default function Section({
  children,
  background = 'white',
  className = '',
}: SectionProps) {
  const bgClass = {
    white: 'bg-white',
    light: 'bg-light-bg',
    navy: 'bg-navy text-white',
  };

  return (
    <section className={`py-16 md:py-24 ${bgClass[background]} ${className}`}>
      {children}
    </section>
  );
}
