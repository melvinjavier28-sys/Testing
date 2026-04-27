import React from 'react';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function BaseLayout({ children, className = '' }: BaseLayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
