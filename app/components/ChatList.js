'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ChatList = ({ token, onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('/api/chats', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setChats(response.data);
      } catch (error) {
        console.error('Failed to fetch chats:', error);
      }
    };

    fetchChats();
  }, [token]);

  return (
    <div>
      <h2>Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} onClick={() => onSelectChat(chat)}>
            {chat.participants.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
