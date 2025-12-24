import purgecss from '@fullhuman/postcss-purgecss';

const isProd = process.env.NODE_ENV === 'production';

const plugins = ["@tailwindcss/postcss"];

if (isProd) {
  plugins.push(
    purgecss({
      content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      safelist: {
        standard: [
          /^quote-/,
          /^quotes-/,
          /^data-/, // keep data-* state classes used by UI
          /^dark$/,
          /^bg-/,
          /^text-/,
          /^animate-/, // keep animate utilities used by components
        ],
      },
    })
  );
}

export default { plugins };
