import React from 'react';

const PromptBuildingBlock = ({ onDrop, onDragOver, children }) => {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      style={{ border: '1px solid gray', padding: '10px' }}
    >
      {children}
    </div>
  );
};

export default PromptBuildingBlock;
