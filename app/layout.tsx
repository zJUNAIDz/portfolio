import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from '@/components/theme-provider'
import { KanjiBackground } from '@/components/kanji-background'
import '@/app/globals.css'

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
      url: '/preview.png',
      width: 1200,
      height: 630,
      alt: 'Junaid Shaikh Portfolio Preview'
    }],
    type: 'website',
    locale: 'en_US',
    url: 'https://zjunaidz.me',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junaid Shaikh - Full-Stack Web Developer',
    description: 'Full-Stack Web Developer who likes coding, Linux, and learning Japanese.',
    images: ['/preview.png'],
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          defaultTheme="system"
        >
          <KanjiBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
