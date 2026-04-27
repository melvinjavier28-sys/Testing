import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Grid({
  children,
  cols = 3,
  gap = 'md',
  className = '',
}: GridProps) {
  const gapClass = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  const colClass = `grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols}`;

  return (
    <div className={`grid ${colClass} ${gapClass[gap]} ${className}`}>
      {children}
    </div>
  );
}
