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
    metadataTitle: "CoreLayer - Local-first AI control plane for your desktop",
    metadataDescription:
      "CoreLayer is a desktop AI control plane powered by Jarvis. Connect MCP servers, route work across models, approve tool calls, and control personal apps locally.",
    chips: ["Local-first", "Voice Native", "TaskGraph Engine", "MCP Hub"],
    subtitle:
      "Your desktop AI control plane.",
    description:
      "CoreLayer transforms your desktop into an intelligent workspace. Speak naturally to Jarvis, route work across any AI model, connect personal apps through MCP, and keep every agent action permission-guarded and auditable.",
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
      "Most AI tools stop at conversation. Real work needs execution.",
    problemBody:
      "Current agent platforms are trapped in chat windows — they lack structured workspaces, permission boundaries, and the ability to deliver tasks from start to finish. CoreLayer fills the gap. It decomposes goals into executable TaskGraphs, connects your personal apps through MCP, and runs agents with explicit guardrails — not blind trust.",
    withoutTitle: "Without CoreLayer",
    without: [
      "Fragmented tools that can't complete tasks from start to finish",
      "Cold chat threads with no sense of structure or progress",
      "Unmanaged agent execution with no safety boundaries",
      "Personal apps trapped in isolated silos",
      "Voice commands limited to browser tabs",
    ],
    withTitle: "With CoreLayer",
    with: [
      "TaskGraph DAG resolution for structured task completion",
      "Voice-driven workspace orchestration via Hey Jarvis",
      "Permission Guard runtime for safe, auditable execution",
      "MCP bridge connecting all your personal apps under one hub",
      "Natural language aggregation that helps you understand yourself better",
    ],
    workflowTitle: "From goal to result, with oversight at every step.",
    workflowBody:
      "Every request passes through interpretation, planning, routing, and permission verification before execution.",
    workflow: [
      ["1. Voice Wakeup", "Trigger Jarvis with your wake word to create a workspace for any goal."],
      ["2. TaskGraph Planning", "The orchestrator breaks your goal into structured tasks with clear dependencies."],
      ["3. Agent Execution", "Runs task nodes concurrently using Claude Code, Codex, or custom executors."],
      ["4. Permission Gate", "Risky operations pause for your approval before they proceed."],
      ["5. Clean Delivery", "Final results are separated from logs, noise, and approval prompts."],
    ],
    capabilitiesTitle: "Everything you need to control AI on your desktop.",
    capabilitiesBody:
      "Six integrated systems that give you a local-first command layer with permission guards at every level.",
    capabilities: [
      [
        "Vibe-Coded App Bridge",
        "Connect personal apps — fitness trackers, diet logs, calendars — through MCP to build your ambient control cockpit.",
      ],
      [
        "TaskGraph DAG Engine",
        "Resolve task dependencies automatically with standard lifecycles from draft to completion.",
      ],
      [
        "Permission Guard",
        "Intercept file writes, shell commands, and network calls with confirmation every time.",
      ],
      [
        "Hey Jarvis Voice",
        "Desktop-native wake word, streaming TTS, and barge-in support for hands-free interaction.",
      ],
      [
        "Model Gateway",
        "Route prompts across MiMo, Groq, OpenRouter, and local models based on cost and capability.",
      ],
      [
        "Tauri Control Center",
        "Monitor task graph progress, configure MCP servers, and audit logs from a native UI.",
      ],
    ],
    safetyTitle: "Agent actions need boundaries.",
    safetyBody:
      "CoreLayer treats tool execution as a permissioned system. Risky operations are classified, paused, approved, denied, and logged — nothing runs without your knowledge.",
    permissionGuard: "Permission Guard",
    approvalRequired: "Approval required",
    mcpToolCall: "MCP Tool Call",
    risks: ["Read", "Write", "External", "Destructive"],
    safetyNote:
      "Every tool call is visible. CoreLayer classifies operations by risk, pauses dangerous ones for approval, and records everything for audit.",
    voiceTitle: "\"Hey Jarvis\" — Voice-Native Desktop Interaction",
    voiceBody:
      "Trigger your personal butler anytime with your wake word. The floating overlay responds instantly. Ask it to analyze your week, pull data from connected apps, or kick off a multi-step task — all by voice.",
    voiceTags: ["Wake word", "Streaming TTS", "Barge-in", "Floating overlay"],
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
    tagline: "CoreLayer。AI 终极的目的不是为了取代我们，而是为了让我们更好地了解并调整自己。",
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
    chips: ["本地优先", "语音唤醒", "TaskGraph 引擎", "MCP 智能中控"],
    subtitle: "你的桌面 AI 控制平面。",
    description:
      "CoreLayer 将你的桌面变为智能工作空间。通过语音唤醒 Jarvis、跨模型路由任务、借助 MCP 连接个人应用——每个 Agent 操作都在权限守护之下，全程可审计。",
    download: "下载",
    readDocs: "阅读文档",
    viewGithub: "查看 GitHub",
    trust: [
      "TaskGraph 依赖解析",
      "Hey Jarvis 语音唤醒",
      "Vibe Coding 个人应用",
      "权限守护运行时",
      "Tauri 桌面应用",
      "多模型智能路由",
    ],
    problemTitle: "大多数 AI 止步于对话。真正的工作需要执行。",
    problemBody:
      "当前的 Agent 平台被局限在聊天框中——缺乏结构化工作空间、权限边界和任务闭环能力。CoreLayer 弥补了这片空白。它将目标拆解为可执行的 TaskGraph，通过 MCP 连接你的个人应用，并在明确的权限轨道上运行 Agent，而非盲目信任。",
    withoutTitle: "没有 CoreLayer",
    without: [
      "工具有很多，但无法从头到尾完成一个完整任务",
      "冷冰冰的聊天框，没有结构感和进度感",
      "Agent 在本地随意执行，缺乏安全约束",
      "个人应用彼此孤立、无法联动",
      "语音功能被限制在浏览器里",
    ],
    withTitle: "使用 CoreLayer",
    with: [
      "TaskGraph DAG 依赖解析，结构化任务闭环",
      "通过 Hey Jarvis 语音驱动工作空间编排",
      "权限守护运行时，安全可控且全程审计",
      "通过 MCP 串联个人应用，打破数据孤岛",
      "自然语言全局分析，帮你更好地了解自己",
    ],
    workflowTitle: "从目标到结果，每一步都可控。",
    workflowBody: "每个请求都会经过解析、规划、路由和权限验证，之后才会执行。",
    workflow: [
      ["1. 唤醒与创建", "通过语音或指令触发 Jarvis，为目标创建工作空间。"],
      ["2. TaskGraph 规划", "Orchestrator 将目标拆解为结构化的任务节点，自动构建依赖关系。"],
      ["3. Agent 执行", "按依赖顺序并发调度 Claude Code、Codex 等执行器运行任务。"],
      ["4. 权限守卫", "遇到高风险操作时自动挂起，等待审批后才继续。"],
      ["5. 产物交付", "最终产物与日志、权限提示分离，干净利落地交付。"],
    ],
    capabilitiesTitle: "桌面 AI 控制，你需要的一切。",
    capabilitiesBody:
      "六个集成系统协同工作，提供本地优先的命令层，每层都有权限守护。",
    capabilities: [
      ["MCP 个人应用串联", "通过 MCP 将日程、饮食、健身等个人应用串联为统一控制面板。"],
      ["TaskGraph 编排引擎", "基于 DAG 依赖关系的任务解析引擎，管理从草稿到完成的完整生命周期。"],
      ["权限守护运行时", "拦截文件写入、Shell 命令和网络请求，每次都需要你的确认。"],
      ["Hey Jarvis 语音", "桌面原生唤醒词、流式 TTS、支持打断的免提交互。"],
      ["多模型网关", "根据成本和能力自动在 MiMo、Groq、OpenRouter 和本地模型间路由。"],
      ["桌面控制中心", "在 Tauri 桌面应用里管理任务进度、MCP 服务、权限和审计日志。"],
    ],
    safetyTitle: "Agent 行动需要边界。",
    safetyBody:
      "CoreLayer 把工具执行视为权限系统。高风险操作被分类、暂停、批准、拒绝并记录——没有你的知晓，什么都不会运行。",
    permissionGuard: "权限守护",
    approvalRequired: "需要审批",
    mcpToolCall: "MCP 工具调用",
    risks: ["读取", "写入", "外部", "破坏性"],
    safetyNote:
      "每次工具调用都可见。CoreLayer 按风险分类操作、暂停危险行为等待审批，并记录一切用于审计。",
    voiceTitle: "桌面原生的语音交互。",
    voiceBody:
      "用唤醒词随时召唤你的专属管家。浮动面板即时响应。让它分析你的周报、从连接的应用拉取数据、或启动一个多步骤任务——全凭语音。",
    voiceTags: ["唤醒词", "流式 TTS", "支持打断", "浮动面板"],
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
    tagline: "CoreLayer。AI 終極的目的不是為了取代我們，而是為了讓我們更好地了解並調整自己。",
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
    chips: ["本地優先", "語音喚醒", "TaskGraph 引擎", "MCP 智能中控"],
    subtitle: "你的桌面 AI 控制平面。",
    description:
      "CoreLayer 將你的桌面變為智慧工作空間。透過語音喚醒 Jarvis、跨模型路由任務、藉助 MCP 連接個人應用——每個 Agent 操作都在權限守護之下，全程可審計。",
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
      "CoreLayer. El objetivo final de la IA es servirnos y ayudarnos a entendernos a nosotros mismos, no reemplazarnos.",
    product: "Producto",
    developers: "Desarrolladores",
    community: "Comunidad",
    architecture: "Architecture",
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
    metadataTitle: "CoreLayer - Capa de control de IA local-first para tu escritorio",
    metadataDescription:
      "CoreLayer es un plano de control de IA de escritorio impulsado por Jarvis. Conecta servidores MCP, enruta trabajo entre modelos, aprueba llamadas de herramientas y controla apps personales localmente.",
    chips: ["Local-first", "Voz nativa", "Motor TaskGraph", "Centro MCP"],
    subtitle: "Tu plano de control de IA de escritorio.",
    description:
      "CoreLayer transforma tu escritorio en un espacio de trabajo inteligente. Habla naturalmente con Jarvis, enruta trabajo a través de cualquier modelo de IA, conecta apps personales mediante MCP, y mantén cada acción de agente protegida por permisos y auditable.",
    download: "Descargar",
    readDocs: "Leer docs",
    viewGithub: "Ver en GitHub",
    desktopLabel: "Escritorio CoreLayer",
    trust: [
      "Resolución DAG de TaskGraph",
      "Activación por voz Hey Jarvis",
      "Conexión de apps Vibe-Coded",
      "Runtime de Permission Guard",
      "App de escritorio Tauri local-first",
      "Enrutamiento inteligente de modelos",
    ],
    problemTitle:
      "La mayoría de las herramientas de IA se quedan en la conversación. El trabajo real necesita ejecución.",
    problemBody:
      "Las plataformas de agentes actuales están atrapadas en ventanas de chat — carecen de espacios de trabajo estructurados, límites de permisos y la capacidad de entregar tareas de principio a fin. CoreLayer llena ese vacío. Descompone objetivos en TaskGraphs ejecutables, conecta tus apps personales mediante MCP y ejecuta agentes con guardarraíles explícitos, no con confianza ciega.",
    withoutTitle: "Sin CoreLayer",
    without: [
      "Herramientas fragmentadas que no pueden completar tareas de principio a fin",
      "Hilos de chat fríos sin sensación de estructura o progreso",
      "Ejecución de agentes sin gestión ni límites de seguridad",
      "Apps personales atrapadas en silos aislados",
      "Comandos de voz limitados a pestañas del navegador",
    ],
    withTitle: "Con CoreLayer",
    with: [
      "Resolución DAG de TaskGraph para finalización estructurada de tareas",
      "Orquestación del espacio de trabajo por voz mediante Hey Jarvis",
      "Runtime de Permission Guard para ejecución segura y auditable",
      "Puente MCP que conecta todas tus apps personales bajo un mismo centro",
      "Agregación en lenguaje natural que te ayuda a comprenderte mejor",
    ],
    workflowTitle: "Del objetivo al resultado, con supervisión en cada paso.",
    workflowBody:
      "Cada solicitud pasa por interpretación, planificación, enrutamiento y verificación de permisos antes de ejecutarse.",
    workflow: [
      ["1. Activación por voz", "Activa Jarvis con tu palabra de activación para crear un espacio de trabajo para cualquier objetivo."],
      ["2. Planificación TaskGraph", "El orquestador descompone tu objetivo en tareas estructuradas con dependencias claras."],
      ["3. Ejecución del agente", "Ejecuta nodos de tarea concurrentemente usando Claude Code, Codex o ejecutores personalizados."],
      ["4. Permiso Guardian", "Las operaciones de riesgo se pausan para tu aprobación antes de continuar."],
      ["5. Entrega limpia", "Los resultados finales se separan de registros, ruido y solicitudes de aprobación."],
    ],
    capabilitiesTitle: "Todo lo que necesitas para controlar la IA en tu escritorio.",
    capabilitiesBody:
      "Seis sistemas integrados que te brindan una capa de comando local-first con guardarraíles de permisos en cada nivel.",
    capabilities: [
      ["Puente de apps Vibe-Coded", "Conecta apps personales — rastreadores de fitness, diarios de dieta, calendarios — mediante MCP para construir tu panel de control ambiental."],
      ["Motor DAG de TaskGraph", "Resuelve dependencias de tareas automáticamente con ciclos de vida estándar, desde el borrador hasta la finalización."],
      ["Permission Guard", "Intercepta escrituras de archivos, comandos de shell y llamadas de red con confirmación cada vez."],
      ["Hey Jarvis Voz", "Palabra de activación nativa de escritorio, TTS en streaming y soporte de interrupción para interacción manos libres."],
      ["Gateway de modelos", "Enruta solicitudes entre MiMo, Groq, OpenRouter y modelos locales según costo y capacidad."],
      ["Centro de control Tauri", "Monitorea el progreso del TaskGraph, configura servidores MCP y audita registros desde una UI nativa."],
    ],
    safetyTitle: "Las acciones de los agentes necesitan límites.",
    safetyBody:
      "CoreLayer trata la ejecución de herramientas como un sistema con permisos. Las operaciones de riesgo se clasifican, pausan, aprueban, deniegan y registran — nada se ejecuta sin tu conocimiento.",
    permissionGuard: "Permission Guard",
    approvalRequired: "Aprobación requerida",
    mcpToolCall: "Llamada a herramienta MCP",
    risks: ["Lectura", "Escritura", "Externo", "Destructivo"],
    safetyNote:
      "Cada llamada a herramienta es visible. CoreLayer clasifica las operaciones por riesgo, pausa las peligrosas para aprobación y registra todo para auditoría.",
    voiceTitle: "\"Hey Jarvis\" — Interacción de escritorio nativa por voz",
    voiceBody:
      "Activa a tu mayordomo personal en cualquier momento con tu palabra de activación. La superposición flotante responde al instante. Pídele que analice tu semana, extraiga datos de apps conectadas o inicie una tarea de varios pasos — todo por voz.",
    voiceTags: ["Palabra de activación", "TTS en streaming", "Interrupción", "Superposición flotante"],
    voiceLabel: "Pipeline de voz",
    architectureTitle: "Construido como capa de control de escritorio.",
    architectureBody:
      "Una arquitectura modular donde cada componente tiene una responsabilidad y un límite claros.",
    architectureLabel: "Resumen de arquitectura",
    architectureLink: "Explorar arquitectura",
    ctaTitle: "Lleva CoreLayer a tu escritorio.",
    ctaBody:
      "Comienza con la app de escritorio, luego conecta modelos, servidores MCP y herramientas locales a través del Centro de Control.",
    ctaDownload: "Descargar última versión",
    sourceInstall: "Instalar desde código fuente",
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
      "CoreLayer。AIの究極の目的は、私たちに取って代わることではなく、私たちが自分自身をよりよく理解し、調整できるように支援することです。",
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
    metadataTitle: "CoreLayer - デスクトップ向けローカルファースト AI 制御プレーン",
    metadataDescription:
      "CoreLayer は Jarvis が動かすデスクトップ AI 制御プレーンです。MCP サーバー接続、モデル間ルーティング、ツール呼び出し承認、個人アプリのローカル制御を提供します。",
    chips: ["ローカルファースト", "音声ネイティブ", "TaskGraph エンジン", "MCP ハブ"],
    subtitle: "あなたのデスクトップ AI 制御プレーン。",
    description:
      "CoreLayer はあなたのデスクトップをインテリジェントなワークスペースに変えます。Jarvis に自然に話しかけ、あらゆる AI モデルに作業をルーティングし、MCP を通じて個人アプリを接続。すべてのエージェントアクションは権限で保護され、監査可能です。",
    download: "ダウンロード",
    readDocs: "ドキュメントを読む",
    viewGithub: "GitHub を見る",
    desktopLabel: "CoreLayer デスクトップ",
    trust: [
      "TaskGraph DAG 解決",
      "Hey Jarvis 音声起動",
      "Vibe-Coded アプリ連携",
      "Permission Guard ランタイム",
      "ローカルファースト Tauri アプリ",
      "スマートモデルルーティング",
    ],
    problemTitle: "ほとんどの AI ツールは会話で止まります。本当の仕事には実行が必要です。",
    problemBody:
      "現在のエージェントプラットフォームはチャットウィンドウに閉じ込められています——構造化されたワークスペース、権限の境界、タスクを完遂する能力が不足しています。CoreLayer はそのギャップを埋めます。目標を実行可能な TaskGraph に分解し、MCP を通じて個人アプリを接続し、盲目的な信頼ではなく明確なガードレールのもとでエージェントを実行します。",
    withoutTitle: "CoreLayer なし",
    without: [
      "タスクを最初から最後まで完了できない断片化されたツール",
      "構造や進捗感のない冷たいチャットスレッド",
      "安全境界のない管理されていないエージェント実行",
      "孤立したサイロに閉じ込められた個人アプリ",
      "ブラウザタブに制限された音声コマンド",
    ],
    withTitle: "CoreLayer あり",
    with: [
      "構造化されたタスク完了のための TaskGraph DAG 解決",
      "Hey Jarvis による音声駆動のワークスペースオーケストレーション",
      "安全で監査可能な実行のための Permission Guard ランタイム",
      "すべての個人アプリを1つのハブで接続する MCP ブリッジ",
      "自己理解を深める自然言語集約",
    ],
    workflowTitle: "目標から結果まで、すべてのステップで監督。",
    workflowBody:
      "すべてのリクエストは、解釈、計画、ルーティング、権限確認を経てから実行されます。",
    workflow: [
      ["1. 音声起動", "ウェイクワードで Jarvis を起動し、任意の目標に対するワークスペースを作成します。"],
      ["2. TaskGraph 計画", "オーケストレーターが目標を構造化タスクに分解し、明確な依存関係を構築します。"],
      ["3. エージェント実行", "Claude Code、Codex、またはカスタム executors を使用してタスクノードを並行実行します。"],
      ["4. パーミッションゲート", "リスクのある操作は、実行前に承認のために一時停止されます。"],
      ["5. クリーンな納品", "最終結果はログ、ノイズ、承認プロンプトから分離されます。"],
    ],
    capabilitiesTitle: "デスクトップで AI を制御するために必要なすべて。",
    capabilitiesBody:
      "6つの統合システムが、ローカルファーストのコマンドレイヤーを提供し、すべてのレベルに権限ガードレールを備えています。",
    capabilities: [
      ["Vibe-Coded アプリブリッジ", "フィットネストラッカー、食事記録、カレンダーなどの個人アプリを MCP で接続し、環境制御コンソールを構築します。"],
      ["TaskGraph DAG エンジン", "ドラフトから完了までの標準ライフサイクルで、タスクの依存関係を自動解決します。"],
      ["Permission Guard", "ファイル書き込み、シェルコマンド、ネットワーク呼び出しを毎回確認してインターセプトします。"],
      ["Hey Jarvis 音声", "デスクトップネイティブのウェイクワード、ストリーミング TTS、割り込み対応のハンズフリー操作。"],
      ["モデルゲートウェイ", "コストと能力に基づいて、MiMo、Groq、OpenRouter、ローカルモデル間でプロンプトをルーティング。"],
      ["Tauri コントロールセンター", "タスクグラフの進捗監視、MCP サーバー設定、ログ監査をネイティブ UI から実行。"],
    ],
    safetyTitle: "エージェントの行動には境界が必要です。",
    safetyBody:
      "CoreLayer はツール実行を権限システムとして扱います。リスクのある操作は分類、一時停止、承認、拒否、記録されます——あなたの知らないうちには何も実行されません。",
    permissionGuard: "Permission Guard",
    approvalRequired: "承認が必要",
    mcpToolCall: "MCP ツール呼び出し",
    risks: ["読み取り", "書き込み", "外部", "破壊的"],
    safetyNote:
      "すべてのツール呼び出しは可視化されます。CoreLayer は操作をリスクで分類し、危険なものは承認のために一時停止し、監査のためにすべてを記録します。",
    voiceTitle: "「Hey Jarvis」— デスクトップネイティブの音声操作",
    voiceBody:
      "ウェイクワードでいつでもパーソナル執事を起動。フローティングオーバーレイが即座に応答します。1週間の分析、接続されたアプリからのデータ取得、マルチステップタスクの開始——すべて音声で。",
    voiceTags: ["ウェイクワード", "ストリーミング TTS", "割り込み", "フローティングオーバーレイ"],
    voiceLabel: "音声パイプライン",
    architectureTitle: "デスクトップ制御レイヤーとして構築。",
    architectureBody:
      "各コンポーネントが明確な責任と境界を持つモジュラーアーキテクチャ。",
    architectureLabel: "アーキテクチャ概要",
    architectureLink: "アーキテクチャを見る",
    ctaTitle: "CoreLayer をデスクトップに。",
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
