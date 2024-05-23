import axios from '@/lib/axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const res = await axios.post('/login', await req.json());
  return NextResponse.json(res.data, {
    status: res.status,
    statusText: res.statusText,
  });
}
