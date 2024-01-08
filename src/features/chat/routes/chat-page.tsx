
import { useParams } from 'react-router-dom';
import { useChat } from '../hooks/useChat';
import { ChatPage } from '../components/ChatPage';

export const Chat = () => {

  const { sessionId } = useParams<{ sessionId: string }>();

  if (!sessionId) {
    return <div>Session ID is not provided.</div>;
  }

  const { messages, send } = useChat(sessionId);

  <>
    <ChatPage sessionId={sessionId} messages={messages} onSend={send} />
  </>
}
