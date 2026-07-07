import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
import { DownloadButtons } from "@/components/download-buttons";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download CoreLayer for Windows, macOS, and Linux. Install from source or get the latest release.",
};

export default function DownloadPage() {
  return (
    <div className="py-16">
      <div className="site-container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Download CoreLayer
          </h1>
          <p className="mt-4 text-base text-text-secondary">
            Get the desktop app or build from source. CoreLayer runs locally on
            your machine.
          </p>
        </div>

        <DownloadButtons />

        {/* Source Install */}
        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-lg font-semibold tracking-tight">
            Install from source
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Build CoreLayer from the repository if you prefer source installs or
            need the latest development version.
          </p>
          <div className="code-block mt-4">
            <pre className="whitespace-pre-wrap">{`git clone https://github.com/alvinluo-tech/CoreLayer.git
cd CoreLayer
pnpm install
pnpm build`}</pre>
          </div>

          <h3 className="mt-8 text-sm font-medium text-text-primary">
            Requirements
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {[
              "Node.js >= 22",
              "pnpm >= 9",
              "Platform-specific Tauri prerequisites",
              "API keys for model providers (if using cloud models)",
            ].map((req) => (
              <li
                key={req}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* After Install */}
        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-lg font-semibold tracking-tight">
            After installing
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {[
              "Open the Control Center",
              "Configure a model provider",
              "Add your first MCP server",
              "Review permission settings",
              "Try your first command",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-panel text-[11px] font-medium text-text-tertiary">
                  {i + 1}
                </span>
                <span className="text-sm text-text-secondary">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Docs CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Link
            href="/en/docs/getting-started/what-is-corelayer"
            className="inline-flex items-center gap-1.5 text-sm text-cyan transition-colors hover:text-cyan/80"
          >
            Read the getting started guide
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
