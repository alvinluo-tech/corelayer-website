# CoreLayer Homepage Copywriting Redesign Spec

## Background & Objective
The existing homepage copywriting for CoreLayer describes it in a dry, infrastructural manner (a local-first database/model router). This fails to convey the emotional appeal of the "Jarvis" personal butler persona, its core Vibe Coding MCP connection capabilities, and its unique task orchestration engine (**TaskGraph** using DAGs) that allows it to complete tasks from 0 to 1 safely compared to other agents like OpenClaw or Hermes.

This spec details the localized updates to `src/lib/messages.ts` for English (`en`) and Chinese (`zh`, and subsequently cascaded to `zh-TW` and `es` / `ja` where applicable) to reshape the website narrative.

## Scope of Changes
We will update the homepage data model keys inside `src/lib/messages.ts`.

### 1. Hero Section
- **Chinese (`zh`)**:
  - `subtitle`: `"唤醒你的专属 AI 管家：本地优先的 Agent 控制平面与个人智能中控"`
  - `description`: `"源自对贾维斯的交互执念。Jarvis 将冷冰冰的 Agent 转化为懂你的个人管家。通过“Hey Jarvis”语音唤醒与 MCP 协议，无缝连接你开发的日程、健身、饮食或媒体等 Vibe Coding 个人应用；同时基于 TaskGraph 任务图，自动拆解复杂目标，安全、闭环地调度 Claude Code、Codex 等 Agent 执行器完成工作。让 AI 更好地服务于你，而非取代你。"`
- **English (`en`)**:
  - `subtitle`: `"Meet your AI Butler: A local-first Agent control plane and intelligent workspace orchestrator."`
  - `description`: `"Born from an obsession with Jarvis. Jarvis transforms raw AI agents into a responsive personal companion. Through voice-native wakeup and MCP protocols, it seamlessly connects to your vibe-coded personal apps (fitness, diet, calendar). Meanwhile, the TaskGraph engine decomposes your goals into structured DAGs, safely orchestrating Claude Code or Codex executors to deliver tasks from 0 to 1. Let AI serve you and help you adjust—not replace you."`
- **Trust Badges**:
  - `trust`: Update the list to reflect Vibe Coding, TaskGraph DAG resolution, and Voice wakeup.

### 2. Painpoint/Comparison Section
- **Chinese (`zh`)**:
  - `problemTitle`: `"大多数 Agent 只是单纯的工具，你的生活需要一个有温度的中控管家"`
  - `problemBody`: `"当前的 Agent 平台（如 OpenClaw、Hermes）空有功能，但难以实现 0 到 1 的任务闭环，且局限于单一聊天框。CoreLayer 作为受管执行层，一方面通过 TaskGraph (DAG) 依赖解析，安全调度 Claude Code 等执行器；另一方面，以语音原生的浮动面板，串联起你开发的各个 Vibe Coding 个人项目，用最性感的未来交互，帮你更好地了解并调整自己。"`
  - `without`: Update points to highlight missing 0-1 closed-loop task execution, cold chat threads, and unmanaged agent execution.
  - `with`: Update points to showcase TaskGraph DAG scheduling, voice wakeup, permission protection, and MCP Vibe Coding integration.
- **English (`en`)**:
  - `problemTitle`: `"Most agents are just command-line tools. You need an ambient desktop butler."`
  - `problemBody`: `"Mainstream agent platforms like OpenClaw and Hermes have great tools, but they lack a structured workspace to deliver tasks from 0-to-1 and remain trapped in chat windows. CoreLayer sits between you and your execution agents. By decomposing goals into TaskGraphs and connecting to your personal vibe-coded webs via MCP, Jarvis brings a futuristic, voice-native interaction layer to your desktop."`
  - `without` & `with`: Parallel changes to English.

### 3. Workflow Section (TaskGraph Focus)
- **Chinese (`zh`)**:
  - `workflowTitle`: `"通过 TaskGraph，掌控任务从 0 到 1 的生命周期"`
  - `workflowBody`: `"任何复杂的目标都不会沉没在聊天历史中，而是被分解为一张可追溯、可审批的 DAG 任务依赖图。"`
  - `workflow` (5 steps):
    1. `["1. 目标唤醒", "通过“Hey Jarvis”语音或指令输入，创建属于该目标的 Workspace。"]`
    2. `["2. 任务图分解 (TaskGraph)", "Orchestrator 将目标拆解为 Project 与 Task 节点，自动构建 DAG 依赖关系。"]`
    3. `["3. Agent Run 分配调度", "按依赖顺序并发/串行调度 Claude Code、Codex 等执行器运行对应的任务节点。"]`
    4. `["4. 权限守卫审批", "遇到文件写入或 Shell 命令等风险操作时自动挂起，等待主人审批后继续。"]`
    5. `["5. 产物与日志隔离", "最终产物与运行日志、权限噪音分离，干净利落地交付成果。"]`
