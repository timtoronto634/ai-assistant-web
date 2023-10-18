// TopView.tsx
import React, { useState } from 'react';

const TopView: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <div>Your Current Building Block</div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
    </div>
  );
};

export default TopView;
