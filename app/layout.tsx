import '@/app/globals.css';
import { Navigation } from '@/components/navigation';
import { SeoJsonLd } from '@/components/seo-jsonld';
import { rootMetadata } from '@/lib/metadata';
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';
import { Geist } from "next/font/google";
import { ReactNode } from "react";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = rootMetadata;

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
        <Analytics /> {/* Vercel Analytics */}
      </body>
    </html>
  );
}
