import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import BaseLayout from '@/src/components/layout/BaseLayout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'National e-Payment | Payment Solutions Built for Your Business',
  description:
    'Fast, easy payment processing for restaurants, retail, grocery, and more. Free merchant account, free terminal, 24/7 live support, and instant approval.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
