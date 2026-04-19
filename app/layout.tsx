import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sri Maha Laxmi Embroidery | Crafting Elegance in Every Thread',
  description:
    'Premium traditional embroidery for sarees, blouses, and lehengas. Handcrafted bridal, festive, and custom embroidery work with unmatched artistry and heritage.',
  keywords: [
    'embroidery',
    'Indian embroidery',
    'bridal embroidery',
    'saree embroidery',
    'blouse work',
    'lehenga embroidery',
    'custom embroidery',
    'Sri Maha Laxmi Embroidery',
    'traditional embroidery',
    'handmade embroidery',
  ],
  openGraph: {
    title: 'Sri Maha Laxmi Embroidery',
    description: 'Crafting Elegance in Every Thread — Premium Traditional Embroidery',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Maha Laxmi Embroidery',
    description: 'Crafting Elegance in Every Thread',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
