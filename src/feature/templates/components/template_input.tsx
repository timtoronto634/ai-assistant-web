import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField/';
import { TemplateBox } from './template_box';

export const TemplateInput = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleTemplateClick = (template: string) => {
        setInputValue(template);
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <TextField
                label="Input"
                variant="outlined"
                fullWidth
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            <TemplateBox template="Template 1" onTemplateClick={handleTemplateClick} />
            <TemplateBox template="Template 2" onTemplateClick={handleTemplateClick} />
            {/* Add more TemplateBox components as needed */}
        </div>
    );
}
