import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

const en = {
  nav: {
    download: "Download",
    docs: "Docs",
    changelog: "Changelog",
    github: "GitHub",
  },
  footer: {
    tagline:
      "CoreLayer. The ultimate goal of AI is to serve us and help us understand ourselves—not replace us.",
    product: "Product",
    developers: "Developers",
    community: "Community",
    architecture: "Architecture",
    mcpIntegration: "MCP Integration",
    permissions: "Permissions",
    issues: "Issues",
    license: "License",
    security: "Security",
    copyright: "CoreLayer. Local-first. Permission-guarded.",
  },
  notFound: {
    title: "Page not found",
    body: "The page you are looking for does not exist or has been moved.",
    home: "Go home",
    docs: "Browse docs",
  },
  downloadButtons: {
    download: "Download",
    downloading: "Downloading...",
    releases: "View all releases on GitHub",
    fetchError: "Failed to fetch release info",
    fallbackError: "Download failed, try again",
    noAsset: "No matching asset found for {platform}",
    platforms: {
      windows: { name: "Windows", desc: "Windows 10/11 x64" },
      macos: { name: "macOS", desc: "macOS 13+ Universal" },
      linux: { name: "Linux", desc: "x86_64 / amd64" },
    },
  },
  home: {
    metadataTitle: "CoreLayer - Local-first AI control layer for your desktop",
    metadataDescription:
      "CoreLayer is a desktop AI command layer powered by Jarvis. Connect MCP servers, route work across models, approve tool calls, and control personal apps locally.",
    chips: ["Local-first", "Hey Jarvis Voice", "TaskGraph DAGs", "MCP Hub"],
    subtitle:
      "Meet your AI Butler: A local-first Agent control plane and intelligent workspace orchestrator.",
    description:
      "Born from an obsession with Jarvis. Jarvis transforms raw AI agents into a responsive personal companion. Through voice-native wakeup and MCP protocols, it seamlessly connects to your vibe-coded personal apps (fitness, diet, calendar). Meanwhile, the TaskGraph engine decomposes your goals into structured DAGs, safely orchestrating Claude Code or Codex executors to deliver tasks from 0 to 1. Let AI serve you and help you adjust—not replace you.",
    download: "Download",
    readDocs: "Read the docs",
    viewGithub: "View on GitHub",
    desktopLabel: "CoreLayer Desktop",
    trust: [
      "TaskGraph DAG Resolution",
      "Hey Jarvis Voice Wakeup",
      "Vibe-Coded App Connection",
      "Permission Guard Runtime",
      "Local-First Tauri App",
      "Smart Model Routing",
    ],
    problemTitle:
      "Most agents are just command-line tools. You need an ambient desktop butler.",
    problemBody:
      "Mainstream agent platforms like OpenClaw and Hermes have great tools, but they lack a structured workspace to deliver tasks from 0-to-1 and remain trapped in chat windows. CoreLayer sits between you and your execution agents. By decomposing goals into TaskGraphs and connecting to your personal vibe-coded webs via MCP, Jarvis brings a futuristic, voice-native interaction layer to your desktop.",
    withoutTitle: "Without CoreLayer",
    without: [
      "Fragmented tools struggling to complete tasks from 0-to-1",
      "Cold chat threads lacking a real sense of companionship",
      "Unmanaged CLI execution of powerful agents like Claude Code",
      "Personal vibe-coded web apps trapped in isolated silos",
      "Voice limited to browser tabs without global desktop command",
    ],
    withTitle: "With CoreLayer",
    with: [
      "TaskGraph DAG resolution for 0-to-1 task completion",
      "Hey Jarvis voice wakeup (\"I'm here, Master\") for pure future vibe",
      "Permission Guard runtime for safe, auditable tool calls",
      "MCP integration bridging your personal apps under one hub",
      "Natural language aggregation helping you analyze and improve yourself",
    ],
    workflowTitle: "From request to action, with approval in the loop.",
    workflowBody:
      "Every tool call follows a structured path through interpretation, routing, and permission verification before execution.",
    workflow: [
      ["1. Voice Wakeup", "Trigger Jarvis with 'Hey Jarvis' or a shortcut to initialize a workspace for your goal."],
      ["2. TaskGraph Decomposition", "Orchestrator breaks your goal into projects and tasks, mapping their DAG dependencies."],
      ["3. Agent Run Scheduling", "Concurrently executes task nodes using adapters for Claude Code, Codex, or custom runners."],
      ["4. Permission Gatekeeping", "Risky actions (like file writes or bash commands) pause for human approval before proceeding."],
      ["5. Clean Delivery", "Separates final deliverables from noise, logs, and authorization prompts."],
    ],
    capabilitiesTitle: "Core capabilities",
    capabilitiesBody:
      "Six systems working together to give you a desktop AI command layer that respects your permissions and your data.",
    capabilities: [
      [
        "Vibe-Coded App Bridge",
        "Connect custom apps like fitness trackers or diet logs using MCP to build your ambient cockpit.",
      ],
      [
        "TaskGraph DAG Engine",
        "Resolve task dependencies automatically with standard lifecycles from draft to completion.",
      ],
      [
        "Permission Guard",
        "Intercept file writes, execution scripts, and external connections with explicit confirmations.",
      ],
      [
        "Hey Jarvis Voice Pipeline",
        "Desktop-native wake word, streaming TTS, and interruption support for a true iron man experience.",
      ],
      [
        "Model Gateway",
        "Intelligently route prompts between MiMo, Groq, OpenRouter, and local models for cost and speed.",
      ],
      [
        "Tauri Control Center",
        "Monitor your DAG task graph progress, configure MCP servers, and audit logs from a native UI.",
      ],
    ],
    safetyTitle: "Agent actions need boundaries.",
    safetyBody:
      "CoreLayer treats tool execution as a permissioned system. Risky operations can be classified, paused, approved, denied, and logged.",
    permissionGuard: "Permission Guard",
    approvalRequired: "Approval required",
    mcpToolCall: "MCP Tool Call",
    risks: ["Read", "Write", "External", "Destructive"],
    safetyNote:
      "Agent actions should be visible. CoreLayer classifies tool calls, pauses risky operations for approval, and records what happened so automation stays inspectable.",
    voiceTitle: "\"Hey Jarvis\" — Ambient Desktop Voice",
    voiceBody:
      "Trigger your personal butler anytime with your wake word. The floating overlay immediately responds: 'I'm here, Master.' Ask it: 'Analyze my diet and gym stats from this week.' Jarvis will automatically request data from your vibe-coded apps via MCP and speak back a synthesized state report.",
    voiceTags: ["Wake word", "Streaming TTS", "Interruption", "Overlay"],
    voiceLabel: "Voice Pipeline",
    architectureTitle: "Built as a desktop control layer.",
    architectureBody:
      "A modular architecture where each component has a clear responsibility and boundary.",
    architectureLabel: "Architecture Overview",
    architectureLink: "Explore architecture",
    ctaTitle: "Bring CoreLayer to your desktop.",
    ctaBody:
      "Start with the desktop app, then connect models, MCP servers, and local tools through the Control Center.",
    ctaDownload: "Download latest release",
    sourceInstall: "Install from source",
  },
  downloadPage: {
    metadataTitle: "Download",
    metadataDescription:
      "Download CoreLayer for Windows, macOS, and Linux. Install from source or get the latest release.",
    title: "Download CoreLayer",
    body: "Get the desktop app or build from source. CoreLayer runs locally on your machine.",
    sourceTitle: "Install from source",
    sourceBody:
      "Build CoreLayer from the repository if you prefer source installs or need the latest development version.",
    requirementsTitle: "Requirements",
    requirements: [
      "Node.js >= 22",
      "pnpm >= 9",
      "Platform-specific Tauri prerequisites",
      "API keys for model providers (if using cloud models)",
    ],
    afterTitle: "After installing",
    after: [
      "Open the Control Center",
      "Configure a model provider",
      "Add your first MCP server",
      "Review permission settings",
      "Try your first command",
    ],
    docsLink: "Read the getting started guide",
  },
  changelog: {
    metadataTitle: "Changelog",
    metadataDescription: "CoreLayer release notes and changelog.",
    title: "Changelog",
    intro: "Release notes for CoreLayer. See also the",
    githubReleases: "GitHub Releases",
    highlights: "Highlights",
    fixes: "Bug Fixes",
    fullBefore: "For the full changelog, see",
    fullAfter: "on GitHub.",
  },
};

