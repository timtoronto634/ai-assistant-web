import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

interface TemplateBoxProps {
    template: string;
    onTemplateClick: (template: string) => void;
}

export const TemplateBox: React.FC<TemplateBoxProps> = ({ template, onTemplateClick }) => {
    return (
        <Card style={{ margin: '10px 0' }} onClick={() => onTemplateClick(template)}>
            <CardContent>
                <Typography variant="body1">{template}</Typography>
            </CardContent>
        </Card>
    );
}

