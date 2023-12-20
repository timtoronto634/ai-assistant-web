// TopView.tsx
import React, { useState, Dispatch, SetStateAction } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Card } from '@mui/material';

interface TopViewProps {
  content: string;
  setContent: any;
}

const sendPrompt = async (prompt: string): Promise<string> => {
  const response = await fetch('http://localhost:8039/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: prompt }),
  });
  if (!response.ok) {
    const errorBody = await response.text();
      throw new Error(`Network response was not ok. Status: ${response.status}. Error: ${errorBody}`);

  }
  const res = await response.json();
  return res.result;
};


const TopView: React.FC<TopViewProps> = ({ content, setContent }) => {
  const [responseValue, setResponseValue] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation({mutationFn: sendPrompt, onSuccess(data){
    setResponseValue(data)
  },
  onError: (error) => {
    console.error('Error:', error);
  },
})

  return (
    <div>
      <div>Your Current Building Block</div>
      <TextField
        label="Input"
        variant="outlined"
        fullWidth
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginBottom: '20px', backgroundColor: 'white' }}
      />
      <Button
        onClick={() => mutation.mutate(content)}
      >
        send
      </Button>
      <Card>{responseValue}</Card>
    </div>
  );
};

export default TopView