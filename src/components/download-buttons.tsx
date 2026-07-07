"use client";

import { useState, useCallback } from "react";
import {
  Download,
  Monitor,
  Laptop,
  Terminal,
  Loader2,
  ExternalLink,
} from "lucide-react";

const LATEST_RELEASE_API = "/api/releases/latest";
const RELEASES_URL =
  "https://github.com/alvinluo-tech/CoreLayer/releases";

interface Asset {
  name: string;
  browser_download_url: string;
}

type PlatformId = "windows" | "macos" | "linux";

const platforms: {
  id: PlatformId;
  icon: typeof Monitor;
  name: string;
  desc: string;
  formats: string;
  matchers: string[];
}[] = [
  {
    id: "windows",
    icon: Monitor,
    name: "Windows",
    desc: "Windows 10/11 x64",
    formats: ".exe / .msi",
    matchers: ["x64-setup.exe", "setup.exe", ".msi"],
  },
  {
    id: "macos",
    icon: Laptop,
    name: "macOS",
    desc: "macOS 13+ Universal",
    formats: ".dmg",
    matchers: ["universal.dmg", "aarch64.dmg", "x64.dmg", ".dmg"],
  },
  {
    id: "linux",
    icon: Terminal,
    name: "Linux",
    desc: "x86_64 / amd64",
    formats: ".AppImage / .deb / .rpm",
    matchers: [".AppImage", "_amd64.deb", "_x86_64.rpm", ".deb", ".rpm"],
  },
];

function findAsset(assets: Asset[], pattern: string): Asset | undefined {
  const normalizedPattern = pattern.toLowerCase();
  return assets.find((a) => a.name.toLowerCase().includes(normalizedPattern));
}

function triggerDownload(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function DownloadButtons() {
  const [loading, setLoading] = useState<PlatformId | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = useCallback(
    async (platform: (typeof platforms)[number]) => {
      setLoading(platform.id);
      setError(null);

      try {
        const res = await fetch(LATEST_RELEASE_API);
        if (!res.ok) throw new Error("Failed to fetch release info");
        const data = await res.json();
        const assets: Asset[] = data.assets ?? [];

        for (const matcher of platform.matchers) {
          const asset = findAsset(assets, matcher);
          if (asset) {
            triggerDownload(asset.browser_download_url);
            setLoading(null);
            return;
          }
        }

        throw new Error(`No matching asset found for ${platform.name}`);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Download failed, try again"
        );
        setLoading(null);
      }
    },
    []
  );

  return (
    <>
      <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
        {platforms.map((p) => {
          const isLoading = loading === p.id;
          return (
            <button
              key={p.name}
              onClick={() => handleDownload(p)}
              disabled={isLoading}
              className="group rounded-lg border border-border-subtle bg-panel p-5 text-left transition-colors hover:border-border-cyan disabled:opacity-70"
            >
              <p.icon className="h-5 w-5 text-cyan" />
              <h3 className="mt-3 text-sm font-medium text-text-primary">
                {p.name}
              </h3>
              <p className="mt-1 text-xs text-text-secondary">{p.desc}</p>
              <div className="mt-3 flex items-center gap-1.5 text-xs">
                {isLoading ? (
                  <>
                    <Loader2 className="h-3 w-3 animate-spin text-cyan" />
                    <span className="text-cyan">Downloading...</span>
                  </>
                ) : (
                  <>
                    <span className="text-emerald">Download</span>
                    <Download className="h-3 w-3 text-emerald transition-transform group-hover:-translate-y-0.5" />
                  </>
                )}
              </div>
              <p className="mt-1.5 text-[10px] text-text-tertiary">
                {p.formats}
              </p>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-rose">
          {error}
        </p>
      )}

      <div className="mx-auto mt-4 max-w-3xl text-center">
        <a
          href={RELEASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-text-tertiary transition-colors hover:text-text-secondary"
        >
          View all releases on GitHub
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </>
  );
}
