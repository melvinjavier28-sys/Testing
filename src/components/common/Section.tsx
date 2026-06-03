import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'light' | 'navy';
  className?: string;
  id?: string;
}

export default function Section({
  children,
  background = 'white',
  className = '',
  id,
}: SectionProps) {
  const bgClass = {
    white: 'bg-white',
    light: 'bg-surface',
    navy: 'bg-navy-950 text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass[background]} ${className}`}>
      {children}
    </section>
  );
}