- **English (`en`)**:
  - `workflowTitle`: `"From goal to delivery, managed by TaskGraph."`
  - `workflowBody`: `"Goals don't drown in chat history. They are converted into structured, executable, and auditable DAG task graphs."`
  - `workflow` (5 steps):
    1. `["1. Voice Wakeup", "Trigger Jarvis with 'Hey Jarvis' or a shortcut to initialize a workspace for your goal."]`,
    2. `["2. TaskGraph Decomposition", "Orchestrator breaks your goal into projects and tasks, mapping their DAG dependencies."]`,
    3. `["3. Agent Run Scheduling", "Concurrently executes task nodes using adapters for Claude Code, Codex, or custom runners."]`,
    4. `["4. Permission Gatekeeping", "Risky actions (like file writes or bash commands) pause for human approval before proceeding."]`,
    5. `["5. Clean Delivery", "Separates final deliverables from noise, logs, and authorization prompts."]`

### 4. Capabilities Section
- **Chinese (`zh`)**:
  - `capabilities` (6 systems):
    1. `["MCP 个人应用串联", "通过 MCP 适配器，将你开发的日程、饮食、健身等 Vibe Coding 个人应用完美串联。"]`
    2. `["TaskGraph 编排引擎", "基于 DAG 依赖关系的任务解析引擎，管理 draft -> running -> needs_review -> completed 的完整生命周期。"]`
    3. `["权限守护运行时", "高风险动作（如写文件、执行脚本）需你确认，安全感十足，同时保留完整审计日志。"]`
    4. `["“Hey Jarvis”语音管线", "桌面原生的唤醒词监听与流式 TTS，支持打断，带来钢铁侠般的交互体验。"]`
    5. `["多模型智能路由", "根据任务复杂度与预算，自动在 MiMo、Groq、OpenRouter 或本地模型间路由。"]`
    6. `["桌面控制中心", "在 Tauri 桌面应用里，一目了然地管理任务图进度、已接入的 MCP 服务、权限规则与日志。"]`
- **English (`en`)**:
  - `capabilities` (6 systems):
    1. `["Vibe-Coded App Bridge", "Connect custom apps like fitness trackers or diet logs using MCP to build your ambient cockpit."]`,
    2. `["TaskGraph DAG Engine", "Resolve task dependencies automatically with standard lifecycles from draft to completion."]`,
    3. `["Permission Guard", "Intercept file writes, execution scripts, and external connections with explicit confirmations."]`,
    4. `["Hey Jarvis Voice Pipeline", "Desktop-native wake word, streaming TTS, and interruption support for a true iron man experience."]`,
    5. `["Model Gateway", "Intelligently route prompts between MiMo, Groq, OpenRouter, and local models for cost and speed."]`,
    6. `["Tauri Control Center", "Monitor your DAG task graph progress, configure MCP servers, and audit logs from a native UI."]`

### 5. Voice Interaction Section
- **Chinese (`zh`)**:
  - `voiceTitle`: `"“Hey Jarvis” —— 属于桌面的未来感交互"`
  - `voiceBody`: `"随时通过唤醒词唤醒你的专属管家，全息浮动覆盖层即刻响应：“我在的，主人”。你可以说：“帮我分析下我最近的饮食和健身情况。” Jarvis 会通过 MCP 自动连接并综合分析你开发的各个 Vibe Coding 独立 Web，用富有温度的流式语音为您提供最科学的自我调整建议。"`
- **English (`en`)**:
  - `voiceTitle`: `"\"Hey Jarvis\" — Ambient Desktop Voice"`
  - `voiceBody`: `"Trigger your personal butler anytime with your wake word. The floating overlay immediately responds: 'I'm here, Master.' Ask it: 'Analyze my diet and gym stats from this week.' Jarvis will automatically request data from your vibe-coded apps via MCP and speak back a synthesized state report."`

### 6. Philosophy/Tagline (Slogan)
- **Chinese (`zh`)**:
  - `footer.tagline`: `"CoreLayer。AI 终极的目的不是为了取代我们，而是为了让我们更好地了解并调整自己。"`
- **English (`en`)**:
  - `footer.tagline`: `"CoreLayer. The ultimate goal of AI is to serve us and help us understand ourselves—not replace us."`

## Visual/UI Checklist & Non-Functional Requirements
- Ensure all text wraps nicely on mobile views.
- Make sure that no React markup in `src/app/[lang]/page.tsx` is broken by changing the structure of arrays (e.g. `workflow` elements are arrays of `[title, desc]`, which matches the schema of the old files, keeping React layout intact).
- No new assets are added yet. We will preserve existing images (`corelayer-hero.png`, `coreling.png`, `architecture.png`) but update captions.

## Verification Plan
1. Check that typescript compiling is successful: `npm run build` or `pnpm build` (if in workspace context).
2. Validate in the browser that both Chinese and English pages display the updated copy properly.
