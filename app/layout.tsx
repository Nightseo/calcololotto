import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";
import CookieBanner from "./components/CookieBanner";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.calcololotto.it'),
  title: {
    default: 'Calcolo Vincite Lotto | Calcolatrice Lotto Online Gratis 2025',
    template: '%s | Calcolo Lotto'
  },
  description: 'Calcola le vincite del Lotto italiano con la nostra calcolatrice professionale. Calcolo immediato per ambata, ambo, terno, quaterna e cinquina. Strumento gratuito e preciso per tutte le ruote.',
  keywords: [
    'calcolo vincite lotto',
    'calcolatrice lotto',
    'calcolo lotto online',
    'vincite lotto italia',
    'calcolo ambo lotto',
    'calcolo terno lotto',
    'calcolo quaterna lotto',
    'calcolo cinquina lotto',
    'simulatore vincite lotto',
    'quanto si vince al lotto'
  ],
  authors: [{ name: 'Calcolo Lotto' }],
  creator: 'Calcolo Lotto',
  publisher: 'Calcolo Lotto',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://www.calcololotto.it',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.calcololotto.it',
    title: 'Calcolo Vincite Lotto | Calcolatrice Lotto Online Gratis',
    description: 'Calcola le vincite del Lotto italiano con la nostra calcolatrice professionale. Strumento gratuito e preciso per ambata, ambo, terno, quaterna e cinquina.',
    siteName: 'Calcolo Lotto',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calcolo Vincite Lotto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calcolo Vincite Lotto | Calcolatrice Lotto Online',
    description: 'Calcola le vincite del Lotto italiano con la nostra calcolatrice professionale.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Calcolo Vincite Lotto',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description: 'Calcolatrice professionale per il calcolo delle vincite del Lotto italiano. Calcola ambata, ambo, terno, quaterna e cinquina.',
    url: 'https://www.calcololotto.it',
    inLanguage: 'it-IT',
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: 'Italy',
      },
    },
  };

  return (
    <html lang="it">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${rubik.variable} font-sans antialiased`}>
        <Analytics />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
