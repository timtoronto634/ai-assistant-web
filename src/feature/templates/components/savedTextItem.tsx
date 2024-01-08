import type { TemplateText } from '@/SavedText';
import React from 'react';

const SavedTextItem = ({ tt }: {tt: TemplateText}) => {
  const onDragStart = (e: any) => {
    e.dataTransfer.setData('text/plain', tt.text);
  };

  return (
    <div draggable onDragStart={onDragStart} style={{ margin: '10px' }}>
      {tt.text}
    </div>
  );
};

export default SavedTextItem;
