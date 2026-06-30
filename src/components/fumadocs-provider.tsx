"use client";

import { NextProvider } from "fumadocs-core/framework/next";

export function FumadocsProvider({ children }: { children: React.ReactNode }) {
  return <NextProvider>{children}</NextProvider>;
}
