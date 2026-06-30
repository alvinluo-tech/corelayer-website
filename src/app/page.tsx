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
  Settings,
  Eye,
  ChevronRight,
  Zap,
  Lock,
  Server,
  Globe,
  Volume2,
  LayoutDashboard,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="site-container relative z-10 grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              <span className="status-chip">
                <span className="dot" />
                Local-first
              </span>
              <span className="status-chip">
                <span className="dot" />
                Permission-guarded
              </span>
              <span className="status-chip">
                <span className="dot" />
                MCP connected
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              CoreLayer
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-text-secondary">
              A local-first AI control layer for your desktop apps, tools, models,
              and MCP workflows.
            </p>
            <p className="max-w-lg text-sm leading-relaxed text-text-tertiary">
              Jarvis coordinates your personal apps through a permission-guarded
              desktop command center. Connect MCP servers, route work across models,
              approve risky actions, and use voice without giving up local control.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-2.5 text-sm font-medium text-void transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-panel px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-border-cyan hover:text-text-primary"
              >
                Read the docs
              </Link>
              <a
                href="https://github.com/alvinluo-tech/CoreLayer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
              >
                View on GitHub
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
                  CoreLayer Desktop
                </span>
              </div>
              <Image
                src="/assets/corelayer-hero.png"
                alt="CoreLayer desktop command center showing Jarvis, MCP tools, and system status"
                width={800}
                height={500}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Gradient glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border-subtle bg-deep">
        <div className="site-container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4">
          {[
            { icon: Database, label: "Local-first SQLite" },
            { icon: Server, label: "MCP-first integrations" },
            { icon: Shield, label: "Permission-guarded tools" },
            { icon: Mic, label: "Voice-native workflows" },
            { icon: Cpu, label: "Model routing" },
            { icon: LayoutDashboard, label: "Tauri desktop app" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs text-text-tertiary"
            >
              <item.icon className="h-3.5 w-3.5 text-cyan/60" />
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Your apps are separate. Your assistant should understand the whole
              system.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Most assistants are trapped in chat windows, single-app copilots, or
              cloud automation platforms. CoreLayer sits locally between your
              personal apps, tools, models, and MCP servers so Jarvis can
              coordinate work through explicit permissions.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-lg border border-border-subtle bg-panel p-6">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-text-tertiary">
                Without CoreLayer
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Apps work in isolation",
                  "No unified tool routing",
                  "Manual model selection",
                  "No permission visibility",
                  "Voice limited to browser",
                ].map((item) => (
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

            {/* After */}
            <div className="rounded-lg border border-border-cyan bg-panel p-6">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-cyan">
                With CoreLayer
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Unified control layer",
                  "MCP + native tool registry",
                  "Smart model gateway",
                  "Permission guard + audit logs",
                  "Desktop voice pipeline",
                ].map((item) => (
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

      {/* Workflow Section */}
      <section className="border-t border-border-subtle py-20">
        <div className="site-container">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            From request to action, with approval in the loop.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-secondary">
            Every tool call follows a structured path through interpretation,
            routing, and permission verification before execution.
          </p>

          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border-subtle md:left-1/2 md:translate-x-px" />

            <div className="flex flex-col gap-8">
              {[
                {
                  step: 1,
                  title: "User asks",
                  desc: "Through voice, keyboard shortcut, or chat input.",
                  icon: Mic,
                },
                {
                  step: 2,
                  title: "Jarvis interprets",
                  desc: "Parses intent, context, and conversation history.",
                  icon: Zap,
                },
                {
                  step: 3,
                  title: "Model Gateway routes",
                  desc: "Selects the right model for the task and budget.",
                  icon: Cpu,
                },
                {
                  step: 4,
                  title: "Tool Registry resolves",
                  desc: "Finds native tools, MCP servers, skills, or REST adapters.",
                  icon: Workflow,
                },
                {
                  step: 5,
                  title: "Permission Guard pauses",
                  desc: "Risky actions require approval. Audit logs record what happened.",
                  icon: Shield,
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="relative flex items-start gap-6 md:w-1/2"
                  style={{
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                  }}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-cyan bg-deep">
                    <item.icon className="h-4 w-4 text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border-subtle bg-deep py-20">
        <div className="site-container">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Core capabilities
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-secondary">
            Six systems working together to give you a desktop AI command layer
            that respects your permissions and your data.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Server,
                title: "MCP-first integration",
                desc: "Connect personal apps and external tool servers through MCP.",
                color: "text-cyan",
              },
              {
                icon: Workflow,
                title: "Unified tool registry",
                desc: "Register, route, execute, and display tools from native modules, MCP, skills, and REST adapters.",
                color: "text-violet",
              },
              {
                icon: Shield,
                title: "Permission Guard",
                desc: "Classify risky actions, pause for confirmation, and keep audit logs.",
                color: "text-emerald",
              },
              {
                icon: Cpu,
                title: "Model Gateway",
                desc: "Route requests across MiMo, Groq, OpenRouter, local models, and future providers.",
                color: "text-amber",
              },
              {
                icon: Mic,
                title: "Voice pipeline",
                desc: "Wake, listen, transcribe, stream responses, speak back, and support interruption.",
                color: "text-cyan",
              },
              {
                icon: LayoutDashboard,
                title: "Control Center",
                desc: "Manage models, tools, apps, permissions, voice profiles, daemon health, and logs.",
                color: "text-violet",
              },
            ].map((cap) => (
              <div
                key={cap.title}
                className="rounded-lg border border-border-subtle bg-panel p-6 transition-colors hover:border-border-cyan"
              >
                <cap.icon className={`h-5 w-5 ${cap.color}`} />
                <h3 className="mt-3 text-sm font-medium text-text-primary">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="border-t border-border-subtle py-20">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Agent actions need boundaries.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              CoreLayer treats tool execution as a permissioned system. Risky
              operations can be classified, paused, approved, denied, and logged.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            {/* Permission approval mock */}
            <div className="rounded-lg border border-border-cyan bg-panel-strong p-5">
              <div className="flex items-center gap-3 text-xs text-text-tertiary">
                <Shield className="h-4 w-4 text-emerald" />
                Permission Guard
                <span className="ml-auto text-emerald">Approval required</span>
              </div>
              <div className="mt-4 rounded-md border border-border-subtle bg-deep p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      MCP Tool Call
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
                {[
                  { label: "Read", color: "bg-emerald/10 text-emerald border-emerald/20" },
                  { label: "Write", color: "bg-amber/10 text-amber border-amber/20" },
                  { label: "External", color: "bg-violet/10 text-violet border-violet/20" },
                  { label: "Destructive", color: "bg-rose/10 text-rose border-rose/20" },
                ].map((risk) => (
                  <div
                    key={risk.label}
                    className={`rounded border px-2 py-1 text-center text-[11px] font-medium ${risk.color}`}
                  >
                    {risk.label}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-text-tertiary">
                Agent actions should be visible. CoreLayer classifies tool calls,
                pauses risky operations for approval, and records what happened so
                automation stays inspectable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Section */}
      <section className="border-t border-border-subtle bg-deep py-20">
        <div className="site-container grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Voice that belongs to the desktop, not just the browser.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Jarvis supports wake word detection, streaming transcription, TTS
              with interruption, and a floating overlay designed for desktop
              workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Wake word", "Streaming TTS", "Interruption", "Overlay"].map(
                (tag) => (
                  <span key={tag} className="status-chip">
                    <span className="dot" />
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="product-frame">
            <div className="frame-bar">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
              <span className="text-[11px] text-text-tertiary">
                Voice Pipeline
              </span>
            </div>
            <Image
              src="/assets/coreling.png"
              alt="CoreLayer voice assistant overlay showing listening state"
              width={400}
              height={300}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Architecture Preview */}
      <section className="border-t border-border-subtle py-20">
        <div className="site-container">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Built as a desktop control layer.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-text-secondary">
            A modular architecture where each component has a clear responsibility
            and boundary.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="product-frame">
              <div className="frame-bar">
                <span className="h-2.5 w-2.5 rounded-full bg-rose/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald/60" />
                <span className="ml-2 text-[11px] text-text-tertiary">
                  Architecture Overview
                </span>
              </div>
              <Image
                src="/assets/architecture.png"
                alt="CoreLayer architecture from Tauri desktop app to daemon, model gateway, tool registry, permission guard, and storage"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/docs/architecture/system-overview"
              className="inline-flex items-center gap-1.5 text-sm text-cyan transition-colors hover:text-cyan/80"
            >
              Explore architecture
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="border-t border-border-subtle bg-deep py-20">
        <div className="site-container text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Bring CoreLayer to your desktop.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-text-secondary">
            Start with the desktop app, then connect models, MCP servers, and local
            tools through the Control Center.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-medium text-void transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download latest release
            </Link>
            <a
              href="https://github.com/alvinluo-tech/CoreLayer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-panel px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-border-cyan hover:text-text-primary"
            >
              Install from source
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