type Messages = typeof en;
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends unknown[]
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

function mergeMessages(base: Messages, patch: DeepPartial<Messages>): Messages {
  const platformPatch = patch.downloadButtons?.platforms;

  return {
    ...base,
    ...patch,
    nav: { ...base.nav, ...patch.nav },
    footer: { ...base.footer, ...patch.footer },
    notFound: { ...base.notFound, ...patch.notFound },
    downloadButtons: {
      ...base.downloadButtons,
      ...patch.downloadButtons,
      platforms: {
        windows: {
          ...base.downloadButtons.platforms.windows,
          ...platformPatch?.windows,
        },
        macos: {
          ...base.downloadButtons.platforms.macos,
          ...platformPatch?.macos,
        },
        linux: {
          ...base.downloadButtons.platforms.linux,
          ...platformPatch?.linux,
        },
      },
    },
    home: { ...base.home, ...patch.home },
    downloadPage: { ...base.downloadPage, ...patch.downloadPage },
    changelog: { ...base.changelog, ...patch.changelog },
  };
}

const zh = mergeMessages(en, {
  nav: { download: "下载", docs: "文档", changelog: "更新日志" },
  footer: {
    tagline: "面向桌面应用、工具、模型和 MCP 工作流的本地优先 AI 控制层。",
    product: "产品",
    developers: "开发者",
    community: "社区",
    architecture: "架构",
    mcpIntegration: "MCP 集成",
    permissions: "权限",
    issues: "问题反馈",
    license: "许可证",
    security: "安全",
    copyright: "CoreLayer。本地优先。权限守护。",
  },
  notFound: {
    title: "页面未找到",
    body: "你访问的页面不存在，或已经被移动。",
    home: "返回首页",
    docs: "浏览文档",
  },
  downloadButtons: {
    download: "下载",
    downloading: "下载中...",
    releases: "在 GitHub 查看全部版本",
    fetchError: "获取发布信息失败",
    fallbackError: "下载失败，请重试",
    noAsset: "没有找到适用于 {platform} 的安装包",
    platforms: {
      macos: { name: "macOS", desc: "macOS 13+ 通用版" },
    },
  },
  home: {
    metadataTitle: "CoreLayer - 面向桌面的本地优先 AI 控制层",
    metadataDescription:
      "CoreLayer 是由 Jarvis 驱动的桌面 AI 命令层。连接 MCP 服务器、跨模型路由任务、审批工具调用，并在本地控制个人应用。",
    chips: ["本地优先", "权限守护", "MCP 已连接"],
    subtitle: "面向桌面应用、工具、模型和 MCP 工作流的本地优先 AI 控制层。",
    description:
      "Jarvis 通过带权限守护的桌面命令中心协调你的个人应用。连接 MCP 服务器、跨模型路由任务、审批高风险操作，并在不放弃本地控制权的前提下使用语音。",
    download: "下载",
    readDocs: "阅读文档",
    viewGithub: "查看 GitHub",
    trust: [
      "本地优先 SQLite",
      "MCP 优先集成",
      "权限守护工具",
      "语音原生工作流",
      "模型路由",
      "Tauri 桌面应用",
    ],
    problemTitle: "你的应用彼此分离。你的助手应该理解整个系统。",
    problemBody:
      "大多数助手被困在聊天窗口、单应用副驾驶或云自动化平台里。CoreLayer 本地连接你的个人应用、工具、模型和 MCP 服务器，让 Jarvis 通过明确权限协调工作。",
    withoutTitle: "没有 CoreLayer",
    without: [
      "应用各自孤立",
      "没有统一工具路由",
      "手动选择模型",
      "缺少权限可见性",
      "语音局限在浏览器",
    ],
    withTitle: "使用 CoreLayer",
    with: [
      "统一控制层",
      "MCP + 原生工具注册表",
      "智能模型网关",
      "权限守护 + 审计日志",
      "桌面语音管线",
    ],
    workflowTitle: "从请求到行动，审批始终在流程中。",
    workflowBody: "每次工具调用都会经过理解、路由和权限校验，然后才执行。",
    workflow: [
      ["用户发起请求", "通过语音、快捷键或聊天输入。"],
      ["Jarvis 理解意图", "解析意图、上下文和对话历史。"],
      ["模型网关路由", "为任务和预算选择合适模型。"],
      ["工具注册表解析", "查找原生工具、MCP 服务器、技能或 REST 适配器。"],
      ["权限守护暂停", "高风险操作需要审批，审计日志记录发生过什么。"],
    ],
    capabilitiesTitle: "核心能力",
    capabilitiesBody:
      "六个系统协同工作，提供尊重权限和数据的桌面 AI 命令层。",
    capabilities: [
      ["MCP 优先集成", "通过 MCP 连接个人应用和外部工具服务器。"],
      ["统一工具注册表", "注册、路由、执行并展示原生模块、MCP、技能和 REST 适配器。"],
      ["权限守护", "识别高风险操作，暂停确认，并保留审计日志。"],
      ["模型网关", "在 MiMo、Groq、OpenRouter、本地模型和未来提供商之间路由请求。"],
      ["语音管线", "支持唤醒、监听、流式转写、语音回复和打断。"],
      ["控制中心", "管理模型、工具、应用、权限、语音配置、守护进程状态和日志。"],
    ],
    safetyTitle: "Agent 行动需要边界。",
    safetyBody:
      "CoreLayer 把工具执行视为权限系统。高风险操作可以被分类、暂停、批准、拒绝并记录。",
    permissionGuard: "权限守护",
    approvalRequired: "需要审批",
    mcpToolCall: "MCP 工具调用",
    risks: ["读取", "写入", "外部", "破坏性"],
    safetyNote:
      "Agent 行动应该可见。CoreLayer 会分类工具调用、暂停高风险操作，并记录发生过什么，让自动化保持可检查。",
    voiceTitle: "属于桌面的语音，而不只是浏览器语音。",
    voiceBody:
      "Jarvis 支持唤醒词检测、流式转写、可打断 TTS，以及面向桌面工作流的浮动覆盖层。",
    voiceTags: ["唤醒词", "流式 TTS", "可打断", "覆盖层"],
    voiceLabel: "语音管线",
    architectureTitle: "作为桌面控制层构建。",
    architectureBody: "模块化架构，每个组件都有清晰职责和边界。",
    architectureLabel: "架构概览",
    architectureLink: "探索架构",
    ctaTitle: "把 CoreLayer 带到你的桌面。",
    ctaBody: "从桌面应用开始，然后通过控制中心连接模型、MCP 服务器和本地工具。",
    ctaDownload: "下载最新版本",
    sourceInstall: "从源码安装",
  },
  downloadPage: {
    metadataTitle: "下载",
    metadataDescription:
      "下载适用于 Windows、macOS 和 Linux 的 CoreLayer。可从源码安装，也可获取最新发布版。",
    title: "下载 CoreLayer",
    body: "获取桌面应用，或从源码构建。CoreLayer 在你的机器本地运行。",
    sourceTitle: "从源码安装",
    sourceBody: "如果你偏好源码安装，或需要最新开发版本，可以从仓库构建 CoreLayer。",
    requirementsTitle: "要求",
    requirements: [
      "Node.js >= 22",
      "pnpm >= 9",
      "平台相关的 Tauri 前置依赖",
      "模型提供商 API Key（如使用云模型）",
    ],
    afterTitle: "安装后",
    after: ["打开控制中心", "配置模型提供商", "添加第一个 MCP 服务器", "检查权限设置", "尝试第一条命令"],
    docsLink: "阅读入门指南",
  },
  changelog: {
    metadataTitle: "更新日志",
    metadataDescription: "CoreLayer 发布说明和更新日志。",
    title: "更新日志",
    intro: "CoreLayer 的发布说明。也可以查看",
    highlights: "亮点",
    fixes: "修复",
    fullBefore: "完整更新日志见",
    fullAfter: "。",
  },
});

