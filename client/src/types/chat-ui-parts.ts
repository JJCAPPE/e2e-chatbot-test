// src/types/chat-ui-parts.ts
import type { UIMessageChunk } from 'ai'; // the AI SDK base type

// ---- NEW PART TYPES ----------------------------------------------------
export interface ToolCallPart {
  type: 'tool-call';
  /** Unique ID of the tool call – required so we can match the result later */
  toolCallId: string;
  /** Name of the tool the model wants to invoke */
  name: string;
  /** Arguments the model passed to the tool (already JSON‑stringified by the SDK) */
  arguments: Record<string, unknown>;
  /** Optional human‑readable label – useful for UI */
  label?: string;
}

export interface ToolResultPart {
  type: 'tool-result';
  /** Must match the `toolCallId` of the corresponding `tool-call` */
  toolCallId: string;
  /** The raw output returned by the tool (string, JSON, or any serialisable) */
  output: unknown;
  /** Optional flag indicating if the tool call failed */
  isError?: boolean;
}

export interface ReasoningPart {
  type: 'reasoning';
  /** A snippet of the model’s internal chain‑of‑thought / reasoning */
  content: string;
  /** Optional step index – useful for numbering steps */
  step?: number;
}

/** Extend the AI SDK’s UIMessageChunk with our custom parts */
declare module 'ai' {
  interface UIMessageChunk extends
    ToolCallPart |
    ToolResultPart |
    ReasoningPart { }
}
