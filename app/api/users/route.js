import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const response = await axios.get('http://localhost:8080/api/users', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return NextResponse.json(response.data);
}