const zhTW = mergeMessages(zh, {
  nav: { download: "下載", docs: "文件", changelog: "更新日誌" },
  footer: {
    tagline: "面向桌面應用、工具、模型與 MCP 工作流的本地優先 AI 控制層。",
    product: "產品",
    developers: "開發者",
    community: "社群",
    architecture: "架構",
    mcpIntegration: "MCP 整合",
    permissions: "權限",
    issues: "問題回報",
    license: "授權",
    security: "安全",
    copyright: "CoreLayer。本地優先。權限守護。",
  },
  notFound: {
    title: "找不到頁面",
    body: "你要查看的頁面不存在，或已經被移動。",
    home: "返回首頁",
    docs: "瀏覽文件",
  },
  downloadButtons: {
    download: "下載",
    downloading: "下載中...",
    releases: "在 GitHub 查看所有版本",
    fetchError: "取得發布資訊失敗",
    fallbackError: "下載失敗，請重試",
    noAsset: "找不到適用於 {platform} 的安裝包",
    platforms: {
      macos: { name: "macOS", desc: "macOS 13+ 通用版" },
    },
  },
  home: {
    metadataTitle: "CoreLayer - 面向桌面的本地優先 AI 控制層",
    metadataDescription:
      "CoreLayer 是由 Jarvis 驅動的桌面 AI 命令層。連接 MCP 伺服器、跨模型路由工作、審批工具呼叫，並在本地控制個人應用。",
    chips: ["本地優先", "權限守護", "MCP 已連接"],
    subtitle: "面向桌面應用、工具、模型與 MCP 工作流的本地優先 AI 控制層。",
    description:
      "Jarvis 透過具備權限守護的桌面命令中心協調你的個人應用。連接 MCP 伺服器、跨模型路由工作、審批高風險操作，並在不放棄本地控制的前提下使用語音。",
    download: "下載",
    readDocs: "閱讀文件",
    viewGithub: "查看 GitHub",
    ctaDownload: "下載最新版本",
    sourceInstall: "從原始碼安裝",
  },
  downloadPage: {
    metadataTitle: "下載",
    metadataDescription:
      "下載適用於 Windows、macOS 和 Linux 的 CoreLayer。可從原始碼安裝，也可取得最新發布版。",
    title: "下載 CoreLayer",
    body: "取得桌面應用，或從原始碼構建。CoreLayer 在你的機器本地執行。",
    sourceTitle: "從原始碼安裝",
    sourceBody:
      "如果你偏好原始碼安裝，或需要最新開發版本，可以從倉庫構建 CoreLayer。",
    requirementsTitle: "要求",
    docsLink: "閱讀入門指南",
  },
  changelog: {
    metadataTitle: "更新日誌",
    metadataDescription: "CoreLayer 發布說明與更新日誌。",
    title: "更新日誌",
    intro: "CoreLayer 的發布說明。也可以查看",
    highlights: "亮點",
    fixes: "修復",
    fullBefore: "完整更新日誌見",
    fullAfter: "。",
  },
});

