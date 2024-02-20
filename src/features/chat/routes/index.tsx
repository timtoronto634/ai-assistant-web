import { Route, Routes } from 'react-router-dom';
import { Chat } from './chat-page';
import { StartChatPage } from './start-chat-page';

export const ChatRoutes = () => (
  <Routes>
    <Route path="new" element={<StartChatPage />} />
    <Route path=":sessionId" element={<Chat />} />
  </Routes>
);
