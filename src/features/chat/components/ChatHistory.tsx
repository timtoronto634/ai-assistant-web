import React from 'react';
import { ChatMessage } from '../../../types/ChatMessage';
import { List, ListItem, ListItemText } from '@mui/material';

type ChatHistoryProps = {
  messages: ChatMessage[];
};

export const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <List>
      {messages.map((message) => (
        <ListItem key={message.id}>
          <ListItemText primary={message.message} secondary={message.sender} />
        </ListItem>
      ))}
    </List>
  );
};
