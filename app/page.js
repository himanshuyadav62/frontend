'use client';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import ChatBox from './components/ChatBox';
import SignupForm from './components/SignupForm';
import './globals.css';

const Page = () => {
  const [token, setToken] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  if (showSignup) {
    return <SignupForm onSignup={() => setShowSignup(false)} />;
  }

  if (!token) {
    return (
      <div>
        <LoginForm onLogin={setToken} />
        <button onClick={() => setShowSignup(true)}>Signup</button>
      </div>
    );
  }

  if (!selectedUser) {
    return <UserList token={token} onSelectUser={setSelectedUser} />;
  }

  return <ChatBox token={token} selectedUser={selectedUser} />;
};

export default Page;
