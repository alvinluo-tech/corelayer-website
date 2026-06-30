import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog",
  description: "CoreLayer release notes and changelog.",
};

const releases = [
  {
    version: "v0.3.2",
    date: "2026-06-08",
    highlights: [
      "Multi-runtime architecture: agent, tool, coding, voice, scheduler, computer-control runtimes",
      "PermissionBroker and OSCapabilityBroker for risk-based execution",
      "Computer Control Runtime for desktop automation",
      "Packaged runtime supervisor refactor (14 phases)",
      "Agent OS UI with Global Rail, Approvals, Runs, Memory, Projects views",
      "Non-blocking approval lifecycle with async resume",
      "Persistent EventLog and AuditLog with API endpoints",
      "Real process supervisor replacing passive DaemonSupervisor",
      "Daemon packaged as bun sidecar for distribution",
    ],
    fixes: [
      "Windows daemon console window popup and installer file locking",
      "Release workflow race condition for multi-platform builds",
      "Streaming test failures and git adapter boundary",
      "Dev mode daemon fallback and port extraction",
      "Daemon synchronous startup to prevent race condition",
    ],
  },
  {
    version: "v0.3.1",
    date: "2026-06-08",
    highlights: [
      "App-paths module for packaged-mode path resolution",
      "Phase 3: daemon packaged-mode aware",
      "Phase 4: normalized daemon URL usage in frontend",
      "Phase 5: Control Center with runtime info",
      "Phase 7: daemon sidecar build step for CI/CD",
      "Phase 8: runtime registry foundation",
      "Coding Runtime Bridge with adapters",
      "Runtime protocol and runtime-core packages",
      "UpdateManager types and migration runner",
      "WorktreeManager for project isolation",
    ],
    fixes: [
      "Audit gaps in Phase 2 and Phase 8",
      "Zod validation, DB migrations, and MCP schema sanitization",
      "Dev daemon URL and data path alignment",
      "Worktree git commands routed through capability broker",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="py-16">
      <div className="site-container">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight">Changelog</h1>
          <p className="mt-3 text-sm text-text-secondary">
            Release notes for CoreLayer. See also the{" "}
            <a
              href="https://github.com/alvinluo-tech/CoreLayer/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              GitHub Releases
              <ExternalLink className="ml-1 inline h-3 w-3" />
            </a>
            .
          </p>

          <div className="mt-10 flex flex-col gap-12">
            {releases.map((release) => (
              <article
                key={release.version}
                className="border-t border-border-subtle pt-8"
              >
                <div className="flex items-baseline gap-3">
                  <h2 className="text-lg font-semibold text-text-primary">
                    {release.version}
                  </h2>
                  <time className="text-xs text-text-tertiary">
                    {release.date}
                  </time>
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                    Highlights
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {release.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                    Bug Fixes
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {release.fixes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-border-subtle pt-8 text-center">
            <p className="text-sm text-text-tertiary">
              For the full changelog, see{" "}
              <a
                href="https://github.com/alvinluo-tech/CoreLayer/blob/main/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:underline"
              >
                CHANGELOG.md
                <ExternalLink className="ml-1 inline h-3 w-3" />
              </a>{" "}
              on GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
