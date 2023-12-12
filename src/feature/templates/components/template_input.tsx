import { useState } from 'react';
import TextField from '@material-ui/core/TextField/';
import { TemplateBox } from './template_box';

export const TemplateInput = () => {
  const handleTemplateClick = (template: string) => {
    console.log(template)
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <TemplateBox template="Template 1" onTemplateClick={handleTemplateClick} />
      <TemplateBox template="Template 2" onTemplateClick={handleTemplateClick} />
    </div>
  );
}
