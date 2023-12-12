// TopView.tsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField/';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { Card } from '@mui/material';
const TopView: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseValue, setResponseValue] = useState('');

  const sendPrompt = async (prompt: string) => {
    const response = await fetch('http://localhost:8039/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const res = await response.json();
    setResponseValue(res.result)
  };

  const query = useMutation({mutationFn: sendPrompt,})

  return (
    <div>
      <div>Your Current Building Block</div>
      <TextField
        label="Input"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button
        onClick={() => {query.mutate(inputValue)}}
      >
        send
      </Button>
      <Card>{responseValue}</Card>
    </div>
  );
};

export default TopView;
