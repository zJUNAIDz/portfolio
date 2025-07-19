import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  }
};

export default nextConfig;
