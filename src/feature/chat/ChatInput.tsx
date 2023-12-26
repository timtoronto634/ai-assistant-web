import React from 'react';
import { TextField, Button } from '@mui/material';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
};

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div>
      <TextField
        label="Type your message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
