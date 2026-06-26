import type { UIMessageChunk } from 'ai';

export interface ToolCallPart {
  type: 'tool-call';
  toolCallId: string;
  name: string;
  arguments: Record<string, unknown>;
  label?: string;
}

export interface ToolResultPart {
  type: 'tool-result';
  toolCallId: string;
  name?: string;
  output: unknown;
  isError?: boolean;
}

export interface ReasoningPart {
  type: 'reasoning';
  content: string;
  step?: number;
}

export type ChatUIMessageChunk =
  | UIMessageChunk
  | ToolCallPart
  | ToolResultPart
  | ReasoningPart;
