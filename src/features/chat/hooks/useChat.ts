// src/features/chat/hooks/useChat.ts
import { useState } from 'react';
import { ChatMessage } from '../../../types/ChatMessage';
import { useSendMessage } from '../api/chatApi';

export const useChat = (sessionId: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const { mutate, isPending } = useSendMessage();
  // const { data } = useFetchMessages(sessionId);

  // useEffect(() => {
  //   if (data) {
  //     setMessages(data);
  //   }
  // }, [data]);

  const send = (messageText: string) => {
    const newMessage: ChatMessage = {
      id: `prompt-${Date.now()}`,
      sessionId,
      sender: 'User', // 仮のユーザー名
      message: messageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);

    mutate(messageText, {
      onSuccess: (data) => {
        console.log('Success:', data);
        const aiAnswer: ChatMessage = {
          id: `ans-${Date.now()}`,
          sessionId,
          sender: 'AI',
          message: data.result,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiAnswer]);
      },
    });
  };

  return { messages, send, isPending };
};
