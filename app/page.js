'use client';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import ChatBox from './components/ChatBox';
import SignupForm from './components/SignupForm';
import './globals.css';
import { chatPage } from '@/components/component/chat-page';

const Page = () => {

  const [token, setToken] = useState('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWh1bC5zaGFybWFAaW5jdHVyZS5jb20iLCJpYXQiOjE3MjI0ODkxOTksImV4cCI6MTcyMjU3NTU5OX0.N_8jdX0ZwVIC8mCL9WwjPkogxoFpetembExhW1bxkgDeYD0hrclHCSyoyYMsbZQ1s8Z61DxTDh8toej4kP_k_Q');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  console.log(token);
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
