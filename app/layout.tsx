import '@/app/globals.css';
import { Navigation } from '@/components/navigation';
import { SeoJsonLd } from '@/components/seo-jsonld';
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';
import { Geist } from "next/font/google";
import { ReactNode } from "react";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zjunaidz.me'),
  title: 'Junaid Shaikh - Full-Stack Web Developer',
  description: 'Full-Stack Developer who likes coding, Linux, and learning Japanese.',
  applicationName: 'zjunaidz Portfolio',
  authors: [{ name: 'Junaid Shaikh', url: 'https://zjunaidz.me' }],
  creator: 'Junaid Shaikh',
  publisher: 'Junaid Shaikh',
  keywords: [
    'Junaid Shaikh',
    'zjunaidz',
    'Junaid Shaikh web developer',
    'Full-Stack Developer',
    'Backend Developer in India',
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
    description: 'Full-Stack Developer who likes coding, Linux, and learning Japanese.',
    images: [{
      url: '/api/og',
      width: 1200,
      height: 630,
      alt: 'Junaid Shaikh - Full-Stack Developer'
    }],
    type: 'website',
    locale: 'en_US',
    url: 'https://zjunaidz.me',
    siteName: 'zjunaidz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junaid Shaikh - Full-Stack Developer',
    description: 'Full-Stack Developer who likes coding, Linux, and learning Japanese.',
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
    <html lang="en" className={`${geistSans.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground transition-colors duration-50">
        <Navigation />
        {children}
        <SeoJsonLd /> {/*Vibe Coded*/}
        <Analytics />
      </body>
    </html>
  );
}
