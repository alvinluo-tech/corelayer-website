import type { MetadataRoute } from "next";

const baseUrl = "https://corelayer.alvin-luo.me";
const languages = ["en", "zh", "zh-TW", "es", "ja"];

const docPages = [
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Home pages per language
  for (const lang of languages) {
    entries.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: lang === "en" ? 1 : 0.8,
    });
    entries.push({
      url: `${baseUrl}/${lang}/download`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: lang === "en" ? 0.8 : 0.6,
    });
    entries.push({
      url: `${baseUrl}/${lang}/changelog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: lang === "en" ? 0.5 : 0.4,
    });
    entries.push({
      url: `${baseUrl}/${lang}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: lang === "en" ? 0.9 : 0.7,
    });
  }

  // Doc pages per language
  for (const lang of languages) {
    for (const path of docPages) {
      entries.push({
        url: `${baseUrl}/${lang}/docs/${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: lang === "en" ? 0.7 : 0.5,
      });
    }
  }

  return entries;
}
