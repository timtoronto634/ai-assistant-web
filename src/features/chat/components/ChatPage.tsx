import React from 'react';
import { ChatInput } from './ChatInput';
import { ChatHistory } from './ChatHistory';
import { Container, Paper, Typography } from '@mui/material';
import { ChatMessage } from '@/types/ChatMessage';

type ChatPageProps = {
  sessionId: string;
  messages: ChatMessage[];
  onSend: (message: string) => void;
}

export const ChatPage: React.FC<ChatPageProps> = ({sessionId, messages, onSend }) => {

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Chat Session: {sessionId}
        </Typography>
        <ChatHistory messages={messages} />
        <ChatInput onSend={onSend} />
      </Paper>
    </Container>
  );
};
