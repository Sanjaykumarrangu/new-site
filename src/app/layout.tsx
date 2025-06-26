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
  keywords: [
    'vortex',
    'vortex solar',
    'vortex powerline',
    'vortex powerline solutions',
    'solar power',
  'clean energy',
  'green energy',
  'renewable energy',
  'solar installation',
  'solar panels',
  'solar energy solutions',
  'solar subsidy in India',
  'PM Surya Ghar',
  'PM Surya Ghar Muft Bijli Yojana',
  'free electricity scheme India',
  'solar for homes',
  'solar rooftop installation',
  'home solar systems',
  'government solar subsidy',
  'MNRE solar scheme',
  'solar company Tamil Nadu',
  'solar company Coimbatore',
  'subsidy on solar panels',
  'free solar electricity',
  'reduce electricity bill',
  'solar battery backup',
  'solar power for commercial use',
  'off-grid solar systems',
  'on-grid solar systems',
  'best solar company in Telangana',
  'eco-friendly energy solutions',
  'solar EPC company',

  ],
  openGraph: {
    title: 'Vortex Powerline Solutions',
    description: 'We power with the sun',
    url: 'https://vortexpowerline.com',
    siteName: 'Vortex Powerline Solutions',
    images: [
      {
        url: 'https://vortexpowerline.com/og-image.png',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Manual tags for verification and SEO */}
        <meta name="google-site-verification" content="fiuidPqRRjGxC7ZmcsjyncBtx1GQ_xwTqE3UgOdx4Bg" />
        <meta name="keywords" content="solar power, clean energy, vortex, renewable energy, solar installation, solar company in Tamil Nadu, green energy" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="icon" href="/logofinal.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
