import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Card,
} from '@mui/material';
import { Container } from '@mui/system';

type MessageBuilderPopupProps = {
  open: boolean;
  onClose: () => void;
  templates: string[];
  onAddTemplate: (template: string) => void;
  message: string;
  setMessage: (message: string) => void;
};

export const MessageBuilderPopup: React.FC<MessageBuilderPopupProps> = ({
  open,
  onClose,
  templates,
  onAddTemplate,
  message,
  setMessage,
}) => {
  const [newTemplate, setNewTemplate] = useState('');

  const handleAddTemplate = () => {
    onAddTemplate(newTemplate);
    setNewTemplate('');
  };

  const handleSelectTemplate = (template: string) => {
    setMessage(template + ' ' + message);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Message Builder</DialogTitle>
      <DialogContent>
        <TextField
          label="New Template"
          value={newTemplate}
          onChange={(e) => setNewTemplate(e.target.value)}
          fullWidth
        />
        <Button onClick={handleAddTemplate}>Add</Button>
        <Container>
          {templates.map((template, index) => (
            <Card
              key={index}
              variant="outlined"
              onClick={() => handleSelectTemplate(template)}
            >
              {template}
            </Card>
          ))}
        </Container>
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          multiline
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
