# Homepage Copywriting Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the homepage copywriting in English, Simplified Chinese, Traditional Chinese, Spanish, and Japanese to highlight the Jarvis AI butler persona, the TaskGraph DAG task orchestration engine, and Vibe Coding MCP integrations.

**Architecture:** Modify the localized messages file `src/lib/messages.ts` to change the `home` keys for English (`en`), Chinese (`zh`), Traditional Chinese (`zhTW`), Spanish (`es`), and Japanese (`ja`), ensuring structural and type parity. Verify via Next.js compiler build.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS

---

### Task 1: Update English Messages in messages.ts

**Files:**
- Modify: `src/lib/messages.ts:3-153`

- [ ] **Step 1: Replace the English `en.home` object in messages.ts**
  Replace the `en.home` object inside `src/lib/messages.ts` with the new values containing the revamped product narrative:
  ```typescript
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
    workflowTitle: "From goal to delivery, managed by TaskGraph.",
    workflowBody:
      "Goals don't drown in chat history. They are converted into structured, executable, and auditable DAG task graphs.",
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
  ```

- [ ] **Step 2: Update footer tagline in English messages.ts**
  Replace `footer.tagline` around line 10:
  ```typescript
    footer: {
      tagline:
        "CoreLayer. The ultimate goal of AI is to serve us and help us understand ourselves—not replace us.",
  ```

- [ ] **Step 3: Run typescript compilation compile check**
  Run: `pnpm run build`
  Expected: Command finishes successfully or fails only on localized files that need updates.

- [ ] **Step 4: Commit English update**
  ```bash
  git add src/lib/messages.ts
  git commit -m "feat: update English landing page copy with Jarvis storytelling"
  ```

---

### Task 2: Update Chinese and Traditional Chinese Messages in messages.ts

**Files:**
- Modify: `src/lib/messages.ts:235-447`