const es = mergeMessages(en, {
  nav: { download: "Descargar", docs: "Docs", changelog: "Cambios" },
  footer: {
    tagline:
      "Una capa local de control de IA para tus apps de escritorio, herramientas, modelos y flujos MCP.",
    product: "Producto",
    developers: "Desarrolladores",
    community: "Comunidad",
    architecture: "Arquitectura",
    mcpIntegration: "Integracion MCP",
    permissions: "Permisos",
    issues: "Incidencias",
    license: "Licencia",
    security: "Seguridad",
    copyright: "CoreLayer. Local-first. Con permisos.",
  },
  notFound: {
    title: "Pagina no encontrada",
    body: "La pagina que buscas no existe o se ha movido.",
    home: "Ir al inicio",
    docs: "Ver docs",
  },
  downloadButtons: {
    download: "Descargar",
    downloading: "Descargando...",
    releases: "Ver todas las versiones en GitHub",
    fetchError: "No se pudo obtener la version",
    fallbackError: "La descarga fallo, intentalo de nuevo",
    noAsset: "No se encontro un paquete para {platform}",
  },
  home: {
    metadataTitle: "CoreLayer - Capa local de control de IA para tu escritorio",
    metadataDescription:
      "CoreLayer es una capa de comandos de IA de escritorio impulsada por Jarvis. Conecta servidores MCP, enruta trabajo entre modelos, aprueba llamadas de herramientas y controla apps personales localmente.",
    chips: ["Local-first", "Con permisos", "MCP conectado"],
    subtitle:
      "Una capa local de control de IA para tus apps de escritorio, herramientas, modelos y flujos MCP.",
    description:
      "Jarvis coordina tus apps personales mediante un centro de comandos de escritorio con control de permisos. Conecta servidores MCP, enruta trabajo entre modelos, aprueba acciones riesgosas y usa voz sin perder control local.",
    download: "Descargar",
    readDocs: "Leer docs",
    viewGithub: "Ver en GitHub",
    trust: [
      "SQLite local-first",
      "Integraciones MCP-first",
      "Herramientas con permisos",
      "Flujos nativos de voz",
      "Enrutamiento de modelos",
      "App de escritorio Tauri",
    ],
    problemTitle:
      "Tus apps estan separadas. Tu asistente deberia entender todo el sistema.",
    problemBody:
      "La mayoria de asistentes viven atrapados en chats, copilotos de una sola app o plataformas cloud. CoreLayer conecta localmente tus apps, herramientas, modelos y servidores MCP para que Jarvis coordine trabajo con permisos explicitos.",
    workflowTitle: "De solicitud a accion, con aprobacion en el flujo.",
    workflowBody:
      "Cada llamada de herramienta pasa por interpretacion, enrutamiento y verificacion de permisos antes de ejecutarse.",
    capabilitiesTitle: "Capacidades principales",
    capabilitiesBody:
      "Seis sistemas trabajan juntos para darte una capa de comandos de IA de escritorio que respeta tus permisos y datos.",
    safetyTitle: "Las acciones de agentes necesitan limites.",
    safetyBody:
      "CoreLayer trata la ejecucion de herramientas como un sistema con permisos. Las operaciones riesgosas pueden clasificarse, pausarse, aprobarse, denegarse y registrarse.",
    approvalRequired: "Aprobacion requerida",
    risks: ["Leer", "Escribir", "Externo", "Destructivo"],
    voiceTitle: "Voz para el escritorio, no solo para el navegador.",
    voiceBody:
      "Jarvis soporta wake word, transcripcion en streaming, TTS con interrupcion y una capa flotante para flujos de escritorio.",
    architectureTitle: "Construido como capa de control de escritorio.",
    architectureBody:
      "Una arquitectura modular donde cada componente tiene responsabilidad y limite claros.",
    architectureLink: "Explorar arquitectura",
    ctaTitle: "Lleva CoreLayer a tu escritorio.",
    ctaBody:
      "Empieza con la app de escritorio y conecta modelos, servidores MCP y herramientas locales desde Control Center.",
    ctaDownload: "Descargar ultima version",
    sourceInstall: "Instalar desde codigo fuente",
  },
  downloadPage: {
    metadataTitle: "Descargar",
    metadataDescription:
      "Descarga CoreLayer para Windows, macOS y Linux. Instala desde codigo fuente u obten la ultima version.",
    title: "Descargar CoreLayer",
    body: "Obten la app de escritorio o compila desde codigo fuente. CoreLayer corre localmente en tu maquina.",
    sourceTitle: "Instalar desde codigo fuente",
    sourceBody:
      "Compila CoreLayer desde el repositorio si prefieres instalaciones desde fuente o necesitas la version de desarrollo.",
    requirementsTitle: "Requisitos",
    afterTitle: "Despues de instalar",
    docsLink: "Leer la guia de inicio",
  },
  changelog: {
    metadataTitle: "Cambios",
    metadataDescription: "Notas de version y cambios de CoreLayer.",
    title: "Cambios",
    intro: "Notas de version de CoreLayer. Consulta tambien",
    highlights: "Destacados",
    fixes: "Correcciones",
    fullBefore: "Para el changelog completo, consulta",
    fullAfter: "en GitHub.",
  },
});

