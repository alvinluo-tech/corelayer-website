import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
import { DownloadButtons } from "@/components/download-buttons";
import { getMessages } from "@/lib/messages";

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getMessages(lang).downloadPage;

  return (
    <div className="py-16">
      <div className="site-container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 text-base text-text-secondary">
            {t.body}
          </p>
        </div>

        {/* Platform download buttons — client component */}
        <DownloadButtons />

        {/* Source Install */}
        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-lg font-semibold tracking-tight">
            {t.sourceTitle}
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            {t.sourceBody}
          </p>
          <div className="code-block mt-4">
            <pre className="whitespace-pre-wrap">{`git clone https://github.com/alvinluo-tech/CoreLayer.git
cd CoreLayer
pnpm install
pnpm build`}</pre>
          </div>

          <h3 className="mt-8 text-sm font-medium text-text-primary">
            {t.requirementsTitle}
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {t.requirements.map((req) => (
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
            {t.afterTitle}
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {t.after.map((step, i) => (
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
            href={`/${lang}/docs/getting-started/what-is-corelayer`}
            className="inline-flex items-center gap-1.5 text-sm text-cyan transition-colors hover:text-cyan/80"
          >
            {t.docsLink}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getMessages(lang).downloadPage;

  return {
    title: t.metadataTitle,
    description: t.metadataDescription,
  };
}
