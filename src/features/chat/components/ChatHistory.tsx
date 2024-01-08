import React from 'react';
import { ChatMessage } from '@/types/ChatMessage';
import { List } from '@mui/material';

import Markdown from 'react-markdown';

type ChatHistoryProps = {
  messages: ChatMessage[];
};

export const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <List>
      {messages.map((message) => (
        <div key={`${message.id}/container`} className="message-container">
          <div key={`${message.id}/author`} className="message-author">
            <h4>{message.sender}</h4>
          </div>
          <div key={`${message.id}/message`} className="message-content">
            <Markdown>{message.message}</Markdown>
          </div>
        </div>
      ))}
    </List>
  );
};
