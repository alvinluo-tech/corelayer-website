import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FumadocsProvider } from "@/components/fumadocs-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
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
          <FumadocsProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
          </FumadocsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
