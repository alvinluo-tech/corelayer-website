"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { href: "/download", label: "Download" },
      { href: "/docs", label: "Docs" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Developers",
    links: [
      { href: "/docs/architecture/system-overview", label: "Architecture" },
      { href: "/docs/configuration/mcp-servers", label: "MCP Integration" },
      { href: "/docs/configuration/permissions", label: "Permissions" },
    ],
  },
  {
    title: "Community",
    links: [
      {
        href: "https://github.com/alvinluo-tech/CoreLayer/issues",
        label: "Issues",
        external: true,
      },
      {
        href: "https://github.com/alvinluo-tech/CoreLayer",
        label: "GitHub",
        external: true,
      },
    ],
  },
];

export function SiteFooter() {
  const pathname = usePathname();

  // Hide on docs pages — Fumadocs provides its own layout
  if (pathname.startsWith("/docs")) {
    return null;
  }

  return (
    <footer className="border-t border-border-subtle bg-deep">
      <div className="site-container py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/icon.png" alt="CoreLayer" width={24} height={24} />
              <span className="text-sm font-semibold text-text-primary">
                CoreLayer
              </span>
            </Link>
            <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-text-tertiary">
              A local-first AI control layer for your desktop apps, tools,
              models, and MCP workflows.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-text-tertiary">
                {section.title}
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
                        {link.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {link.label}
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
            &copy; {new Date().getFullYear()} CoreLayer. Local-first.
            Permission-guarded.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/alvinluo-tech/CoreLayer/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-tertiary transition-colors hover:text-text-secondary"
            >
              License
            </a>
            <Link
              href="/docs/architecture/security-model"
              className="text-xs text-text-tertiary transition-colors hover:text-text-secondary"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
