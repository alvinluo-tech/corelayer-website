import type { MetadataRoute } from "next";

const baseUrl = "https://corelayer.alvin-luo.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...[
      "getting-started/what-is-corelayer",
      "getting-started/install",
      "getting-started/quickstart",
      "getting-started/first-mcp-server",
      "configuration/model-providers",
      "configuration/mcp-servers",
      "configuration/storage",
      "configuration/voice",
      "configuration/permissions",
      "core-concepts/jarvis",
      "core-concepts/control-center",
      "core-concepts/model-gateway",
      "core-concepts/tool-registry",
      "core-concepts/permission-guard",
      "core-concepts/daemon",
      "core-concepts/skills",
      "guides/connect-mcp-app",
      "guides/add-custom-tool",
      "guides/configure-local-models",
      "guides/enable-voice",
      "guides/review-audit-logs",
      "guides/build-from-source",
      "reference/config-file",
      "reference/cli-commands",
      "reference/api-endpoints",
      "reference/troubleshooting",
      "architecture/system-overview",
      "architecture/runtime-boundaries",
      "architecture/data-flow",
      "architecture/security-model",
      "architecture/multi-runtime-direction",
    ].map((path) => ({
      url: `${baseUrl}/docs/${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