const ja = mergeMessages(en, {
  nav: { download: "ダウンロード", docs: "ドキュメント", changelog: "変更履歴" },
  footer: {
    tagline:
      "デスクトップアプリ、ツール、モデル、MCP ワークフローのためのローカルファースト AI 制御レイヤー。",
    product: "プロダクト",
    developers: "開発者",
    community: "コミュニティ",
    architecture: "アーキテクチャ",
    mcpIntegration: "MCP 連携",
    permissions: "権限",
    issues: "Issue",
    license: "ライセンス",
    security: "セキュリティ",
    copyright: "CoreLayer。ローカルファースト。権限で保護。",
  },
  notFound: {
    title: "ページが見つかりません",
    body: "探しているページは存在しないか、移動されています。",
    home: "ホームへ",
    docs: "ドキュメントを見る",
  },
  downloadButtons: {
    download: "ダウンロード",
    downloading: "ダウンロード中...",
    releases: "GitHub ですべてのリリースを見る",
    fetchError: "リリース情報を取得できませんでした",
    fallbackError: "ダウンロードに失敗しました。もう一度お試しください",
    noAsset: "{platform} 用のアセットが見つかりません",
  },
  home: {
    metadataTitle: "CoreLayer - デスクトップ向けローカルファースト AI 制御レイヤー",
    metadataDescription:
      "CoreLayer は Jarvis が動かすデスクトップ AI コマンドレイヤーです。MCP サーバー接続、モデル間ルーティング、ツール呼び出し承認、個人アプリのローカル制御を提供します。",
    chips: ["ローカルファースト", "権限で保護", "MCP 接続"],
    subtitle:
      "デスクトップアプリ、ツール、モデル、MCP ワークフローのためのローカルファースト AI 制御レイヤー。",
    description:
      "Jarvis は権限で保護されたデスクトップ command center から個人アプリを連携します。MCP サーバーを接続し、モデル間で作業をルーティングし、危険な操作を承認し、ローカル制御を保ったまま音声を使えます。",
    download: "ダウンロード",
    readDocs: "ドキュメントを読む",
    viewGithub: "GitHub を見る",
    problemTitle: "アプリは分断されています。アシスタントはシステム全体を理解すべきです。",
    problemBody:
      "多くのアシスタントはチャット画面、単一アプリの copilot、クラウド自動化に閉じ込められています。CoreLayer は個人アプリ、ツール、モデル、MCP サーバーをローカルでつなぎ、Jarvis が明示的な権限のもとで作業を調整できるようにします。",
    workflowTitle: "依頼から実行まで、承認を組み込んだ流れ。",
    workflowBody:
      "すべてのツール呼び出しは、理解、ルーティング、権限確認を経てから実行されます。",
    capabilitiesTitle: "主な機能",
    capabilitiesBody:
      "6 つのシステムが連携し、権限とデータを尊重するデスクトップ AI コマンドレイヤーを提供します。",
    safetyTitle: "Agent の操作には境界が必要です。",
    safetyBody:
      "CoreLayer はツール実行を権限システムとして扱います。危険な操作は分類、一時停止、承認、拒否、記録できます。",
    approvalRequired: "承認が必要",
    voiceTitle: "ブラウザだけでなく、デスクトップに属する音声。",
    voiceBody:
      "Jarvis はウェイクワード検出、ストリーミング文字起こし、中断可能な TTS、デスクトップワークフロー向けのフローティング overlay を備えています。",
    architectureTitle: "デスクトップ制御レイヤーとして設計。",
    architectureBody:
      "各コンポーネントに明確な責務と境界を持たせたモジュラーアーキテクチャです。",
    architectureLink: "アーキテクチャを見る",
    ctaTitle: "CoreLayer をデスクトップへ。",
    ctaBody:
      "デスクトップアプリから始め、Control Center でモデル、MCP サーバー、ローカルツールを接続します。",
    ctaDownload: "最新リリースをダウンロード",
    sourceInstall: "ソースからインストール",
  },
  downloadPage: {
    metadataTitle: "ダウンロード",
    metadataDescription:
      "Windows、macOS、Linux 用 CoreLayer をダウンロード。ソースからのインストールや最新リリースを利用できます。",
    title: "CoreLayer をダウンロード",
    body: "デスクトップアプリを入手するか、ソースからビルドできます。CoreLayer はあなたのマシンでローカルに動作します。",
    sourceTitle: "ソースからインストール",
    sourceBody:
      "ソースインストールを好む場合や最新開発版が必要な場合は、リポジトリから CoreLayer をビルドできます。",
    requirementsTitle: "要件",
    afterTitle: "インストール後",
    docsLink: "入門ガイドを読む",
  },
  changelog: {
    metadataTitle: "変更履歴",
    metadataDescription: "CoreLayer のリリースノートと変更履歴。",
    title: "変更履歴",
    intro: "CoreLayer のリリースノートです。こちらも参照できます:",
    highlights: "ハイライト",
    fixes: "修正",
    fullBefore: "完全な変更履歴は",
    fullAfter: "で確認できます。",
  },
});

export const messages: Record<Locale, Messages> = {
  en,
  zh,
  "zh-TW": zhTW,
  es,
  ja,
};

export function getMessages(locale: string | undefined): Messages {
  return messages[isLocale(locale) ? locale : defaultLocale];
}
