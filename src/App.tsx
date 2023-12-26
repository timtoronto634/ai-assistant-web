import './App.css'
import { useState } from 'react'
import TopView from './feature/builder/components/builder'
import { TemplateBox } from './feature/templates/components/template_input'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MessageDisplay from './feature/chat/MessageDisplay'
import ChatInput from './feature/chat/ChatInput'

import type {Message} from './feature/chat/Message'

const queryClient = new QueryClient()

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (messageText: string) => {
    const message = { text: messageText, author: 'me' };
    setMessages([...messages, message]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {/* <>
        <h1>Vite + React</h1>
        <TopView content={content} setContent={setContent} />
        <TemplateBox setContent={setContent} />
      </> */}
      <div style={{ width: '100%' }}>
        <MessageDisplay messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </QueryClientProvider>
  )
}

export default App
