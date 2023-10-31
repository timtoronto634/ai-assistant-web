// TopView.tsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
const TopView: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const sendPrompt = async (prompt: string) => {
    const response = await fetch('http://localhost:8039/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: prompt }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  };

  const queryClient = useQueryClient()

  const query = useMutation({mutationFn: sendPrompt,})

  return (
    <div>
      <div>Your Current Building Block</div>
      <input
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <Button
        onClick={() => {query.mutate(inputValue)}}
      >
        send
      </Button>
    </div>
  );
};

export default TopView;
