// TopView.tsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const TopView: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const send = () => {alert('send')}

  return (
    <div>
      <div>Your Current Building Block</div>
      <input
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <Button
        onClick={send}
      >
        send
      </Button>
    </div>
  );
};

export default TopView;
