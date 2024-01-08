import { TemplateText } from '@/SavedText';
import React, { useState } from 'react';

interface TemplateBoxProps {
  onSave: (text: TemplateText) => void;
}

const TemplateAdder: React.FC<TemplateBoxProps> = ({ onSave }) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const sText = {id: "testid", text: text}
    onSave(sText);
    setText('');
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TemplateAdder;
