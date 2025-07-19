import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          dark: '#000000',
          light: '#e0e0e0', // Light gray instead of pure white
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          dark: '#FFFFFF',
          light: '#2D2D2D', // Slightly softer than pure black
        },
      },
    },
  },
  plugins: [],
} satisfies Config
