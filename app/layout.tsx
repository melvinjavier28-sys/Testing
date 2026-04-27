import type { Metadata } from 'next';
import './globals.css';
import BaseLayout from '@/src/components/layout/BaseLayout';

export const metadata: Metadata = {
  title: 'National e-Payment | Payment Solutions for Your Business',
  description: 'Fast, easy payment processing solutions for restaurants, retail, grocery, and more. Zero setup fees, instant approval.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
