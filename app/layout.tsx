import { ReactNode } from "react";

export const metadata = {
  title: 'Junaid - Full Stack Developer',
  description: 'Full Stack Developer specialized in React,Next.js, Node.js, and Cloud Technologies. Building web applications with modern technologies.',
  openGraph: {
    title: 'Junaid Shaikh - Full Stack Developer',
    description: 'Full Stack Developer specialized in React,Next.js, Node.js, and Cloud Technologies. Building web applications with modern technologies.',
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
    title: 'Junaid Shaikh - Full Stack Developer',
    description: 'Full Stack Developer specialized in React, Node.js, and Cloud Technologies.',
    images: ['/preview.png'],
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // This root layout only renders the children
  // The actual layout logic is in [locale]/layout.tsx
  return children;
}
