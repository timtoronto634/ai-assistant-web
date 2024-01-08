import { ChatMessage } from './ChatMessage';

export type ChatSession = {
  id: string;
  messages: ChatMessage[];
};
