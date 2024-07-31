import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const response = await axios.post('http://localhost:8080/register', {
      email,
      password,
    });

    if (response.status === 200) {
      return NextResponse.json(response.data);
    }

    return NextResponse.json({ error: response.data }, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: error.response?.data || 'Registration failed' }, { status: 500 });
  }
}