- [ ] **Step 1: Replace Chinese `zh.home` and `zh.footer` objects**
  Replace the `zh.home` and `zh.footer.tagline` properties in `src/lib/messages.ts` with the new values:
  ```typescript
  footer: {
    tagline: "CoreLayer。AI 终极的目的不是为了取代我们，而是为了让我们更好地了解并调整自己。",
    // preserve others...
  ```
  And `zh.home`:
  ```typescript
  home: {
    metadataTitle: "CoreLayer - 面向桌面的本地优先 AI 控制层",
    metadataDescription:
      "CoreLayer 是由 Jarvis 驱动的桌面 AI 命令层。连接 MCP 服务器、跨模型路由任务、审批工具调用，并在本地控制个人应用。",
    chips: ["本地优先", "Hey Jarvis 语音", "TaskGraph 编排", "MCP 智能中控"],
    subtitle: "唤醒你的专属 AI 管家：本地优先的 Agent 控制平面与个人智能中控",
    description:
      "源自对贾维斯的交互执念。Jarvis 将冷冰冰的 Agent 转化为懂你的个人管家。通过“Hey Jarvis”语音唤醒与 MCP 协议，无缝连接你开发的日程、健身、饮食或媒体等 Vibe Coding 个人应用；同时基于 TaskGraph 任务图，自动拆解复杂目标，安全、闭环地调度 Claude Code、Codex 等 Agent 执行器完成工作。让 AI 更好地服务于你，而非取代你。",
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
    problemTitle: "大多数 Agent 只是单纯的工具，你的生活需要一个有温度的中控管家",
    problemBody:
      "当前的 Agent 平台（如 OpenClaw、Hermes）空有功能，但难以实现 0 到 1 的任务闭环，且局限于单一聊天框。CoreLayer 作为受管执行层，一方面通过 TaskGraph (DAG) 依赖解析，安全调度 Claude Code 等执行器；另一方面，以语音原生的浮动面板，串联起你开发的各个 Vibe Coding 个人项目，用最性感的未来交互，帮你更好地了解并调整自己。",
    withoutTitle: "没有 CoreLayer",
    without: [
      "Agent 平台虽多，但缺乏 0 到 1 的 TaskGraph 任务闭环能力",
      "冷冰冰的聊天框，缺乏真实的专属陪伴感",
      "无法安全约束/控制 Claude Code 等强力 Agent 的本地操作",
      "个人开发的健身、饮食等 Vibe Coding 小项目彼此孤立、无法联动",
      "语音受限于浏览器，没有桌面全局唤醒与整合分析能力",
    ],
    withTitle: "使用 CoreLayer",
    with: [
      "TaskGraph (DAG) 依赖解析，有序调度 Agent 完成闭环任务",
      "语音原生唤醒（“我在的，主人”），未来交互感拉满",
      "权限守护运行时，高风险动作可审可控",
      "通过 MCP 串联个人应用，打破数据孤岛",
      "自然语言全局分析个人状态，辅助更好的自己",
    ],
    workflowTitle: "通过 TaskGraph，掌控任务从 0 到 1 的生命周期",
    workflowBody: "任何复杂的目标都不会沉没在聊天历史中，而是被分解为一张可追溯、可审批的 DAG 任务依赖图。",
    workflow: [
      ["1. 目标唤醒", "通过“Hey Jarvis”语音或指令输入，创建属于该目标的 Workspace。"],
      ["2. 任务图分解 (TaskGraph)", "Orchestrator 将目标拆解为 Project 与 Task 节点，自动构建 DAG 依赖关系。"],
      ["3. Agent Run 分配调度", "按依赖顺序并发/串行调度 Claude Code、Codex 等执行器运行对应的任务节点。"],
      ["4. 权限守卫审批", "遇到文件写入或 Shell 命令等风险操作时自动挂起，等待主人审批后继续。"],
      ["5. 产物与日志隔离", "最终产物与运行日志、权限噪音分离，干净利落地交付成果。"],
    ],
    capabilitiesTitle: "核心能力",
    capabilitiesBody:
      "六个系统协同工作，提供尊重权限和数据的桌面 AI 命令层。",
    capabilities: [
      ["MCP 个人应用串联", "通过 MCP 适配器，将你开发的日程、饮食、健身等 Vibe Coding 个人应用完美串联。"],
      ["TaskGraph 编排引擎", "基于 DAG 依赖关系的任务解析引擎，管理 draft -> running -> needs_review -> completed 的完整生命周期。"],
      ["权限守护运行时", "高风险动作（如写文件、执行脚本）需你确认，安全感十足，同时保留完整审计日志。"],
      ["“Hey Jarvis”语音管线", "桌面原生的唤醒词监听与流式 TTS，支持打断，带来钢铁侠般的交互体验。"],
      ["多模型智能路由", "根据任务复杂度与预算，自动在 MiMo、Groq、OpenRouter 或本地模型间路由。"],
      ["桌面控制中心", "在 Tauri 桌面应用里，一目了然地管理任务图进度、已接入的 MCP 服务、权限规则与日志。"],
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
    voiceTitle: "“Hey Jarvis” —— 属于桌面的未来感交互",
    voiceBody:
      "随时通过唤醒词唤醒你的专属管家，全息浮动覆盖层即刻响应：“我在的，主人”。你可以说：“帮我分析下我最近的饮食和健身情况。” Jarvis 会通过 MCP 自动连接并综合分析你开发的各个 Vibe Coding 独立 Web，用富有温度的流式语音为您提供最科学的自我调整建议。",
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
  ```

