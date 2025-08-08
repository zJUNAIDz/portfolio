import '@/app/globals.css';
import { KanjiBackground } from '@/components/kanji-background';
import { SeoJsonLd } from '@/components/seo-jsonld';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zjunaidz.me'),
  title: 'Junaid Shaikh - Full-Stack Web Developer',
  description: 'Full-Stack Web Developer passionate about building scalable systems, Linux, and Japanese culture. Building robust server-side solutions.',
  applicationName: 'zjunaidz Portfolio',
  authors: [{ name: 'Junaid Shaikh', url: 'https://zjunaidz.me' }],
  creator: 'Junaid Shaikh',
  publisher: 'Junaid Shaikh',
  keywords: [
    'Junaid Shaikh',
    'zjunaidz',
    'Junaid Shaikh web developer',
    'Full-Stack Web Developer',
    'Web Developer in India',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
  ],
  alternates: {
    canonical: 'https://zjunaidz.me/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Junaid Shaikh - Full-Stack Web Developer',
    description: 'Full-Stack Web Developer who likes coding, Linux, and learning Japanese.',
    images: [{
      url: '/api/og',
      width: 1200,
      height: 630,
      alt: 'Junaid Shaikh - Full-Stack Web Developer'
    }],
    type: 'website',
    locale: 'en_US',
    url: 'https://zjunaidz.me',
    siteName: 'zjunaidz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junaid Shaikh - Full-Stack Web Developer',
    description: 'Full-Stack Web Developer passionate about building scalable systems, Linux, and Japanese culture. Building robust server-side solutions.',
    images: ['/api/og'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange={false}
          enableSystem={false}
          themes={['light', 'dark']}
        >
          <KanjiBackground />
          {children}
        </ThemeProvider>
        <SeoJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
