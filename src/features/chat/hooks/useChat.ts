import { useState } from 'react';
import { ChatMessage } from '../../../types/ChatMessage';
import { useSendMessage } from '../api/chatApi';

export const useChat = (sessionId: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const sendMessageMutation = useSendMessage();
  // const { data } = useFetchMessages(sessionId);

  // useEffect(() => {
  //   if (data) {
  //     setMessages(data);
  //   }
  // }, [data]);

  const send = (messageText: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sessionId,
      sender: 'User', // 仮のユーザー名
      message: messageText,
      timestamp: new Date(),
    };
    sendMessageMutation.mutate(messageText, {
      onSuccess: () => {
        setMessages((prev) => [...prev, newMessage]);
      },
    });
  };

  return { messages, send };
};
