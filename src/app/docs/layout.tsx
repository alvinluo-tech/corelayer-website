import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/app/source";

export default function DocsLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsLayout
      tree={source.pageTree}
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
