import { defaultLocale, locales, type Locale } from './types';
import en from './en';
import es from './es';
import de from './de';

const dictionaries = { en, es, de } as const;

export function useTranslations(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && (locales as readonly string[]).includes(first)) {
    return first as Locale;
  }
  return defaultLocale;
}

export function localisePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  if (clean === '/') return `/${locale}/`;
  return `/${locale}${clean}`;
}

export function switchLocalePath(currentPath: string, targetLocale: Locale, currentLocale: Locale): string {
  let stripped = currentPath;
  if (currentLocale !== defaultLocale) {
    stripped = stripped.replace(new RegExp(`^/${currentLocale}`), '') || '/';
  }
  return localisePath(stripped, targetLocale);
}

export { locales, defaultLocale };
export type { Locale };
