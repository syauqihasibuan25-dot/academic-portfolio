import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Muhammad Syauqi Hasibuan — Academic & Energy Leadership Portfolio',
  description:
    'Portfolio of Muhammad Syauqi Hasibuan — aspiring Chemical & Petroleum Engineer. International and national achievements in energy, academic olympiads, and leadership.',
  openGraph: {
    title: 'Muhammad Syauqi Hasibuan — Academic & Energy Leadership Portfolio',
    description:
      'Aspiring Chemical & Petroleum Engineer. International and national achievements in energy, academic olympiads, and leadership.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
