import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Vortex Powerline Solutions',
    template: '%s | Vortex Powerline Solutions',
  },
  description: 'We power with the sun',
  keywords: ['solar power', 'clean energy', 'vortex', 'renewable energy'],
  openGraph: {
    title: 'Vortex Powerline Solutions',
    description: 'We power with the sun',
    url: 'https://vortexpowerline.com.com',
    siteName: 'Vortex Powerline Solutions',
    images: [
      {
        url: 'https://vortexpowerline.com.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vortex solar panels and clean energy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://vortexpowerline.com'),
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          <main>{children}</main>
      </body>
    </html>
  );
}
