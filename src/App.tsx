import './App.css'
import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MessageDisplay from './feature/chat/MessageDisplay'
import ChatInput from './feature/chat/ChatInput'
import { useMutation } from '@tanstack/react-query';

import type {Message} from './feature/chat/Message'
import { Divider } from '@mui/material'
import PromptBuildingBlock from './feature/builder/buildingBlock'
import TemplateAdder from './feature/templates/components/templateBox'
import { TemplateText } from './SavedText'
import SavedTextList from './feature/templates/components/savedTextList'
import TopView from './feature/builder/components/builder'
import TemplateBox from './feature/templates/components/templateBox'

const queryClient = new QueryClient()

function App() {

  const [content, setContent] = useState('')

  const [savedTexts, setSavedTexts] = useState<TemplateText[]>([]);
  const [promptText, setPromptText] = useState('');

  const handleDrop = (e: any) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    setPromptText(promptText + text);
  };

  const handleDragOver = (e: any) => {  }

  const handleSave = (text: TemplateText) => {
    // Add the new text to the array of saved texts
    setSavedTexts(prevTexts => [...prevTexts, text]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Chat />
      <div>
        <h1>Vite + React</h1>
        <TopView content={content} setContent={setContent} />
        {/* <TemplateBox setContent={setContent} /> */}
      </div>
      <Divider />
      <div>
        <PromptBuildingBlock onDrop={handleDrop} onDragOver={handleDragOver} children={undefined} >

        </PromptBuildingBlock>
        <TemplateAdder onSave={handleSave} />
        <div>
        <h2>Saved Texts</h2>
        <SavedTextList savedTexts={savedTexts} />
        </div>
      </div>
    </QueryClientProvider>
  )
}

function Chat() {
  const sendPrompt = async (prompt: string): Promise<string> => {
    const response = await fetch('http://localhost:8039/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt }),
    });
    if (!response.ok) {
      const errorBody = await response.text();
        throw new Error(`Network response was not ok. Status: ${response.status}. Error: ${errorBody}`);

    }
    const res = await response.json();
    return res.result;
  };
  const mutation = useMutation({
    mutationFn: sendPrompt,
    onSuccess(data){
      const message = { text: data, author: 'bot' };
      setMessages([...messages, message]);
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  })

  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (messageText: string) => {
    const message = { text: messageText, author: 'me' };
    setMessages([...messages, message]);
    mutation.mutate(messageText)
  };

  return (
    <div style={{ width: '100%' }}>
      <MessageDisplay messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  )
}

export default App
