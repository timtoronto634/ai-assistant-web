import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import {ChatPage} from './features/chat/components';
import { ChatRoutes } from './features/chat';

  const queryClient = new QueryClient()
  const routes = {
  Element: (
    <QueryClientProvider client={queryClient}>
    </QueryClientProvider>

  ),
  children: [
    { path: '/chat', element: <ChatRoutes /> },
  ]
}


const router = createBrowserRouter([routes])

const App = () => <RouterProvider router={router} />

export default App;



// import './App.css'
// import { useState } from 'react'
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'
// import MessageDisplay from './features/chat/MessageDisplay'
// import ChatInput from './features/chat/ChatInput'
// import { useMutation } from '@tanstack/react-query';

// import type {ChatMessage} from '@/types/ChatMessage'
// import { Divider } from '@mui/material'
// import PromptBuildingBlock from './features/builder/buildingBlock'
// import TemplateAdder from './features/templates/components/templateBox'
// import { TemplateText } from './SavedText'
// import SavedTextList from './features/templates/components/savedTextList'
// import TopView from './features/builder/components/builder'

// const queryClient = new QueryClient()

// function App() {

//   const [content, setContent] = useState('')

//   const [savedTexts, setSavedTexts] = useState<TemplateText[]>([]);
//   const [promptText, setPromptText] = useState('');

//   const handleDrop = (e: any) => {
//     e.preventDefault();
//     const text = e.dataTransfer.getData('text/plain');
//     setPromptText(promptText + text);
//   };

//   const handleDragOver = (e: any) => {  }

//   const handleSave = (text: TemplateText) => {
//     // Add the new text to the array of saved texts
//     setSavedTexts(prevTexts => [...prevTexts, text]);
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Chat />
//       <div>
//         <h1>Vite + React</h1>
//         <TopView content={content} setContent={setContent} />
//         {/* <TemplateBox setContent={setContent} /> */}
//       </div>
//       <Divider />
//       <div>
//         <PromptBuildingBlock onDrop={handleDrop} onDragOver={handleDragOver} children={undefined} >

//         </PromptBuildingBlock>
//         <TemplateAdder onSave={handleSave} />
//         <div>
//         <h2>Saved Texts</h2>
//         <SavedTextList savedTexts={savedTexts} />
//         </div>
//       </div>
//     </QueryClientProvider>
//   )
// }

// function Chat() {
//   const sendPrompt = async (prompt: string): Promise<string> => {
//     const response = await fetch('http://localhost:8039/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ prompt: prompt }),
//     });
//     if (!response.ok) {
//       const errorBody = await response.text();
//         throw new Error(`Network response was not ok. Status: ${response.status}. Error: ${errorBody}`);

//     }
//     const res = await response.json();
//     return res.result;
//   };
//   const mutation = useMutation({
//     mutationFn: sendPrompt,
//     onSuccess(data){
//       const message = { text: data, author: 'bot' };
//       setMessages([...messages, message]);
//     },
//     onError: (error) => {
//       console.error('Error:', error);
//     },
//   })

//   const [messages, setMessages] = useState<ChatMessage[]>([]);

//   const handleSendMessage = (messageText: string) => {
//     const message = { text: messageText, author: 'me' };
//     setMessages([...messages, message]);
//     mutation.mutate(messageText)
//   };

//   return (
//     <div style={{ width: '100%' }}>
//       <MessageDisplay messages={messages} />
//       <ChatInput onSendMessage={handleSendMessage} />
//     </div>
//   )
// }

// export default App
