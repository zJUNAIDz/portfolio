import '@/app/globals.css';
import { KanjiBackground } from '@/components/kanji-background';
import { ThemeProvider } from '@/components/theme-provider';
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  metadataBase: new URL('https://zjunaidz.me'),
  title: 'Junaid Shaikh - Full-Stack Web Developer',
  description: 'Full-Stack Web Developer passionate about building scalable systems, Linux, and Japanese culture. Building robust server-side solutions.',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junaid Shaikh - Full-Stack Web Developer',
    description: 'Full-Stack Web Developer passionate about building scalable systems, Linux, and Japanese culture. Building robust server-side solutions.',
    images: ['/api/og'],
  }
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
        <Analytics />
      </body>
    </html>
  );
}
