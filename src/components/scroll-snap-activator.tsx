"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollSnapActivator() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if the current pathname is the root path or a locale home path (e.g. /en, /zh, /zh-TW)
    const isHome = pathname === "/" || /^\/[a-z]{2}(-[a-zA-Z]{2})?\/?$/.test(pathname);

    if (isHome) {
      document.documentElement.classList.add("snap-container");
    } else {
      document.documentElement.classList.remove("snap-container");
    }

    return () => {
      document.documentElement.classList.remove("snap-container");
    };
  }, [pathname]);

  return null;
}
