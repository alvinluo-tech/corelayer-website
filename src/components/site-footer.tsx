"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { getLocaleFromPath } from "@/lib/i18n";
import { getMessages } from "@/lib/messages";

const footerSections = [
  {
    title: "product",
    links: [
      { href: "/download", label: "download" },
      { href: "/docs", label: "docs" },
      { href: "/changelog", label: "changelog" },
    ],
  },
  {
    title: "developers",
    links: [
      { href: "/docs/architecture/system-overview", label: "architecture" },
      { href: "/docs/configuration/mcp-servers", label: "mcpIntegration" },
      { href: "/docs/configuration/permissions", label: "permissions" },
    ],
  },
  {
    title: "community",
    links: [
      {
        href: "https://github.com/alvinluo-tech/CoreLayer/issues",
        label: "issues",
        external: true,
      },
      {
        href: "https://github.com/alvinluo-tech/CoreLayer",
        label: "github",
        external: true,
      },
    ],
  },
] as const;

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = getMessages(locale);

  // Hide on docs pages — Fumadocs provides its own layout
  if (pathname.includes("/docs")) {
    return null;
  }

  return (
    <footer className="border-t border-border-subtle bg-deep">
      <div className="site-container py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image src="/assets/icon.png" alt="CoreLayer" width={24} height={24} />
              <span className="text-sm font-semibold text-text-primary">
                CoreLayer
              </span>
            </Link>
            <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-text-tertiary">
              {t.footer.tagline}
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-text-tertiary">
                {t.footer[section.title]}
              </h4>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {link.label === "github" ? t.nav.github : t.footer[link.label]}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link
                        href={`/${locale}${link.href}`}
                        className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {link.label in t.nav
                          ? t.nav[link.label as keyof typeof t.nav]
                          : t.footer[link.label as keyof typeof t.footer]}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border-subtle pt-6 sm:flex-row">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/alvinluo-tech/CoreLayer/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-tertiary transition-colors hover:text-text-secondary"
            >
              {t.footer.license}
            </a>
            <Link
              href={`/${locale}/docs/architecture/security-model`}
              className="text-xs text-text-tertiary transition-colors hover:text-text-secondary"
            >
              {t.footer.security}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
