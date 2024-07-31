import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  const { email, password } = await request.json();

  // Simulate login logic
  const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });

  if (response.status === 200) {
    return NextResponse.json({ token: response.data.token });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
