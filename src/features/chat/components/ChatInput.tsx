import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

type ChatInputProps = {
  onSend: (message: string) => void;
};

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <div>
      <TextField
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSubmit}>Send</Button>
    </div>
  );
};
