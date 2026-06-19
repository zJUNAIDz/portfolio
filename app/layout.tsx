import '@/app/globals.css';
import { Navigation } from '@/components/navigation';
import { SeoJsonLd } from '@/components/seo-jsonld';
import { rootMetadata } from '@/lib/metadata';
import { isLocale } from '@/lib/i18n';
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { ReactNode } from "react";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = rootMetadata;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headerLocale = (await headers()).get("x-locale");
  const lang = isLocale(headerLocale) ? headerLocale : "en";

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground transition-colors duration-50">
        <Navigation />
        {children}
        <SeoJsonLd locale={lang} /> {/*Vibe Coded*/}
        <Analytics /> {/* Vercel Analytics */}
      </body>
    </html>
  );
}
