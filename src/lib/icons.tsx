"use client";

import {
  Zap,
  Plug,
  Layers,
  Cpu,
  Mic,
  Shield,
  Server,
  Network,
  Workflow,
  Lock,
  Settings,
  Globe,
  Terminal,
  FileText,
  Compass,
  ArrowRightLeft,
  Sparkles,
  Link,
  Bot,
  LayoutDashboard,
} from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType> = {
  Zap,
  Plug,
  Layers,
  Cpu,
  Mic,
  Shield,
  Server,
  Network,
  Workflow,
  Lock,
  Settings,
  Globe,
  Terminal,
  FileText,
  Compass,
  ArrowRightLeft,
  Sparkles,
  Link,
  Bot,
  LayoutDashboard,
};

export const icons: Record<string, React.ReactNode> = Object.fromEntries(
  Object.entries(iconMap).map(([name, Icon]) => [name, <Icon key={name} />])
);