- [ ] **Step 2: Update Traditional Chinese `zhTW` message overrides**
  In `zhTW` (around line 380), we merge messages using `zh`. We only need to override specific translation differences if any. Ensure `footer.tagline` and standard items map nicely.
  Update the following keys in `zhTW.home`:
  ```typescript
  const zhTW = mergeMessages(zh, {
    nav: { download: "下載", docs: "文件", changelog: "更新日誌" },
    footer: {
      tagline: "CoreLayer。AI 終極的目的不是為了取代我們，而是為了讓我們更好地了解並調整自己。",
      // ...preserve other footer links
    },
    // ...
    home: {
      metadataTitle: "CoreLayer - 面向桌面的本地優先 AI 控制層",
      metadataDescription:
        "CoreLayer 是由 Jarvis 驅動的桌面 AI 命令層。連接 MCP 伺服器、跨模型路由工作、審批工具呼叫，並在本地控制個人應用。",
      chips: ["本地優先", "Hey Jarvis 語音", "TaskGraph 編排", "MCP 智能中控"],
      subtitle: "喚醒你的專屬 AI 管家：本地優先的 Agent 控制平面與個人智能中控",
      description:
        "源自對賈維斯的交互執念。Jarvis 將冷冰冰的 Agent 轉化為懂你的個人管家。透過“Hey Jarvis”語音喚醒與 MCP 協定，無縫連接你開發的日程、健身、飲食或媒體等 Vibe Coding 個人應用；同時基於 TaskGraph 任務圖，自動拆解複雜目標，安全、閉環地調度 Claude Code、Codex 等 Agent 執行器完成工作。讓 AI 更好地服務於你，而非取代你。",
      download: "下載",
      readDocs: "閱讀文件",
      viewGithub: "查看 GitHub",
      ctaDownload: "下載最新版本",
      sourceInstall: "從原始碼安裝",
    },
    // ...
  ```

- [ ] **Step 3: Run typescript compilation compile check**
  Run: `pnpm run build`
  Expected: Command succeeds.

- [ ] **Step 4: Commit Chinese update**
  ```bash
  git add src/lib/messages.ts
  git commit -m "feat: update Chinese and Traditional Chinese homepage copy"
  ```

---

### Task 3: Align Spanish and Japanese Message Overrides in messages.ts

**Files:**
- Modify: `src/lib/messages.ts:449-643`

- [ ] **Step 1: Update Spanish `es.home` overrides**
  Ensure the list lengths and keys match `en.home`. Focus on:
  - `chips`: `["Local-first", "Hey Jarvis Wake", "TaskGraph DAGs", "MCP Hub"]`
  - `trust`:
    ```typescript
    trust: [
      "SQLite local-first",
      "Despertar por Hey Jarvis",
      "Conexión a Vibe-Coded Apps",
      "Runtime de Permisos",
      "App de Escritorio Tauri",
      "Enrutamiento de Modelos",
    ],
    ```
  - `footer.tagline`: `"CoreLayer. El objetivo final de la IA es servirnos y ayudarnos a entendernos a nosotros mismos, no reemplazarnos."`
  - Update other text keys (`subtitle`, `description`, `problemTitle`, `problemBody`, `voiceTitle`, `voiceBody`) to reflect the new theme.
  
- [ ] **Step 2: Update Japanese `ja.home` overrides**
  Ensure the list lengths and keys match `en.home`. Focus on:
  - `chips`: `["ローカルファースト", "Hey Jarvis 音声", "TaskGraph 編排", "MCP 統合"]`
  - `trust`:
    ```typescript
    trust: [
      "ローカルファースト SQLite",
      "Hey Jarvis 音声起動",
      "Vibe Coding 個人アプリ連携",
      "権限で保護されたランタイム",
      "Tauri デスクトップアプリ",
      "スマートモデルルーティング",
    ],
    ```
  - `footer.tagline`: `"CoreLayer。AIの究極の目的は、私たちに取って代わることではなく、私たちが自分自身をよりよく理解し、調整できるように支援することです。"`
  - Update other text keys (`subtitle`, `description`, `problemTitle`, `problemBody`, `voiceTitle`, `voiceBody`) to reflect the new theme.

- [ ] **Step 3: Run typescript compilation compile check**
  Run: `pnpm run build`
  Expected: Command succeeds with zero errors.

- [ ] **Step 4: Commit Spanish and Japanese alignment**
  ```bash
  git add src/lib/messages.ts
  git commit -m "feat: align Spanish and Japanese homepage overrides in messages.ts"
  ```

---

### Task 4: Verify Full Production Build

- [ ] **Step 1: Clean build artifacts and build project**
  Run: `pnpm run build`
  Expected: Production bundle is successfully built without errors.
