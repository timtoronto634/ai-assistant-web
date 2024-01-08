import { Route, Routes } from "react-router-dom";
import { Chat } from "./chat-page";


export const ChatRoutes = () => (
  <Routes>
    <Route path="/chat/:sessionId" element={<Chat />} />
  </Routes>
)
