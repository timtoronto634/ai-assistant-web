import { Route, Routes } from 'react-router-dom';
import { Chat } from './chat-page';

export const ChatRoutes = () => (
  <Routes>
    <Route path=":sessionId" element={<Chat />} />
  </Routes>
);
