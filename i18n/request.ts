import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'ja'] as const;
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale = 'en' }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
