import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CoreLayer - Local-first AI control layer for your desktop",
    template: "%s | CoreLayer",
  },
  description:
    "CoreLayer is a desktop AI command layer powered by Jarvis. Connect MCP servers, route work across models, approve tool calls, and control personal apps locally.",
  metadataBase: new URL("https://corelayer.ai"),
  openGraph: {
    title: "CoreLayer - Local-first AI control layer for your desktop",
    description:
      "CoreLayer is a desktop AI command layer powered by Jarvis. Connect MCP servers, route work across models, approve tool calls, and control personal apps locally.",
    images: ["/assets/corelayer-hero.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreLayer - Local-first AI control layer for your desktop",
    description:
      "CoreLayer is a desktop AI command layer powered by Jarvis. Connect MCP servers, route work across models, approve tool calls, and control personal apps locally.",
    images: ["/assets/corelayer-hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/icon.png" />
      </head>
      <body className="min-h-screen bg-void text-text-primary antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          value={{ dark: "dark", light: "light" }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
