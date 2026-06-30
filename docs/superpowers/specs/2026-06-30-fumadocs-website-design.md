# CoreLayer Website + Fumadocs Integration Design

> Status: approved
> Date: 2026-06-30

## Summary

Re-implement the CoreLayer official website with Fumadocs UI + MDX for documentation. Full implementation based on the existing design spec at `Jarvis/docs/design/official-website-design-spec.md`.

## Tech Stack

- Next.js 16 App Router (existing)
- Fumadocs UI + Fumadocs MDX (new)
- Tailwind CSS 4 (existing)
- lucide-react (existing)
- Geist Sans + Geist Mono fonts (existing)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage: Hero, Trust Bar, Problem, Workflow, Capabilities, Safety, Voice, Architecture, Download CTA |
| `/download` | Platform cards, source install, first-run checklist |
| `/docs/[[...slug]]` | Fumadocs catch-all: sidebar, TOC, search, MDX content |
| `/changelog` | Release notes |

## Docs Content Tree

```
Getting Started
  What is CoreLayer
  Install
  Quickstart
  First MCP Server

Configuration
  Model Providers
  MCP Servers
  Storage
  Voice
  Permissions

Core Concepts
  Jarvis
  Control Center
  Model Gateway
  Tool Registry
  Permission Guard
  Daemon
  Skills

Guides
  Connect an MCP App
  Add a Custom Tool
  Configure Local Models
  Enable Voice Workflow
  Review Tool Audit Logs
  Build From Source

Reference
  Config File
  CLI Commands
  API Endpoints
  Troubleshooting

Architecture
  System Overview
  Runtime Boundaries
  Data Flow
  Security Model
  Multi-Runtime Direction
```

## Visual System

- Dark theme: void (#04060e), deep (#080c18), panel (rgba glass)
- Accents: cyan (#00d4ff), violet (#a78bfa), amber (#ffb800), emerald (#00e68a), rose (#ff3d5a)
- Fumadocs theme customized to match CoreLayer brand
- Motion: restrained, compositor-friendly, respects prefers-reduced-motion

## Build Order

1. Install dependencies + configure Fumadocs
2. Global layout (Header, Footer, Metadata, globals.css)
3. Homepage sections
4. Download page
5. Docs route + MDX content
6. Changelog page
7. Responsive + a11y + build verification

## Non-Goals

- Blog, user accounts, payment, newsletter, AI chat in docs, multi-language, complex animations
