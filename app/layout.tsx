import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // This root layout only renders the children
  // The actual layout logic is in [locale]/layout.tsx
  return children;
}
