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
  title: 'Junaid - Backend Software Engineer',
  description: 'Backend Software Engineer passionate about building scalable systems, Linux, and Japanese culture. Building robust server-side solutions.',
  openGraph: {
    title: 'Junaid - Backend Software Engineer',
    description: 'Backend Software Engineer passionate about building scalable systems, Linux, and Japanese culture. Building robust server-side solutions.',
    images: [{
      url: '/preview.png',
      width: 1200,
      height: 630,
      alt: 'Junaid Portfolio Preview'
    }],
    type: 'website',
    locale: 'en_US',
    url: 'https://zjunaidz.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junaid - Backend Software Engineer',
    description: 'Backend Software Engineer passionate about building scalable systems, Linux, and Japanese culture.',
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
