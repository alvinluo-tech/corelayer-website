import { defineI18n } from "fumadocs-core/i18n";

export const locales = ["en", "zh", "zh-TW", "es", "ja"] as const;
export const defaultLocale = "en";
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  "zh-TW": "繁體中文",
  es: "Español",
  ja: "日本語",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  zh: "简",
  "zh-TW": "繁",
  es: "ES",
  ja: "日",
};

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : defaultLocale;
}

export function withLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0])) {
    segments[0] = locale;
    return `/${segments.join("/")}`;
  }

  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

export const i18n = defineI18n({
  defaultLanguage: defaultLocale,
  languages: [...locales],
});
