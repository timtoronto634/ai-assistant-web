import { useMutation } from '@tanstack/react-query';

// メッセージを送信するAPI
export const sendMessage = async (message: string): Promise<any> => {
  const response = await fetch('http://localhost:8039/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: message }),
  });
  return response.json();
};

export const useSendMessage = () =>
  useMutation({ mutationFn: (message: string) => sendMessage(message) });

// // メッセージを取得するAPI
// export const fetchMessages = async (sessionId: string): Promise<ChatMessage[]> => {
//   const response = await fetch(`http://localhost:8039/chat?sessionId=${sessionId}`);
//   return response.json();
// };

// Tanstack Query Hooks
// export const useFetchMessages = (sessionId: string) => useQuery<ChatMessage[], Error, ChatMessage[]>({
//   queryKey: ['messages', sessionId],
//   queryFn: () => fetchMessages(sessionId)
// });
