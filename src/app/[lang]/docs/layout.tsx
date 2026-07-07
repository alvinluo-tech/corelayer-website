import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/app/source";

export default async function DocsLayoutPage({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;

  return (
    <DocsLayout
      tree={source.getPageTree(lang)}
      nav={{
        title: (
          <span className="text-sm font-semibold tracking-tight">CoreLayer Docs</span>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
