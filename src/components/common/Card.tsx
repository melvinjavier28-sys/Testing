import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  border?: 'left' | 'none';
  borderColor?: 'teal' | 'navy';
  background?: 'white' | 'light' | 'navy' | 'forest' | 'ambient';
}

export default function Card({
  children,
  className = '',
  border = 'none',
  borderColor = 'teal',
  background = 'white',
}: CardProps) {
  const bgClass: Record<string, string> = {
    white:   'bg-white shadow-[0_2px_18px_-8px_rgba(10,39,64,0.18)]',
    light:   'bg-surface',
    navy:    'bg-navy text-white',
    forest:  'bg-forest text-white',
    ambient: 'bg-ambient',
  };

  const borderClass = border === 'left' ? `border-l-4 border-${borderColor}` : '';

  return (
    <div className={`p-7 rounded-card ${bgClass[background]} ${borderClass} ${className}`}>
      {children}
    </div>
  );
}
