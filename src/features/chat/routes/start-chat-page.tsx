import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const StartChatPage = () => {
  const navigate = useNavigate();

  const startNewChat = () => {
    // ランダムな chat_id を生成
    const chatId = Math.random().toString(36).substring(2, 15);
    // 生成した chat_id を用いて遷移
    navigate(`/chat/${chatId}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button variant="contained" onClick={startNewChat}>
        新しいチャットを始める
      </Button>
    </div>
  );
};
