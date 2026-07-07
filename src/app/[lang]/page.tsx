import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ExternalLink,
  Shield,
  Mic,
  Cpu,
  Workflow,
  Database,
  ChevronRight,
  Zap,
  Server,
  LayoutDashboard,
} from "lucide-react";
import { getMessages } from "@/lib/messages";

const trustIcons = [Database, Server, Shield, Mic, Cpu, LayoutDashboard];
const workflowIcons = [Mic, Zap, Cpu, Workflow, Shield];
const capabilityMeta = [
  { icon: Server, color: "text-cyan" },
  { icon: Workflow, color: "text-violet" },
  { icon: Shield, color: "text-emerald" },
  { icon: Cpu, color: "text-amber" },
  { icon: Mic, color: "text-cyan" },
  { icon: LayoutDashboard, color: "text-violet" },
];
const riskColors = [
  "bg-emerald/10 text-emerald border-emerald/20",
  "bg-amber/10 text-amber border-amber/20",
  "bg-violet/10 text-violet border-violet/20",
  "bg-rose/10 text-rose border-rose/20",
];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getMessages(lang).home;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="site-container relative z-10 grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {t.chips.map((chip) => (
                <span key={chip} className="status-chip">
                  <span className="dot" />
                  {chip}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              CoreLayer
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-text-secondary">
              {t.subtitle}
            </p>
            <p className="max-w-lg text-sm leading-relaxed text-text-tertiary">
              {t.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/${lang}/download`}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-2.5 text-sm font-medium text-void transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                {t.download}
              </Link>
              <Link
                href={`/${lang}/docs`}
                className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-panel px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-border-cyan hover:text-text-primary"
              >
                {t.readDocs}
              </Link>
              <a
                href="https://github.com/alvinluo-tech/CoreLayer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
              >
                {t.viewGithub}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="relative mt-10 md:mt-0">
            <div className="product-frame">
              <div className="frame-bar">
                <span className="h-2.5 w-2.5 rounded-full bg-rose/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald/60" />
                <span className="ml-2 text-[11px] text-text-tertiary">
                  {t.desktopLabel}
                </span>
              </div>
              <Image
                src="/assets/corelayer-hero.png"
                alt={t.desktopLabel}
                width={800}
                height={500}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
      </section>

      <section className="border-b border-border-subtle bg-deep">
        <div className="site-container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4">
          {t.trust.map((label, i) => {
            const Icon = trustIcons[i] ?? Database;
            return (
              <div
                key={label}
                className="flex items-center gap-2 text-xs text-text-tertiary"
              >
                <Icon className="h-3.5 w-3.5 text-cyan/60" />
                {label}
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.problemTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {t.problemBody}
            </p>
          </div>

          <div className="mt-12 grid items-center gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border-subtle bg-panel p-6">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-text-tertiary">
                {t.withoutTitle}
              </h3>
              <div className="flex flex-col gap-3">
                {t.without.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-rose/60" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border-cyan bg-panel p-6">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-cyan">
                {t.withTitle}
              </h3>
              <div className="flex flex-col gap-3">
                {t.with.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="site-container">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.workflowTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-secondary">
            {t.workflowBody}
          </p>

          <div className="relative mt-12">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border-subtle md:left-1/2 md:translate-x-px" />

            <div className="flex flex-col gap-8">
              {t.workflow.map(([title, desc], i) => {
                const Icon = workflowIcons[i] ?? Workflow;
                return (
                  <div
                    key={title}
                    className="relative flex items-start gap-6 md:w-1/2"
                    style={{ marginLeft: i % 2 === 0 ? "0" : "auto" }}
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-cyan bg-deep">
                      <Icon className="h-4 w-4 text-cyan" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-text-primary">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-deep py-20">
        <div className="site-container">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.capabilitiesTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-secondary">
            {t.capabilitiesBody}
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.capabilities.map(([title, desc], i) => {
              const meta = capabilityMeta[i] ?? capabilityMeta[0];
              const Icon = meta.icon;
              return (
                <div
                  key={title}
                  className="rounded-lg border border-border-subtle bg-panel p-6 transition-colors hover:border-border-cyan"
                >
                  <Icon className={`h-5 w-5 ${meta.color}`} />
                  <h3 className="mt-3 text-sm font-medium text-text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.safetyTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {t.safetyBody}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-lg border border-border-cyan bg-panel-strong p-5">
              <div className="flex items-center gap-3 text-xs text-text-tertiary">
                <Shield className="h-4 w-4 text-emerald" />
                {t.permissionGuard}
                <span className="ml-auto text-emerald">
                  {t.approvalRequired}
                </span>
              </div>
              <div className="mt-4 rounded-md border border-border-subtle bg-deep p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {t.mcpToolCall}
                    </p>
                    <p className="mt-1 font-mono text-xs text-text-secondary">
                      filesystem.write(&quot;/documents/report.md&quot;)
                    </p>
                  </div>
                  <span className="rounded border border-amber/30 bg-amber/10 px-2 py-0.5 text-[11px] font-medium text-amber">
                    WRITE
                  </span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {t.risks.map((risk, i) => (
                  <div
                    key={risk}
                    className={`rounded border px-2 py-1 text-center text-[11px] font-medium ${
                      riskColors[i] ?? riskColors[0]
                    }`}
                  >
                    {risk}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-text-tertiary">
                {t.safetyNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-deep py-20">
        <div className="site-container grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.voiceTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {t.voiceBody}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.voiceTags.map((tag) => (
                <span key={tag} className="status-chip">
                  <span className="dot" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="product-frame">
            <div className="frame-bar">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
              <span className="text-[11px] text-text-tertiary">
                {t.voiceLabel}
              </span>
            </div>
            <Image
              src="/assets/coreling.png"
              alt={t.voiceLabel}
              width={400}
              height={300}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="site-container">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.architectureTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-secondary">
            {t.architectureBody}
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="product-frame">
              <div className="frame-bar">
                <span className="h-2.5 w-2.5 rounded-full bg-rose/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald/60" />
                <span className="ml-2 text-[11px] text-text-tertiary">
                  {t.architectureLabel}
                </span>
              </div>
              <Image
                src="/assets/architecture.png"
                alt={t.architectureLabel}
                width={800}
                height={450}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href={`/${lang}/docs/architecture/system-overview`}
              className="inline-flex items-center gap-1.5 text-sm text-cyan transition-colors hover:text-cyan/80"
            >
              {t.architectureLink}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-deep py-20">
        <div className="site-container text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-text-secondary">
            {t.ctaBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${lang}/download`}
              className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-medium text-void transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              {t.ctaDownload}
            </Link>
            <a
              href="https://github.com/alvinluo-tech/CoreLayer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-panel px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-border-cyan hover:text-text-primary"
            >
              {t.sourceInstall}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getMessages(lang).home;

  return {
    title: t.metadataTitle,
    description: t.metadataDescription,
  };
}
