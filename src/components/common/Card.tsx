import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  border?: 'left' | 'none';
  borderColor?: 'teal' | 'navy';
  background?: 'white' | 'light' | 'navy';
}

export default function Card({
  children,
  className = '',
  border = 'none',
  borderColor = 'teal',
  background = 'white',
}: CardProps) {
  const bgClass = {
    white: 'bg-white',
    light: 'bg-light-bg',
    navy: 'bg-navy text-white',
  };

  const borderClass = border === 'left' ? `border-l-4 border-${borderColor}` : '';

  return (
    <div className={`p-6 rounded-lg ${bgClass[background]} ${borderClass} ${className}`}>
      {children}
    </div>
  );
}
