import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
}: ButtonProps) {
  const baseStyles =
    'btn-shine relative font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 active:scale-[0.98]';

  const variants = {
    primary:
      'bg-lime text-navy shadow-[0_8px_24px_-6px_rgba(159,232,112,0.7)] hover:shadow-[0_14px_36px_-6px_rgba(159,232,112,0.9)] hover:-translate-y-0.5',
    secondary:
      'bg-forest text-white shadow-[0_8px_24px_-8px_rgba(22,51,0,0.7)] hover:bg-[#1e4a00] hover:-translate-y-0.5',
    outline:
      'bg-transparent border-2 border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white',
  };

  const sizes = {
    sm: 'px-5  py-2     text-sm',
    md: 'px-8  py-3     text-base',
    lg: 'px-10 py-[14px] text-base font-bold',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
