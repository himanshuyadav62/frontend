'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ token, onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.email} onClick={() => onSelectUser(user)}>
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
