import axios from '@/lib/axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log(req.body);
  const res = await axios.post('/login', await req.json());
  console.log('ress');
  return NextResponse.json(res.data, {
    status: res.status,
    statusText: res.statusText,
  });
}
