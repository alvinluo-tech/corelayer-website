"use client";

import { useState } from "react";
import { Shield, Check, X } from "lucide-react";

interface PermissionSimulatorProps {
  lang: string;
  t: {
    permissionGuard: string;
    approvalRequired: string;
    mcpToolCall: string;
    risks: string[];
    safetyNote: string;
  };
}

const localT: Record<
  string,
  {
    approve: string;
    deny: string;
    approved: string;
    denied: string;
    reset: string;
    statusApproved: string;
    statusDenied: string;
    completed: string;
    blocked: string;
  }
> = {
  en: {
    approve: "Approve",
    deny: "Deny",
    approved: "Action Approved",
    denied: "Action Blocked",
    reset: "Reset Simulation",
    statusApproved: "SUCCESS",
    statusDenied: "BLOCKED",
    completed: "filesystem.write completed successfully.",
    blocked: "Execution blocked by user policy."
  },
  zh: {
    approve: "批准",
    deny: "拒绝",
    approved: "操作已批准",
    denied: "操作已拒绝",
    reset: "重置模拟",
    statusApproved: "执行成功",
    statusDenied: "已拦截",
    completed: "文件写入成功，产物已安全交付。",
    blocked: "根据用户安全策略，该执行已安全终止。"
  },
  "zh-TW": {
    approve: "批准",
    deny: "拒絕",
    approved: "操作已批准",
    denied: "操作已拒絕",
    reset: "重置模擬",
    statusApproved: "執行成功",
    statusDenied: "已攔截",
    completed: "文件寫入成功，產物已安全交付。",
    blocked: "根據用戶安全策略，該執行已安全終止。"
  },
  es: {
    approve: "Aprobar",
    deny: "Denegar",
    approved: "Acción Aprobada",
    denied: "Acción Denegada",
    reset: "Reiniciar",
    statusApproved: "ÉXITO",
    statusDenied: "BLOQUEADO",
    completed: "filesystem.write completado con éxito.",
    blocked: "Ejecución bloqueada por política de usuario."
  },
  ja: {
    approve: "承認",
    deny: "拒否",
    approved: "実行承認済み",
    denied: "実行拒否済み",
    reset: "リセット",
    statusApproved: "実行成功",
    statusDenied: "ブロック",
    completed: "ファイルの書き込みが正常に完了しました。",
    blocked: "ユーザーポリシーにより実行がブロックされました。"
  }
};

const riskColors = [
  "bg-emerald/10 text-emerald border-emerald/20",
  "bg-amber/10 text-amber border-amber/20",
  "bg-violet/10 text-violet border-violet/20",
  "bg-rose/10 text-rose border-rose/20"
];

export function PermissionSimulator({ lang, t }: PermissionSimulatorProps) {
  const [state, setState] = useState<"pending" | "approved" | "denied">("pending");
  const currentT = localT[lang] || localT.en;

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div
        className={`rounded-lg border bg-panel-strong p-5 transition-all duration-300 ${
          state === "approved"
            ? "border-emerald/30 shadow-[0_8px_30px_rgba(16,185,129,0.06)]"
            : state === "denied"
              ? "border-rose/30 shadow-[0_8px_30px_rgba(239,68,68,0.06)]"
              : "border-border-cyan"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 text-xs text-text-tertiary">
          <Shield
            className={`h-4 w-4 transition-colors ${
              state === "approved"
                ? "text-emerald"
                : state === "denied"
                  ? "text-rose"
                  : "text-amber"
            }`}
          />
          {t.permissionGuard}
          <span
            className={`ml-auto font-medium transition-colors ${
              state === "approved"
                ? "text-emerald"
                : state === "denied"
                  ? "text-rose"
                  : "text-amber"
            }`}
          >
            {state === "approved"
              ? currentT.approved
              : state === "denied"
                ? currentT.denied
                : t.approvalRequired}
          </span>
        </div>

        {/* Console Box */}
        <div className="mt-4 rounded-md border border-border-subtle bg-deep p-4 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-primary">{t.mcpToolCall}</p>
              <p className="mt-1 font-mono text-xs text-text-secondary">
                filesystem.write(&quot;/documents/report.md&quot;)
              </p>
            </div>
            <span
              className={`rounded border px-2 py-0.5 text-[11px] font-medium transition-all ${
                state === "approved"
                  ? "border-emerald/30 bg-emerald/10 text-emerald"
                  : state === "denied"
                    ? "border-rose/30 bg-rose/10 text-rose"
                    : "border-amber/30 bg-amber/10 text-amber"
              }`}
            >
              {state === "approved"
                ? currentT.statusApproved
                : state === "denied"
                  ? currentT.statusDenied
                  : "WRITE"}
            </span>
          </div>

          {/* Execution feedback */}
          {state !== "pending" && (
            <div
              className={`mt-3 border-t border-border-subtle/40 pt-3 text-xs font-mono transition-opacity duration-300 ${
                state === "approved" ? "text-emerald" : "text-rose"
              }`}
            >
              &gt; {state === "approved" ? currentT.completed : currentT.blocked}
            </div>
          )}
        </div>

        {/* Buttons / Actions */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {state === "pending" ? (
            <div className="flex w-full gap-2 sm:w-auto">
              <button
                onClick={() => setState("approved")}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded bg-emerald px-4 py-2 text-xs font-semibold text-void transition-opacity hover:opacity-90 active:scale-[0.98] sm:flex-none"
              >
                <Check className="h-3.5 w-3.5" />
                {currentT.approve}
              </button>
              <button
                onClick={() => setState("denied")}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded border border-rose/30 bg-rose/10 px-4 py-2 text-xs font-semibold text-rose transition-colors hover:bg-rose/20 active:scale-[0.98] sm:flex-none"
              >
                <X className="h-3.5 w-3.5" />
                {currentT.deny}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setState("pending")}
              className="inline-flex items-center gap-1.5 rounded border border-border-subtle bg-panel px-3 py-1.5 text-xs text-text-secondary transition-colors hover:text-text-primary"
            >
              {currentT.reset}
            </button>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {t.risks.map((risk, i) => (
              <span
                key={risk}
                className={`rounded border px-2 py-0.5 text-center text-[10px] font-medium transition-opacity ${
                  state !== "pending" && i !== 1 ? "opacity-30" : "opacity-100"
                } ${riskColors[i] || riskColors[0]}`}
              >
                {risk}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-text-tertiary">{t.safetyNote}</p>
      </div>
    </div>
  );
}
