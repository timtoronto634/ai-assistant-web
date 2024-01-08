import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import type { ChatMessage } from '@/types/ChatMessage';

type MessageDisplayProps = {
  messages: ChatMessage[];
};

const MessageDisplay: React.FC<MessageDisplayProps> = ({ messages }) => (
  <List sx={{ width: '100%', padding: 0 }}>
    {messages.map((message, index) => (
      <ListItem key={index} sx={{ display: 'flex', justifyContent: message.author === 'me' ? 'flex-end' : 'flex-start', padding: '8px' }}>
        <Box sx={{
          background: message.author === 'me' ? '#e0e0e0' : '#fff',
          padding: '10px',
          borderRadius: '10px',
          maxWidth: '70%',
        }}>
          <ListItemText primary={message.text} />
        </Box>
      </ListItem>
    ))}
  </List>
);

export default MessageDisplay;
