'use client';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

const ChatBox = ({ token, selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const { sendMessage, lastMessage } = useWebSocket('ws://localhost:8080/chat', {
    queryParams: { token },
  });

  useEffect(() => {
    if (lastMessage !== null) {
      const messageData = JSON.parse(lastMessage.data);
      if (messageData.sender === selectedUser.email || messageData.receiver === selectedUser.email) {
        setMessages((prevMessages) => [...prevMessages, messageData]);
      }
    }
  }, [lastMessage, selectedUser]);

  const handleSendMessage = (text) => {
    const message = {
      sender: token.email,
      receiver: selectedUser.email,
      text,
    };
    sendMessage(JSON.stringify(message));
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div>
      <h2>Chat with {selectedUser.email}</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.sender}: {msg.text}</div>
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatBox;
