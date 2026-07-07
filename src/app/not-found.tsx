"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/i18n";

export default function NotFound() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold tracking-tight text-cyan">404</p>
      <h1 className="mt-4 text-xl font-semibold tracking-tight text-text-primary">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-sm text-text-secondary">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href={`/${locale}`}
          className="rounded-lg bg-cyan px-4 py-2 text-sm font-medium text-void transition-opacity hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          href={`/${locale}/docs`}
          className="rounded-lg border border-border-subtle px-4 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          Browse docs
        </Link>
      </div>
    </div>
  );
}
