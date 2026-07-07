import { defineI18n } from "fumadocs-core/i18n";

export const locales = ["en", "zh", "zh-TW", "es", "ja"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : defaultLocale;
}

export const i18n = defineI18n({
  defaultLanguage: defaultLocale,
  languages: [...locales],
});
