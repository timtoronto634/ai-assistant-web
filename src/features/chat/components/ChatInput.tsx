// src/features/chat/components/ChatInput.tsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { MessageBuilderPopup } from './MessageBuilder';
import { useTemplates } from '../hooks/useTemplates';

type ChatInputProps = {
  onSend: (message: string) => void;
};

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const { templates, addTemplate } = useTemplates();
  const [isBuilderOpen, setBuilderOpen] = useState(false);

  const handleSubmit = () => {
    onSend(message);
    setMessage('');
  };

  const handleOpenBuilder = () => {
    setBuilderOpen(true);
  };

  const handleCloseBuilder = () => {
    setBuilderOpen(false);
  };

  const handleAddTemplate = (template: string) => {
    addTemplate(template);
  };

  return (
    <div>
      <TextField
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleSubmit}>
        Send
      </Button>
      <Button variant="contained" onClick={handleOpenBuilder}>
        Build
      </Button>
      <MessageBuilderPopup
        open={isBuilderOpen}
        onClose={handleCloseBuilder}
        templates={templates}
        onAddTemplate={handleAddTemplate}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};
