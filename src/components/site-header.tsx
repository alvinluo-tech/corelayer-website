"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Download, Menu, X, ExternalLink, Languages } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import {
  getLocaleFromPath,
  localeShortLabels,
  locales,
  type Locale,
  withLocale,
} from "@/lib/i18n";
import { getMessages } from "@/lib/messages";

const navLinks = [
  { href: "/download", label: "download" },
  { href: "/docs", label: "docs" },
  { href: "/changelog", label: "changelog" },
] as const;

function LanguageSelect({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  return (
    <label className="flex h-8 items-center gap-1 rounded-md border border-border-subtle bg-panel px-2 text-xs text-text-secondary transition-colors hover:text-text-primary">
      <Languages className="h-3.5 w-3.5" />
      <select
        aria-label="Language"
        value={locale}
        onChange={(event) => {
          window.location.href = withLocale(
            pathname,
            event.target.value as Locale
          );
        }}
        className="w-12 bg-transparent text-xs font-medium text-text-secondary outline-none"
      >
        {locales.map((item) => (
          <option key={item} value={item} className="bg-void text-text-primary">
            {localeShortLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = getMessages(locale);

  // Hide on docs pages — Fumadocs provides its own nav
  if (pathname.includes("/docs")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-void/75 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
      <div className="site-container flex h-14 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <Image src="/assets/icon.png" alt="CoreLayer" width={28} height={28} />
          <span className="text-sm font-semibold tracking-tight text-text-primary">
            CoreLayer
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="rounded-md px-3 py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {t.nav[link.label]}
            </Link>
          ))}
          <a
            href="https://github.com/alvinluo-tech/CoreLayer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            {t.nav.github}
            <ExternalLink className="h-3 w-3" />
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelect locale={locale} pathname={pathname} />
          <ThemeToggle />
          <Link
            href={`/${locale}/download`}
            className="hidden items-center gap-1.5 rounded-md bg-cyan px-3.5 py-1.5 text-sm font-medium text-void transition-all duration-200 hover:-translate-y-[1px] hover:scale-[1.02] active:scale-[0.97] md:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            {t.nav.download}
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border-subtle bg-void/95 backdrop-blur-md md:hidden">
          <div className="site-container flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-text-secondary hover:bg-panel hover:text-text-primary"
              >
                {t.nav[link.label]}
              </Link>
            ))}
            <a
              href="https://github.com/alvinluo-tech/CoreLayer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-text-secondary hover:bg-panel hover:text-text-primary"
            >
              {t.nav.github}
              <ExternalLink className="h-3 w-3" />
            </a>
            <Link
              href={`/${locale}/download`}
              onClick={() => setMobileOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-md bg-cyan px-3.5 py-2 text-sm font-medium text-void"
            >
              <Download className="h-3.5 w-3.5" />
              {t.nav.download}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
