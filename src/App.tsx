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

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Chat />
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
